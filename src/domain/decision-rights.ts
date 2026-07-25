import type { ActorKind } from "./common";

export type AuthorityLevel = "inform" | "recommend" | "require-confirmation" | "user-only";

export interface DecisionAuthority {
  readonly level: AuthorityLevel;
  readonly actor: ActorKind;
}

export function canExecuteDecision(authority: DecisionAuthority): boolean {
  if (authority.level === "user-only") {
    return authority.actor === "user";
  }

  if (authority.level === "require-confirmation") {
    return authority.actor === "user" || authority.actor === "system";
  }

  return true;
}

export function assertCanExecuteDecision(authority: DecisionAuthority): void {
  if (!canExecuteDecision(authority)) {
    throw new Error(`Actor ${authority.actor} cannot execute ${authority.level} decision.`);
  }
}
