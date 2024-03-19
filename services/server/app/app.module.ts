import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DefaultConfig, defaultConfig } from "@const";
import { ResourceUsageModel } from "@modules/resource/usage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "node:path";
import { cwd } from "node:process";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { RequestIdMiddleware } from "@middlewares/request-id.middleware";
import { HttpMiddleware } from "@middlewares/http.middleware";
import { ServiceModule } from "@api/service/service.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Hero } from "@db/entities/heroes/hero.entity";
import { Blessing } from "@db/entities/blessings/blessing.entity";

@Module({
    imports: [
        ResourceUsageModel.forRoot(false, false),
        ConfigModule.forRoot({
            load: [defaultConfig],
            isGlobal: true,
        }),
        ServiceModule,
        ServeStaticModule.forRoot({
            rootPath: join(cwd(), "..", ...["client", "dist"]),
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService<DefaultConfig, true>) => {
                const dbConfig = configService.get("db", { infer: true });
                return {
                    type: "postgres",
                    host: dbConfig.host,
                    port: dbConfig.port,
                    username: dbConfig.username,
                    password: dbConfig.password,
                    database: dbConfig.name,
                    entities: [Hero, Blessing],
                    synchronize: true,
                };
            },
            inject: [ConfigService],
        })
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(RequestIdMiddleware, HttpMiddleware).forRoutes("*");
    }
}
