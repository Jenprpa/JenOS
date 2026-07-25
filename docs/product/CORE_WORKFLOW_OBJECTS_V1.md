# Core Workflow Objects v1

Status: Sprint 2.0 definition

Purpose:

Determine which Domain Model concepts are actually needed for the first workflow slice.

This document does not add new domain concepts.

## Classification Summary

| Concept | Classification | Reason |
|---|---|---|
| Capture representation | REQUIRED NOW | Workflow needs a way to preserve raw situations before classification. Not a new Core Entity. |
| Project | REQUIRED NOW | First slice tests Project emergence and workspace. |
| Action | REQUIRED NOW | Needed to express movement without task-centered UI. |
| State | REQUIRED NOW | Current reality needs Observed/Suggested/Confirmed separation. |
| Dependency | REQUIRED NOW | Scoped blocking is central evidence from Sprint 0.2. |
| Observation | REQUIRED NOW | Capture and evidence need source-aware facts. |
| Decision | REQUIRED NOW | Project creation and closure are owner decisions. |
| Event | REQUIRED NOW | Submission, receipt, and outcome evidence are events. |
| Context | OPTIONAL NOW | Useful for deadline/capacity, but not required in every capture. |
| Person | OPTIONAL NOW | Needed when another person controls dependency or participates. |
| Relationship | OPTIONAL NOW | Useful to link person/resource/project, but can remain lightweight. |
| Resource | OPTIONAL NOW | Needed for PDF/Dataset/material cases. |
| Document | OPTIONAL NOW | Needed for PDF/exam/report, but not every capture. |
| Area | DEFER | Useful later for organization; not required for first workflow. |
| Role | DEFER | Useful later; not required for first workflow. |
| Memory | DEFER | Do not create Memory UI in Sprint 2 first slice. |
| Risk | OPTIONAL NOW | Useful if consequence is explicit; avoid forcing risk entry. |
| Commitment | OPTIONAL NOW | Useful if deadline/promise is explicit; avoid forcing it. |
| Tag | DEFER | Low evidence and not needed for first workflow. |

## Capture Representation

Classification:

```text
REQUIRED NOW
```

Meaning:

Capture representation is a technical/product representation of preserved input.

It is not a new Core Entity unless later evidence proves it needs independent domain identity.

Required minimum:

- raw text/title,
- created time,
- source/evidence,
- review status or classification status.

Allowed classifications:

- actionable,
- reference/information,
- unresolved/unclear.

## Project

Classification:

```text
REQUIRED NOW
```

Minimum required:

- name,
- boundary,
- source capture/evidence,
- owner decision.

Avoid:

- large setup form,
- percentage complete,
- forced Area/Role/Resource.

## Action

Classification:

```text
REQUIRED NOW
```

Use as:

- movement the owner can take,
- follow-up,
- draft/review/submit step.

Do not make Action the center of the product.

## State

Classification:

```text
REQUIRED NOW
```

Use:

- Observed,
- Suggested,
- Confirmed.

Do not create permanent business State enum.

## Dependency

Classification:

```text
REQUIRED NOW
```

Use only minimal validated semantics:

- what is needed,
- who/what controls it,
- affected target,
- what can continue,
- resolution evidence,
- consequence.

Do not create lifecycle enum in Sprint 2.0.

## Decision

Classification:

```text
REQUIRED NOW
```

Required for:

- creating Project,
- leaving capture unresolved,
- closing Project,
- confirming meaningful State.

## Derived/Not Standalone

Do not create standalone concepts for:

- Project Candidate,
- Pre-project,
- NextAction,
- Task,
- Queue,
- Priority,
- Blocking Condition,
- Dependency Scope,
- Closure Decision,
- Outcome Record.

Represent these through existing concepts and workflow state.

