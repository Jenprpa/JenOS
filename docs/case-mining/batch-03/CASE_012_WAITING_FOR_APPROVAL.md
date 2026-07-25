# CASE-012: Waiting for Project Approval

## Case Header

```text
Case ID: CASE-012
Case Name: Request project approval
Batch: 03 - State Under Pressure
Source: Case Mining Backlog v0.1 item 9
Coverage Role: CASE B - External deadline with partial control
```

## Reality

Facts:

- There is a request for project approval.
- Approval depends on an external authority.
- The user can prepare and submit required materials but does not fully control the approval result.

Interpretations:

- The approval request may be a Project, an Action inside a larger Project, or a Decision dependency.
- Waiting for approval may block implementation while allowing preparation work to continue.

Unknowns:

- What project is being approved.
- Whether documents have already been prepared or submitted.
- Deadline.
- Approval authority.
- Whether work can proceed before approval.

External constraints:

- Administrative approval process.
- Possible deadline or meeting schedule.

## Core Entities

Person:

- User.
- Approver / administrator / committee: UNKNOWN.

Role:

- User as requester/project owner.
- External approver as decision authority.

Area:

- Administration / School Projects.

Project:

- Approval may belong to a larger Project.
- Approval request itself may be a bounded Project if it requires document preparation, follow-up, revision, and final confirmation.

Resource:

- Approval requirements, forms, supporting evidence.

Document:

- Proposal, request form, supporting documents.

Event:

- Request submitted: UNKNOWN.
- Approval granted/rejected/revision requested: future expected event.

Decision:

- External approval decision.
- User decision whether to submit, revise, follow up, or defer work.

## State Analysis

Observed State:

- Approval is needed.
- Current approval status is UNKNOWN.

Suggested State:

- If submitted: suggest dependency condition "waiting for approval."
- Do not automatically change whole Project to Waiting unless approval blocks all meaningful progress.

Confirmed State:

- UNKNOWN.

Evidence:

- Backlog title supports existence of approval need, not exact state.

Who is allowed to change it:

- External authority decides approval.
- System may observe document submission or approval response if source exists.
- AI may suggest dependency status.
- Owner confirms Project State and next action.

## Waiting Analysis

Is Waiting actually a Project State?

- Possibly, if implementation cannot proceed without approval and no useful preparation remains.
- Not proven.

Or a relationship to an external dependency?

- Strongly yes: approval is an external decision dependency.

What exactly is being waited for?

- Approval decision.

Who controls resolution?

- External approver.

Can useful work continue while waiting?

- UNKNOWN; possible actions include preparing backup documents, planning, or follow-up.

Does waiting affect the entire Project or only one Action / Decision / Deliverable?

- Evidence supports at least a Decision dependency.
- Scope remains unknown.

## External Dependency Analysis

Dependency type:

- External decision / approval dependency.

Dependency owner:

- Approver / committee / administration.

User control:

- Partial. User controls submission quality and follow-up, not final approval.

Expected event:

- Approval response.

Consequence if dependency does not resolve:

- Project may be delayed, revised, reduced, or stopped.

Does dependency deserve identity of its own?

- Candidate: yes. The approval has owner, status, expected event, consequence, and authority.

Do existing concepts represent it cleanly?

- Decision can represent approval, but the waiting/blocking relationship to Project/Action remains unclear.

## Completion Analysis

Work done:

- Request preparation may be done or not done: UNKNOWN.

Deliverable submitted:

- UNKNOWN.

Deliverable accepted:

- Approval is the acceptance-like external event.

External outcome known:

- UNKNOWN.

Follow-up completed:

- UNKNOWN.

Project closed by owner:

- No evidence.

Distinct realities:

- Request prepared.
- Request submitted.
- Request approved.
- Project allowed to proceed.
- Project closed.

These are materially distinct.

OWN-010 test:

- Supports OWN-010. Submission of a request is not completion. Approval result is external outcome, not necessarily project closure.

## Human Capacity Analysis

Time:

- Deadline may exist but is UNKNOWN.

Energy:

- UNKNOWN.

Attention:

- Administrative follow-up may require attention.

Cognitive Load:

- Possible due to approval requirements, but evidence is insufficient.

Emotional Load:

- UNKNOWN.

Fact / Self-reported / Inference / Unknown:

- Fact: approval request exists.
- Inference: external dependency.
- Unknown: capacity constraints.

## Decision Rights

User authority:

- Decide to submit, follow up, revise, defer, or stop the user's participation.

AI authority:

- Inform about missing documents, deadlines, known approval status.
- Explain dependency and consequences.
- Recommend follow-up if evidence supports it.

System authority:

- Validate system rules such as dates or required fields if defined.

External reality:

- Approval outcome belongs to external authority.

Confirmation required:

- Any state change, escalation, or plan change.

Explanation required:

- Any recommendation that approval blocks the Project.

## Pause / Reduce / Delegate / Defer / Stop

Available options:

- Defer implementation until approval.
- Reduce scope if approval delay compresses available time.
- Delegate document collection if appropriate.
- Stop only if owner decides cost/risk is no longer acceptable.

Impossible or unsupported:

- AI cannot approve.
- AI cannot mark Project completed or stopped.

AI allowed:

- Recommend follow-up or risk mitigation.

User Only:

- Decide to proceed without approval if allowed, stop, or change project goal.

## Ontology Fit

```text
TENSION
```

Reason:

- Decision entity explains approval authority well.
- State model needs more precision around waiting for an external decision versus whole-Project Waiting.

## Challenged Decisions

- OWN-003: Waiting may belong to an external Decision dependency.
- OWN-005: Authority follows accountability is strongly supported.
- OWN-010: Submission/approval/closure are separate.
- OWN-011: Defer/Reduce/Stop may be relevant but require owner judgment.

## Missing Concepts

Candidates only:

- External Decision.
- Approval Dependency.
- Dependency Scope.
- Response Due Date.
- Follow-up Threshold.

## Unnecessary Concepts

- New Project type is not proven.
- "Waiting" as single project-level state may be unnecessary if dependency is modeled well.

## Failure Log Entry

```text
Failure Type: TENSION
Reason: Approval creates waiting around an external Decision, but Project-level Waiting may hide remaining useful work.
Challenged Decision or Principle: OWN-003 and OWN-005.
Possible Revision: Treat approval as a Decision dependency with scope before changing Project State.
Evidence Needed: More approval cases with clear submitted/approved/implemented phases.
Should this affect Sprint 0 principles now: No. Record pressure.
```

