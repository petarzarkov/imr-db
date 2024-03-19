import { IsRequestId } from "@decorators/validation.decorator";
import { HttpStatus, Type, applyDecorators } from "@nestjs/common";
import { ApiDefaultResponse, ApiExtraModels, ApiOkResponse, ApiProperty, getSchemaPath } from "@nestjs/swagger";

export class IOkResult<T = unknown> {
    @ApiProperty({
        description: "indicates the success of the request",
        type: "boolean",
        default: true,
    })
    public isSuccess: true;

    @IsRequestId()
    public requestId: string;

    @ApiProperty({
        description: "result of a successful request",
    })
    public result: T | null;
}

export class IFailResult<ErrorType extends Error | string = Error> {
    @ApiProperty({
        description: "indicates the success of the request",
        type: "boolean",
        default: false,
    })
    public isSuccess: false;

    @IsRequestId()
    public requestId: string;

    @ApiProperty({
        description: "error message of an error request",
        type: "string",
        example: "No record in db.",
    })
    public error: ErrorType;
}

export type APIResponse<Res = unknown, ErrorType extends Error | string = Error> = IFailResult<ErrorType> | IOkResult<Res>;

export const OkResult = <T>(requestId: string, result: T): IOkResult<T> => ({
    isSuccess: true,
    requestId,
    result,
});

export const FailResult = <T extends Error = Error>(requestId: string, error: T): IFailResult => ({
    isSuccess: false,
    requestId,
    error,
});

export const BaseApiResponse = <T extends Type<unknown> | [Type<unknown>] = Type<unknown>>(model?: T) => {
    const fullModel = Array.isArray(model) ? model[0] : (model as Type<unknown>);
    return applyDecorators(
        ApiDefaultResponse({
            type: IFailResult,
        }),
        ApiExtraModels(IOkResult<T>, fullModel),
        ApiOkResponse({
            status: HttpStatus.OK,
            description: `The api response of ${fullModel.name}`,
            schema: {
                allOf: [
                    { $ref: getSchemaPath(IOkResult<T>) },
                    {
                        properties: {
                            result: Array.isArray(model)
                                ? {
                                    type: "array",
                                    items: {
                                        $ref: getSchemaPath(fullModel),
                                    },
                                }
                                : {
                                    $ref: getSchemaPath(fullModel),
                                },
                        },
                    },
                ],
            },
        }),
    );
};

export const BaseTypeApiResponse = <T extends "number" | "string" | "boolean">(model: T | [T]) => {
    const fullModel = Array.isArray(model) ? model[0] : model;
    return applyDecorators(
        ApiDefaultResponse({
            type: IFailResult,
        }),
        ApiOkResponse({
            status: HttpStatus.OK,
            schema: {
                allOf: [
                    { $ref: getSchemaPath(IOkResult<T extends "number" ? number : string>) },
                    {
                        properties: {
                            result: Array.isArray(model)
                                ? {
                                    type: "array",
                                    items: {
                                        type: fullModel,
                                    },
                                }
                                : {
                                    type: fullModel,
                                },
                        },
                    },
                ],
            },
        }),
    );
};
