# Batch 3 Failure Log

## Scope

```text
Sprint: 0.2 - Domain Discovery through Case Mining
Batch: 03 - State Under Pressure
Purpose: Record TENSION / FAIL evidence without revising ontology or state taxonomy.
```

## Entries

### FL-03-001: Waiting for Dataset

```text
Case: CASE-011
Fit: TENSION
Failure Type: Project-level Waiting may be too coarse.
Reason: Dataset dependency is unresolved, but evidence does not prove the entire parent Project is waiting.
Challenged Decisions: OWN-003, OWN-010, OWN-011.
Potential Missing Concepts: Dependency, Blocking Condition, Dependency Scope.
Evidence Needed: More cases where one dependency blocks one action while other project work continues.
Action Now: Record only. Do not revise state taxonomy.
```

### FL-03-002: Waiting for Approval

```text
Case: CASE-012
Fit: TENSION
Failure Type: External Decision dependency is not fully represented by Project State.
Reason: Approval is owned by an external authority. Submission, approval, and implementation readiness are distinct.
Challenged Decisions: OWN-003, OWN-005, OWN-010.
Potential Missing Concepts: External Decision, Approval Dependency, Response Due Date.
Evidence Needed: Real approval cases with submitted/approved/revised outcomes and remaining useful work.
Action Now: Record only. Do not create new entity.
```

### FL-03-003: Submitted but Not Closed

```text
Case: CASE-013
Fit: TENSION
Failure Type: Completion checkpoints are distinct but not yet modeled.
Reason: Work done, submitted, accepted, outcome known, follow-up done, and owner-closed are different realities.
Challenged Decisions: OWN-003, OWN-010.
Potential Missing Concepts: Submission Event, Outcome Record, Closure Decision, Definition of Done Evidence.
Evidence Needed: More submitted-but-not-closed cases across different domains.
Action Now: Record only. Do not define permanent states.
```

### FL-03-004: Low Capacity with Deadline

```text
Case: CASE-014
Fit: PASS WITH TENSION
Failure Type: Recommendation depends on capacity evidence and commitment flexibility.
Reason: OWN-007 and OWN-008 survive, but the evidence source for capacity is unknown.
Challenged Decisions: OWN-007, OWN-008, OWN-011.
Potential Missing Concepts: Capacity Evidence Type, Commitment Flexibility, Minimum Viable Action.
Evidence Needed: Real examples with self-report, deadline, consequence, and chosen mitigation.
Action Now: Record only. Do not invent health logic.
```

### FL-03-005: Equipment Not Ready

```text
Case: CASE-015
Fit: TENSION
Failure Type: Resource readiness creates scoped blocking and ambiguous continue options.
Reason: Resource, Risk, and Decision explain pieces, but not the exact blocking relationship or response choice.
Challenged Decisions: OWN-003, OWN-011, OWN-010.
Potential Missing Concepts: Dependency, Blocking Condition, Readiness, Alternative Path, Scope Option.
Evidence Needed: Cases with equipment owner, deadline, alternatives, and owner decision.
Action Now: Record only. Do not revise ontology.
```

## Failure Summary

```text
PASS: 0
PASS WITH TENSION: 1
TENSION: 4
FAIL: 0
```

## Evidence Standard Check

Repeated pattern:

- Waiting repeatedly behaves as a relationship to a dependency, not always as whole-Project State.
- Submission/approval/acceptance/outcome/closure repeatedly appear as distinct realities.

Semantic distortion:

- Marking the whole Project as Waiting may hide useful work.
- Marking Submitted as Completed may close the Project too early.

Decision-making consequence:

- Without dependency scope, JenOS may recommend doing nothing when partial progress is still possible.
- Without completion checkpoints, JenOS may stop surfacing necessary follow-up.

Conclusion:

- Evidence is strong enough to record pressure.
- Evidence is not yet sufficient to revise OWN decisions or define state taxonomy.

