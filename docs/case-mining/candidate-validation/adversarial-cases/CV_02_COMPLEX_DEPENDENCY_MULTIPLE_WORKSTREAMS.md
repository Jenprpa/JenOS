# CV-02: Complex Dependency with Multiple Workstreams

## Purpose

Test whether existing concepts become too scattered when several dependencies affect different workstreams.

## Case

A student project has three unresolved inputs: Dataset from students, equipment readiness from school, and approval from an administrator. Documentation can continue while training and testing are blocked.

## Existing Concepts Only

```text
Person/Organization: Students, school, administrator
Resource: Dataset, equipment
Decision: Approval
Action: Follow up with each owner
Risk: Deadline risk
Event: Dataset received / equipment ready / approval granted
```

## Candidate-Enabled Representation

```text
Dependency A:
  target: Dataset
  owner: Students
  blocks: Train AI

Dependency B:
  target: Equipment readiness
  owner: School
  blocks: Testing prototype

Dependency C:
  target: Approval
  owner: Administrator
  blocks: Implementation

Unblocked:
  documentation
  presentation preparation
```

## Comparison

Semantic clarity:

- Existing-only representation spreads blocking truth across unrelated concepts.
- Candidate representation answers "what is blocking what?" directly.

Information loss:

- Material without dependency-like structure.

Complexity:

- Candidate adds complexity but reduces reasoning burden.

Decision-support value:

- High. It enables parallel-work recommendation and targeted follow-up.

## Candidate Classification

```text
Dependency: MEANINGFUL SUPPORTING CONCEPT
Dependency Scope: USEFUL BUT DERIVABLE
Closure Decision: UNNECESSARY
Outcome Record: UNNECESSARY
```

