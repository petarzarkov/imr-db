import { ConfigService } from "@nestjs/config";

export interface DefaultConfig {
    env: string;
    isDev: boolean;
    app: {
        port: number;
        version: string;
        docs: {
            title: string;
            path: string;
        };
        apiPrefix: string;
    };
    db: {
        name: string;
        host: string;
        username: string;
        password: string;
        port: number;
    };
}

export interface ValidatedConfig extends ConfigService<DefaultConfig, true> {}

export const defaultConfig = () => {
    const defaultConfig: DefaultConfig & Record<string, unknown> = {
        env: process.env.ENV || "development",
        isDev: !process.env.ENV || process.env.ENV === "development",
        app: {
            version: process.env.npm_package_version || "0.0.1",
            port: Number(process.env.API_PORT) || 5058,
            docs: {
                title: process.env.npm_package_name || process.env.npm_package_description || "IMR db",
                path: process.env.API_DOCS_PATH || "api",
            },
            apiPrefix: process.env.API_PREFIX || "api",
        },
        db: {
            name: process.env.DB_NAME || "imr-db",
            host: process.env.DB_HOST || "imr-db",
            port: Number(process.env.DB_PORT) || 6544,
            username: process.env.DB_USERNAME || "imr-db",
            password: process.env.DB_PASSWORD || "imr-db",
        },
    };

    return defaultConfig;
};
