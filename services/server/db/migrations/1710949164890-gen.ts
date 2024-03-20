import { MigrationInterface, QueryRunner } from "typeorm";

export class Gen1710949164890 implements MigrationInterface {
    name = "Gen1710949164890";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "mark" (
                "id" SERIAL NOT NULL,
                "name" text NOT NULL,
                "icon_url" text NOT NULL,
                "note" text,
                CONSTRAINT "UQ_badcf8dcb33856bda5e4057a7f9" UNIQUE ("name"),
                CONSTRAINT "UQ_badcf8dcb33856bda5e4057a7f9" UNIQUE ("name"),
                CONSTRAINT "PK_0c6d4afd73cc2b4eee5a926aafc" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "emblem" (
                "id" SERIAL NOT NULL,
                "image_url" text NOT NULL,
                CONSTRAINT "PK_26180bde886e36f518cb65ddadb" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "faction" (
                "id" SERIAL NOT NULL,
                "name" text NOT NULL,
                "icon_url" text NOT NULL,
                "note" text,
                CONSTRAINT "UQ_51b7d060b06c5b3ed9e3411f6bc" UNIQUE ("name"),
                CONSTRAINT "PK_5935637aa4ecd999ac0555ae5a6" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "hero_rating" (
                "id" SERIAL NOT NULL,
                "arena" integer NOT NULL,
                "dwarven_ruins" integer NOT NULL,
                "tower_of_mark" integer NOT NULL,
                "faction_abyss" integer NOT NULL,
                "guild_boss" integer NOT NULL,
                "broken_land" integer NOT NULL,
                "wuthering_cost" integer NOT NULL,
                CONSTRAINT "arena" CHECK (
                    "arena" >= 0
                    AND "arena" <= 5
                ),
                CONSTRAINT "dwarven_ruins" CHECK (
                    "dwarven_ruins" >= 0
                    AND "dwarven_ruins" <= 5
                ),
                CONSTRAINT "tower_of_mark" CHECK (
                    "tower_of_mark" >= 0
                    AND "tower_of_mark" <= 5
                ),
                CONSTRAINT "faction_abyss" CHECK (
                    "faction_abyss" >= 0
                    AND "faction_abyss" <= 5
                ),
                CONSTRAINT "guild_boss" CHECK (
                    "guild_boss" >= 0
                    AND "guild_boss" <= 5
                ),
                CONSTRAINT "broken_land" CHECK (
                    "broken_land" >= 0
                    AND "broken_land" <= 5
                ),
                CONSTRAINT "wuthering_cost" CHECK (
                    "wuthering_cost" >= 0
                    AND "wuthering_cost" <= 5
                ),
                CONSTRAINT "PK_e6347c8986726e2e0939a8742e8" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."hero_type_enum" AS ENUM('attack', 'defense', 'support')
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."hero_rarity_enum" AS ENUM(
                'common',
                'uncommon',
                'rare',
                'epic',
                'legend',
                'mythic'
            )
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."hero_mark_enum" AS ENUM('force', 'green', 'red')
        `);
        await queryRunner.query(`
            CREATE TABLE "hero" (
                "id" SERIAL NOT NULL,
                "name" text NOT NULL,
                "type" "public"."hero_type_enum" NOT NULL,
                "rarity" "public"."hero_rarity_enum" NOT NULL,
                "mark" "public"."hero_mark_enum" NOT NULL,
                "stat_focus" text NOT NULL,
                "note" text,
                "icon_url" text NOT NULL,
                "factionId" integer,
                "emblemId" integer,
                "ratingId" integer,
                CONSTRAINT "UQ_615f5a253cc6e2f8aacb054ad32" UNIQUE ("name"),
                CONSTRAINT "REL_38eb06450becc68cf22e9f0c4b" UNIQUE ("factionId"),
                CONSTRAINT "REL_7242658931a55538dc87e2a9d7" UNIQUE ("emblemId"),
                CONSTRAINT "REL_bc20b91bf54a0f8396fdc28b0a" UNIQUE ("ratingId"),
                CONSTRAINT "PK_313d51d6899322b85f2df99ccde" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "blessing" (
                "id" SERIAL NOT NULL,
                "type" text NOT NULL,
                "rank" text NOT NULL,
                "rating" integer NOT NULL,
                CONSTRAINT "rating" CHECK (
                    "rating" >= 0
                    AND "rating" <= 5
                ),
                CONSTRAINT "PK_bb4bb2b1ebe680f10cf6addba54" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "hero"
            ADD CONSTRAINT "FK_38eb06450becc68cf22e9f0c4b0" FOREIGN KEY ("factionId") REFERENCES "faction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "hero"
            ADD CONSTRAINT "FK_7242658931a55538dc87e2a9d75" FOREIGN KEY ("emblemId") REFERENCES "emblem"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "hero"
            ADD CONSTRAINT "FK_bc20b91bf54a0f8396fdc28b0a1" FOREIGN KEY ("ratingId") REFERENCES "hero_rating"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "hero" DROP CONSTRAINT "FK_bc20b91bf54a0f8396fdc28b0a1"
        `);
        await queryRunner.query(`
            ALTER TABLE "hero" DROP CONSTRAINT "FK_7242658931a55538dc87e2a9d75"
        `);
        await queryRunner.query(`
            ALTER TABLE "hero" DROP CONSTRAINT "FK_38eb06450becc68cf22e9f0c4b0"
        `);
        await queryRunner.query(`
            DROP TABLE "blessing"
        `);
        await queryRunner.query(`
            DROP TABLE "hero"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."hero_mark_enum"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."hero_rarity_enum"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."hero_type_enum"
        `);
        await queryRunner.query(`
            DROP TABLE "hero_rating"
        `);
        await queryRunner.query(`
            DROP TABLE "faction"
        `);
        await queryRunner.query(`
            DROP TABLE "emblem"
        `);
        await queryRunner.query(`
            DROP TABLE "mark"
        `);
    }

}
