import type { DomainEvent, Project } from "./entities";

export function submissionEventCompletesProject(_event: DomainEvent, _project: Project): false {
  return false;
}

export function externalOutcomeCompletesProject(_event: DomainEvent, _project: Project): false {
  return false;
}
