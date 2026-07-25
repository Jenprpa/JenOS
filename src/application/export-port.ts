export interface ExportPayload {
  readonly generatedAt: string;
  readonly records: readonly unknown[];
}

export interface ExportPort {
  toJson(payload: ExportPayload): Promise<string>;
  toMarkdown(payload: ExportPayload): Promise<string>;
}
