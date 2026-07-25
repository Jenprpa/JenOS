import type { EntityId, EntityKind } from "../shared/id";

export type IsoDateTime = string;

export type ActorKind = "user" | "ai" | "system" | "external";

export interface SourceRef {
  readonly kind: ActorKind | "document" | "event" | "observation";
  readonly label: string;
  readonly capturedAt: IsoDateTime;
}

export interface EvidenceRef {
  readonly source: SourceRef;
  readonly summary: string;
}

export type Confidence = "low" | "medium" | "high" | "experimental";

export interface DomainEntity<TKind extends EntityKind> {
  readonly id: EntityId<TKind>;
  readonly kind: TKind;
}
