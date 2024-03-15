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

import { CubeBounds, DamageInfo, Point3D } from "types/zoneserver";
import { getCubeBounds, getDistance, isInsideCube } from "../../../utils/utils";
import {
  Effects,
  Items,
  ModelIds,
  MovementModifiers,
  ResourceIds,
  ResourceTypes
} from "../models/enums";
import { ZoneServer2016 } from "../zoneserver";
import { BaseSimpleNpc } from "./basesimplenpc";

export class TrapEntity extends BaseSimpleNpc {
  /** Damage delay for the TrapEntity */
  trapTimer?: NodeJS.Timeout;

  /** Returns true if a snare has been stepped on */
  isTriggered = false;

  /** Distance (H1Z1 meters) where the TrapEntity will render */
  npcRenderDistance = 75;

  /** Id of the TrapEntity - See ServerItemDefinitions.json for more information */
  itemDefinitionId: number;
  worldOwned: boolean = false;
  readonly cubebounds!: CubeBounds;
  constructor(
    characterId: string,
    transientId: number,
    actorModelId: number,
    position: Float32Array,
    rotation: Float32Array,
    server: ZoneServer2016,
    itemDefinitionId: Items,
    worldOwned = false
  ) {
    super(characterId, transientId, actorModelId, position, rotation, server);
    this.itemDefinitionId = itemDefinitionId;
    this.worldOwned = worldOwned;

    const angle = -this.state.rotation[1];
    switch (itemDefinitionId) {
      case Items.BARBED_WIRE:
        this.cubebounds = getCubeBounds(
          position,
          7.05,
          2.15,
          angle,
          position[1] - 0.9,
          position[1] + 1.8
        );
    }
  }

  arm(server: ZoneServer2016) {
    switch (this.itemDefinitionId) {
      case Items.PUNJI_STICKS:
      case Items.PUNJI_STICK_ROW:
        this.trapTimer = setTimeout(() => {
          if (!server._traps[this.characterId]) {
            return;
          }
          for (const a in server._clients) {
            const client = server._clients[a];
            if (
              getDistance(
                client.character.state.position,
                this.state.position
              ) < 1.5 &&
              client.character.isAlive &&
              !client.vehicle.mountedVehicle
            ) {
              client.character.damage(server, {
                entity: this.characterId,
                causeBleed: true,
                damage: 501
              });
              server.sendDataToAllWithSpawnedEntity(
                server._traps,
                this.characterId,
                "Character.PlayWorldCompositeEffect",
                {
                  characterId: "0x0",
                  effectId: Effects.PFX_Impact_PunjiSticks_Blood,
                  position: server._clients[a].character.state.position
                }
              );

              server.sendDataToAllWithSpawnedEntity(
                server._traps,
                this.characterId,
                "Character.UpdateSimpleProxyHealth",
                this.pGetSimpleProxyHealth()
              );
              if (!this.worldOwned) this.health -= 1000;
            }
          }

          if (this.health > 0) {
            this.trapTimer?.refresh();
          } else {
            server.sendDataToAllWithSpawnedEntity(
              server._traps,
              this.characterId,
              "Character.PlayWorldCompositeEffect",
              {
                characterId: "0x0",
                effectId: Effects.PFX_Damage_Crate_01m,
                position: this.state.position
              }
            );
            this.destroy(server);
            return;
          }
        }, 500);
        break;
      case Items.SNARE:
        this.trapTimer = setTimeout(() => {
          if (!server._traps[this.characterId]) {
            return;
          }
          for (const a in server._clients) {
            const client = server._clients[a];
            if (
              getDistance(
                client.character.state.position,
                this.state.position
              ) < 1
            ) {
              client.character.damage(server, {
                entity: this.characterId,
                damage: 2000
              });
              client.character._resources[ResourceIds.BLEEDING] += 41;
              server.updateResourceToAllWithSpawnedEntity(
                client.character.characterId,
                client.character._resources[ResourceIds.BLEEDING] > 0
                  ? client.character._resources[ResourceIds.BLEEDING]
                  : 0,
                ResourceIds.BLEEDING,
                ResourceTypes.BLEEDING,
                server._characters
              );
              server.sendDataToAllWithSpawnedEntity(
                server._traps,
                this.characterId,
                "Character.PlayWorldCompositeEffect",
                {
                  characterId: this.characterId,
                  effectId: Effects.PFX_Impact_Knife_Metal_Vehicle,
                  position: server._traps[this.characterId].state.position
                }
              );
              this.isTriggered = true;
              server.applyMovementModifier(client, MovementModifiers.SNARED);
            }
          }

          if (!this.isTriggered) {
            this.trapTimer?.refresh();
          } else {
            this.destroy(server);
            this.actorModelId = ModelIds.SNARE;
            server.worldObjectManager.createLootEntity(
              server,
              server.generateItem(Items.SNARE),
              this.state.position,
              this.state.rotation,
              15
            );
          }
        }, 200);
        break;
      case Items.BARBED_WIRE:
        this.trapTimer = setTimeout(() => {
          if (!server._traps[this.characterId]) {
            return;
          }
          for (const a in server._clients) {
            const client = server._clients[a];
            if (
              this.isInside(client.character.state.position) &&
              client.character.isAlive
            ) {
              client.character.damage(server, {
                entity: this.characterId,
                causeBleed: true,
                damage: 501
              });
              server.sendDataToAllWithSpawnedEntity(
                server._traps,
                this.characterId,
                "Character.PlayWorldCompositeEffect",
                {
                  characterId: "0x0",
                  effectId: Effects.PFX_Impact_PunjiSticks_Blood,
                  position: server._clients[a].character.state.position
                }
              );

              server.sendDataToAllWithSpawnedEntity(
                server._traps,
                this.characterId,
                "Character.UpdateSimpleProxyHealth",
                this.pGetSimpleProxyHealth()
              );
              if (!this.worldOwned) this.health -= 1000;
            }
          }

          if (this.health > 0) {
            this.trapTimer?.refresh();
          } else {
            server.sendDataToAllWithSpawnedEntity(
              server._traps,
              this.characterId,
              "Character.PlayWorldCompositeEffect",
              {
                characterId: "0x0",
                effectId: Effects.PFX_Damage_Crate_01m,
                position: this.state.position
              }
            );
            this.destroy(server);
            return;
          }
        }, 500);
        break;
    }
  }
  destroy(server: ZoneServer2016): boolean {
    return server.deleteEntity(this.characterId, server._traps);
  }

  isInside(position: Float32Array) {
    switch (this.itemDefinitionId) {
      case Items.BARBED_WIRE:
        return isInsideCube(Array.from(position) as Point3D, this.cubebounds);
    }
  }

  OnProjectileHit(server: ZoneServer2016, damageInfo: DamageInfo) {
    const damage = damageInfo.damage * 6; // bullets do more to damage traps
    this.damage(server, { ...damageInfo, damage });
  }

  OnMeleeHit(server: ZoneServer2016, damageInfo: DamageInfo) {
    const client = server.getClientByCharId(damageInfo.entity),
      weapon = client?.character.getEquippedWeapon();
    if (!client || !weapon) return;

    const damage = damageInfo.damage * 3;
    this.damage(server, { ...damageInfo, damage });
    server.damageItem(client, weapon, 50);
  }

  damage(server: ZoneServer2016, damageInfo: DamageInfo) {
    if (this.worldOwned) return;
    this.health -= damageInfo.damage;
    server.sendDataToAllWithSpawnedEntity(
      server._traps,
      this.characterId,
      "Character.UpdateSimpleProxyHealth",
      this.pGetSimpleProxyHealth()
    );
    if (this.health > 0) return;
    this.destroy(server);
  }
}
