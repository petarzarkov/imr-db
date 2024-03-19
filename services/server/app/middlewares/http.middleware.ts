import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import type { HookHandlerDoneFunction } from "fastify";
import { ServerResponse } from "http";
// import { REQUEST_ID_HEADER_KEY } from "@const";
import { BaseRequest } from "@contracts/request";

@Injectable()
export class HttpMiddleware implements NestMiddleware {
    private logger = new Logger(this.constructor.name);

    use(req: BaseRequest, res: ServerResponse, next: HookHandlerDoneFunction) {
        const { method, originalUrl: url } = req;
        // const requestId = req.headers[REQUEST_ID_HEADER_KEY] as string;

        this.logger.log(`<- ${method} ${url}`);
        // this.logger.log({
        //     requestId,
        //     message: `<- ${method} ${url}`,
        //     request: {
        //         method: req.method,
        //         url,
        //         headers: req.headers,
        //         body: req.body,
        //     },
        // });

        res.on("finish", () => {
            const { statusCode } = res;

            this.logger.log(`-> ${method} ${url} ${statusCode}`);

            // this.logger.log({
            //     requestId,
            //     message: `-> ${method} ${url} ${statusCode}`,
            //     response: {
            //         headers: res.getHeaders(),
            //     },
            // });
        });

        next();
    }
}
