# Core Workflow Scenarios v1

Status: Sprint 2.0 definition

Purpose:

Select five real-world scenario archetypes from Sprint 0.2 evidence to validate the first JenOS workflow.

This document does not design screens or implement features.

## Scenario 1: Final Exam Work Becomes a Project

Evidence source:

- CASE-001: Final exam preparation.

### Reality

A teacher needs to prepare a final exam. The repository evidence suggests a deliverable, likely deadline, possible review, and eventual submission.

Known:

- The situation is real-life teacher work.
- A document/deliverable is likely involved.
- It may require multiple decisions.

Unknown:

- Course.
- Deadline.
- Reviewer or approver.
- Definition of Done.

### Capture

JenOS should initially preserve:

- title or short description,
- source time,
- why it matters if known,
- unknown deadline if not yet known.

Capture should not require full Project setup.

### Interpretation

The owner needs to understand whether this is:

- a one-step Action,
- a Document to produce,
- or a bounded Project.

### Project Decision

Likely Project, but owner-confirmed.

### Why It Deserves Project Responsibility

It deserves Project responsibility if it includes:

- boundary,
- deliverable,
- deadline,
- multiple decisions,
- review/submission,
- meaningful progress state.

### Current Reality

Current reality is mostly unknown from existing evidence.

The first system truth should be:

```text
Captured, not yet classified.
```

### Movement

Possible movement:

- define course/scope,
- identify deadline,
- draft exam structure,
- find required materials,
- decide if this is a Project.

### Dependency

Unknown. Possible dependencies:

- review by another teacher,
- approval,
- template,
- curriculum requirements.

### Completion Boundary

Completion depends on owner responsibility:

- If responsibility ends at submission, submission may support completion.
- If revision/approval remains, submission is only evidence.

## Scenario 2: Saved PDF Remains Captured Information

Evidence source:

- CASE-007: Reference-only PDF.

### Reality

A PDF is saved for possible later reading.

### Capture

JenOS should preserve:

- document title or file reference,
- source/time if available,
- optional note about why it was saved.

### Interpretation

The owner needs to know this is reference material, not responsibility.

### Project Decision

Not Project.

### Current Reality

The PDF exists as Document/Resource.

### Movement

Possible movement:

- read later,
- link to an existing Project,
- delete/archive,
- ignore.

No movement is required unless the owner chooses.

### Dependency

None.

### Completion Boundary

No Project completion boundary exists.

If later used to create a lesson/report/project, a new owner decision can create a Project.

## Scenario 3: Final Exam Has Obvious Next Movement

Evidence source:

- CASE-001.

### Reality

The exam work likely needs concrete progress.

### Capture

Capture can be minimal:

- "Prepare final exam",
- known deadline if available,
- course if known.

### Interpretation

Owner needs to identify the next useful movement, not fill every ontology field.

### Project Decision

Project if owner confirms boundary.

### Current Reality

Unknown until owner records whether planning/drafting/review has started.

### Movement

Likely next movement:

- define exam scope,
- draft first version,
- gather blueprint/materials.

This is Action language, but JenOS should present it as movement, not task-center obligation.

### Dependency

Unknown.

### Completion Boundary

Owner decides when exam responsibility is ended.

## Scenario 4: Dataset Dependency Blocks One Path but Project Can Continue

Evidence sources:

- CASE-011: Waiting for student Dataset.
- CASE-016: Scoped Dependency with parallel work possible.

### Reality

A Dataset is missing. Training AI or another later activity cannot proceed, but other project work may continue.

### Capture

JenOS should preserve:

- what is missing,
- who controls it,
- what is affected,
- what can still continue if known.

### Interpretation

The owner needs to understand that the Project may not be fully Waiting.

### Project Decision

The parent Project likely already exists or should be created only if owner confirms bounded responsibility.

The follow-up itself is likely an Action, not a Project.

### Current Reality

Current reality:

```text
Dependency unresolved.
Dataset-dependent movement blocked.
Whole Project Waiting unknown or false if other work can continue.
```

### Movement

Possible movement:

- follow up with student team,
- continue documentation,
- prepare training plan,
- revise scope if Dataset remains unavailable.

### Dependency

Dependency:

- needed: Dataset,
- controller: student team/person,
- affected target: Train AI or experimental workstream,
- consequence: delay to training/testing.

### Completion Boundary

Dataset received does not complete the Project.

Completion depends on the parent Project boundary and owner closure decision.

## Scenario 5: Submission and Completion Boundary Matter

Evidence sources:

- CASE-019: Submitted and responsibility ends.
- CASE-020: Submitted but revision remains possible.
- CASE-021: External outcome after work ends.

### Reality

A deliverable may be submitted. In one case, responsibility ends at submission. In another, revision may remain. An external outcome may arrive later.

### Capture

JenOS should preserve:

- submission event,
- evidence/source,
- whether follow-up is expected,
- owner closure decision if made.

### Interpretation

The owner needs to distinguish:

- submitted,
- accepted,
- outcome known,
- responsibility ended,
- owner closed.

### Project Decision

If already a Project, closure is owner decision.

If not yet a Project, submission alone does not force Project creation.

### Current Reality

Current reality depends on responsibility boundary.

### Movement

Possible movement:

- wait for review,
- revise if feedback arrives,
- close if responsibility ended,
- record external outcome as history only.

### Dependency

Possible dependency:

- reviewer feedback,
- approval,
- external result.

Dependency may be informational only or blocking depending on boundary.

### Completion Boundary

Completion requires owner judgment:

```text
Project boundary + owner responsibility + available evidence + owner judgment.
```

