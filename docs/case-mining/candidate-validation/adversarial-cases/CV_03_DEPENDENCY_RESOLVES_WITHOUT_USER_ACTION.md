# CV-03: Dependency Resolves Without User Action

## Purpose

Test whether dependency must persist independently when external reality resolves it.

## Case

The user is waiting for an agency document. The agency uploads it automatically overnight. The user did not act.

## Existing Concepts Only

```text
Organization: Agency
Document: Agency document
Observation: Document uploaded
Event: Upload occurred
Action: Review document
```

## Candidate-Enabled Representation

```text
Dependency:
  target: Agency document
  owner: Agency
  blocks: Submit final report
  expected resolution: document uploaded
  resolved by: upload event
```

## Comparison

Semantic clarity:

- Existing concepts record the upload.
- Candidate explains why the upload matters and what it unblocks.

Information loss:

- Material if the system needs to explain "now this work is ready."

Complexity:

- Moderate.

Decision-support value:

- High for morning brief: "agency document arrived; final report can proceed."

## Candidate Classification

```text
Dependency: MEANINGFUL SUPPORTING CONCEPT
Dependency Scope: USEFUL BUT DERIVABLE
Closure Decision: UNNECESSARY
Outcome Record: UNNECESSARY
```

