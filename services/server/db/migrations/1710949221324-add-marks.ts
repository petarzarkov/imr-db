import { HeroMark, HeroMarkEntity } from "../entities/heroes/hero.mark.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMarks1710949221324 implements MigrationInterface {
    marks: Omit<HeroMarkEntity, "id">[] = [
        {
            mark: HeroMark.FORCE,
            note: null,
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/0/09/Force.png/revision/latest/scale-to-width-down/50?cb=20230628024637"
        },
        {
            mark: HeroMark.BLUE,
            note: null,
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/1/16/Blue.png/revision/latest/scale-to-width-down/50?cb=20230627083130"
        },
        {
            mark: HeroMark.RED,
            note: null,
            icon_url: "https://drive.google.com/thumbnail?id=1r-rTNh6G-J1ySZac98KqDLsuKKruMJXK&sz=w200h200"
        },
        {
            mark: HeroMark.GREEN,
            note: null,
            icon_url: "https://static.wikia.nocookie.net/infinitemagicraidofficial/images/7/72/Green.png/revision/latest/scale-to-width-down/50?cb=20230627082337"
        },
    ];

    public async up(queryRunner: QueryRunner): Promise<void> {
        const markRepo = queryRunner.manager.getRepository(HeroMarkEntity);

        await markRepo.insert(this.marks);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const markRepo = queryRunner.manager.getRepository(HeroMarkEntity);

        for (const mark of this.marks) {
            await markRepo.delete({ mark: mark.mark });
        }
    }

}
