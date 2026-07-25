# Domain Evidence Consolidation v0.2

## Status

```text
Sprint: 0.3 - Domain Consolidation
Purpose: Consolidate Sprint 0 principles and Sprint 0.2 evidence.
This document does not replace Domain Model v0.1.
```

## Classification Key

```text
SURVIVED: Original concept/principle remained valid.
CLARIFIED: Original concept remained valid but needs narrower wording.
CHALLENGED: Evidence exposed pressure but not enough for revision.
REJECTED: Evidence argues against adding or keeping a concept as proposed.
DEFERRED: Evidence is insufficient.
CANDIDATE: Evidence supports further consideration, not permanence.
```

## 1. Project Boundary

Original assumption:

- Project is the central unit of meaning and managed work.

Evidence:

- OWN-001 selected bounded responsibility with flexible classification.
- Batch 1 CASE-001 and CASE-005 tested Project vs Action/Note.
- Batch 2 showed persistence alone does not justify Project.
- Batch 4 showed completion depends on project boundary and owner responsibility.

Current conclusion:

- Project survives, but must mean bounded managed change/outcome, not everything.
- A Project emerges when owner accepts managed responsibility for bounded change.

Classification:

```text
CLARIFIED
```

Confidence:

```text
HIGH
```

Affected concept/decision:

- Project.
- OWN-001.
- OWN-010.

Open question:

- How explicit must Definition of Done be before a Project can safely be created?

## 2. Project / Area / Role / Context

Original assumption:

- Project, Area, Role, and Context are distinct.

Evidence:

- OWN-002 defines Person, Project, Area, Role, Resource, Document, Event, Decision as Core Entities and State/Context/etc. as Supporting Concepts.
- Batch 1 CASE-004 showed capacity/context can drive decisions without becoming Project.
- Batch 2 showed reference material can remain Document/Resource.

Current conclusion:

- Distinction survives.
- Area endures; Project evolves and can complete; Role is contextual responsibility; Context influences decision.

Classification:

```text
SURVIVED
```

Confidence:

```text
HIGH
```

Affected concept/decision:

- OWN-002.

Open question:

- Whether recurring bounded support around a person should be Project or a future Case-like pattern remains deferred.

## 3. State Ownership

Original assumption:

- State represents reality, not intention.
- Observed / Suggested / Confirmed State are separate.

Evidence:

- OWN-003.
- Batch 1 CASE-003 and CASE-004.
- Batch 3 and 4 showed AI must not convert dependency evidence into confirmed Project State.

Current conclusion:

- State ownership model survives.
- Waiting examples need clarification so unresolved dependency does not automatically imply whole-Project Waiting.

Classification:

```text
CLARIFIED
```

Confidence:

```text
HIGH
```

Affected concept/decision:

- State.
- OWN-003.

Open question:

- Exact wording for OWN-003 clarification is still pending Owner Review.

## 4. Waiting

Original assumption:

- Waiting is a state/condition where work is waiting for something else.

Evidence:

- Batch 3 CASE-011, CASE-012, CASE-013, CASE-015.
- Batch 4 CASE-016 showed partial dependency.
- Batch 4 CASE-017 showed whole-Project Waiting can be truthful.

Current conclusion:

- Waiting can be whole-Project State only when no meaningful progress remains or owner confirms it.
- More often, waiting points to a scoped Dependency.

Classification:

```text
CLARIFIED
```

Confidence:

```text
HIGH
```

Affected concept/decision:

- State.
- Dependency.
- OWN-003.

Open question:

- How JenOS should display partial waiting without creating a noisy dashboard.

## 5. Dependency

Original assumption:

- Dependency appeared as possible language around Waiting/Blocker.

Evidence:

- Batch 3 and 4 repeatedly required target, owner, scope, control, expected resolution, and consequence.
- Candidate validation showed material decision-support loss without it in complex cases.
- Owner approved Dependency moving from analytical language to Candidate Supporting Concept.

Current conclusion:

- Dependency has earned recommendation for Supporting Concept status.
- It should not be Core Entity yet.

Classification:

```text
CANDIDATE
```

Confidence:

```text
MEDIUM-HIGH
```

Affected concept/decision:

- OWN-003.
- OWN-005.
- OWN-011.

Open question:

- Whether Sprint 0.3 should promote Dependency now or require another owner approval step.

## 6. Completion

Original assumption:

- Completion is human judgment, not event.

Evidence:

- OWN-010.
- Batch 3 CASE-013.
- Batch 4 CASE-019, CASE-020, CASE-021.

Current conclusion:

- OWN-010 survives.
- Submission, acceptance, outcome, and follow-up are evidence/events/outcomes, not universal completion triggers.

Classification:

```text
CLARIFIED
```

Confidence:

```text
HIGH
```

Affected concept/decision:

- Project.
- State.
- Decision.
- OWN-010.

Open question:

- How strongly should JenOS ask for owner responsibility boundary when suggesting completion?

## 7. Closure

Original assumption:

- Closure may need its own concept.

Evidence:

- Batch 4 suggested Closure Decision.
- Candidate validation killed standalone Closure Decision.
- Closure can be represented as Decision(target=Project, purpose=closure).

Current conclusion:

- Closure should be represented through existing Decision, not a new concept.

Classification:

```text
REJECTED as standalone concept
```

Confidence:

```text
HIGH
```

Affected concept/decision:

- Decision.
- OWN-010.

Open question:

- Whether Decision needs a standard `purpose` vocabulary is deferred to technical/domain design.

## 8. External Outcome

Original assumption:

- Outcome may need separate Outcome Record.

Evidence:

- Batch 4 CASE-021.
- Candidate validation collapsed Outcome Record into Event/Observation linked to Project.

Current conclusion:

- External outcome must be recordable, but not as standalone concept.
- Represent as Event/Observation with external source and relation to Project.

Classification:

```text
REJECTED as standalone concept
```

Confidence:

```text
MEDIUM
```

Affected concept/decision:

- Event.
- Observation.
- Memory.
- OWN-010.

Open question:

- Whether outcome classification is a Tag, field, or relation is deferred.

## 9. Memory

Original assumption:

- Memory is curated, not accumulated.

Evidence:

- OWN-004 and OWN-009.
- Batch 1 CASE-002 and CASE-003 cautioned against early Memory.
- Candidate validation CV-07 showed outcome can produce Memory Candidate without reopening Project.

Current conclusion:

- Memory model survives unchanged.
- Memory remains user-confirmed insight for future decisions.

Classification:

```text
SURVIVED
```

Confidence:

```text
HIGH
```

Affected concept/decision:

- Memory.
- Observation.
- Event.
- History.
- OWN-004.
- OWN-009.

Open question:

- Memory extraction timing and privacy defaults remain future work.

## 10. Human Capacity

Original assumption:

- Human Capacity should shape recommendation, not productivity scoring.

Evidence:

- OWN-007 and OWN-008.
- Batch 1 CASE-004.
- Batch 3 CASE-014.

Current conclusion:

- Capacity affects recommendations and trade-offs, not human worth or Project State by itself.

Classification:

```text
SURVIVED
```

Confidence:

```text
HIGH
```

Affected concept/decision:

- Context.
- Commitment.
- Action.
- OWN-007.
- OWN-008.
- OWN-011.

Open question:

- Capacity evidence source: self-report, inference, or both.

## 11. Decision Rights

Original assumption:

- Authority follows accountability.

Evidence:

- OWN-005.
- All closure/completion and state cases require owner confirmation for meaningful state/closure.

Current conclusion:

- Decision rights survive.
- Dependency may need inherited authority rules: AI may suggest, owner confirms decision-relevant meaning, external reality may resolve factual dependency.

Classification:

```text
SURVIVED
```

Confidence:

```text
HIGH
```

Affected concept/decision:

- Decision.
- State.
- Dependency.
- Memory.
- OWN-005.

Open question:

- Trusted external sources remain undefined.

## 12. Pre-project Ambiguity

Original assumption:

- There may be a pre-project class of information.

Evidence:

- Batch 1 CASE-005.
- Batch 2, especially reference-only PDF, disconfirmed broad Capture/Item entity.
- Pre-project clarification says pre-project is not a thing; it is a question asked about an existing thing.

Current conclusion:

- No new Core Entity.
- Use existing concepts with optional review/classification.

Classification:

```text
CLARIFIED
```

Confidence:

```text
MEDIUM-HIGH
```

Affected concept/decision:

- Project.
- Document.
- Observation.
- Event.
- Decision.
- OWN-001.
- OWN-002.

Open question:

- Whether review/classification status belongs in product workflow or domain layer remains deferred.

