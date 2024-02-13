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

import { ContainerLootSpawner, LootSpawner } from "types/zoneserver";
import { Items } from "../models/enums";

const carparts = [
  // NEED TO ADJUST THESE WEIGHTS
  {
    item: Items.BATTERY,
    weight: 5,
    spawnCount: {
      min: 1,
      max: 1
    }
  },
  {
    item: Items.SPARKPLUGS,
    weight: 5,
    spawnCount: {
      min: 1,
      max: 1
    }
  },
  {
    item: Items.HEADLIGHTS_OFFROADER,
    weight: 5,
    spawnCount: {
      min: 1,
      max: 1
    }
  },
  {
    item: Items.HEADLIGHTS_POLICE,
    weight: 5,
    spawnCount: {
      min: 1,
      max: 1
    }
  },
  {
    item: Items.HEADLIGHTS_ATV,
    weight: 5,
    spawnCount: {
      min: 1,
      max: 1
    }
  },
  {
    item: Items.HEADLIGHTS_PICKUP,
    weight: 5,
    spawnCount: {
      min: 1,
      max: 1
    }
  },
  {
    item: Items.TURBO_OFFROADER,
    weight: 5,
    spawnCount: {
      min: 1,
      max: 1
    }
  },
  {
    item: Items.TURBO_POLICE,
    weight: 5,
    spawnCount: {
      min: 1,
      max: 1
    }
  },
  {
    item: Items.TURBO_ATV,
    weight: 5,
    spawnCount: {
      min: 1,
      max: 1
    }
  },
  {
    item: Items.TURBO_PICKUP,
    weight: 5,
    spawnCount: {
      min: 1,
      max: 1
    }
  }
];

export const lootTables: { [lootSpawner: string]: LootSpawner } = {
  // #region AR15
  "ItemSpawner_Weapon_M16A4.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.WEAPON_AR15,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_AmmoBox02_M16A4.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.AMMO_223,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 5
        }
      }
    ]
  },
  "ItemSpawner_AmmoBox02.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.AMMO_45,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 4
        }
      }
    ]
  },
  // #endregion

  // #region SHOTGUN
  "ItemSpawner_Weapon_PumpShotgun01.adr": {
    spawnChance: 25,
    items: [
      {
        item: Items.WEAPON_SHOTGUN,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_AmmoBox02_12GaShotgun.adr": {
    spawnChance: 25,
    items: [
      {
        item: Items.AMMO_12GA,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 3
        }
      }
    ]
  },
  // #endregion

  // #region TOOLS
  "ItemSpawner_Weapon_Crowbar01.adr": {
    spawnChance: 30,
    items: [
      {
        item: Items.WEAPON_CROWBAR,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_CombatKnife01.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.WEAPON_COMBATKNIFE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_Machete01.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.WEAPON_MACHETE01,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        // did not spawn in this game version but why not
        item: Items.WEAPON_KATANA,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_Bat01.adr": {
    spawnChance: 10,
    items: [
      {
        item: Items.WEAPON_BAT_WOOD,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_Guitar01.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.WEAPON_GUITAR,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_WoodAxe01.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.WEAPON_AXE_WOOD,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_FireAxe01.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.WEAPON_AXE_FIRE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_ClawHammer01.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.WEAPON_HAMMER,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_Hatchet01.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.WEAPON_HATCHET,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_Pipe01.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.WEAPON_PIPE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_Bat02.adr": {
    spawnChance: 10,
    items: [
      {
        item: Items.WEAPON_BAT_ALUM,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_Bow.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.WEAPON_BOW_MAKESHIFT,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_BOW_RECURVE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  // #endregion

  // #region PISTOLS
  "ItemSpawner_Weapon_45Auto.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.WEAPON_1911,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_M9Auto.adr": {
    // need to find 9MM ammo spawner
    spawnChance: 20,
    items: [
      {
        item: Items.WEAPON_M9,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_AmmoBox02_1911.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.AMMO_45,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 5
        }
      }
    ]
  },
  // #endregion

  // #region 308 RIFLE
  "ItemSpawner_Weapon_M24.adr": {
    spawnChance: 25,
    items: [
      {
        item: Items.WEAPON_308,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_AmmoBox02_308Rifle.adr": {
    spawnChance: 25,
    items: [
      {
        item: Items.AMMO_308,
        weight: 100,
        spawnCount: {
          min: 2,
          max: 4
        }
      }
    ]
  },
  // #endregion

  // #region CONSUMABLES
  "ItemSpawner_FirstAidKit.adr": {
    spawnChance: 5,
    items: [
      {
        item: Items.FIRST_AID,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_CannedFood.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.GROUND_COFFEE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD01,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_WaterContainer_Small_Purified.adr": {
    spawnChance: 10,
    items: [
      {
        item: Items.WATER_PURE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  // #endregion

  // #region CLOTHING
  "ItemSpawner_Clothes_MotorcycleHelmet.adr": {
    spawnChance: 10,
    items: [
      {
        item: Items.HELMET_MOTORCYCLE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Clothes_BaseballCap.adr": {
    spawnChance: 15,
    items: [
      {
        item: Items.HAT_CAP,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Clothes_FoldedShirt.adr": {
    spawnChance: 15,
    items: [
      {
        item: Items.SHIRT_DEFAULT,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.PANTS_DEFAULT,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Clothes_Beanie.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.HAT_BEANIE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  // #endregion

  // #region RESIDENTIAL
  "ItemSpawnerResidential_Tier00.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.WEAPON_308,
        weight: 6,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_SHOTGUN,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_AR15,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_1911,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_M9,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.BATTERY,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_COMBATKNIFE,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_MACHETE01,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HAT_CAP,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HAT_BEANIE,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HELMET_MOTORCYCLE,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HELMET_TACTICAL,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_REPAIR_KIT,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_EMPTY,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_STAGNANT,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_PURE,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_45,
        weight: 17,
        spawnCount: {
          min: 1,
          max: 4
        }
      },
      {
        item: Items.AMMO_9MM,
        weight: 17,
        spawnCount: {
          min: 1,
          max: 4
        }
      },
      {
        item: Items.AMMO_380,
        weight: 17,
        spawnCount: {
          min: 1,
          max: 4
        }
      },
      {
        item: Items.AMMO_44,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_223,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_762,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_308,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_12GA,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.SPARKPLUGS,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_AXE_FIRE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_AXE_WOOD,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MILITARY_DEFAULT,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.BACKPACK_BLUE_ORANGE,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_HAMMER,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_WRENCH,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  // #endregion

  // #region RARE
  "ItemSpawnerRare_Tier00.adr": {
    spawnChance: 15,
    items: [
      {
        item: Items.AMMO_45,
        weight: 120,
        spawnCount: {
          min: 1,
          max: 4
        }
      },
      {
        item: Items.AMMO_9MM,
        weight: 120,
        spawnCount: {
          min: 1,
          max: 4
        }
      },
      {
        item: Items.AMMO_380,
        weight: 120,
        spawnCount: {
          min: 1,
          max: 4
        }
      },
      {
        item: Items.AMMO_44,
        weight: 80,
        spawnCount: {
          min: 1,
          max: 4
        }
      },
      {
        item: Items.AMMO_223,
        weight: 50,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_762,
        weight: 50,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_308,
        weight: 50,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_12GA,
        weight: 50,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.WEAPON_1911,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_M9,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_R380,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_MAGNUM,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_308,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_SHOTGUN,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_AR15,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_AK47,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  // #endregion

  // #region INDUSTRIAL
  "ItemSpawnerIndustrial_Tier00.adr": {
    spawnChance: 25,
    items: [
      ...carparts,
      {
        item: Items.DUCT_TAPE,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_CROWBAR,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_EMPTY,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_STAGNANT,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_PURE,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.METAL_SCRAP,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 4
        }
      },
      {
        item: Items.TARP,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.CANNED_FOOD01,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_WRENCH,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
    ]
  },
  // #endregion

  // #region WORLD
  "ItemSpawnerWorld_Tier00.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.WEAPON_MACHETE01,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_EMPTY,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_PURE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SHIRT_DEFAULT,
        weight: 40,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.PANTS_DEFAULT,
        weight: 40,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CONVEYS_BLUE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_HATCHET,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HAT_CAP,
        weight: 40,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HAT_BEANIE,
        weight: 40,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HELMET_MOTORCYCLE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD01,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.EMERGENCY_RADIO,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  // #endregion

  // #region COMMERCIAL
  "ItemSpawnerCommercial_Tier00.adr": {
    spawnChance: 33,
    items: [
      {
        item: Items.DUCT_TAPE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.BATTERY,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SPARKPLUGS,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_EMPTY,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_STAGNANT,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_PURE,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.WEAPON_CROWBAR,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_AXE_WOOD,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_AXE_FIRE,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD01,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.EMERGENCY_RADIO,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  // #endregion

  // #region FARM
  "ItemSpawnerFarm.adr": {
    spawnChance: 75,
    items: [
      {
        item: Items.FERTILIZER,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SEED_CORN,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.SEED_WHEAT,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.WEAPON_HATCHET,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_EMPTY,
        weight: 4,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_STAGNANT,
        weight: 4,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_PURE,
        weight: 4,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_308,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
    ]
  },
  // #endregion

  // #region HOSPITAL
  "ItemSpawnerHospital.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.FIRST_AID,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE_APPLE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.BANDAGE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.VIAL_EMPTY,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.SYRINGE_EMPTY,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.SHIRT_DEFAULT,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.PANTS_DEFAULT,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_STAGNANT,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_EMPTY,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.DOCTORS_MEMO,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CLOTH,
        weight: 100,
        spawnCount: {
          min: 2,
          max: 5
        }
      }
    ]
  },
  // #endregion

  // #region MILITARY
  "ItemSpawner_Z1_MilitaryBase_MotorPool.adr": {
    spawnChance: 25,
    items: [
      // COMMON
      {
        item: Items.DUCT_TAPE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_BINOCULARS,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_COMBATKNIFE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.FLARE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.METAL_SCRAP,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CLOTH,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 5
        }
      },
      {
        item: Items.TARP,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.MRE_APPLE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MILITARY_DEFAULT,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.EMERGENCY_RADIO,
        weight: 50,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Z1_MilitaryBase_Tents1.adr": {
    spawnChance: 25,
    items: [
      // UNCOMMON
      {
        item: Items.WEAPON_CROSSBOW,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_R380,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GHILLIE_SUIT,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HELMET_MOTORCYCLE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HELMET_TACTICAL,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.RESPIRATOR,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.FIRST_AID,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_45,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 4
        }
      },
      {
        item: Items.AMMO_9MM,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 4
        }
      },
      {
        item: Items.AMMO_380,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 4
        }
      },
      {
        item: Items.AMMO_44,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 4
        }
      },
      {
        item: Items.AMMO_223,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_762,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_308,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_12GA,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.NV_GOGGLES,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE_APPLE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MILITARY_DEFAULT,
        weight: 110,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.EMERGENCY_RADIO,
        weight: 50,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Z1_MilitaryBase_Tents2.adr": {
    spawnChance: 20,
    items: [
      // RARE
      {
        item: Items.WEAPON_MOLOTOV,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_MAGNUM,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_308,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_12GA,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.GUNPOWDER,
        weight: 120,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LANDMINE,
        weight: 50,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.KEVLAR_DEFAULT,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.EMERGENCY_RADIO,
        weight: 50,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Z1_MilitaryBase_Hangar.adr": {
    spawnChance: 25,
    items: [
      // INDUSTRIAL
      ...carparts,
      {
        item: Items.DUCT_TAPE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.METAL_SHEET,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.METAL_SCRAP,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 4
        }
      },
      {
        item: Items.WEAPON_PIPE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.WEAPON_CROWBAR,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_HAMMER,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.FUEL_BIOFUEL,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_WRENCH,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_GrenadeSmoke.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.GRENADE_SMOKE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_GrenadeFlashbang.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.GRENADE_FLASH,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_GrenadeGas.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.GRENADE_GAS,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Weapon_GrenadeHE.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.GRENADE_HE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  // #endregion

  // #region MISC
  "ItemSpawner_BackpackOnGround001.adr": {
    spawnChance: 20,
    items: [
      {
        item: Items.BACKPACK_BLUE_ORANGE,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_GasCan01.adr": {
    spawnChance: 25,
    items: [
      {
        item: Items.FUEL_BIOFUEL,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "ItemSpawner_Log01.adr": {
    spawnChance: 50,
    items: [
      {
        item: Items.WOOD_LOG,
        weight: 100,
        spawnCount: {
          min: 1,
          max: 4
        }
      }
    ]
  }
  // #endregion
};

export const containerLootSpawners: {
  [lootSpawner: string]: ContainerLootSpawner;
} = {
  // TODO WHEN CONTAINERS WORK
  "Wrecked Car": {
    spawnChance: 80,
    maxItems: 3, // cant be bigger than the array below
    items: [
      {
        item: Items.METAL_SCRAP,
        weight: 22,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.METAL_SHEET,
        weight: 22,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.GUN_REPAIR_KIT,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_REPAIR_KIT,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_BINOCULARS,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HELMET_MOTORCYCLE,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CLOTH,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.TARP,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.VEHICLE_KEY,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.EMERGENCY_RADIO,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LIGHTER,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.DUCT_TAPE,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HAT_BEANIE,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "Wrecked Van": {
    spawnChance: 80,
    maxItems: 3,
    items: [
      {
        item: Items.METAL_SCRAP,
        weight: 22,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.METAL_SHEET,
        weight: 22,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.GUN_REPAIR_KIT,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_REPAIR_KIT,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_BINOCULARS,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HELMET_MOTORCYCLE,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CLOTH,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.TARP,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.VEHICLE_KEY,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.EMERGENCY_RADIO,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LIGHTER,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.DUCT_TAPE,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HAT_BEANIE,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "Wrecked Truck": {
    spawnChance: 80,
    maxItems: 3,
    items: [
      {
        item: Items.METAL_SCRAP,
        weight: 22,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.METAL_SHEET,
        weight: 22,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.GUN_REPAIR_KIT,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_REPAIR_KIT,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_BINOCULARS,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HELMET_MOTORCYCLE,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CLOTH,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.TARP,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.VEHICLE_KEY,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.EMERGENCY_RADIO,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LIGHTER,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.DUCT_TAPE,
        weight: 7,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HAT_BEANIE,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "Weapons Locker": {
    spawnChance: 80,
    maxItems: 2,
    items: [
      {
        item: Items.WEAPON_AR15,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.KEVLAR_DEFAULT,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_223,
        weight: 3,
        spawnCount: {
          min: 2,
          max: 7
        }
      },
      {
        item: Items.AMMO_762,
        weight: 3,
        spawnCount: {
          min: 2,
          max: 7
        }
      },
      {
        item: Items.GRENADE_HE,
        weight: 18,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GRENADE_SMOKE,
        weight: 18,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GRENADE_GAS,
        weight: 18,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  Weapon_Locker_Buffed: {
    spawnChance: 80,
    maxItems: 2,
    items: [
      {
        item: Items.WEAPON_AR15,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.KEVLAR_DEFAULT,
        weight: 40,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_223,
        weight: 3,
        spawnCount: {
          min: 2,
          max: 7
        }
      },
      {
        item: Items.AMMO_762,
        weight: 3,
        spawnCount: {
          min: 2,
          max: 7
        }
      },
      {
        item: Items.GRENADE_HE,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GRENADE_SMOKE,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GRENADE_GAS,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  Locker: {
    spawnChance: 70,
    maxItems: 2,
    items: [
      {
        item: Items.BACKPACK_BLUE_ORANGE,
        weight: 6,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MILITARY_DEFAULT,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.KEVLAR_DEFAULT,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.TWINE,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.EMERGENCY_RADIO,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SHIRT_DEFAULT,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.PANTS_DEFAULT,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CLOTH,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.CONVEYS_BLUE,
        weight: 6,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.DEFAULT_GOGGLES,
        weight: 6,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_BINOCULARS,
        weight: 6,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SALINE,
        weight: 6,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WORN_HANDCUFFS,
        weight: 6,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  Desk: {
    spawnChance: 80,
    maxItems: 2,
    items: [
      {
        item: Items.CLOTH,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.HAT_CAP,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.COMPASS,
        weight: 40,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SUGAR,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.EMERGENCY_RADIO,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GROUND_COFFEE,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.GLOVES_FINGERLESS,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.IMMUNITY_BOOSTERS,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.VITAMINS,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.BATTERIES_AA,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HELMET_MOTORCYCLE,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
    ]
  },
  Cabinets: {
    spawnChance: 100,
    maxItems: 2,
    items: [
      {
        item: Items.CLOTH,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.LIGHTER,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_45,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.SALT,
        weight: 13,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD01,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD02,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD03,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD04,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD05,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD06,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD07,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD08,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD09,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD10,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD11,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD21,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD25,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD26,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.VEHICLE_KEY,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "Cabinets Cube": {
    spawnChance: 75,
    maxItems: 3,
    items: [
      {
        item: Items.LIGHTER,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SUGAR,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SALT,
        weight: 23,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_380,
        weight: 23,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_44,
        weight: 23,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_45,
        weight: 23,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_9MM,
        weight: 23,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.CLOTH,
        weight: 23,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.DUCT_TAPE,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HAT_CAP,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GLOVES_FINGERLESS,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GROUND_COFFEE,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.TWINE,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_HAMMER,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LOCKER_KEY_F1,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LOCKER_KEY_F2,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LOCKER_KEY_F3,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LOCKER_KEY_F4,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "Cabinets Bathroom": {
    spawnChance: 85,
    maxItems: 3,
    items: [
      {
        item: Items.ANTIBIOTICS,
        weight: 35,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.IMMUNITY_BOOSTERS,
        weight: 35,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.VITAMINS,
        weight: 35,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.BANDAGE,
        weight: 18,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.AIO_COLD_MEDICINE,
        weight: 35,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.FIRST_AID,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "Tool Cabinet": {
    spawnChance: 65,
    maxItems: 3,
    items: [
      {
        item: Items.WEAPON_CROWBAR,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.TARP,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.METAL_SCRAP,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.WEAPON_WRENCH,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.BATTERIES_AA,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.EMERGENCY_RADIO,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HELMET_MOTORCYCLE,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_COMBATKNIFE,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HAT_BEANIE,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HAT_CAP,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CLOTH,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
    ]
  },
  "Drug Cabinets": {
    spawnChance: 100,
    maxItems: 2,
    items: [
      {
        item: Items.FIRST_AID,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GAUZE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.BANDAGE_DRESSED,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.BANDAGE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.SALINE,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SYRINGE_EMPTY,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.VITAMINS,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.ANTIBIOTICS,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.IMMUNITY_BOOSTERS,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 2
        }
      }
    ]
  },
  "Medical Station": {
    spawnChance: 100,
    maxItems: 2,
    items: [
      {
        item: Items.FIRST_AID,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GAUZE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.BANDAGE_DRESSED,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.BANDAGE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.SALINE,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SYRINGE_EMPTY,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.VITAMINS,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.ANTIBIOTICS,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.IMMUNITY_BOOSTERS,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 2
        }
      }
    ]
  },
  "Hospital Desk": {
    spawnChance: 100,
    maxItems: 3,
    items: [
      {
        item: Items.EMPTY_SPECIMEN_BAG,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GAUZE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.BANDAGE_DRESSED,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.BANDAGE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SYRINGE_EMPTY,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.VITAMINS,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.ANTIBIOTICS,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.IMMUNITY_BOOSTERS,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.CRACKED_CLIPBOARD,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.DEAD_CELL_PHONE,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.DOCTORS_FILE,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "Hospital Cabinets": {
    spawnChance: 100,
    maxItems: 3,
    items: [
      {
        item: Items.GAUZE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.DOCTORS_MEMO,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAK_CELL_PHONE_BATTERY,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEICHS_WALLET,
        weight: 4,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEICHS_REPORT,
        weight: 4,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.KLAVISK_NOTE,
        weight: 4,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.BANDAGE_DRESSED,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.BANDAGE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SYRINGE_EMPTY,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.VITAMINS,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 3
        }
      }
    ]
  },
  "Hospital Refrigerator": {
    spawnChance: 100,
    maxItems: 2,
    items: [
      {
        item: Items.SYRINGE_H1Z1_REDUCER,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.REFRIGERATOR_NOTE,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SYRINGE_INFECTED_BLOOD,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  "Grossing Station": {
    spawnChance: 100,
    maxItems: 2,
    items: [
      {
        item: Items.SYRINGE_H1Z1_REDUCER,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SYRINGE_INFECTED_BLOOD,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  Dumpster: {
    spawnChance: 75,
    maxItems: 4,
    items: [
      {
        item: Items.CLOTH,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.SALT,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD01,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.FERTILIZER,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.ANIMAL_FAT,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.CHARCOAL,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_BINOCULARS,
        weight: 18,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.TARP,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HELMET_MOTORCYCLE,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CONVEYS_BLUE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
    ]
  },
  "Garbage Can": {
    spawnChance: 75,
    maxItems: 2,
    items: [
      {
        item: Items.CLOTH,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.SALT,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD01,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.FERTILIZER,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.ANIMAL_FAT,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.CHARCOAL,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_BINOCULARS,
        weight: 18,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.TARP,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HELMET_MOTORCYCLE,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CONVEYS_BLUE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
    ]
  },
  "File Cabinet": {
    spawnChance: 75,
    maxItems: 3,
    items: [
      {
        item: Items.LIGHTER,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SUGAR,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SALT,
        weight: 23,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_380,
        weight: 23,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_44,
        weight: 23,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_45,
        weight: 23,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.AMMO_9MM,
        weight: 23,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.CLOTH,
        weight: 23,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.DUCT_TAPE,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HAT_CAP,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GLOVES_FINGERLESS,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GROUND_COFFEE,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.TWINE,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_HAMMER,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LOCKER_KEY_F1,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LOCKER_KEY_F2,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LOCKER_KEY_F3,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LOCKER_KEY_F4,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  Fridge: {
    spawnChance: 95,
    maxItems: 4,
    items: [
      {
        item: Items.CANNED_FOOD01,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD02,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD03,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD04,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD05,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD06,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD07,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD08,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD09,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD10,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD11,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD21,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD25,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD26,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.REFRIGERATOR_NOTE,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_EMPTY,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_STAGNANT,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WATER_PURE,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE_APPLE,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE01,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE02,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE03,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE04,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE05,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE06,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE07,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE08,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE09,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE10,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE11,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.MRE12,
        weight: 2,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  Ottoman: {
    spawnChance: 60,
    maxItems: 2,
    items: [
      {
        item: Items.SHIRT_DEFAULT,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.PANTS_DEFAULT,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CLOTH,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.SALINE,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_COMBATKNIFE,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_BINOCULARS,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.DUCT_TAPE,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
    ]
  },
  Dresser: {
    spawnChance: 65,
    maxItems: 2,
    items: [
      {
        item: Items.SHIRT_DEFAULT,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.PANTS_DEFAULT,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CLOTH,
        weight: 20,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.TWINE,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CONVEYS_BLUE,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LOCKER_KEY_F1,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LOCKER_KEY_F2,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LOCKER_KEY_F3,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.LOCKER_KEY_F4,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  Armoire: {
    spawnChance: 65,
    maxItems: 2,
    items: [
      {
        item: Items.SHIRT_DEFAULT,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.PANTS_DEFAULT,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CLOTH,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 2
        }
      },
      {
        item: Items.TWINE,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.PINK_GATORS,
        weight: 3,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.HELMET_MOTORCYCLE,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WAIST_PACK,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  Washer_Dryer: {
    spawnChance: 100,
    maxItems: 2,
    items: [
      {
        item: Items.PANTS_DEFAULT,
        weight: 50,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SHIRT_DEFAULT,
        weight: 50,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
    ]
  },
  // used for crate props
  Crate_buffed: {
    spawnChance: 80,
    maxItems: 1,
    items: [
      {
        item: Items.WOOD_PLANK,
        weight: 25,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD01,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_9MM,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_380,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_45,
        weight: 8,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CLOTH,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.FERTILIZER,
        weight: 30,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SALT,
        weight: 12,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
    ]
  },
  Crate: {
    spawnChance: 50,
    maxItems: 1,
    items: [
      {
        item: Items.WOOD_PLANK,
        weight: 50,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CANNED_FOOD01,
        weight: 5,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_9MM,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_380,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_45,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.CLOTH,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 3
        }
      },
      {
        item: Items.FERTILIZER,
        weight: 10,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SALT,
        weight: 15,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },

  // airdrops
  Farmer: {
    spawnChance: 100,
    maxItems: 1,
    items: [
      {
        item: Items.GROUND_TILLER,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GROUND_TILLER,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GROUND_TILLER,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GROUND_TILLER,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.GROUND_TAMPER,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SEED_CORN,
        weight: 1,
        spawnCount: {
          min: 10,
          max: 10
        }
      },
      {
        item: Items.SEED_WHEAT,
        weight: 1,
        spawnCount: {
          min: 10,
          max: 10
        }
      },
      {
        item: Items.FERTILIZER,
        weight: 1,
        spawnCount: {
          min: 15,
          max: 15
        }
      },
      {
        item: Items.COMPASS,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  Demolitioner: {
    spawnChance: 100,
    maxItems: 1,
    items: [
      {
        item: Items.WEAPON_HAMMER_DEMOLITION,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.IED,
        weight: 1,
        spawnCount: {
          min: 20,
          max: 20
        }
      },
      {
        item: Items.FUEL_ETHANOL,
        weight: 1,
        spawnCount: {
          min: 20,
          max: 20
        }
      },
      {
        item: Items.LIGHTER,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.COMPASS,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  Medic: {
    spawnChance: 100,
    maxItems: 1,
    items: [
      {
        item: Items.GAUZE,
        weight: 1,
        spawnCount: {
          min: 25,
          max: 25
        }
      },
      {
        item: Items.BANDAGE_DRESSED,
        weight: 1,
        spawnCount: {
          min: 15,
          max: 15
        }
      },
      {
        item: Items.FIRST_AID,
        weight: 1,
        spawnCount: {
          min: 10,
          max: 10
        }
      },
      {
        item: Items.LOCKER_KEY_F1,
        weight: 1,
        spawnCount: {
          min: 5,
          max: 5
        }
      },
      {
        item: Items.LOCKER_KEY_F2,
        weight: 1,
        spawnCount: {
          min: 5,
          max: 5
        }
      },
      {
        item: Items.LOCKER_KEY_F3,
        weight: 1,
        spawnCount: {
          min: 5,
          max: 5
        }
      },
      {
        item: Items.LOCKER_KEY_F4,
        weight: 1,
        spawnCount: {
          min: 5,
          max: 5
        }
      },
      {
        item: Items.COMPASS,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  Builder: {
    spawnChance: 100,
    maxItems: 1,
    items: [
      {
        item: Items.METAL_SCRAP,
        weight: 1,
        spawnCount: {
          min: 50,
          max: 50
        }
      },
      {
        item: Items.WOOD_LOG,
        weight: 1,
        spawnCount: {
          min: 50,
          max: 50
        }
      },
      {
        item: Items.WEAPON_AXE_WOOD,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_CROWBAR,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_HAMMER,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.SHACK,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WORKBENCH,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.COMPASS,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  Fighter: {
    spawnChance: 100,
    maxItems: 1,
    items: [
      {
        item: Items.WEAPON_SHOTGUN,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.WEAPON_AK47,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_762,
        weight: 1,
        spawnCount: {
          min: 50,
          max: 50
        }
      },
      {
        item: Items.AMMO_12GA,
        weight: 1,
        spawnCount: {
          min: 15,
          max: 15
        }
      },
      {
        item: Items.COMPASS,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  Supplier: {
    spawnChance: 100,
    maxItems: 1,
    items: [
      {
        item: Items.SANDWICH_DEER,
        weight: 1,
        spawnCount: {
          min: 3,
          max: 3
        }
      },
      {
        item: Items.SANDWICH_BEAR,
        weight: 1,
        spawnCount: {
          min: 3,
          max: 3
        }
      },
      {
        item: Items.SANDWICH_RABBIT,
        weight: 1,
        spawnCount: {
          min: 3,
          max: 3
        }
      },
      {
        item: Items.SANDWICH_WOLF,
        weight: 1,
        spawnCount: {
          min: 3,
          max: 3
        }
      },
      {
        item: Items.WATER_PURE,
        weight: 1,
        spawnCount: {
          min: 15,
          max: 15
        }
      },
      {
        item: Items.MOONSHINE,
        weight: 1,
        spawnCount: {
          min: 10,
          max: 10
        }
      },
      {
        item: Items.SKINNING_KNIFE,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.COMPASS,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      }
    ]
  },
  Hospital: {
    spawnChance: 0,
    maxItems: 1,
    items: [
      {
        item: Items.BANDAGE,
        weight: 1,
        spawnCount: {
          min: 1,
          max: 1
        }
      },
      {
        item: Items.AMMO_45,
        weight: 1,
        spawnCount: {
          min: 6,
          max: 12
        }
      },
      {
        item: Items.AMMO_12GA,
        weight: 1,
        spawnCount: {
          min: 4,
          max: 8
        }
      },
      {
        item: Items.PAINKILLERS,
        weight: 1,
        spawnCount: {
          min: 2,
          max: 2
        }
      },
      {
        item: Items.ADRENALINE_SHOT,
        weight: 1,
        spawnCount: {
          min: 2,
          max: 2
        }
      }
    ]
  }
};
