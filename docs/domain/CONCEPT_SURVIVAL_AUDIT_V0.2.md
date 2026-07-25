# Concept Survival Audit v0.2

## Status

```text
Sprint: 0.3 - Domain Consolidation
Purpose: Audit concepts against Sprint 0.2 evidence.
No concept is removed or promoted by this document alone.
```

## Classification Key

```text
KEEP
KEEP WITH CLARIFICATION
DEMOTE
MERGE
DERIVE
CANDIDATE FOR REMOVAL
INSUFFICIENT EVIDENCE
```

## Core Entities

| Concept | Real case use | Meaningful truth preserved | Semantics | Category | Decision support | Classification |
|---|---|---|---|---|---|---|
| Person | Strong in student/support/dependency cases | Yes | Clear: human, never Project | Core | High | KEEP |
| Project | Strong across all batches | Yes | Needs bounded responsibility clarification | Core | High | KEEP WITH CLARIFICATION |
| Area | Used to hold long-lived responsibility | Yes | Clear but needs more cases | Core | Medium | KEEP |
| Role | Used for owner/teacher/student/approver positions | Yes | Clear: context-specific hat | Core | Medium | KEEP |
| Resource | Used for PDF, Dataset, equipment | Yes | Overlaps Document | Core | Medium | KEEP WITH CLARIFICATION |
| Document | Strong in PDF/submission/report cases | Yes | Clear subtype/sibling of Resource needs clarity | Core | High | KEEP WITH CLARIFICATION |
| Event | Strong in submission, upload, outcome, timeline | Yes | Clear: happened at time | Core | High | KEEP |
| Decision | Strong in closure/classification/approval/authority | Yes | Clear; should carry purpose/target/evidence | Core | High | KEEP WITH CLARIFICATION |

## Supporting Concepts

| Concept | Real case use | Meaningful truth preserved | Semantics | Category | Decision support | Classification |
|---|---|---|---|---|---|---|
| State | Strong | Yes | Needs Waiting clarification | Supporting | High | KEEP WITH CLARIFICATION |
| Context | Strong in capacity/pre-project | Yes | Lens/influence, not object | Supporting | High | KEEP |
| Memory | Strong in philosophy, candidate outcome cases | Yes | Curated insight | Supporting | High | KEEP |
| Action | Strong in follow-up/parallel work | Yes | Movement within Project | Supporting | High | KEEP |
| Observation | Strong in pre-project/outcome/capacity | Yes | Raw observed fact | Supporting | High | KEEP |
| Risk | Strong in equipment/capacity/deadline | Yes | Possible harm | Supporting | High | KEEP |
| Commitment | Strong in capacity/deadline cases | Yes | Promise/obligation | Supporting | Medium | KEEP WITH CLARIFICATION |
| Relationship | Strong but overloaded with Dependency pressure | Yes | Link among people/concepts | Supporting | Medium | KEEP WITH CLARIFICATION |
| Tag | Sparse direct evidence | Some | Useful classification, not identity | Supporting | Low | INSUFFICIENT EVIDENCE |

## Candidate: Dependency

Status entering Sprint:

```text
Candidate Supporting Concept
```

Evidence:

- Repeated cross-domain use.
- Existing-concept substitution only partial.
- Material decision-support loss if omitted.
- Owner approved candidate status for Sprint 0.3 review.

Evaluation:

| Test | Result |
|---|---|
| Cross-domain evidence | YES |
| Repeated occurrence | YES |
| Decision-relevant truth | YES |
| Existing concept substitution failure | PARTIAL FAILURE |
| Need for persistence | LIGHTWEIGHT YES |
| Need for identity | MODERATE YES |
| Lifecycle | LIGHTWEIGHT |
| Complexity cost | ACCEPTABLE IF SUPPORTING, too high if Core |

Recommendation:

```text
SUPPORTING CONCEPT
```

Important:

- This audit recommends promotion, but does not promote it.
- Promotion requires consolidation gate/owner review.

## Concepts Not Surviving as Standalone

Dependency Scope:

```text
DERIVE
```

Reason:

- It is a relation/attribute of Dependency and affected concept.

Closure Decision:

```text
DERIVE
```

Reason:

- It is Decision(target=Project, purpose=closure).

Outcome Record:

```text
DERIVE
```

Reason:

- It is Event/Observation linked to Project and classified as external outcome.

Blocking Condition:

```text
DERIVE / ANALYTICAL LANGUAGE
```

Reason:

- It is the effect of Dependency on a scope.

Pre-project:

```text
ANALYTICAL / WORKFLOW LANGUAGE
```

Reason:

- It is a question about an existing thing, not a thing.

## Audit Conclusion

No Core Entity needs removal now.

Most v0.1 concepts survive, but several need clarification:

- Project boundary.
- State vs Waiting/Dependency.
- Document vs Resource.
- Decision as carrier for closure.
- Relationship vs Dependency.

Dependency is the only new concept with enough evidence to recommend Supporting Concept status in v0.2.

