import type { AiProvider, AiSuggestion } from "../../application/ai-provider";

export class NoopAiProvider implements AiProvider {
  async suggest(): Promise<AiSuggestion> {
    return {
      summary: "AI integration is not enabled in Sprint 1.",
      reason: "Sprint 1 defines the provider boundary only.",
      evidence: [],
      requiresUserConfirmation: true,
    };
  }
}
