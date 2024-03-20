import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { v4 } from "uuid";
import { BEARER_TOKEN_DEFAULT, BEARER_TOKEN_DEFAULT_NAME, REQUEST_ID_HEADER_KEY, ValidatedConfig } from "@const";
import { UnhandledRoutes } from "@filters/unhandled-routes";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { Logger } from "@nestjs/common";

async function bootstrap(module: typeof AppModule) {
    const app = await NestFactory.create<NestFastifyApplication>(
        module,
        new FastifyAdapter({
            requestIdHeader: REQUEST_ID_HEADER_KEY,
            genReqId: () => v4(),
        }),
    );

    const configService = app.get<ValidatedConfig>(ConfigService);

    const appConfig = configService.get("app", { infer: true });

    app.useGlobalFilters(new UnhandledRoutes());

    app.enableShutdownHooks();

    const bearerTokenSchema: Parameters<DocumentBuilder["addBearerAuth"]>[0] = {
        type: "http",
        in: "header",
        scheme: "bearer",
    };

    const config = new DocumentBuilder().addBearerAuth(bearerTokenSchema, BEARER_TOKEN_DEFAULT_NAME).setTitle(appConfig.docs.title).setVersion(appConfig.version);

    if (process.env.npm_package_description) {
        config.setDescription(process.env.npm_package_description);
    }

    config.setContact(process.env.npm_package_author_name!, process.env.npm_package_homepage!, process.env.npm_package_author_email!);

    const document = SwaggerModule.createDocument(
        app,
        config.build(),
        // {
        //     extraModels: [BaseHttpError],
        // }
    );

    SwaggerModule.setup(appConfig.docs.path, app, document, {
        // This is so we are automatically authorized in swagger with some default value for the Bearer token
        swaggerOptions: {
            authAction: {
                [BEARER_TOKEN_DEFAULT_NAME]: {
                    schema: bearerTokenSchema,
                    value: Buffer.from(BEARER_TOKEN_DEFAULT).toString("base64"),
                },
            },
        },
    });

    app.enableCors();

    const logger = new Logger("NestApplication");

    await app.listen(appConfig.port, "0.0.0.0");

    const appUrl = await app.getUrl();
    logger.log(`Application started at ${appUrl}`);
    logger.log(`Docs at ${appUrl}/${appConfig.docs.path}`);
}

void bootstrap(AppModule);
