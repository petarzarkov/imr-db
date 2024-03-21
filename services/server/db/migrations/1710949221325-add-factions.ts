/* eslint-disable max-len */
import { Faction } from "../entities/factions/factions.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFactions1710949221325 implements MigrationInterface {
    factions: Omit<Faction, "id">[] = [
        {
            name: "Dragon Tribe",
            description: "Increases self Crit rate and Mastery by 2,5% to 4%, up to 5 layeres, at the start of the turn.",
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/e/e6/Dragon_Tribe.png/revision/latest?cb=20230627081719",
        },
        {
            name: "Holy Light Parliament",
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/c/c5/Holy_Light_Parliament.png/revision/latest?cb=20230628031457",
            description: "Heroes gain 6% to 15% more Healing Effect and Healed Effect.",
        },
        {
            name: "Sagacity Alliance",
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/0/01/Sagacity_alliance_runestone.png/revision/latest?cb=20240103150528",
            description: "Well rounded and balanced faction.",
        },
        {
            name: "Foresters",
            description: "Heroes gain 6% to 15% more attack and defence.",
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/1/1d/Foresters.png/revision/latest?cb=20230628030921",
        },
        {
            name: "Sword Harbour Guards",
            description: "Heroes deal more (above 50% HP) or receive less (below 50% HP) 2,5% to 10% damage.",
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/9/91/Sword_Harbor_Guards.png/revision/latest?cb=20230628024016",
        },
        {
            name: "Sunset Sages",
            description: "When attacking there is a 50% chance to gain 12% to 24% extra leech.",
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/b/b3/Sunset_Sages.png/revision/latest?cb=20230628025521",
        },
        {
            name: "Doom Legion",
            description: "Reduces damage taken by 2% to 5% for each type of buff granted to self, up to 5 layers.",
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/9/99/Doom_Legion.png/revision/latest?cb=20230627083144",
        },
        {
            name: "The Forgotten",
            description: "Reduces Turn Meter Reduction on heroes by 5% to 12,5%. Also gain 15% to 30% more HP restoration when revived.",
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/0/0c/The_Forgotten.png/revision/latest?cb=20230628031705",
        },
        {
            name: "Eternal Sect",
            description: "Increases damage dealt by 12% to 24% when attacking enemies with any debuff.",
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/8/83/Eternal_Sect.png/revision/latest?cb=20230628024308",
        },
        {
            name: "Nameless Brotherhood",
            description: "When landing a critial hit, heroes have a 50% chance to gain 20% to 35% extra Piercing Rate on the attack.",
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/4/42/Nameless_Brotherhood.png/revision/latest?cb=20230628024621"
        },
        {
            name: "Wizard's Eye",
            description: "Heroes gain 6% to 15% more Effect Hit.",
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/4/42/Wizard%27s_Eye.png/revision/latest?cb=20230628032200",
        },
        {
            name: "Hidden Wave",
            description: "When launching a basic attack, heroes gain 3% to 12% increased basic attack damage (for 2 turns). When using an active skill, heroes gain 3% to 12% increased skill damage (for 2 turns). Both are stackable up to 2 layers.",
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/b/b3/Hidden_Wave.png/revision/latest?cb=20230628032351",
        },
    ];

    public async up(queryRunner: QueryRunner): Promise<void> {
        const factionRepo = queryRunner.manager.getRepository(Faction);

        await factionRepo.insert(this.factions);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const factionRepo = queryRunner.manager.getRepository(Faction);

        for (const faction of this.factions) {
            await factionRepo.delete({ name: faction.name });
        }
    }
}
