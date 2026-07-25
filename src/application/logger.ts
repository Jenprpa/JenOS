export type LogLevel = "debug" | "info" | "warn" | "error";

export interface LogEvent {
  readonly level: LogLevel;
  readonly message: string;
  readonly context?: Record<string, string | number | boolean>;
}

export interface Logger {
  log(event: LogEvent): void;
}
