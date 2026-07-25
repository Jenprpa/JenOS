# CASE-015: Equipment Not Ready and Scope Ambiguity

## Case Header

```text
Case ID: CASE-015
Case Name: Assess project risk when equipment is not ready
Batch: 03 - State Under Pressure
Source: Case Mining Backlog v0.1 item 28
Coverage Role: CASE E - Stop / Pause / Reduce Scope ambiguity
```

## Reality

Facts:

- A project has risk because equipment is not ready.
- Equipment readiness affects the project.
- The user needs to assess risk or decide next response.

Interpretations:

- The Project may still be active while the equipment-dependent part is blocked.
- Depending on deadline and alternatives, options may include pause, reduce scope, delegate procurement, defer experiment, or stop.
- Equipment may be Resource and also Dependency.

Unknowns:

- What equipment is not ready.
- Who controls equipment readiness.
- Whether substitute equipment exists.
- Deadline.
- Whether the project can proceed with alternative scope.
- Cost of waiting versus reducing scope.

External constraints:

- Equipment availability.
- Supplier/school/lab/student readiness.
- Deadline or competition schedule: UNKNOWN.

## Core Entities

Person:

- User.
- Student team.
- Equipment owner/provider: UNKNOWN.

Role:

- User as advisor/project owner.
- Provider as dependency owner.

Area:

- Student Projects / Research Advising.

Project:

- Parent student project.

Resource:

- Equipment.
- Alternative equipment if any: UNKNOWN.

Document:

- Risk note, project plan, equipment list: possible but not evidenced.

Event:

- Equipment not ready observed.
- Possible future event: equipment becomes ready.

Decision:

- Whether to continue, pause, reduce scope, delegate, defer, or stop.

## State Analysis

Observed State:

- Equipment is not ready.
- Project risk exists.

Suggested State:

- Suggested dependency condition: equipment unavailable / blocking some work.
- Suggested Project State should remain unconfirmed.
- Suggested risk escalation may be appropriate.

Confirmed State:

- UNKNOWN.

Evidence:

- Backlog title directly says equipment is not ready and risk needs assessment.

Who is allowed to change it:

- System may observe inventory/source if connected.
- External owner may make equipment ready.
- AI may suggest risk/dependency implications.
- Owner confirms Project State and response.

## Waiting Analysis

Is Waiting actually a Project State?

- Possibly, if equipment blocks all meaningful project work.
- Not proven.

Or a relationship to an external dependency?

- Strongly yes.

What exactly is being waited for?

- Equipment readiness.

Who controls resolution?

- UNKNOWN. Could be user, student team, school, supplier, or external provider.

Can useful work continue while waiting?

- Likely possible: planning, documentation, substitute design, risk mitigation, communication.

Does waiting affect the entire Project or only one Action / Decision / Deliverable?

- Evidence supports at least the equipment-dependent experiment/prototype.
- Whole-project impact is unknown.

## External Dependency Analysis

Dependency type:

- Resource availability / equipment readiness dependency.

Dependency owner:

- UNKNOWN.

User control:

- Partial or none, depending on owner.

Expected event:

- Equipment becomes ready / substitute found / decision made to change scope.

Consequence if dependency does not resolve:

- Project may miss deadline, need reduced scope, need alternate method, or stop.

Does dependency deserve identity of its own?

- Candidate: yes, because readiness, owner, alternatives, and impact scope affect decisions.

Do existing concepts represent it cleanly?

- Resource captures equipment.
- Risk captures danger.
- Decision captures response.
- Missing: explicit blocking relationship between Resource readiness and Project parts.

## Completion Analysis

Work done:

- UNKNOWN.

Deliverable submitted:

- Not evidenced.

Deliverable accepted:

- Not evidenced.

External outcome known:

- Not evidenced.

Follow-up completed:

- Not evidenced.

Project closed by owner:

- No evidence.

Distinct realities:

- Equipment ready is distinct from project complete.
- Reduced-scope deliverable may still count as completion only if owner revises Definition of Done.

OWN-010 test:

- Supports owner judgment. External resource failure does not automatically mean Failed or Cancelled.

## Human Capacity Analysis

Time:

- Deadline likely matters but is UNKNOWN.

Energy:

- UNKNOWN.

Attention:

- Risk management increases attention load.

Cognitive Load:

- Likely high because alternatives and consequences must be compared.

Emotional Load:

- UNKNOWN.

Competing commitments:

- UNKNOWN.

Fact / Self-reported / Inference / Unknown:

- Fact: equipment not ready, risk exists.
- Inference: cognitive load and plan ambiguity increase.
- Unknown: capacity severity.

## Decision Rights

User authority:

- Decide whether to pause, reduce scope, delegate, defer, stop, or continue.
- Confirm any Project State or revised Definition of Done.

AI authority:

- Inform about unresolved equipment dependency.
- Explain consequences and alternatives.
- Recommend options with evidence and uncertainty.

System authority:

- Observe equipment readiness only if data source exists.

External reality:

- Equipment is ready or not ready.

Confirmation required:

- Any scope reduction, pause, stop, or completion meaning change.

Explanation required:

- Required for any recommendation to change direction.

## Pause / Reduce / Delegate / Defer / Stop

Available options:

- Pause experiment until equipment ready.
- Reduce Scope to use available equipment or simpler method.
- Delegate equipment preparation/procurement if another person can do it.
- Defer equipment-dependent deliverable.
- Stop only if cost/risk exceeds value and owner confirms.

Impossible or unsupported:

- AI cannot stop the Project.
- AI cannot declare failure from equipment delay.
- Archive is not supported without owner decision.

AI allowed:

- Recommend options after comparing dependency, deadline, scope, and consequence.

User Only:

- Stop, cancel, redefine goal, or confirm revised Definition of Done.

## Ontology Fit

```text
TENSION
```

Reason:

- Existing concepts explain Resource, Risk, Decision, and Project.
- The interaction "Resource not ready blocks specific work" is not explicit enough.
- The case stresses Pause/Reduce/Delegate/Defer/Stop as distinct but overlapping recommendations.

## Challenged Decisions

- OWN-003: Waiting may be dependency condition, not Project State.
- OWN-007: Capacity impact is indirect but possible.
- OWN-008: Trade-off reasoning required if deadline/capacity exist.
- OWN-010: Not-ready equipment does not determine completion/failure.
- OWN-011: Strongly tests continue options.

## Missing Concepts

Candidates only:

- Dependency.
- Blocking Condition.
- Readiness.
- Alternative Path.
- Scope Option.
- Decision Consequence.

## Unnecessary Concepts

- New Core Entity for Equipment is unnecessary; Resource is enough.
- "Failed" state is unnecessary and harmful at this evidence level.

## Failure Log Entry

```text
Failure Type: TENSION
Reason: Resource unavailability creates a scoped block and multiple possible response paths that current ontology only partially captures.
Challenged Decision or Principle: OWN-003 and OWN-011.
Possible Revision: Clarify dependencies/blockers and the evidence needed for Pause, Reduce Scope, Delegate, Defer, or Stop recommendations.
Evidence Needed: Cases with equipment owner, deadline, alternatives, and selected owner decision.
Should this affect Sprint 0 principles now: No. Record as pressure for synthesis.
```

