# OWN-003 and OWN-010 Clarifications v0.2

Status: Accepted Clarification

Sprint: 0.3 Domain Consolidation

Purpose:

Record accepted clarifications for OWN-003 and OWN-010 without amending the original Owner Decisions.

These clarifications are binding for Domain Model v0.2 and Sprint 1 Technical Foundation unless implementation evidence contradicts them.

## Clarification Method

This document does not:

- change the status of OWN-003,
- change the status of OWN-010,
- rewrite the Owner Decision Register,
- introduce a permanent State enum,
- introduce new completion states.

It adds interpretation based on Sprint 0.2 evidence and Sprint 0.3 Owner Review.

## OWN-003: State Ownership and Confirmation

Original principle:

```text
State represents reality, not intention.
```

Accepted clarification:

```text
Waiting may describe a Confirmed Project State only when no meaningful progress remains because unresolved conditions prevent progress across the relevant Project boundary.
```

Scoped waiting/blocking:

```text
Scoped waiting/blocking should be represented through Dependency rather than automatically changing whole-Project State.
```

Implications:

- A blocked Action does not automatically make the Project Waiting.
- A pending Decision does not automatically make the Project Waiting.
- A delayed Deliverable does not automatically make the Project Waiting.
- Project-level Waiting requires scope evidence.
- AI may suggest Waiting but must not own Confirmed State.

Examples:

```text
Action waits for dataset
-> represent Dependency at Action or Deliverable scope
-> Project may remain In Progress if other meaningful work can continue
```

```text
All meaningful Project progress depends on external approval
-> Project-level Waiting may be suggested
-> Owner confirms if this reflects reality
```

Technical guidance:

- Store or represent Dependency separately from Project State.
- Derive waiting summaries from Dependency and affected scope.
- Do not create a permanent State enum during Sprint 1 unless evidence requires it.

## OWN-010: Completion

Original principle:

```text
Completion is a human judgment, not an event.
```

Accepted clarification:

```text
Submission, acceptance, external outcome, and follow-up may provide evidence relevant to completion, but none universally determines completion.
```

Completion depends on:

- Project boundary.
- Owner responsibility.
- Available evidence.
- Owner judgment.

Implications:

- Submitted is evidence, not automatic completion.
- Accepted is evidence, not automatic completion.
- Outcome known is evidence, not automatic completion.
- Follow-up done is evidence, not automatic completion.
- A Project may be Completed even if the external outcome is not success.
- A Project may remain open after submission if responsibility remains.

Derived representation:

```text
Closure Decision = Decision(target=Project, purpose=closure)
```

```text
Outcome Record = Event/Observation linked to Project
```

Technical guidance:

- Do not create separate Closure Decision entity.
- Do not create separate Outcome Record entity.
- Keep external outcomes separate from process completion.
- Record evidence, then let the Owner confirm closure when meaning-level responsibility ends.

## Review Trigger

Review these clarifications after implementation evidence shows repeated mismatch between:

- derived waiting summaries and user judgment,
- dependency scope and actual Project behavior,
- submitted/accepted/outcome events and Owner closure decisions.

