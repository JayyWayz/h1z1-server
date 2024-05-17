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

import { EntityDictionary } from "types/zoneserver";
import { BaseItem } from "./baseItem";

export class AccountInventory {
  loginSessionId: string;
  items: EntityDictionary<BaseItem>;

  constructor(loginSessionId: string, items: EntityDictionary<BaseItem>) {
    this.loginSessionId = loginSessionId;
    this.items = items;
  }
}
