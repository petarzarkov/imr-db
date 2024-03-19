import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { defaultConfig } from "@const";
import { ResourceUsageModel } from "@modules/resource/usage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "node:path";
import { cwd } from "node:process";
import { ConfigModule } from "@nestjs/config";
import { RequestIdMiddleware } from "@middlewares/request-id.middleware";
import { HttpMiddleware } from "@middlewares/http.middleware";
import { ServiceModule } from "@api/service/service.module";

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
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(RequestIdMiddleware, HttpMiddleware).forRoutes("*");
    }
}
