# Pre-Project Clarification Pass v0.1

## Status

Clarification only.

This document is not an Owner Decision.

It does not revise OWN-001, OWN-002, the Domain Model, or the ontology.

It records the lightest interpretation supported by Batch 1 and Batch 2 evidence.

## Gate Result Being Clarified

```text
Recommendation: CLARIFY EXISTING CONCEPT
Ontology revision: NO
New Core Entity: NO
New Supporting Concept: NOT YET
```

## Principle

Do not create a new thing when an existing thing can tell the truth cleanly.

The PDF case is the controlling negative evidence:

```text
เก็บ PDF ไว้อ่านทีหลัง
```

This is cleanly represented as:

```text
Document + Resource
```

It does not need Capture, Note, Item, Pre-Project, or Project.

## 1. What Can Persist Without Becoming Project?

Information may persist without becoming Project when it is real enough to keep but not yet owned as managed change.

Examples from Batch 2:

- a PDF saved for later reading
- an idea that may be useful later
- an incoming request not yet accepted
- repeated observations that may become a concern
- conditional future work that depends on a trigger

Use existing concepts first:

```text
PDF or saved file -> Document / Resource

Interesting idea -> Document or Observation

Incoming request -> Event + Decision

Repeated pattern -> Observation + Risk + Area

Conditional opportunity -> Resource / Context + future Decision
```

Persistence alone does not justify Project.

Persistence alone also does not justify a new Core Entity.

## 2. What Triggers Project Formation?

Something becomes a Project only when the owner accepts or confirms managed responsibility for bounded change.

Useful triggers:

- the user accepts responsibility
- there is an intended outcome
- the work has a boundary
- repeated decisions or follow-up are needed
- progress/state becomes meaningful
- a deadline or external commitment creates management need
- a trigger condition occurs and the user chooses to act

Examples:

```text
PDF saved
  -> not Project

User decides to use the PDF to build a lesson
  -> possible Project
```

```text
Request received
  -> Event + pending Decision

User accepts responsibility for a bounded result
  -> possible Project
```

```text
Students repeatedly submit late
  -> Observation + Risk

User decides to run a bounded intervention
  -> possible Project
```

## 3. What Does Not Need Its Own Lifecycle?

The following do not need their own lifecycle yet:

- every saved file
- every idea
- every observation
- every request
- every future possibility
- every piece of reference material

They may need:

- source
- timestamp
- link to Area/Person/Project
- optional review note
- optional classification suggestion

But they do not need Project-like lifecycle.

They should not automatically become:

- Project
- Core Entity
- Memory
- Commitment
- Task

## Lightweight Interpretation

For now, the safest interpretation is:

```text
Pre-project is not a thing.

It is a question asked about an existing thing.
```

The question is:

```text
Does this now require managed change?
```

If yes, JenOS may suggest Project creation and ask for confirmation.

If no, the information remains in its existing concept.

## Decision Rights

AI may:

- identify which Project criteria are present
- identify which criteria are missing
- suggest that something may be emerging
- explain why something is not yet a Project

AI must not:

- convert an item into Project automatically
- treat persistence as commitment
- create Memory from early information without confirmation
- invent responsibility where the user has not accepted it

## What This Clarification Rejects

This pass rejects:

- a universal Capture entity
- a broad Item entity
- treating every Note as a Core Entity
- treating Pre-Project as a required lifecycle stage
- making saved reference material pass through Project-like review

## What Remains Open

The following may be revisited after more cases:

- whether "Project Candidate" is useful as a lightweight label
- whether "Review Status" belongs in product workflow
- whether "Incoming Request" needs a more explicit pattern
- whether "Emerging Concern" needs repeated case support
- whether "Trigger" should become a named concept

## Next Stress-Test Target

Do not continue looping on pre-project unless reality disagrees again.

Next batches should stress-test:

- State
- Waiting
- External Dependency
- Completion
- Human Capacity

