// ======================================================================
// ======================================================================
//
//   GNU GENERAL PUBLIC LICENSE
//   Version 3, 29 June 2007
//   copyright (C) 2020 - 2021 Quentin Gruber
//   copyright (C) 2021 - 2023 H1emu community
//
//   https://github.com/QuentinGruber/h1z1-server
//   https://www.npmjs.com/package/h1z1-server
//
//   Based on https://github.com/psemu/soe-network
// ======================================================================

export enum Stances {
  STANDING = 1089,
  MOVE_STANDING_SPRINTING = 66565,
  MOVE_STANDING_FORWARD = 66561,
  MOVE_STANDING_BACKWARDS = 33793,
  MOVE_STANDING_LEFT = 132097,
  MOVE_STANDING_RIGHT = 263169,

  CROUCHING = 1091,
  MOVE_CROUCHING_FORWARD = 66563,
  MOVE_CROUCHING_BACKWARDS = 33795,
  MOVE_CROUCHING_LEFT = 132099,
  MOVE_CROUCHING_RIGHT = 263171,

  PRONING = 5185,
  MOVE_PRONING_FORWARD = 70657,
  MOVE_PRONING_BACKWARDS = 37889,
  MOVE_PRONING_LEFT = 136193,
  MOVE_PRONING_RIGHT = 267265,

  JUMPING_STANDING = 1105,
  JUMPING_FORWARD_SPRINTING = 66581,
  JUMPING_WORWARD = 66577,
  JUMPING_BACKWARDS = 33809,
  JUMPING_LEFT = 132113,
  JUMPING_RIGHT = 263185,
  JUMPING_FORWARD_LEFT = 197649,
  JUMPING_FORWARD_LEFT_SPRINTING = 197653,
  JUMPING_FORWARD_RIGHT = 328721,
  JUMPING_FORWARD_RIGHT_SPRINTING = 328725,
  JUMPING_BACKWARDS_LEFT = 164881,
  JUMPING_BACKWARDS_RIGHT = 295953,

  SITTING = 525377,
  STANCE_XS = 525393,
  STANCE_XS_FP = 2622545
  // havent seen this stance anywhere else than during XS glitching
}

export enum ItemUseOptions {
  EAT = 1,
  DRINK = 2,
  USE = 3,
  DROP = 4,
  SHRED = 6,
  UNLOAD = 7,
  IGNITE = 11,
  REFUEL = 17,
  SLICE = 18,
  USE_MEDICAL = 52,
  USE_AIRDROP = 58,
  LOOT = 59,
  EQUIP = 60,
  MOVE = 61,
  HOTWIRE_ATV = 62,
  LOOT_VEHICLE_LOADOUT = 66,
  HOTWIRE_OFFROADER = 70,
  HOTWIRE_PICKUP = 71,
  HOTWIRE_POLICE = 72,
  DROP_BATTERY = 73,
  LOOT_BATTERY = 75,
  DROP_SPARKS = 79,
  LOOT_SPARKS = 81,
  SALVAGE = 87,
  HOTWIRE_ATV_NO_PARTS = 90,
  HOTWIRE_OFFROADER_NO_PARTS = 91,
  HOTWIRE_PICKUP_NO_PARTS = 92,
  HOTWIRE_POLICE_NO_PARTS = 93
}

export enum ConstructionErrors {
  UNKNOWN = "Unknown",
  OVERLAP = "Construction overlap",
  BUILD_PERMISSION = "No build permission",
  DEMOLISH_PERMISSION = "No demolish permission",
  UNKNOWN_PARENT = "Unknown parent",
  UNKNOWN_SLOT = "Unknown slot",
  UNKNOWN_CONSTRUCTION = "Unknown construction item",
  OUT_OF_RANGE = "Out of range",
  STACKED = "Construction stacked"
}

export enum ConstructionPermissionIds {
  BUILD = 1,
  DEMOLISH = 2,
  CONTAINERS = 3,
  VISIT = 4
}

export enum StringIds {
  TAKE_ITEM = 29,
  OPEN = 31,
  SEARCH = 1191,
  OPEN_AND_LOCK = 8944,
  UNDO_PLACEMENT = 12001,
  OPEN_TARGET = 12156,
  PERMISSIONS_TARGET = 12982,
  OFFROADER = 16,
  PICKUP_TRUCK = 12537,
  ATV = 12552,
  POLICE_CAR = 12538,
  CORN = 628,
  WHEAT = 1184,
  USE_IGNITABLE = 9224
}

export enum MovementModifiers {
  RESTED = 1.1,
  SWIZZLE = 1.1,
  SNARED = 0.5,
  BOOTS = 1.15
}

export enum ContainerErrors {
  NONE = 0,
  IN_USE = 1,
  WRONG_ITEM_TYPE = 2,
  UNKNOWN_CONTAINER = 3,
  UNKNOWN_SLOT = 4,
  NO_ITEM_IN_SLOT = 5,
  INTERACTION_VALIDATION = 6,
  UNKNOWN = 99,

  // custom errors
  DOES_NOT_ACCEPT_ITEMS = 7,
  NOT_MUTABLE = 8,
  NOT_CONSTRUCTED = 9,
  NO_SPACE = 10,
  INVALID_LOADOUT_SLOT = 11,
  NO_PERMISSION = 12,
  UNACCEPTED_ITEM = 13
}

export enum FilterIds {
  COOKING = 2,
  FURNACE = 4,
  WEAPONS = 5,
  HOUSING = 6,
  SURVIVAL = 7,
  COMPONENT = 8,
  DEW_COLLECTOR = 9,
  ANIMAL_TRAP = 10
}

export enum ItemClasses {
  WEAPONS_LONG = 25036,
  WEAPONS_PISTOL = 4096,
  WEAPONS_MELEES = 4098,
  WEAPONS_MELEES0 = 25037,
  WEAPONS_GENERIC = 25054,
  WEAPONS_CROSSBOW = 25047,
  WEAPONS_BOW = 25038
}

export enum VehicleIds {
  OFFROADER = 1,
  PICKUP = 2,
  POLICECAR = 3,
  ATV = 5,
  PARACHUTE = 13,
  SPECTATE = 1337
}

export enum Characters {
  MALE_WHITE = 1,
  MALE_WHITE_BALD = 2,
  FEMALE_WHITE_YOUNG = 3,
  FEMALE_WHITE = 4,
  MALE_BLACK = 5,
  FEMALE_BLACK = 6
}

export enum LoadoutIds {
  CHARACTER = 3,
  VEHICLE_OFFROADER = 4,
  VEHICLE_PICKUP = 6,
  VEHICLE_POLICECAR = 8,
  VEHICLE_ATV = 14
}

export enum LoadoutSlots {
  PRIMARY = 1,
  SECONDARY = 3,
  TERTIARY = 4,
  FISTS = 7,
  HEAD = 11,
  ARMOR = 38,
  RADIO = 39,
  ITEM2 = 41
}

export enum EquipSlots {
  HEAD = 1,
  HANDS = 2,
  CHEST = 3,
  LEGS = 4,
  FEET = 5,
  RHAND = 7,
  BACKPACK = 10,
  HAIR = 27,
  FACE = 28,
  EYES = 29,
  ARMOR = 100
}

export enum EntityTypes {
  INVALID,
  NPC,
  VEHICLE,
  PLAYER,
  OBJECT,
  DOOR,
  EXPLOSIVE,
  CONSTRUCTION_FOUNDATION,
  CONSTRUCTION_DOOR,
  CONSTRUCTION_SIMPLE,
  LOOTABLE_CONSTRUCTION,
  LOOTABLE_PROP,
  WORLD_LOOTABLE_CONSTRUCTION,
  WORLD_CONSTRUCTION_SIMPLE,
  PLANT,
  TRAP,
  TASK_PROP,
  CRATE,
  DESTROYABLE
}

export enum ResourceIds {
  HEALTH = 1,
  HUNGER = 4,
  HYDRATION = 5,
  STAMINA = 6,
  VIRUS = 12,
  BLEEDING = 21,
  COMFORT = 68,
  FUEL = 396,
  CONDITION = 561,
  CONSTRUCTION_CONDITION = 567
}

export enum ResourceTypes {
  HEALTH = 1,
  HUNGER = 4,
  HYDRATION = 5,
  STAMINA = 6,
  VIRUS = 12,
  BLEEDING = 21,
  COMFORT = 68,
  FUEL = 50,
  CONDITION = 1
}

export enum Items {
  //#region WEAPONS
  WEAPON_AR15 = 10,
  WEAPON_AK47 = 2229,
  WEAPON_SHOTGUN = 2663,
  WEAPON_CROWBAR = 82,
  WEAPON_COMBATKNIFE = 84,
  WEAPON_MACHETE01 = 83,
  WEAPON_KATANA = 2961,
  WEAPON_BAT_WOOD = 1724,
  WEAPON_GUITAR = 1733,
  WEAPON_AXE_WOOD = 58,
  WEAPON_AXE_FIRE = 1745,
  WEAPON_HAMMER = 1536,
  WEAPON_HATCHET = 3,
  WEAPON_PIPE = 1448,
  WEAPON_BAT_ALUM = 1721,
  WEAPON_BOW_MAKESHIFT = 113,
  WEAPON_BOW_WOOD = 1720,
  WEAPON_BOW_RECURVE = 1986,
  WEAPON_1911 = 2,
  WEAPON_M9 = 1997,
  WEAPON_308 = 1373,
  WEAPON_BINOCULARS = 1542,
  WEAPON_CROSSBOW = 2246,
  WEAPON_R380 = 1991,
  WEAPON_MOLOTOV = 14,
  WEAPON_MAGNUM = 1718,
  WEAPON_FLASHLIGHT = 1380,
  WEAPON_WRENCH = 1538,
  WEAPON_BRANCH = 1725,
  WEAPON_FISTS = 85,
  WEAPON_FROSTBITE = 3445,
  WEAPON_BLAZE = 3446,
  WEAPON_NAGAFENS_RAGE = 3448,
  WEAPON_PURGE = 3449,
  WEAPON_REAPER = 3450,
  WEAPON_HAMMER_DEMOLITION = 1903,
  WEAPON_TORCH = 5,
  WEAPON_TORCH_ETHANOL = 1389,
  WEAPON_HATCHET_MAKESHIFT = 1708,
  WEAPON_AK47_MODIFIED = 2399,
  WEAPON_SPEAR = 1382,
  WEAPON_REMOVER = 1776,
  //#endregion

  //#region AMMO
  AMMO_223 = 1429,
  AMMO_12GA = 1511,
  AMMO_45 = 1428,
  AMMO_9MM = 1998, // TODO = assign it to a spawner
  AMMO_308 = 1469,
  AMMO_380 = 1992,
  AMMO_762 = 2325,
  AMMO_44 = 1719,
  AMMO_ARROW = 112,
  AMMO_ARROW_EXPLOSIVE = 138,
  AMMO_ARROW_FLAMING = 1434,
  //#endregion

  //#region PERISHABLE
  ANTIBIOTICS = 1388,
  VITAMINS = 1512,
  IMMUNITY_BOOSTERS = 1471,
  FIRST_AID = 78,
  BANDAGE = 24,
  BANDAGE_DRESSED = 2214,
  GAUZE = 1751,
  SWIZZLE = 1709,
  GROUND_COFFEE = 56, // TODO = expand with more canned food types
  CANNED_FOOD01 = 7,
  CANNED_FOOD02 = 1393,
  CANNED_FOOD03 = 1394,
  CANNED_FOOD04 = 1391,
  CANNED_FOOD05 = 1392,
  CANNED_FOOD06 = 1396,
  CANNED_FOOD07 = 1397,
  CANNED_FOOD08 = 1398,
  CANNED_FOOD09 = 1399,
  CANNED_FOOD10 = 1400,
  CANNED_FOOD11 = 1401,
  CANNED_FOOD25 = 1431,
  CANNED_FOOD21 = 1395,
  CANNED_FOOD26 = 2536,
  BLACKBERRY = 105,
  BLACKBERRY_JUICE = 1361,
  BLACKBERRY_PIE = 1706,
  BLACKBERRY_PIE_SLICE = 1726,
  BLACKBERRY_HANDFUL = 3214,
  WATER_PURE = 1371,
  WATER_STAGNANT = 1535,
  WATER_DIRTY = 1368,
  MRE_APPLE = 1402, // TODO = add other MRE types
  MRE01 = 1403,
  MRE02 = 1404,
  MRE03 = 1405,
  MRE04 = 1406,
  MRE05 = 1407,
  MRE06 = 1409,
  MRE07 = 1410,
  MRE08 = 1411,
  MRE09 = 1412,
  MRE10 = 1413,
  MRE11 = 1408,
  MRE12 = 1414,
  SANDWICH_BEAR = 1459,
  STEAK_BEAR = 1451,
  SURVIVAL_BREAD = 1456,
  MEAT_BEAR = 1450,
  COFFEE = 55,
  COFFEE_SUGAR = 71,
  STEAK_RABBIT = 117,
  MEAT_RABBIT = 116,
  SANDWICH_RABBIT = 1457,
  STEW_RABBIT = 118,
  CORN = 107,
  CORN_ROASTED = 1387,
  JERKY_DEER = 21,
  MEAT_VENISON = 20,
  SANDWICH_DEER = 1460,
  STEAK_DEER = 61,
  HONEY = 2192,
  MOONSHINE = 1386,
  COLD_MEDICINE = 1742,
  SURVIVAL_BORSCHT = 1379,
  SANDWICH_WOLF = 1458,
  STEAK_WOLF = 1343,
  MEAT_WOLF = 1342,
  MEAT_ROTTEN = 1381,
  //#endregion

  //#region CONSTRUCTION
  GROUND_TAMPER = 124,
  SHACK = 1433,
  SHACK_SMALL = 1440,
  SHACK_BASIC = 1468,
  SHELTER = 150,
  SHELTER_LARGE = 153,
  SHELTER_UPPER_LARGE = 1897,
  SHELTER_UPPER = 1898,
  FOUNDATION = 1378,
  FOUNDATION_EXPANSION = 2336,
  FOUNDATION_RAMP = 2269,
  FOUNDATION_STAIRS = 2270,
  METAL_GATE = 148,
  DOOR_METAL = 1881,
  DOOR_WOOD = 1435,
  METAL_WALL = 149,
  METAL_WALL_UPPER = 1896,
  DOOR_BASIC = 1470,
  LANDMINE = 74,
  IED = 1699,
  PUNJI_STICKS = 98,
  //PUNJI_STICK_ROW = // NEED TO FIND THIS IN ITEM DEFINITIONS
  SNARE = 1415,
  ANIMAL_TRAP = 91,
  BARBED_WIRE = 108,
  BARBEQUE = 1447,
  BEE_BOX = 2034,
  CAMPFIRE = 15,
  CANDLE = 1904,
  DEW_COLLECTOR = 97,
  FURNACE = 64,
  LOOKOUT_TOWER = 2272,
  METAL_DOORWAY = 1969,
  REPAIR_BOX = 2792,
  SLEEPING_MAT = 51,
  STORAGE_BOX = 1982,
  STRUCTURE_STAIRS = 154,
  STRUCTURE_STAIRS_UPPER = 1900,
  WORKBENCH = 1891,
  WORKBENCH_WEAPON = 3778,
  BARRICADE = 122,
  //#endregion

  //#region COMPONENT
  SHARD_METAL = 114,
  SHARD_BRASS = 3780,
  SHARD_PLASTIC = 3775,
  GUNPOWDER_REFINED = 3805,
  ALLOY_LEAD = 3779,
  PROTOTYPE_MECHANISM = 3455,
  PROTOTYPE_TRIGGER_ASSEMBLY = 3456,
  PROTOTYPE_RECEIVER = 3457,
  NAIL = 135,
  BACKPACK_FRAME = 1466,
  METAL_BRACKET = 141,
  ANIMAL_FAT = 72,
  FLOUR = 1455,
  WAX = 2193,
  HONEYCOMB = 2203,
  PHONE_DEAD = 2635,
  PHONE_BATTERY = 2637,
  PHONE_CHARGED = 2636,
  CORN_MASH = 1385,
  YEAST = 1445,
  DEER_SCENT = 1462,
  DEER_BLADDER = 1463,
  DUCT_TAPE = 134,
  TRAP_IGNITION_KIT = 2831,
  SALINE = 77,
  WHEAT = 1438,
  TWINE = 142,
  GUN_PART = 1890,
  REPAIR_KIT_GUN = 1895,
  UPGRADE_KIT_GUN = 2419,
  CHARCOAL = 26,
  METAL_BAR = 39,
  ANTI_VIRAL_BOTTLE = 2671,
  HANDWRITTEN_NOTE_CAROLINE = 2611,
  ANTI_VIRAL_BOTTLE_EMPTY = 2612,
  GRENADE_SONIC_BROKEN = 3040,
  VIAL_H1Z1_B_PLASMA = 3041,
  VIAL_H1Z1_REDUCER = 2498,
  BATTERIES_AA = 2833,
  BRAIN_TREATED = 2643,
  BRAIN_INFECTED = 2642,
  SYRINGE_INFECTED_BLOOD = 1510,
  EMPTY_SPECIMEN_BAG = 2641,
  //#endregion

  TRAP_FIRE = 2812,
  TRAP_FLASH = 2810,
  TRAP_GAS = 2811,
  TRAP_SHOCK = 2832,

  BACKPACK_FRAMED = 2111,
  BACKPACK_SATCHEL = 1432,
  BACKPACK_MILITARY_TAN = 2124,
  BACKPACK_BLUE_ORANGE = 2038,
  HELMET_MOTORCYCLE = 2170, // TODO = expand with other default helmet colors
  HAT_CAP = 12, // TODO = expand with other cap colors
  SHIRT_DEFAULT = 2088, // TODO = expand with other default shirts
  PANTS_DEFAULT = 2177, // TODO = expand with other default pants
  SHIRT_SCRUBS_BLUE = 2553,
  PANTS_SCRUBS_BLUE = 2557,
  SURGEON_MASK_AQUA = 2569,
  CAP_SCRUBS_BLUE = 2560,

  CONVEYS_BLUE = 2217, // TODO = expand with other convey colors
  HAT_BEANIE = 2162,
  SUGAR = 57,
  BATTERY = 1696,
  SPARKPLUGS = 1701,
  SALT = 22,
  LIGHTER = 1436,
  BOW_DRILL = 1452,
  WATER_EMPTY = 1353,
  FUEL_BIOFUEL = 73,
  FUEL_ETHANOL = 1384,
  WOOD_PLANK = 109,
  METAL_SHEET = 46,
  METAL_SCRAP = 48,
  BROKEN_METAL_ITEM = 1354,
  TARP = 155,
  WOOD_LOG = 16,
  WOOD_STICK = 111,
  GROUND_TILLER = 1383,
  FERTILIZER = 25,
  SEED_CORN = 1987,
  SEED_WHEAT = 1988,
  VIAL_EMPTY = 2510,
  SYRINGE_EMPTY = 1508,
  GHILLIE_SUIT = 92,
  GHILLIE_SUIT_TAN = 2570,
  HELMET_TACTICAL = 2172,
  RESPIRATOR = 2148,
  NV_GOGGLES = 1700,
  ALL_PURPOSE_GOGGLES = 1693,
  GUNPOWDER = 11,
  KEVLAR_DEFAULT = 2271,
  ARMOR_PLATED = 2205,
  ARMOR_WOODEN = 2204,
  CLOTH = 23,
  METAL_PIPE = 47,
  GRENADE_SMOKE = 2236,
  GRENADE_FLASH = 2235,
  GRENADE_GAS = 2237,
  GRENADE_HE = 65,
  GRENADE_SCREAM = 3022,
  MAP = 1985,
  COMPASS = 1441,
  FLARE = 1804,
  FLARE_PARACHUTE = 1906,
  FLARE_SMOKE = 1672,
  BACKPACK_RASTA = 2393,
  WAIST_PACK = 1803,
  FANNY_PACK_DEV = 1,
  VEHICLE_KEY = 3460,
  CODED_MESSAGE = 2722,
  AIRDROP_CODE = 2675,
  BANDANA_BASIC = 2323,
  GLOVES_FINGERLESS = 2324,
  HAND_SHOVEL = 1697,
  COMPASS_IMPROVISED = 1444,
  SKINNING_KNIFE = 110,
  RIGGED_LIGHT = 1748,
  SYRINGE_H1Z1_REDUCER = 1464,
  LOCKER_KEY_F1 = 2645,
  LOCKER_KEY_F2 = 2646,
  LOCKER_KEY_F3 = 2647,
  LOCKER_KEY_F4 = 2648,
  EMERGENCY_RADIO = 2273,

  HEADLIGHTS_OFFROADER = 9,
  HEADLIGHTS_PICKUP = 1728,
  HEADLIGHTS_POLICE = 1730,
  HEADLIGHTS_ATV = 2595,

  TURBO_OFFROADER = 90,
  TURBO_PICKUP = 1729,
  TURBO_POLICE = 1731,
  TURBO_ATV = 2727,

  VEHICLE_HOTWIRE = 3458,
  VEHICLE_MOTOR_OFFROADER = 1344,
  VEHICLE_MOTOR_PICKUP = 1712,
  VEHICLE_MOTOR_POLICECAR = 1722,
  VEHICLE_MOTOR_ATV = 2594,

  VEHICLE_HORN = 1858,
  VEHICLE_HORN_POLICECAR = 1735,
  VEHICLE_SIREN_POLICECAR = 1732,

  CONTAINER_VEHICLE_OFFROADER = 1541,
  CONTAINER_VEHICLE_PICKUP = 1783,
  CONTAINER_VEHICLE_POLICECAR = 1723,
  CONTAINER_VEHICLE_ATV = 2728,

  CONTAINER_DROPPED_ITEMS = 3089,

  CONTAINER_STORAGE = 1506,
  CONTAINER_WRECKED_VAN = 1476,
  CONTAINER_WRECKED_CAR = 1474,
  CONTAINER_WRECKED_TRUCK = 1475,
  CONTAINER_WEAPONS_LOCKER = 1705,
  CONTAINER_DESK = 1503,

  CONTAINER_TOOL_CABINETS = 1507,
  CONTAINER_DUMPSTER = 1490,
  CONTAINER_FILE_CABINET = 1504,
  CONTAINER_LOCKER = 1704,
  CONTAINER_FRIDGE = 1472,
  CONTAINER_OTTOMAN = 1497,
  CONTAINER_DRESSER = 1493,
  CONTAINER_ARMOIRE = 1491,

  // COMBINE THESE
  CONTAINER_CABINETS = 1480,
  CONTAINER_CABINETS_BATHROOM = 1480,
  CONTAINER_CABINETS_CUBE = 1480,
  CONTAINER_CABINETS_KITCHEN = 1480,

  CONTAINER_GARBAGE_CAN = 1500,
  CONTAINER_FURNACE = 1711,
  CONTAINER_BARBEQUE = 1477,
  CONTAINER_CAMPFIRE = 1473,
  CONTAINER_DEW_COLLECTOR = 1540,
  CONTAINER_ANIMAL_TRAP = 1539,
  CONTAINER_BEE_BOX = 2035,
  CONTAINER_DRUG_CABINET = 2525,
  CONTAINER_MEDICAL_STATION = 2524,
  CONTAINER_HOSPITAL_DESK = 2677,
  CONTAINER_GROSSING_STATION = 2529,
  CONTAINER_HOSPITAL_REFRIGERATOR = 1472,
  CONTAINER_HOSPITAL_CABINET = 2676,
  CONTAINER_MILITARY_CRATE = 1501
}

export enum Skins_Shirt {
  CAMO_TAN_FLANNEL_SHIRT = 2030,
  BLUE_FLANNEL_SHIRT = 2054,
  BROWN_FLANNEL_SHIRT = 2055,
  GREEN_FLANNEL_SHIRT = 2056,
  RED_FLANNEL_SHIRT = 2057,
  PAISLEY_FLANNEL_SHIRT = 2184,
  CAMO_GREEN_FLANNEL_SHIRT = 2187,
  POLICE_SHIRT = 2346,
  BASIC_HOODIE = 2373,
  BLACK_ORANGE_HOODIE = 2374,
  TWITCH_HOODIE = 2375,
  BLUE_BLACK_HOODIE = 2376,
  DOA_HOODIE = 2377,
  PRO_GRAMER_HOODIE = 2378,
  PARAMEDIC_UNIFORM = 2535,
  SHIRT_DEFAULT = 2088,
  Dragon_Lodge_Parka = 3033
}

export enum Skins_Pants {
  FLOWER_PRINT_PANTS = 2280,
  POLICE_SLACKS = 2347,
  LEGGINGS = 2364,
  BONE_LEGGINGS = 2365,
  MUSCLE_LEGGINGS = 2366,
  PARAMEDIC_SLACKS = 2534,
  PANTS_DEFAULT = 2177,
  TWIN_GALAXIES_PANTS = 3875,
  Stars_Stripes_Shorts = 2404
}

export enum Skins_Beanie {
  AVIATOR_CAP = 2058,
  BLACK_BEANIE = 2162,
  POLICE_HAT = 2344
}

export enum Skins_Cap {
  CAMO_GREEN_OUTBACK_HAT = 2046,
  TAN_CANVAS_OUTBACK_HAT = 2066,
  BROWN_LEATHER_OUTBACK_HAT = 2067,
  HAT_CAP = 12
}

export enum Skins_MotorHelmet {
  GORILLA_WARFARE = 3631,
  ARACHNID = 3721,
  DEFAULT = 2170
  /*Infernal_Demon_Mask = 3862,
  Holiday_Hat = 2887,
  Mask_of_Jester = 3366,
  Patchwork_Rudolph_Helmet = 2817,
  Wasteland_Skull_Helmet = 3064,
  EZW_Spiked_Helmet = 3124,
  Dragon_Motorcycle_Helmet = 2828,
  Cigar_Hog_Mask = 2396,
  White_Unicorn_Full_Helmet = 3439,
  Star_Spangled_Hat = 3470,
  Pumpkin_Mask = 2745,
  Scarecrow_Mask = 2750,*/
}
export enum Skins_Kevlar {
  //Toxic_Body_Armor = 2477,
  KEVLAR_DEFAULT = 2271
  /*Dead_End_Armor = 2860,
  EZW_Armored_Championship_Belt = 3125,
  EZW_Armored_Shoulderpads = 3126,*/
}
export enum Skins_Military {
  Military_Default = 2124,
  Rasta_Backpack = 2393
  /*Pink_Skulls_Survivor_Backpack = 3046,
  Sniper_Military_Backpack = 3169,
  Fully_Geared_Explorer_Backpack = 4009,*/
}
export enum Skins_Glasses {
  Evil_Clown_Glasses = 2253,
  Default_Goggles = 1693,
  White_Biker_Glasses = 2252,
  Steampunk_Goggles = 2954
}

export enum Effects {
  Smoke_Orange = 3621,
  Smoke_Green = 3622,
  Smoke_Purple = 3623,
  Smoke_Yellow = 3624,
  Smoke_LimeGreen = 4537,
  Smoke_Red = 4538,
  Smoke_Blue = 4539,
  Smoke_Teal = 4540,
  Smoke_Magenta = 4541
}
