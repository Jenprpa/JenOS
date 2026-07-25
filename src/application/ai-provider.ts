import type { EvidenceRef } from "../domain";

export interface AiAccessGrant {
  readonly purpose: string;
  readonly grantedAt: string;
  readonly allowedSourceIds: readonly string[];
}

export interface AiSuggestion {
  readonly summary: string;
  readonly reason: string;
  readonly evidence: readonly EvidenceRef[];
  readonly requiresUserConfirmation: true;
}

export interface AiProvider {
  suggest(input: { readonly prompt: string; readonly grant: AiAccessGrant }): Promise<AiSuggestion>;
}
