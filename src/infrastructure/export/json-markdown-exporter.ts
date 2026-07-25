import type { ExportPayload, ExportPort } from "../../application/export-port";

export class JsonMarkdownExporter implements ExportPort {
  async toJson(payload: ExportPayload): Promise<string> {
    return JSON.stringify(payload, null, 2);
  }

  async toMarkdown(payload: ExportPayload): Promise<string> {
    const lines = [
      "# JenOS Export",
      "",
      `Generated at: ${payload.generatedAt}`,
      "",
      "```json",
      JSON.stringify(payload.records, null, 2),
      "```",
      "",
    ];

    return lines.join("\n");
  }
}
