# CASE-014: Low Capacity with Deadline

## Case Header

```text
Case ID: CASE-014
Case Name: Handle a low-energy day with a deadline
Batch: 03 - State Under Pressure
Source: Case Mining Backlog v0.1 item 38; Batch 1 CASE-004
Coverage Role: CASE D - Capacity conflict
```

## Reality

Facts:

- There is a deadline.
- Human Capacity is low in the case title.
- Work still exists.
- Batch 1 treated this as a direct test of Human Capacity.

Interpretations:

- Low capacity is Context, not Project State.
- The underlying deadline work may remain active while recommendation changes.
- JenOS should surface trade-offs rather than push only productivity or only rest.

Unknowns:

- Which Project/deadline is involved.
- Source of capacity evidence: self-report, inference, or fact.
- Severity and duration of low capacity.
- Flexibility of commitment.
- Consequences of missing deadline.

External constraints:

- Deadline.
- Possible commitments to students, school, committee, or external body.

## Core Entities

Person:

- User.
- Other stakeholders: UNKNOWN.

Role:

- User in the role attached to the deadline: UNKNOWN.

Area:

- Depends on underlying Project: Teaching / Administration / Student Projects / Personal Life.

Project:

- Underlying deadline Project is UNKNOWN.
- Low-capacity day is Context, not Project.

Resource:

- Available time, tools, documents: UNKNOWN.

Document:

- Depends on underlying deliverable.

Event:

- Deadline approaching.
- Self-report or observation of low capacity.

Decision:

- What to do today.
- Whether to reduce scope, delegate, defer, rest, or do minimum viable action.

## State Analysis

Observed State:

- Deadline exists.
- Capacity is low only if self-reported or observed; source is UNKNOWN.

Suggested State:

- Do not suggest Project State from capacity alone.
- Suggested recommendation state: capacity-constrained decision situation.

Confirmed State:

- UNKNOWN.

Evidence:

- Case title only.

Who is allowed to change it:

- Owner confirms capacity if self-report is needed.
- Owner confirms Project State.
- System may observe deadline.
- AI may recommend trade-offs with evidence.

## Waiting Analysis

Is Waiting actually a Project State?

- No evidence.

Or a relationship to an external dependency?

- Not primarily. This case is internal capacity constraint, not external waiting.

What exactly is being waited for?

- Nothing evidenced.

Who controls resolution?

- Capacity may improve with rest/time, but no direct controller is evidenced.

Can useful work continue while waiting?

- Useful work may continue at reduced scope.

Does waiting affect the entire Project or only one Action / Decision / Deliverable?

- Waiting is not the right lens unless owner chooses to defer.

## External Dependency Analysis

Dependency type:

- None evidenced beyond deadline.

Dependency owner:

- Deadline owner/external party: UNKNOWN.

User control:

- Partial over response, not deadline existence.

Expected event:

- Deadline passes or deliverable submitted.

Consequence if dependency does not resolve:

- Not applicable.

Does dependency deserve identity of its own?

- Not in this case.

Do existing concepts represent it cleanly?

- Context + Commitment + Human Capacity + Decision explain most of the case.

## Completion Analysis

Work done:

- UNKNOWN.

Deliverable submitted:

- UNKNOWN.

Deliverable accepted:

- UNKNOWN.

External outcome known:

- UNKNOWN.

Follow-up completed:

- UNKNOWN.

Project closed by owner:

- No evidence.

Distinct realities:

- Deadline pressure and low capacity do not change completion meaning.

OWN-010 test:

- Supports principle indirectly: deadline passing must not auto-complete work.

## Human Capacity Analysis

Time:

- Deadline implies time pressure, but exact time is UNKNOWN.

Energy:

- Low energy is explicit in the case title.

Attention:

- Likely constrained, but no evidence.

Cognitive Load:

- Likely if deadline work is complex, but no evidence.

Emotional Load:

- UNKNOWN.

Competing commitments:

- UNKNOWN.

Fact / Self-reported / Inference / Unknown:

- Fact: case is about low energy and deadline.
- Self-reported state: not available in repo evidence.
- Inference: recommendations should be capacity-aware.
- Unknown: severity, cause, safe limits.

## Decision Rights

User authority:

- Choose how much capacity to spend.
- Decide whether to rest, reduce scope, delegate, defer, or continue.

AI authority:

- Inform about deadline.
- Explain trade-offs.
- Recommend minimum viable action or rest if evidence supports it.

System authority:

- Observe deadline.

External reality:

- Deadline exists and may pass.

Confirmation required:

- Any decision to defer, reduce scope, delegate, or pause.

Explanation required:

- Required for any recommendation that changes plan based on capacity.

## Pause / Reduce / Delegate / Defer / Stop

Available options:

- Reduce Scope.
- Minimum viable action.
- Delegate if another person can help.
- Defer if deadline flexibility exists.
- Rest if capacity risk outweighs consequence.

Impossible or unsupported:

- Stop the Project: not evidenced.
- Archive/Completed: not evidenced.

AI allowed:

- Recommend options with reasons and uncertainty.

User Only:

- Final trade-off decision.

## Ontology Fit

```text
PASS WITH TENSION
```

Reason:

- OWN-007 and OWN-008 explain the case well.
- Tension remains because capacity evidence source and commitment flexibility are not modeled clearly enough.

## Challenged Decisions

- OWN-007: Directly tested; survives.
- OWN-008: Directly tested; survives.
- OWN-011: Tests continue options.
- OWN-003: Confirms capacity is not Project State by itself.

## Missing Concepts

Candidates only:

- Capacity Evidence Type.
- Commitment Flexibility.
- Minimum Viable Action.
- Consequence Scope.

## Unnecessary Concepts

- Waiting is unnecessary.
- New health logic is unnecessary without evidence.

## Failure Log Entry

```text
Failure Type: TENSION
Reason: Capacity principles survive, but recommendations depend on evidence source and commitment flexibility not yet specified.
Challenged Decision or Principle: OWN-007 and OWN-008.
Possible Revision: Clarify capacity evidence and commitment flexibility after more cases.
Evidence Needed: Real examples with self-report, calendar pressure, consequence, and selected mitigation.
Should this affect Sprint 0 principles now: No.
```

