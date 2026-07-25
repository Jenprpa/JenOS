# CV-05: Project Remains Open After Submission

## Purpose

Test whether submission needs separate closure handling when revision remains possible.

## Case

A document is submitted for review. Reviewer feedback is expected, and the user is responsible for revisions.

## Existing Concepts Only

```text
Document: Submitted document
Event: Submission
Relationship: Reviewer
Decision: Await reviewer feedback before closure
Action: Revise after feedback
```

## Candidate-Enabled Representation

```text
Dependency:
  target: Reviewer feedback
  owner: Reviewer
  blocks: Revision decision

Decision:
  target: Project
  purpose: keep open until feedback/revision done
```

## Comparison

Semantic clarity:

- Existing Decision handles closure choice.
- Dependency improves the "why still open" explanation.

Information loss:

- Material for dependency; no material loss for Closure Decision as separate concept.

Complexity:

- Dependency justified; Closure Decision redundant.

Decision-support value:

- High for dependency, medium for closure as ordinary Decision.

## Candidate Classification

```text
Dependency: MEANINGFUL SUPPORTING CONCEPT
Dependency Scope: USEFUL BUT DERIVABLE
Closure Decision: USEFUL BUT DERIVABLE
Outcome Record: UNNECESSARY
```

