# CASE-013: Submitted but Not Closed

## Case Header

```text
Case ID: CASE-013
Case Name: Submit project book before deadline
Batch: 03 - State Under Pressure
Source: Case Mining Backlog v0.1 item 26; OWN-010 examples
Coverage Role: CASE C - Submitted but not truly finished
```

## Reality

Facts:

- A project book must be submitted before a deadline.
- Submission is an event.
- Review, acceptance, result, correction, or follow-up may remain after submission.

Interpretations:

- Submission may complete the user's intended process if the Definition of Done is "submit the book."
- Submission may not close the larger Project if acceptance/result/follow-up matters.
- Completion depends on owner judgment and project boundary.

Unknowns:

- Definition of Done.
- Whether submission has happened.
- Whether reviewer acceptance is required.
- Whether competition/school result remains.
- Whether follow-up after submission is expected.

External constraints:

- Deadline.
- Review or competition process.
- Possible correction request.

## Core Entities

Person:

- User.
- Student team.
- Reviewer / committee / competition organizer: UNKNOWN.

Role:

- Teacher / advisor / submitter.
- External reviewer.

Area:

- Student Projects / Research Advising.

Project:

- Project book submission may be a Project or a milestone inside a larger competition Project.

Resource:

- Project content, dataset, figures, supporting material.

Document:

- Project book.

Event:

- Submit project book.
- Receive acceptance/revision/result.

Decision:

- Whether the Project is considered closed after submission.
- Whether to follow up or revise after feedback.

## State Analysis

Observed State:

- If submitted: deliverable submission event occurred.
- If not submitted: deadline-bound deliverable is pending.
- Actual submission status is UNKNOWN from available evidence.

Suggested State:

- If submitted, suggested condition: submitted / awaiting external response as factual checkpoints, not permanent state taxonomy.
- Suggested Project State must remain unconfirmed.

Confirmed State:

- UNKNOWN.

Evidence:

- Backlog contains submission case only; no actual timestamp or acceptance evidence.

Who is allowed to change it:

- System may observe upload/submission if source exists.
- External reviewer provides acceptance/result.
- Owner confirms completion/closure.

## Waiting Analysis

Is Waiting actually a Project State?

- Possibly after submission if all user-side work is done and only external response remains.
- But not automatically.

Or a relationship to an external dependency?

- Strongly yes if waiting for review/result/acceptance.

What exactly is being waited for?

- Acceptance, review, result, correction request, or confirmation: UNKNOWN.

Who controls resolution?

- External reviewer/committee/system.

Can useful work continue while waiting?

- Possibly: prepare presentation, archive documents, note lessons, plan revisions.

Does waiting affect the entire Project or only one Action / Decision / Deliverable?

- Unknown. It may affect only the submitted deliverable or the next milestone.

## External Dependency Analysis

Dependency type:

- External review / acceptance / result dependency.

Dependency owner:

- Reviewer / committee / receiving system.

User control:

- Partial before submission; little or none after submission except follow-up.

Expected event:

- Confirmation, acceptance, feedback, or result announcement.

Consequence if dependency does not resolve:

- Project cannot be confidently closed if owner requires outcome/follow-up.

Does dependency deserve identity of its own?

- Candidate: yes, if multiple post-submission checkpoints matter.

Do existing concepts represent it cleanly?

- Event + Decision + Document represent pieces.
- The distinction between submitted/accepted/outcome known/closed is not yet explicit enough.

## Completion Analysis

Work done:

- Drafting may be done if the book is ready.

Deliverable submitted:

- Core event being tested.

Deliverable accepted:

- Separate external reality.

External outcome known:

- Separate external reality.

Follow-up completed:

- Separate user-side reality.

Project closed by owner:

- Separate human judgment.

Distinct realities:

- Yes. This case strongly supports separating:
  - work done
  - submitted
  - accepted
  - outcome known
  - follow-up done
  - owner closed

These are evidence checkpoints, not new state taxonomy in this batch.

OWN-010 test:

- Strongly supports OWN-010.
- "Submitted" is materially different from "Completed" unless owner-defined scope says submission is the final intended outcome.

## Human Capacity Analysis

Time:

- Deadline pressure is present.

Energy:

- UNKNOWN.

Attention:

- Submission and post-submission follow-up require attention.

Cognitive Load:

- Likely if formatting/review requirements exist, but details are unknown.

Emotional Load:

- UNKNOWN.

Fact / Self-reported / Inference / Unknown:

- Fact: deadline-bound submission case.
- Inference: post-submission uncertainty may exist.
- Unknown: capacity impact.

## Decision Rights

User authority:

- Define whether the project boundary ends at submission or closure after outcome.
- Confirm Completed/Closed.
- Decide follow-up.

AI authority:

- Inform that submission occurred if observed.
- Explain that submission does not necessarily mean closure.
- Recommend follow-up/checklist if evidence supports it.

System authority:

- Observe timestamp, upload, or deadline passed if sources exist.

External reality:

- Acceptance/result belongs to external process.

Confirmation required:

- Completion.
- Archive/close.

Explanation required:

- Any suggestion that the project should move toward closure.

## Pause / Reduce / Delegate / Defer / Stop

Available options:

- Before deadline: reduce scope, delegate formatting/checking, minimum viable submission.
- After submission: defer until result, prepare follow-up, or close if owner confirms scope is complete.

Impossible or unsupported:

- AI cannot mark completed from submission alone.
- AI cannot equate no pending actions with closure.

AI allowed:

- Recommend "record as submitted and wait for response" if evidence exists.

User Only:

- Decide closure/completion.

## Ontology Fit

```text
TENSION
```

Reason:

- OWN-010 handles the principle well.
- The case pressures whether JenOS needs named checkpoints or outcome records separate from Project State.

## Challenged Decisions

- OWN-003: Observed event versus confirmed state.
- OWN-010: Strongly tested; survives but needs evidence vocabulary.
- OWN-011: Reduce Scope may apply before submission.

## Missing Concepts

Candidates only:

- Submission Event.
- Acceptance / Review Outcome.
- Outcome Record.
- Closure Decision.
- Follow-up Requirement.
- Definition of Done Evidence.

## Unnecessary Concepts

- Permanent state enum is premature.
- "Failed" is unnecessary and potentially misleading if external result is negative.

## Failure Log Entry

```text
Failure Type: TENSION
Reason: Submitted, accepted, outcome known, follow-up completed, and owner-closed are materially distinct realities.
Challenged Decision or Principle: OWN-010 Completion.
Possible Revision: Add evidence checkpoints or outcome records before defining state taxonomy.
Evidence Needed: More submitted-but-not-closed cases across school, competitions, reports, and health/admin documents.
Should this affect Sprint 0 principles now: No. OWN-010 survives; record pressure for Sprint 0.2 synthesis.
```

