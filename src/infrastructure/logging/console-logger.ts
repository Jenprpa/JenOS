import type { LogEvent, Logger } from "../../application/logger";

export class ConsoleLogger implements Logger {
  log(event: LogEvent): void {
    const prefix = `[${event.level}] ${event.message}`;

    if (event.level === "error") {
      console.error(prefix, event.context ?? {});
      return;
    }

    if (event.level === "warn") {
      console.warn(prefix, event.context ?? {});
      return;
    }

    console.info(prefix, event.context ?? {});
  }
}
