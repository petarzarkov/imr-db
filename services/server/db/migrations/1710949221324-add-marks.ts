import { Mark } from "../entities/mark/marks.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMarks1710949221324 implements MigrationInterface {
    marks: Omit<Mark, "id">[] = [
        {
            name: "Force",
            note: null,
            icon_url: "https://drive.google.com/thumbnail?id=1AtitYjr97bh_QBezx6Oc2mtTsMnUq5GT&sz=w200h200"
        },
        {
            name: "Blue",
            note: null,
            icon_url: "https://drive.google.com/thumbnail?id=1EzRIWDq6bTd10X2VDGlJ0N_KMJigPL-Q&sz=w200h200"
        },
        {
            name: "Red",
            note: null,
            icon_url: "https://drive.google.com/thumbnail?id=1r-rTNh6G-J1ySZac98KqDLsuKKruMJXK&sz=w200h200"
        },
    ];

    public async up(queryRunner: QueryRunner): Promise<void> {
        const markRepo = queryRunner.manager.getRepository(Mark);

        await markRepo.insert(this.marks);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const markRepo = queryRunner.manager.getRepository(Mark);

        for (const mark of this.marks) {
            await markRepo.delete({ name: mark.name });
        }
    }

}
