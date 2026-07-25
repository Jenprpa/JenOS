# CV-01: Simple Dependency as Action + Relationship

## Purpose

Test whether a simple dependency can be represented without a Dependency concept.

## Case

A student has not sent one homework file. The user needs to remind the student.

## Existing Concepts Only

```text
Person: Student
Relationship: User advises/teaches Student
Action: Remind student to send homework file
Document: Homework file
Event: Homework file received
Risk: Delay if file not received
```

## Candidate-Enabled Representation

```text
Dependency:
  target: Homework file
  owner: Student
  blocks: grading this homework
  expected resolution: file received
```

## Comparison

Semantic clarity:

- Existing concepts are enough for simple follow-up.
- Candidate adds clarity but may be overkill.

Information loss:

- Minor. The needed fact can be inferred from Action + Document + Person.

Complexity:

- Candidate increases complexity.

Decision-support value:

- Useful but not required for this simple case.

## Candidate Classification

```text
Dependency: USEFUL BUT DERIVABLE
Dependency Scope: USEFUL BUT DERIVABLE
Closure Decision: UNNECESSARY
Outcome Record: UNNECESSARY
```

