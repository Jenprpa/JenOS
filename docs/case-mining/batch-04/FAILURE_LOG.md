# Batch 4 Failure Log

## Scope

```text
Sprint: 0.2 - Domain Discovery through Case Mining
Batch: 04 - Dependency and Closure Evidence
Purpose: Record TENSION / FAIL evidence without revising ontology or state taxonomy.
```

## Entries

### FL-04-001: Scoped Dependency with Parallel Work

```text
Case: CASE-016
Fit: TENSION
Failure Type: Project-level Waiting distorts active work.
Reason: Dataset blocks Train AI, but other work may continue.
Challenged Decisions: OWN-003.
Potential Missing Concepts: Dependency, Blocking Condition, Dependency Scope.
Evidence Needed: Confirm parallel work in a fully documented real project.
Action Now: Record only.
```

### FL-04-002: Total External Block

```text
Case: CASE-017
Fit: PASS WITH TENSION
Failure Type: Whole-Project Waiting can be truthful under strict conditions.
Reason: If approval/access blocks all meaningful work, Project-level Waiting is not distortion.
Challenged Decisions: OWN-003.
Potential Missing Concepts: Meaningful Progress, Total Block.
Evidence Needed: Owner-confirmed total-block examples.
Action Now: Record as disconfirmation of "Waiting is never project-level."
```

### FL-04-003: Multiple Simultaneous Dependencies

```text
Case: CASE-018
Fit: TENSION
Failure Type: Multiple dependencies require scope/owner/control to avoid flattening.
Reason: One Project may have several waits with different owners and consequences.
Challenged Decisions: OWN-003.
Potential Missing Concepts: Dependency, Dependency Owner, Dependency Scope.
Evidence Needed: A real project with multiple active dependencies.
Action Now: Record only.
```

### FL-04-004: Submitted but Revision Expected

```text
Case: CASE-020
Fit: TENSION
Failure Type: Submission is insufficient when owner responsibility continues.
Reason: Review/revision keeps the project active after submission.
Challenged Decisions: OWN-010.
Potential Missing Concepts: Review Outcome, Follow-up Requirement, Closure Decision.
Evidence Needed: Owner-defined boundary and actual revision expectation.
Action Now: Record only.
```

### FL-04-005: External Outcome After Work Ends

```text
Case: CASE-021
Fit: PASS WITH TENSION
Failure Type: Outcome can matter without controlling completion.
Reason: Result announcement may be informational if owner work ended at submission.
Challenged Decisions: OWN-010.
Potential Missing Concepts: Outcome Record, Closure Decision.
Evidence Needed: Whether result handling remains owner responsibility.
Action Now: Record only.
```

## Failure Summary

```text
PASS: 1
PASS WITH TENSION: 2
TENSION: 3
FAIL: 0
```

## Disconfirmation Evidence

- CASE-017 disconfirms the overly broad claim that Waiting is never a valid Project State.
- CASE-019 disconfirms the overly broad claim that Submitted is never enough for completion.
- CASE-021 disconfirms the claim that Outcome Known is always required for completion.

## Evidence Standard Check

Repeated pattern:

- Dependency scope appears in CASE-016, CASE-017, CASE-018, CASE-020, and CASE-021.
- Owner responsibility boundary appears in CASE-019, CASE-020, and CASE-021.

Semantic distortion:

- Project-level Waiting distorts partial-block cases.
- Submitted = Completed distorts revision-expected cases.
- Outcome Known = Completed distorts process-complete cases.

Decision-making consequence:

- Without scoped dependency, JenOS cannot suggest parallel work or targeted follow-up.
- Without closure boundary, JenOS can either close too early or keep completed projects open too long.

Conclusion:

- Clarification is warranted for OWN-003 and OWN-010.
- Amendment is not yet warranted.

