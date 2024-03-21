import { HeroType, HeroTypeEntity } from "../entities/heroes/hero.type.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTypes1711015786396 implements MigrationInterface {
    types: Omit<HeroTypeEntity, "id">[] = [
        {
            type: HeroType.ATTACK,
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/0/00/Attack.png/revision/latest/scale-to-width-down/50?cb=20230627083104"
        },
        {
            type: HeroType.DEFENSE,
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/6/66/Defense.png/revision/latest/scale-to-width-down/50?cb=20230628023752"
        },
        {
            type: HeroType.SUPPORT,
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/a/ab/Support.png/revision/latest/scale-to-width-down/50?cb=20230628062642"
        },
    ];

    public async up(queryRunner: QueryRunner): Promise<void> {
        const typeRepo = queryRunner.manager.getRepository(HeroTypeEntity);

        await typeRepo.insert(this.types);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const typeRepo = queryRunner.manager.getRepository(HeroTypeEntity);

        for (const type of this.types) {
            await typeRepo.delete({ type: type.type });
        }
    }
}
