import "reflect-metadata";
import { DataSource } from "typeorm";
import { Hero } from "./entities/heroes/hero.entity";
import { defaultConfig } from "@const";
import { resolve } from "node:path";

const db = defaultConfig().db;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: db.host,
    port: db.port,
    username: db.username,
    password: db.password,
    database: db.name,
    synchronize: true,
    logging: false,
    entities: [Hero],
    migrations: [resolve(process.cwd(), "services/server/db/migrations/*.ts")],
    subscribers: [],
});