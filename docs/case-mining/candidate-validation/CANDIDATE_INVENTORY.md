# Candidate Inventory

## Status

```text
Sprint: 0.2 - Candidate Validation Cycle
Status: UNVALIDATED inventory
Rule: No new concept by default.
```

## Validation Rule

> A candidate earns promotion only if removing it loses decision-relevant truth.

Prefer composition of existing concepts over new ontology.

## Candidate: Dependency

Why it emerged:

- Batch 3 and Batch 4 repeatedly needed a way to describe something needed before progress can continue.
- Waiting was often scoped below Project level.

Evidence source:

- CASE-011 Dataset not sent.
- CASE-012 approval pending.
- CASE-015 equipment not ready.
- CASE-016 scoped Dataset dependency.
- CASE-018 multiple simultaneous dependencies.
- CASE-020 review dependency.

Decisions potentially affected:

- OWN-003 State Ownership and Confirmation.
- OWN-005 Decision Rights Model.
- OWN-011 Pause / Stop / Scope Reduction.

Existing concepts that may already cover it:

- Relationship.
- Action.
- Event.
- Decision.
- Resource.
- Document.
- Risk.
- Context.

Decision-support capability it might enable:

- Explain what is blocking progress.
- Identify who controls resolution.
- Separate total waiting from partial blocking.
- Recommend follow-up, parallel work, defer, or reduce scope.

Risk if added unnecessarily:

- Ontology grows around a relation that existing concepts can already express.
- Users may have to manage another object.

Risk if omitted incorrectly:

- JenOS may mark whole Projects as Waiting and hide active work.
- Follow-up ownership and consequence may be lost.

Current status:

```text
UNVALIDATED
```

## Candidate: Dependency Scope

Why it emerged:

- Waiting evidence repeatedly required knowing whether a Project, Action, Decision, Deliverable, or Workstream was affected.

Evidence source:

- CASE-016 Train AI blocked, other work may continue.
- CASE-017 whole Project may be blocked.
- CASE-018 different dependencies affect different workstreams.

Decisions potentially affected:

- OWN-003.
- OWN-011.

Existing concepts that may already cover it:

- Relationship between an unresolved condition and Action / Decision / Deliverable / Project.
- Tags or links.
- Action status.

Decision-support capability it might enable:

- Answer "what can still continue?"
- Avoid false Project-level Waiting.

Risk if added unnecessarily:

- Creates a concept that may only be an attribute of Dependency.

Risk if omitted incorrectly:

- JenOS cannot distinguish partial from total blocking.

Current status:

```text
UNVALIDATED
```

## Candidate: Closure Decision

Why it emerged:

- Completion depends on Project Boundary, Owner Responsibility, and Owner Judgment.
- Batch 4 needed a way to record why a Project is considered closed.

Evidence source:

- CASE-019 responsibility ends at submission.
- CASE-020 responsibility remains after submission.
- CASE-021 external outcome arrives after work ends.

Decisions potentially affected:

- OWN-010 Completion.
- OWN-005 Decision Rights.

Existing concepts that may already cover it:

- Decision entity.
- Project state-change record.
- Log / History.

Decision-support capability it might enable:

- Explain why a Project was closed.
- Record whether closure was intentional and evidence-backed.

Risk if added unnecessarily:

- Duplicates existing Decision entity.
- Creates narrow concept for one decision type.

Risk if omitted incorrectly:

- Closure rationale may disappear into a state label.

Current status:

```text
UNVALIDATED
```

## Candidate: Outcome Record

Why it emerged:

- External outcomes can matter after user work ends.
- Outcome may affect future decisions without determining Project completion.

Evidence source:

- CASE-012 approval outcome.
- CASE-013 acceptance/result.
- CASE-021 competition result after closure.

Decisions potentially affected:

- OWN-010.
- OWN-004 Memory / History / Log.

Existing concepts that may already cover it:

- Event.
- Observation.
- Document.
- Relationship to Project.
- History.

Decision-support capability it might enable:

- Preserve external result without reopening Project.
- Feed future Memory candidates.
- Distinguish process completion from external success.

Risk if added unnecessarily:

- Duplicates Event / Observation.
- Adds reporting object too early.

Risk if omitted incorrectly:

- External result becomes hard to query or may be confused with Project completion.

Current status:

```text
UNVALIDATED
```

