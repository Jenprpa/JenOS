# CASE-011: Waiting for Student Dataset

## Case Header

```text
Case ID: CASE-011
Case Name: Follow up project team that has not sent Dataset
Batch: 03 - State Under Pressure
Source: Case Mining Backlog v0.1 item 22; Batch 1 CASE-003
Coverage Role: CASE A - Waiting on another person
```

## Reality

Facts:

- A project team has not sent a Dataset.
- The user may need to follow up.
- The Dataset is needed before at least one later activity can proceed.
- Batch 1 already treated this as a Waiting / external dependency pressure case.

Interpretations:

- The parent student project may still be active even while the Dataset-dependent work is waiting.
- The waiting condition may attach to a Dataset, Action, Decision, or Deliverable rather than the whole Project.

Unknowns:

- Parent Project name.
- Who owns the Dataset.
- Whether other parts of the parent Project can continue.
- Deadline and consequence of late Dataset.
- Whether Dataset is a Document, Resource, Deliverable, Dependency, or several of these.

External constraints:

- Resolution depends on another person or team.
- User control is partial: follow up, clarify, remind, adjust plan.

## Core Entities

Person:

- User.
- Student project team.

Role:

- Teacher / advisor.
- Student team as dependency owner.

Area:

- Student Projects / Research Advising.

Project:

- Parent project: UNKNOWN.
- This follow-up may be an Action inside the parent Project, not necessarily a Project.

Resource:

- Dataset as needed material for later work.

Document:

- Dataset may be a file or collection of files, but evidence is insufficient.

Event:

- Dataset not received yet.
- Potential follow-up message or meeting.

Decision:

- Whether to follow up now.
- Whether to adjust plan if Dataset remains unavailable.

## State Analysis

Observed State:

- Dataset is not yet received.
- A dependency is unresolved.

Suggested State:

- Suggested Project State should not automatically be Waiting.
- Suggested dependency condition: waiting for Dataset from student team.
- Suggested Action condition: follow-up needed.

Confirmed State:

- UNKNOWN. Owner has not confirmed whether the parent Project is Waiting, In Progress, or another state.

Evidence:

- Only the Dataset dependency is evidenced.
- No evidence that all useful work is blocked.

Who is allowed to change it:

- System may observe receipt or non-receipt if connected to source.
- AI may suggest that a dependency is unresolved.
- Owner confirms meaningful Project State.
- Student team controls delivery of Dataset.

## Waiting Analysis

Is Waiting actually a Project State?

- Not clearly.

Or a relationship to an external dependency?

- Yes, strongly indicated.

What exactly is being waited for?

- Dataset.

Who controls resolution?

- Student team controls delivery.
- User controls follow-up and mitigation.

Can useful work continue while waiting?

- UNKNOWN, but likely possible for some parts such as planning, documentation, or reminders.

Does waiting affect the entire Project or only one Action / Decision / Deliverable?

- Evidence supports only the Dataset-dependent part.
- Project-level Waiting would risk semantic distortion unless all meaningful work is blocked.

## External Dependency Analysis

Dependency type:

- Human-delivered artifact / data dependency.

Dependency owner:

- Student team.

User control:

- Partial.

Expected event:

- Dataset sent / uploaded / confirmed.

Consequence if dependency does not resolve:

- Later activities such as Train AI may be delayed.

Does dependency deserve identity of its own?

- Candidate: yes, because it has owner, expected event, scope, consequence, and can block some work.

Do existing concepts represent it cleanly?

- Partially. Resource + Document + Event + Action can represent pieces.
- The blocking relationship itself remains under-specified.

## Completion Analysis

Work done:

- Follow-up may or may not be done.

Deliverable submitted:

- Dataset not submitted.

Deliverable accepted:

- Not applicable yet.

External outcome known:

- Not applicable yet.

Follow-up completed:

- UNKNOWN.

Project closed by owner:

- No evidence.

Distinct realities:

- Dataset submitted is distinct from Dataset accepted/usable.
- Dataset dependency resolved is distinct from parent Project completed.

OWN-010 test:

- Supports OWN-010. No event here should auto-complete or close the Project.

## Human Capacity Analysis

Time:

- UNKNOWN.

Energy:

- UNKNOWN.

Attention:

- Follow-up consumes attention, but no concrete capacity evidence.

Cognitive Load:

- Could increase due to tracking another person's delivery, but evidence is insufficient.

Emotional Load:

- UNKNOWN.

Fact / Self-reported / Inference / Unknown:

- Fact: Dataset not received.
- Inference: dependency may delay later work.
- Unknown: capacity impact.

## Decision Rights

User authority:

- Confirm Project State.
- Decide whether to follow up, adjust plan, reduce scope, or proceed with alternatives.

AI authority:

- Inform that Dataset is unresolved.
- Explain what is blocked.
- Recommend follow-up if evidence supports urgency.

System authority:

- Observe upload/receipt if source exists.

External reality:

- Dataset is either received or not received.

Confirmation required:

- Any Project State change.
- Any escalation to students/parents/administration.

Explanation required:

- Any recommendation to change plan because of dependency.

## Pause / Reduce / Delegate / Defer / Stop

Available options:

- Defer Dataset-dependent work.
- Delegate data collection follow-up to student team leader if appropriate.
- Reduce scope if Dataset remains incomplete.
- Continue other work if unblocked parts exist.

Impossible or unsupported:

- Stop entire Project: no evidence.
- Mark Project Waiting: unsupported without scope evidence.

AI allowed:

- Recommend follow-up or identify blocked/unblocked work.

User Only:

- Stop, pause, or reclassify parent Project.

## Ontology Fit

```text
TENSION
```

Reason:

- Existing concepts explain the actors and artifact, but not the scope of the waiting condition.
- Project-level Waiting appears too coarse if other work can continue.

## Challenged Decisions

- OWN-003: Waiting as Suggested State is strained by dependency scope.
- OWN-010: Supports separation between dependency resolution and completion.
- OWN-011: Tests Defer / Reduce Scope / Delegate without stopping Project.
- OWN-001: Reinforces Project should not be reduced to a single blocked action.

## Missing Concepts

Candidates only:

- Dependency.
- Blocking Condition.
- Dependency Scope.
- Dependency Owner.
- Blocked Item.
- Unblocked Work.

## Unnecessary Concepts

- New Core Entity is not proven.
- A universal "Waiting Project" state would lose information.

## Failure Log Entry

```text
Failure Type: TENSION
Reason: Waiting is evidenced for a Dataset dependency, not necessarily the whole Project.
Challenged Decision or Principle: OWN-003 State Ownership and Confirmation.
Possible Revision: Distinguish Project State from dependency/blocking condition if repeated.
Evidence Needed: More cases where one dependency waits while other Project work continues.
Should this affect Sprint 0 principles now: No. Record as repeated-pattern candidate.
```

