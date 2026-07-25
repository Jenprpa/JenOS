import type { EvidenceRef, IsoDateTime, SourceRef } from "./common";
import { assertCanExecuteDecision, type DecisionAuthority } from "./decision-rights";

export type StateLayer = "observed" | "suggested" | "confirmed";

export interface ObservedState<TTargetId extends string = string> {
  readonly layer: "observed";
  readonly targetId: TTargetId;
  readonly observedAt: IsoDateTime;
  readonly source: SourceRef;
  readonly evidence: EvidenceRef;
}

export interface SuggestedState<TTargetId extends string = string> {
  readonly layer: "suggested";
  readonly targetId: TTargetId;
  readonly suggestedAt: IsoDateTime;
  readonly suggestedBy: "ai" | "system";
  readonly reason: string;
  readonly evidence: readonly EvidenceRef[];
}

export interface ConfirmedState<TTargetId extends string = string> {
  readonly layer: "confirmed";
  readonly targetId: TTargetId;
  readonly confirmedAt: IsoDateTime;
  readonly confirmedBy: "user" | "system";
  readonly meaning: string;
  readonly evidence: readonly EvidenceRef[];
}

export type DomainState<TTargetId extends string = string> =
  ObservedState<TTargetId> | SuggestedState<TTargetId> | ConfirmedState<TTargetId>;

export function suggestStateFromAi<TTargetId extends string>(
  input: Omit<SuggestedState<TTargetId>, "layer" | "suggestedBy">,
): SuggestedState<TTargetId> {
  return {
    ...input,
    layer: "suggested",
    suggestedBy: "ai",
  };
}

export function confirmState<TTargetId extends string>(
  suggestion: SuggestedState<TTargetId> | ObservedState<TTargetId>,
  authority: DecisionAuthority,
  meaning: string,
  confirmedAt: IsoDateTime,
): ConfirmedState<TTargetId> {
  if (authority.actor === "ai") {
    throw new Error("AI cannot confirm state.");
  }

  assertCanExecuteDecision(authority);

  return {
    layer: "confirmed",
    targetId: suggestion.targetId,
    confirmedAt,
    confirmedBy: authority.actor === "system" ? "system" : "user",
    meaning,
    evidence: suggestion.layer === "observed" ? [suggestion.evidence] : suggestion.evidence,
  };
}
