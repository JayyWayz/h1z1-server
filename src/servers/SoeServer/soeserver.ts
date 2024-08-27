// ======================================================================
//
//   GNU GENERAL PUBLIC LICENSE
//   Version 3, 29 June 2007
//   copyright (C) 2020 - 2021 Quentin Gruber
//   copyright (C) 2021 - 2024 H1emu community
//
//   https://github.com/QuentinGruber/h1z1-server
//   https://www.npmjs.com/package/h1z1-server
//
//   Based on https://github.com/psemu/soe-network
// ======================================================================

import { EventEmitter } from "node:events";
import { RemoteInfo } from "node:dgram";
import {
  AckPacket,
  append_crc_legacy,
  DataPacket,
  SessionReplyPacket,
  SessionRequestPacket,
  SoeOpcode,
  SoePacketParsed,
  Soeprotocol
} from "h1emu-core";
import Client from "./soeclient";
import SOEClient from "./soeclient";
import { crc_length_options, soePacket } from "../../types/soeserver";
import { json } from "types/shared";
import { SOEOutputChannels } from "./soeoutputstream";
import dgram from "node:dgram";
import { PacketsQueue } from "./PacketsQueue";
const debug = require("debug")("SOEServer");

export type SoePacket = AckPacket | DataPacket | SessionReplyPacket;

export class SOEServer extends EventEmitter {
  _serverPort: number;
  _cryptoKey: Uint8Array;
  _protocol!: Soeprotocol;
  _udpLength: number = 512;
  _useEncryption: boolean = true;
  private _clients: Map<string, SOEClient> = new Map();
  private _connection: dgram.Socket;
  private readonly _crcSeed: number = Math.floor(Math.random() * 255);
  private _crcLength: crc_length_options = 2;
  _waitTimeMs: number = 0;
  keepAliveTimeoutTime: number = 40000;
  private readonly _maxMultiBufferSize: number;
  private _resendTimeout: number = 400;
  _allowRawDataReception: boolean = false;
  private _packetResetInterval: NodeJS.Timeout | undefined;
  avgEventLoopLag: number = 0;
  eventLoopLagValues: number[] = [];
  currentEventLoopLag: number = 0;
  constructor(serverPort: number, cryptoKey: Uint8Array) {
    super();
    const oneMb = 1024 * 1024;
    Buffer.poolSize = oneMb;
    this._serverPort = serverPort;
    this._cryptoKey = cryptoKey;
    this._maxMultiBufferSize = this._udpLength - 4 - this._crcLength;
    this._connection = dgram.createSocket("udp4");
    // set recv buffer size to 1mb and send buffer size to 1mb
    this._connection.on("listening", () => {
      this._connection.setRecvBufferSize(oneMb);
      this._connection.setSendBufferSize(oneMb);
    });
    // To support node 18 that we use for h1z1-server binaries
    try {
      const intervalTime = 100;
      const obs = new PerformanceObserver((list) => {
        const entry = list.getEntries()[0];
        this.currentEventLoopLag = Math.floor(entry.duration) - intervalTime;
        // calculate the average of the last 100 values
        // if the array is full then we remove the first value
        if (this.eventLoopLagValues.length > 100) {
          this.eventLoopLagValues.shift();
        }
        this.eventLoopLagValues.push(this.currentEventLoopLag);
        this.avgEventLoopLag =
          this.eventLoopLagValues.reduce((a, b) => a + b, 0) /
          this.eventLoopLagValues.length;
      });
      obs.observe({ entryTypes: ["measure"], buffered: true });
      performance.mark("A");
      setInterval(() => {
        performance.mark("B");
        performance.measure("A to B", "A", "B");
        performance.mark("A");
      }, intervalTime);
    } catch (e) {
      console.log("PerformanceObserver not available");
    }
  }

  getNetworkStats() {
    const avgServerLag =
      this.avgEventLoopLag > 1
        ? Number(this.avgEventLoopLag.toFixed(1)) - 1
        : 0;
    return [`Avg Server lag : ${avgServerLag}ms`];
  }

  // return the client if found
  getSoeClient(soeClientId: string): SOEClient | undefined {
    return this._clients.get(soeClientId);
  }

  // create a physical packet and send it
  private _sendAndBuildPhysicalPacket(
    client: Client,
    logicalPacket: SoePacket
  ): void {
    this._sendPhysicalPacket(client, logicalPacket.build());
  }

  // Send a physical packet
  private _sendPhysicalPacket(client: Client, packet: Uint8Array): void {
    client.packetsSentThisSec++;
    client.stats.totalPhysicalPacketSent++;
    console.log("Sending physical packet", packet);
    this._connection.send(packet, client.port, client.address);
  }

  // Get an array of packet that we need to resend
  getResends(client: Client): DataPacket[] {
    const currentTime = Date.now();
    const resends: DataPacket[] = [];
    const resendedSequences: Set<number> = new Set();
    for (const [sequence, time] of client.unAckData) {
      // if the packet is too old then we resend it
      if (
        time + this._resendTimeout + this._waitTimeMs + client.avgPing <
        currentTime
      ) {
        const dataCache = client.outputStream.getDataCache(sequence);
        if (dataCache) {
          client.stats.packetResend++;

          const logicalPacket = this.createLogicalPacket(
            dataCache.fragment ? SoeOpcode.DataFragment : SoeOpcode.Data,
            { sequence: sequence, data: dataCache.data }
          ) as DataPacket;
          if (logicalPacket) {
            resendedSequences.add(sequence);
            resends.push(logicalPacket);
          }
        } else {
          // If the data cache is not found it means that the packet has been acked
        }
      }
    }
    // if a packet is lost due to timeout then we increase the ping
    // this will auto-fix when the connection goes well again
    for (let index = 0; index < resends.length; index++) {
      client.avgPing += 100;
      if (client.avgPing > 5000) {
        client.avgPing = 5000;
      }
    }

    // check for possible accerated resends
    for (const sequence of client.outputStream.outOfOrder) {
      if (sequence < client.outputStream.lastAck.get()) {
        continue;
      }

      // resend every packets between the last ack and the out of order packet
      for (
        let index = client.outputStream.lastAck.get();
        index < sequence;
        index++
      ) {
        // If that sequence has been out of order acked or resended then we don't resend it again
        if (
          client.outputStream.outOfOrder.has(index) ||
          resendedSequences.has(index)
        ) {
          continue;
        }
        const dataCache = client.outputStream.getDataCache(index);
        if (dataCache) {
          client.stats.packetResend++;

          const logicalPacket = this.createLogicalPacket(
            dataCache.fragment ? SoeOpcode.DataFragment : SoeOpcode.Data,
            { sequence: index, data: dataCache.data }
          ) as DataPacket;
          if (logicalPacket) {
            resendedSequences.add(index);
            resends.push(logicalPacket);
          }
        } else {
          // well if it's not in the cache then it means that it has been acked
        }
      }
    }

    // clear out of order array
    client.outputStream.outOfOrder.clear();

    return resends;
  }

  // Use the lastAck value to acknowlege multiple packets as a time
  private getAck(client: Client): SoePacket | undefined {
    const lastAck = client.inputStream._lastAck.get();
    // If we already sent an ack for that lastAck then we don't send another one
    if (client.lastAckSend.get() != lastAck) {
      client.lastAckSend.set(lastAck);
      return this.createLogicalPacket(SoeOpcode.Ack, {
        sequence: lastAck
      });
    }
  }

  private setupResendForQueuedPackets(client: Client, queue: PacketsQueue) {
    for (let index = 0; index < queue.packets.length; index++) {
      const packet = queue.packets[index];
      if (
        packet.opcode == SoeOpcode.Data ||
        packet.opcode == SoeOpcode.DataFragment
      ) {
        client.unAckData.set((packet as DataPacket).sequence, Date.now());
      }
    }
  }

  // Get buffered queued packets if any and build a multipacket
  // The queue is cleared after that
  private getClientWaitQueuePacket(
    client: Client,
    queue: PacketsQueue
  ): SoePacket | null {
    // if (queue.packets.length > 1) {
    //   this.setupResendForQueuedPackets(client, queue);
    //   const multiPacket = this.createLogicalPacket(SoeOpcode.MultiPacket, {
    //     sub_packets: queue.packets.map((packet) => {
    //       return Array.from(packet.data);
    //     })
    //   });
    //   queue.clear();
    //   return multiPacket;
    //   // if there is only one packet then we don't need to build a multipacket
    // } else if (queue.packets.length === 1) {
    // no need for a structuredClone , the variable hold the ref
    const singlePacketCopy = queue.packets[0];
    queue.clear();
    return singlePacketCopy;
    // } else {
    //   return null;
    // }
  }

  private _createClient(clientId: string, remote: RemoteInfo) {
    const client = new SOEClient(remote, this._crcSeed, this._cryptoKey);
    this._clients.set(clientId, client);
    return client;
  }

  // activate the sending timer if it's not already activated
  private _activateSendingTimer(client: SOEClient, additonalTime: number = 0) {
    if (!client.sendingTimer) {
      client.sendingTimer = setTimeout(() => {
        client.sendingTimer = null;
        this.sendingProcess(client);
      }, this._waitTimeMs + additonalTime);
    }
  }

  // Handle the packet received from the client
  private handlePacket(client: SOEClient, packet: SoePacketParsed) {
    console.log(packet.get_opcode());
    switch (packet.get_opcode()) {
      case SoeOpcode.SessionRequest:
        debug(
          "Received session request from " + client.address + ":" + client.port
        );
        const sessionRequestPacket = packet.get_session_request_packet();
        if (sessionRequestPacket) {
          client.sessionId = sessionRequestPacket.session_id;
          client.clientUdpLength = sessionRequestPacket.udp_length;
          client.protocolName = sessionRequestPacket.get_protocol();
          client.serverUdpLength = this._udpLength;
          client.crcSeed = this._crcSeed;
          client.crcLength = this._crcLength;
          client.inputStream.setEncryption(this._useEncryption);
          client.outputStream.setEncryption(this._useEncryption);
          // 4 since we don't count the opcode and it's an uint16
          client.outputStream.setFragmentSize(
            client.clientUdpLength - (4 + this._crcLength)
          );
          // setup the keep alive timer
          client.lastKeepAliveTimer = this.keepAliveTimeoutTime
            ? setTimeout(() => {
                debug("Client keep alive timeout");
                this.emit("disconnect", client);
              }, this.keepAliveTimeoutTime)
            : null;

          const sessionReply = this.createLogicalPacket(
            SoeOpcode.SessionReply,
            {
              session_id: client.sessionId,
              crc_seed: client.crcSeed,
              crc_length: client.crcLength,
              encrypt_method: 0,
              udp_length: client.serverUdpLength
            }
          );
          // We send the session reply packet directly because it's a special case
          this._sendAndBuildPhysicalPacket(client, sessionReply);
        }
        break;
      case SoeOpcode.FatalError:
      case SoeOpcode.Disconnect:
        debug("Received disconnect from client");
        this.deleteClient(client);
        this.emit("disconnect", client);
        break;
      case SoeOpcode.MultiPacket: {
        const multipacket = packet.get_grouped_packets();
        if (multipacket) {
          const sub_packets = multipacket.get_packets();
          for (let i = 0; i < sub_packets.length; i++) {
            const subPacket = sub_packets[i];
            this.handlePacket(client, subPacket);
          }
        }
        break;
      }
      case SoeOpcode.Ping:
        debug("Received ping from client");
        const ping = this.createLogicalPacket(SoeOpcode.Ping, {});
        // Same as session reply, we send the ping directly
        this._sendAndBuildPhysicalPacket(client, ping);
        break;
      case SoeOpcode.Data: {
        const data_packet = packet.get_data_packet();
        if (data_packet) {
          client.inputStream.write(
            Buffer.from(data_packet.get_data()),
            data_packet.sequence,
            false
          );
          break;
        }
      }
      case SoeOpcode.DataFragment: {
        const data_packet = packet.get_data_packet();
        if (data_packet) {
          client.inputStream.write(
            Buffer.from(data_packet.get_data()),
            data_packet.sequence,
            true
          );
        }
        break;
      }
      case SoeOpcode.OutOfOrder: {
        const ack_packet = packet.get_ack_packet();
        if (ack_packet) {
          client.stats.packetsOutOfOrder++;
          client.outputStream.outOfOrder.add(ack_packet.sequence);
          client.outputStream.removeFromCache(ack_packet.sequence);
          client.unAckData.delete(ack_packet.sequence);
        }
        break;
      }
      case SoeOpcode.Ack: {
        const ack_packet = packet.get_ack_packet();
        if (ack_packet) {
          const mostWaitedPacketTime = client.unAckData.get(
            ack_packet.sequence
          );
          if (mostWaitedPacketTime) {
            const currentLag = this.currentEventLoopLag || 0;
            client.addPing(Date.now() - mostWaitedPacketTime - currentLag);
          }
          client.outputStream.ack(ack_packet.sequence, client.unAckData);
        }
        break;
      }
      default:
        console.log(`Unknown SOE packet received from ${client.sessionId}`);
        console.log(packet);
    }
  }

  start(crcLength?: crc_length_options, udpLength?: number): void {
    if (crcLength !== undefined) {
      this._crcLength = crcLength;
    }
    this._protocol = new Soeprotocol(Boolean(this._crcLength), this._crcSeed);
    if (udpLength !== undefined) {
      this._udpLength = udpLength;
    }
    this._connection.on("message", (data, remote) => {
      try {
        let client: SOEClient;
        const clientId = remote.address + ":" + remote.port;
        debug(data.length + " bytes from ", clientId);
        // if doesn't know the client
        if (!this._clients.has(clientId)) {
          // if it's not a session request then we ignore it
          if (data[1] !== 1) {
            return;
          }
          client = this._createClient(clientId, remote);

          client.inputStream.on("appdata", (data: Buffer) => {
            this.emit("appdata", client, data);
          });

          client.inputStream.on("outOfOrder", (sequence: number) => {
            this._sendAndBuildLogicalPacket(client, SoeOpcode.OutOfOrder, {
              sequence: sequence
            });
          });

          client.inputStream.on("error", (err: Error) => {
            console.error(err);
            this.emit("disconnect", client);
          });

          client.outputStream.on(SOEOutputChannels.Reliable, () => {
            // some reliables are available, we send them
            this._activateSendingTimer(client);
          });

          client.outputStream.on(
            SOEOutputChannels.Ordered,
            (data: Buffer, sequence: number) => {
              console.log("ordered");
              this._sendAndBuildLogicalPacket(client, SoeOpcode.Ordered, {
                sequence: sequence,
                data: data
              });
            }
          );

          // client.outputStream.on(SOEOutputChannels.Raw, (data: Buffer) => {
          // TODO:
          // });
        } else {
          client = this._clients.get(clientId) as SOEClient;
        }
        if (data[0] === 0x00) {
          const parsed_data = this._protocol.parse(data);
          if (client.lastKeepAliveTimer) {
            client.lastKeepAliveTimer.refresh();
          }
          console.log(data);
          this.handlePacket(client, parsed_data);
        } else {
          if (this._allowRawDataReception) {
            console.log("Raw data received from client", clientId, data);
            this.emit("appdata", client, data, true); // Unreliable + Unordered
          } else {
            console.log(
              "Raw data received from client but raw data reception isn't enabled",
              clientId,
              data
            );
          }
        }
      } catch (e) {
        console.log(e);
        process.exitCode = 1;
      }
    });
    this._connection.bind(this._serverPort);
  }

  async stop(): Promise<void> {
    clearInterval(this._packetResetInterval);
    // delete all _clients
    for (const client of this._clients.values()) {
      client.closeTimers();
    }
    await new Promise<void>((resolve) => {
      this._connection.close(() => {
        resolve();
      });
    });
  }

  private packLogicalData(packetOpcode: SoeOpcode, packet: json): SoePacket {
    let logicalData;
    switch (packetOpcode) {
      // FIXME:
      // case SoeOpcode.SessionRequest:
      //   logicalData = new SessionRequestPacket(
      //     packet.session_id,
      //     packet.crc_length,
      //     packet.udp_length,
      //     packet.protocol
      //   ).build();
      //   break;
      case SoeOpcode.SessionReply:
        console.log("package SessionReply");
        console.log(packet);
        logicalData = new SessionReplyPacket(
          packet.session_id,
          packet.crc_seed,
          packet.crc_length,
          packet.encrypt_method,
          packet.udp_length
        );
        break;
      case SoeOpcode.MultiPacket:
      // logicalData = this._protocol.pack_multi_fromjs(packet);
      // break;
      case SoeOpcode.Ack:
        logicalData = new AckPacket(SoeOpcode.Ack, packet.sequence);
        break;
      case SoeOpcode.OutOfOrder:
        logicalData = new AckPacket(SoeOpcode.OutOfOrder, packet.sequence);
        break;
      // disabled for now since h1z1 2016 doesn't support them
      // case SoeOpcode.Ordered:
      //   logicalData = new OrderedPacket(packet.data, packet.sequence);
      //   break;
      case SoeOpcode.Data:
        logicalData = new DataPacket(
          packet.data,
          packet.sequence,
          SoeOpcode.Data
        );
        break;
      case SoeOpcode.DataFragment:
        logicalData = new DataPacket(
          packet.data,
          packet.sequence,
          SoeOpcode.DataFragment
        );
        break;
    }
    return logicalData as SoePacket;
  }
  private _clearSendingTimer(client: Client) {
    if (client.sendingTimer) {
      clearTimeout(client.sendingTimer);
      client.sendingTimer = null;
    }
  }

  // Get an array of logical app packets that can be sent
  private getAvailableAppPackets(client: Client): SoePacket[] {
    const dataCaches = client.outputStream.getAvailableReliableData();
    const appPackets: SoePacket[] = [];
    for (const dataCache of dataCaches) {
      const logicalPacket = this.createLogicalPacket(
        dataCache.fragment ? SoeOpcode.DataFragment : SoeOpcode.Data,
        { sequence: dataCache.sequence, data: dataCache.data }
      );
      if (logicalPacket) {
        appPackets.push(logicalPacket);
      }
    }
    return appPackets;
  }
  private sendingProcess(client: Client) {
    // If there is a pending sending timer then we clear it
    this._clearSendingTimer(client);

    if (client.outputStream.isReliableAvailable()) {
      const appPackets = this.getAvailableAppPackets(client);
      client.delayedLogicalPackets.push(...appPackets);
    }

    if (client.delayedLogicalPackets.length > 0) {
      for (
        let index = 0;
        index < client.delayedLogicalPackets.length;
        index++
      ) {
        const packet = client.delayedLogicalPackets.shift();
        if (!packet) {
          break;
        }
        if (this._canBeBufferedIntoQueue(packet, client.waitingQueue)) {
          client.waitingQueue.addPacket(packet);
        } else {
          // sends the already buffered packets
          const waitingQueuePacket = this.getClientWaitQueuePacket(
            client,
            client.waitingQueue
          );
          if (waitingQueuePacket) {
            this._sendAndBuildPhysicalPacket(client, waitingQueuePacket);
          }
          if (this._canBeBufferedIntoQueue(packet, client.waitingQueue)) {
            client.waitingQueue.addPacket(packet);
          } else {
            // if it still can't be buffered it means that the packet is too big so we send it directly
            this._sendAndBuildPhysicalPacket(client, packet);
          }
        }
      }
    }
    const ackPacket = this.getAck(client);
    if (ackPacket) {
      client.stats.totalLogicalPacketSent++;
      if (this._canBeBufferedIntoQueue(ackPacket, client.waitingQueue)) {
        client.waitingQueue.addPacket(ackPacket);
      } else {
        const waitingQueuePacket = this.getClientWaitQueuePacket(
          client,
          client.waitingQueue
        );
        if (waitingQueuePacket) {
          this._sendAndBuildPhysicalPacket(client, waitingQueuePacket);
        }
        // no additionnal check needed here because ack packets have a fixed size
        client.waitingQueue.addPacket(ackPacket);
      }
    }
    const resends = this.getResends(client);
    for (const resend of resends) {
      client.stats.totalLogicalPacketSent++;
      if (this._canBeBufferedIntoQueue(resend, client.waitingQueue)) {
        client.waitingQueue.addPacket(resend);
      } else {
        const waitingQueuePacket = this.getClientWaitQueuePacket(
          client,
          client.waitingQueue
        );
        if (waitingQueuePacket) {
          this._sendAndBuildPhysicalPacket(client, waitingQueuePacket);
        }
        if (this._canBeBufferedIntoQueue(resend, client.waitingQueue)) {
          client.waitingQueue.addPacket(resend);
        } else {
          // if it still can't be buffered it means that the packet is too big so we send it directly
          this._sendAndBuildPhysicalPacket(client, resend);
        }
      }
      client.unAckData.delete(resend.sequence as number);
    }
    // if there is still some packets in the queue then we send them
    const waitingQueuePacket = this.getClientWaitQueuePacket(
      client,
      client.waitingQueue
    );
    if (waitingQueuePacket) {
      this._sendAndBuildPhysicalPacket(client, waitingQueuePacket);
    }

    if (client.unAckData.size > 0) {
      this._activateSendingTimer(client);
    }
  }
  // Build the logical packet via the soeprotocol
  private createLogicalPacket(packetOpcode: SoeOpcode, packet: json) {
    const logicalPacket = this.packLogicalData(packetOpcode, packet);
    return logicalPacket;
  }

  private _canBeBufferedIntoQueue(
    logicalPacket: SoePacket,
    queue: PacketsQueue
  ): boolean {
    return (
      this._waitTimeMs > 0 &&
      logicalPacket.bufferable &&
      queue.CurrentByteLength + logicalPacket.length <= this._maxMultiBufferSize
    );
  }

  private _sendLogicalPacket(client: Client, logicalPacket: SoePacket): void {
    client.stats.totalLogicalPacketSent++;
    if (this._canBeBufferedIntoQueue(logicalPacket, client.waitingQueue)) {
      client.waitingQueue.addPacket(logicalPacket);
      this._activateSendingTimer(client);
    } else {
      client.delayedLogicalPackets.push(logicalPacket);
      this.sendingProcess(client);
    }
  }

  // The packets is builded from schema and added to one of the queues
  private _sendAndBuildLogicalPacket(
    client: Client,
    packetOpcode: SoeOpcode,
    packet: json
  ): void {
    const logicalPacket = this.createLogicalPacket(packetOpcode, packet);
    this._sendLogicalPacket(client, logicalPacket);
  }

  // Called by the application to send data to a client
  sendAppData(
    client: Client,
    data: Uint8Array,
    channel = SOEOutputChannels.Reliable
  ): void {
    client.outputStream.write(data, channel);
  }

  setEncryption(client: Client, value: boolean): void {
    client.outputStream.setEncryption(value);
    client.inputStream.setEncryption(value);
  }

  toggleEncryption(client: Client): void {
    client.outputStream.toggleEncryption();
    client.inputStream.toggleEncryption();
  }

  deleteClient(client: SOEClient): void {
    client.closeTimers();
    this._clearSendingTimer(client);
    this._clients.delete(client.address + ":" + client.port);
    debug("client connection from port : ", client.port, " deleted");
  }
}

exports.SOEServer = SOEServer;
