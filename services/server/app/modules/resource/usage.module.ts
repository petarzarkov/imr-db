import { DynamicModule, Module } from "@nestjs/common";
import { ResourceUsageService } from "./usage.service";

@Module({})
export class ResourceUsageModel {
    static forRoot(...params: ConstructorParameters<typeof ResourceUsageService>): DynamicModule {
        return {
            module: ResourceUsageModel,
            providers: [
                {
                    provide: ResourceUsageService,
                    useValue: new ResourceUsageService(...params),
                },
            ],
            exports: [ResourceUsageService],
        };
    }
}
