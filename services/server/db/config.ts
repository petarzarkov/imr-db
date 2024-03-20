import "reflect-metadata";
import { DataSource } from "typeorm";
import { defaultConfig } from "../app/const";

const { db, isDev } = defaultConfig();

export const dataSource = new DataSource({
    type: "postgres",
    host: db.host,
    port: db.port,
    username: db.username,
    password: db.password,
    database: db.name,
    synchronize: true,
    migrationsTransactionMode: "each",
    logging: isDev,
    entities: [__dirname + "/entities/**/*.entity{.ts,.js}"],
    migrationsTableName: "migrations" ,
    migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
    subscribers: [],
});