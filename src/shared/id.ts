export type EntityKind =
  | "person"
  | "project"
  | "area"
  | "role"
  | "resource"
  | "document"
  | "event"
  | "decision"
  | "memory"
  | "dependency";

export type EntityId<TKind extends EntityKind = EntityKind> = string & {
  readonly entityKind: TKind;
};

export function entityId<TKind extends EntityKind>(kind: TKind, value: string): EntityId<TKind> {
  if (value.trim().length === 0) {
    throw new Error("Entity id cannot be empty.");
  }

  return `${kind}:${value}` as EntityId<TKind>;
}
