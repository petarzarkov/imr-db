import { AppDataSource } from "@db/data-source";
import { Hero } from "@db/entities/heroes/hero.entity";
import { v4 } from "uuid";

export const initDBData = async () => {

    return AppDataSource.initialize().then(async () => {

        console.log("Inserting a new hero into the database...");
        const hero = new Hero();
        hero.name = `Nordak-${v4()}`;
        hero.faction = "Holy Light Parliament";
        await AppDataSource.manager.save(hero);
        console.log("Saved a new hero with id: " + hero.id);

        console.log("Loading heroes from the database...");
        const heroes = await AppDataSource.manager.find(Hero);
        console.log("Loaded heroes: ", heroes);

    }).catch(error => console.log(error));
};