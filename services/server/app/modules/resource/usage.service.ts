import { ConsoleLogger, Injectable } from "@nestjs/common";

@Injectable()
export class ResourceUsageService {
    #interval: NodeJS.Timer | null;
    #cpu: number;
    #memory: number;
    #debug: boolean;
    #consoleLogger: ConsoleLogger;

    set memory(m: number) {
        if (this.#debug) this.#consoleLogger.log(`Memory Usage %: ${m}`);
        this.#memory = m;
    }

    get memory() {
        return this.#memory;
    }

    set cpu(c: number) {
        if (this.#debug) this.#consoleLogger.log(`CPU Usage %: ${c}`);
        this.#cpu = c;
    }

    get cpu() {
        return this.#cpu;
    }

    constructor(enabled: boolean, debug = false) {
        this.#consoleLogger = new ConsoleLogger("ResourceUsageService");
        this.#debug = debug;
        if (enabled) {
            this.#interval = setInterval(() => {
                this.cpu = process.cpuUsage()?.user / 1_000_000;
                this.memory = process.memoryUsage()?.heapUsed / 1_000_000;
            }, 3000);
        }
    }

    stop() {
        if (this.#interval) {
            clearInterval(this.#interval as unknown as number);
            this.#interval = null;
        }
    }
}
