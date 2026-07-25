import type { EvidenceRef, IsoDateTime } from "./common";
import { assertCanExecuteDecision, type DecisionAuthority } from "./decision-rights";
import type { EntityId } from "../shared/id";

export interface ProposedMemory {
  readonly id: EntityId<"memory">;
  readonly status: "proposed";
  readonly targetId: string;
  readonly insight: string;
  readonly proposedBy: "ai" | "user" | "system";
  readonly proposedAt: IsoDateTime;
  readonly evidence: readonly EvidenceRef[];
}

export interface ConfirmedMemory {
  readonly id: EntityId<"memory">;
  readonly status: "confirmed";
  readonly targetId: string;
  readonly insight: string;
  readonly confirmedBy: "user";
  readonly confirmedAt: IsoDateTime;
  readonly evidence: readonly EvidenceRef[];
}

export function proposeMemoryFromAi(
  input: Omit<ProposedMemory, "status" | "proposedBy">,
): ProposedMemory {
  return {
    ...input,
    status: "proposed",
    proposedBy: "ai",
  };
}

export function confirmMemory(
  proposed: ProposedMemory,
  authority: DecisionAuthority,
  confirmedAt: IsoDateTime,
): ConfirmedMemory {
  if (authority.actor !== "user") {
    throw new Error("Only the user can confirm memory.");
  }

  assertCanExecuteDecision(authority);

  return {
    id: proposed.id,
    status: "confirmed",
    targetId: proposed.targetId,
    insight: proposed.insight,
    confirmedBy: "user",
    confirmedAt,
    evidence: proposed.evidence,
  };
}
