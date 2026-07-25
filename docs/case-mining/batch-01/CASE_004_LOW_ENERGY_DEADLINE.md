# Case #004: รับมือวันที่พลังงานต่ำแต่มี Deadline

## Case Header

```text
Case ID: CASE-004
Case Name: รับมือวันที่พลังงานต่ำแต่มี Deadline
Batch: Sprint 0.2 / Batch 1
Source: docs/reviews/CASE_MINING_BACKLOG_V0.1.md, item 38
Real-life Context: Human Capacity / Deadline / Recommendation Trade-off
```

## Reality

Facts from repository/backlog:

- มีเคสชื่อ "รับมือวันที่พลังงานต่ำแต่มี Deadline"
- OWN-007 defines Human Capacity as Energy, Time, Attention, Emotion, Cognitive Load, Health.
- OWN-008 says health/capacity does not always override commitment, and deadline does not always override capacity.
- OWN-011 allows recommending Pause, Reduce Scope, Delegate, Defer, Stop, or Archive, but AI never stops a project.

Interpretation:

- This is primarily Context + Human Capacity + Commitment, not necessarily a Project.
- There is a deadline, but the underlying Project is UNKNOWN.
- "พลังงานต่ำ" is self-reported or inferred? The backlog title does not say.
- The model should avoid medical assumptions.

Unknown:

- What deadline
- What Project
- Whether energy is self-reported, observed, or inferred
- Consequences of missing deadline
- Flexibility of commitment
- Available support/delegation

## Core Entities

Person:

- User, as person with capacity constraints

Role:

- UNKNOWN; depends on deadline context

Area:

- UNKNOWN; could be teaching, health, family, finance, research, etc.

Project:

- Underlying Project UNKNOWN
- This case itself is likely Context/Decision Situation, not Project

Resource:

- UNKNOWN

Document:

- UNKNOWN

Event:

- Deadline date/time may be External Reality, but actual date UNKNOWN
- Low-energy day may be a Context/Observation, not Event unless recorded as self-report

Decision:

- What to do with limited capacity and a deadline
- Whether to reduce scope, defer, delegate, or do minimum viable action
- Whether to change Confirmed State of any Project: requires owner confirmation

## Supporting Concepts

State:

- Observed State: low energy + deadline exists, according to case title only
- Suggested State: High-capacity tension / deadline risk, but evidence insufficient
- Confirmed State: UNKNOWN

Context:

- Low energy
- Deadline
- Possibly time pressure

Action:

- Minimum viable action
- Reduce scope
- Ask for help
- Defer if possible
- Rest if needed

Observation:

- Case title states low energy and deadline.

Risk:

- Deadline miss risk
- Capacity depletion risk
- Quality risk

Commitment:

- Deadline implies a commitment, but details UNKNOWN

Relationship:

- UNKNOWN; depends on who receives the deliverable.

Tag:

- capacity
- deadline
- trade-off
- decision

## State Analysis

Observed State:

- Low energy and deadline are stated in title, but source type is unclear.

Suggested State:

- Could suggest "Capacity Constraint" and "Deadline Risk".
- Could suggest "Reduce Scope" or "Minimum Viable Action" only after consequences are known.

Confirmed State:

- UNKNOWN.

What changed:

- No project state change observed.

When did it change:

- UNKNOWN.

Who has authority to confirm it:

- User confirms capacity and project state.
- External reality can establish deadline if sourced.

## Memory Analysis

Observation:

- User has low energy on a day with a deadline, if self-reported.

Event:

- Deadline passing would be an Event/External Reality when it happens.
- A self-report could be logged as an Observation.

Log:

- Future log could record capacity self-report and decisions made.

History:

- Could become history of how a deadline was handled under low capacity.

Memory Candidate:

- None yet.
- Possible future Memory: "On low-energy deadline days, minimum viable action works better than full-scope work" requires repeated or owner-confirmed evidence.

AI Authority:

- AI may propose capacity-aware options, not diagnose health and not decide to stop.

## Decision Rights

Inform:

- AI can inform known deadline, available time, and known commitments.

Recommend:

- AI can recommend trade-off options with reasoning if evidence exists.

Require Confirmation:

- Reducing scope
- Deferring/renegotiating deadline
- Changing project state to Paused/Waiting
- Creating Memory about capacity pattern

User Only:

- Deciding health/capacity boundaries
- Deciding whether to push through, reduce scope, defer, ask for help, or rest
- Deciding if a Project is paused/cancelled/completed

## Human Capacity

Time:

- Deadline implies time constraint, exact time UNKNOWN.

Energy:

- Low energy is part of case title; source type UNKNOWN.

Attention:

- Likely affected by low energy, but not evidenced.

Emotion:

- UNKNOWN.

Cognitive Load:

- Likely relevant if the deadline task is complex, but task unknown.

Health:

- UNKNOWN. Do not infer or diagnose.

Capacity Recommendation:

- With current evidence, JenOS should only say evidence needed and present possible categories of response.

## Ontology Fit

Status: TENSION

Reason:

- This case is not a Project. It is a Context/Decision Situation affecting some unknown Project.
- The current ontology includes Context and Human Capacity, but "Decision Situation" may become useful as a framing concept.

## Challenged Decisions

- OWN-002: Context is not an object, but this case behaves like a case worth recording.
- OWN-005: user authority over capacity/commitment decision.
- OWN-006: confidence must be proportional to evidence.
- OWN-007: Human Capacity before Productivity.
- OWN-008: Capacity / Commitment / Consequence Trade-off.
- OWN-011: Continue options beyond "do more".

## Missing Concepts

- Decision Situation may be a missing concept.
- Capacity Evidence Type may be needed: fact / self-report / inference / unknown.
- Commitment Flexibility may need classification.

## Unnecessary Concepts

- Project is unnecessary until the underlying deadline work is known.
- Document/Resource are unnecessary without a concrete deliverable.

## Failure Log Entry

Failure Type:

- Ontology Tension

Reason:

- The case is important for JenOS behavior but is not itself a Project, Area, Event, or Context alone. It is a decision situation created by Context + Capacity + Commitment.

Challenged Decision or Principle:

- OWN-002
- OWN-007
- OWN-008
- OWN-011

Possible Revision:

- Do not revise yet. Track whether Decision Situation is repeatedly needed to hold non-project moments that drive recommendations.

Evidence Needed:

- Deadline details
- Underlying Project
- Capacity source
- Consequences
- Flexibility
- Available support

Should this affect Sprint 0 principles now, or wait for repeated evidence?

- Wait for repeated evidence.

