export interface HumanCapacitySnapshot {
  readonly timeAvailableMinutes?: number;
  readonly energy?: "low" | "medium" | "high";
  readonly attention?: "fragmented" | "steady" | "deep";
  readonly cognitiveLoad?: "low" | "medium" | "high";
  readonly healthContext?: string;
}

export interface CapacityDecisionInput {
  readonly snapshot: HumanCapacitySnapshot;
  readonly note: string;
}

export function createCapacityDecisionInput(
  snapshot: HumanCapacitySnapshot,
): CapacityDecisionInput {
  return {
    snapshot,
    note: "Human Capacity may inform recommendations but must not become a productivity score.",
  };
}

export function capacityToProductivityScore(_snapshot: HumanCapacitySnapshot): never {
  throw new Error("Human Capacity must not be converted into a productivity score automatically.");
}
