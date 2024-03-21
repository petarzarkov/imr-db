/* eslint-disable max-len */
import { HeroRarity } from "../entities/heroes/hero.rarity";
import { HeroMark } from "../entities/heroes/hero.mark.entity";
import { HeroType } from "../entities/heroes/hero.type.entity";

export const heroes = [
    {
        name: "Anna",
        icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/3/39/Icon_head_Anna.png/revision/latest?cb=20230425094054",
        mark: HeroMark.RED,
        type: HeroType.ATTACK,
        rarity: HeroRarity.LEGEND,
        gear_focus: "Anything with mastery, atk rate, eff hit",
        stat_focus: "Mastery>Atk Rate>Effect Hit",
        description: "Anna has a high efficiency to clear monsters early game. She is a good dps option for Tower of Mark."
    },
    {
        name: "Nid Rold",
        icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/b/bd/Icon_head_Nid_Rold.png/revision/latest?cb=20230627092620",
        mark: HeroMark.FORCE,
        type: HeroType.ATTACK,
        rarity: HeroRarity.LEGEND,
        gear_focus: "Anything with mastery, atk rate, eff hit",
        stat_focus: "Mastery>Atk Rate>Effect Hit",
        description: "Nid Rold is one of the top bleed heroes. He has 2 AoE skills to cause tremendous damage to either mobs or the boss. Remember to be accompanied by tanks or HP healers to keep him alive."
    },
    {
        name: "Geeliman",
        icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/3/36/Icon_head_Geeliman.png/revision/latest?cb=20230627092148",
        mark: HeroMark.BLUE,
        type: HeroType.SUPPORT,
        rarity: HeroRarity.LEGEND,
        gear_focus: "Devour>Slay/Wild>Crit Rate/DMG/Atk",
        stat_focus: "Crit Rate>Crit DMG/Atk Rate>Atk/Effect Hit/HP%",
        description: "Geeliman can be a good PVP cleaver at exclusive level 3. Useful at awaken level 0 to remove boss shields in Tower of Mark."
    },
    {
        name: "Boole",
        icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/f/f1/Icon_head_Boole.png/revision/latest?cb=20230627091344",
        mark: HeroMark.RED,
        type: HeroType.ATTACK,
        rarity: HeroRarity.LEGEND,
        gear_focus: "Devour>Slay/Wild>Crit Rate/DMG/Atk",
        stat_focus: "Crit Rate>Crit DMG/Atk Rate>Atk/HP%",
        description: "Boole can be a good PVP cleaver at exclusive level 3, as well as a good dps option for Tower of Mark and Faction Abyss."
    },
    {
        name: "Belton",
        icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/d/de/Icon_head_Belton.png/revision/latest?cb=20230627091322",
        mark: HeroMark.FORCE,
        type: HeroType.ATTACK,
        rarity: HeroRarity.LEGEND,
        gear_focus: "Devour>Slay/Wild>Crit Rate/DMG/Atk",
        stat_focus: "Crit Rate>Crit DMG/Atk Rate>Atk/HP%",
        description: "In PVE, both Basic Attack and Active Skill 1 can fight the boss, which can reduce its ATK and DEF. When the exclusive level is 0, use the Basic Attack first, then the Active Skill 1, and the Passive Skill."
    },
];