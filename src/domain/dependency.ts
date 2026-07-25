import type { EvidenceRef } from "./common";
import type { DomainEntity } from "./common";
import type { EntityId } from "../shared/id";

export type DependencyController =
  "user" | "person" | "organization" | "system" | "external-reality";

export type DependencyTargetKind = "project" | "action" | "decision" | "deliverable" | "workstream";

export interface DependencyTarget {
  readonly kind: DependencyTargetKind;
  readonly id: string;
}

export interface Dependency extends DomainEntity<"dependency"> {
  readonly needed: string;
  readonly affectedTarget: DependencyTarget;
  readonly controlledBy: DependencyController;
  readonly consequenceIfUnresolved: string;
  readonly resolutionEvidence?: EvidenceRef;
}

export interface BlockingEffect {
  readonly target: DependencyTarget;
  readonly blocksWholeProject: boolean;
  readonly reason: string;
}

export function createDependency(
  input: Omit<Dependency, "kind"> & { id: EntityId<"dependency"> },
): Dependency {
  return {
    ...input,
    kind: "dependency",
  };
}

export function deriveBlockingEffect(dependency: Dependency): BlockingEffect {
  return {
    target: dependency.affectedTarget,
    blocksWholeProject: dependency.affectedTarget.kind === "project",
    reason: dependency.consequenceIfUnresolved,
  };
}

export function dependencyImpliesWholeProjectWaiting(dependency: Dependency): boolean {
  return dependency.affectedTarget.kind === "project";
}
