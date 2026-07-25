import type { DomainEntity, EvidenceRef, IsoDateTime } from "./common";
import type { EntityKind } from "../shared/id";
import type { ConfirmedState } from "./state";

export interface Person extends DomainEntity<"person"> {
  readonly displayName: string;
}

export interface Role extends DomainEntity<"role"> {
  readonly name: string;
  readonly holderId?: Person["id"];
}

export interface Area extends DomainEntity<"area"> {
  readonly name: string;
  readonly description?: string;
}

export interface Project extends DomainEntity<"project"> {
  readonly name: string;
  readonly boundary: string;
  readonly ownerId: Person["id"];
  readonly areaId?: Area["id"];
  readonly confirmedState?: ConfirmedState<Project["id"]>;
}

export interface Resource extends DomainEntity<"resource"> {
  readonly name: string;
  readonly description?: string;
}

export interface Document extends DomainEntity<"document"> {
  readonly title: string;
  readonly evidence?: EvidenceRef;
}

export type EventPurpose = "submission" | "acceptance" | "external-outcome" | "meeting" | "other";

export interface DomainEvent extends DomainEntity<"event"> {
  readonly title: string;
  readonly happenedAt: IsoDateTime;
  readonly purpose: EventPurpose;
  readonly evidence?: EvidenceRef;
}

export type DecisionPurpose = "classification" | "state-confirmation" | "closure" | "other";

export interface Decision extends DomainEntity<"decision"> {
  readonly title: string;
  readonly ownerId: Person["id"];
  readonly purpose: DecisionPurpose;
  readonly targetId: string;
  readonly reason: string;
  readonly decidedAt: IsoDateTime;
  readonly evidence: readonly EvidenceRef[];
}

export function isProject(entity: DomainEntity<EntityKind>): entity is Project {
  return entity.kind === "project";
}

export function isArea(entity: DomainEntity<EntityKind>): entity is Area {
  return entity.kind === "area";
}
