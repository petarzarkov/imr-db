import { REQUEST_ID_HEADER_KEY } from "@const";
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { FastifyReply, FastifyRequest } from "fastify";

@Catch(HttpException)
export class UnhandledRoutes implements ExceptionFilter {
    private logger = new Logger(this.constructor.name);

    catch(exception: HttpException, host: ArgumentsHost) {
        const request = host.switchToHttp().getRequest<FastifyRequest>();
        const response = host.switchToHttp().getResponse<FastifyReply>();

        if (exception.getStatus() === 404 && !(exception instanceof HttpException)) {
            const path = request.originalUrl;
            this.logger.warn({
                requestId: request.headers[REQUEST_ID_HEADER_KEY],
                message: `Unhandled route ${request.method} ${path}`,
                data: {
                    method: request.method,
                    path,
                    headers: request.headers,
                    request: request.body,
                },
            });
        }

        return response.status(exception.getStatus()).send(exception.getResponse());
    }
}
