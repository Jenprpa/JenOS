# Case #005: ตัดสินใจว่าเรื่องหนึ่งควรเป็น Project หรือยังเป็น Note

## Case Header

```text
Case ID: CASE-005
Case Name: ตัดสินใจว่าเรื่องหนึ่งควรเป็น Project หรือยังเป็น Note
Batch: Sprint 0.2 / Batch 1
Source: docs/reviews/CASE_MINING_BACKLOG_V0.1.md, item 49
Real-life Context: Classification / Emergent Project / Ambiguous Information
```

## Reality

Facts from repository/backlog:

- มีเคสชื่อ "ตัดสินใจว่าเรื่องหนึ่งควรเป็น Project หรือยังเป็น Note"
- OWN-001 states Project should emerge, not be forced.
- OWN-001 criteria: desired change/outcome, multiple decisions/follow-up, boundary, meaningful state/progress.
- Sprint 0 data rule: useful life-driving data should answer Current State, Next Action, or Blocker.

Interpretation:

- This is a meta-case about classification.
- It is intentionally ambiguous and likely not itself a Project.
- "Note" is not currently defined as Core Entity or Supporting Concept in OWN-002.
- This case directly tests whether the ontology has a place for unclassified, early-stage information.

Unknown:

- What the "เรื่องหนึ่ง" is
- Whether it has action, blocker, state, decision, or boundary
- Whether Note should be a concept in JenOS or remain outside the domain model

## Core Entities

Person:

- UNKNOWN

Role:

- UNKNOWN

Area:

- UNKNOWN

Project:

- Unknown by definition.
- System should not force creation of Project.

Resource:

- UNKNOWN

Document:

- Could be a note/document, but no evidence.

Event:

- The act of capturing a note could be an Event if timestamped, but not evidenced.

Decision:

- Classification decision: Note vs Project vs Reference vs Area/Context/Action.

## Supporting Concepts

State:

- Observed State: captured information exists, if a note exists; but the specific note is UNKNOWN
- Suggested State: Not enough evidence to classify
- Confirmed State: UNKNOWN

Context:

- UNKNOWN

Action:

- Ask classification questions
- Monitor for emergence
- Leave as reference if no drive signal exists

Observation:

- Backlog contains classification case.

Risk:

- Forced Project creation
- Model bloat
- Losing useful early signals if no place exists for notes

Commitment:

- UNKNOWN

Relationship:

- UNKNOWN

Tag:

- classification
- project-boundary
- note
- ambiguity

## State Analysis

Observed State:

- No actual note content observed.

Suggested State:

- Suggested: UNKNOWN / Unclassified / Reference Candidate.

Confirmed State:

- UNKNOWN.

What changed:

- Nothing observed.

When did it change:

- UNKNOWN.

Who has authority to confirm it:

- User confirms classification.
- AI may suggest classification with reasons.

## Memory Analysis

Observation:

- A classification problem exists.

Event:

- None observed.

Log:

- Future log could record when a note was captured and when it became Project.

History:

- Could become a history of emergence: note -> repeated follow-up -> project suggestion -> owner confirmation.

Memory Candidate:

- No Memory now.
- Possible future Memory: "Notes about X often become Projects only after dependency/deadline appears" requires evidence.

AI Authority:

- AI may suggest "this looks like it is becoming a Project."
- AI must not auto-convert Note to Project.

## Decision Rights

Inform:

- AI can inform which project criteria are present or missing.

Recommend:

- AI can recommend keeping it as Note, making it Project, or asking for evidence, depending on facts.

Require Confirmation:

- Creating Project
- Creating Memory
- Archiving or deleting the note

User Only:

- Final classification decision
- Deciding whether the information matters enough to track

## Human Capacity

Time:

- UNKNOWN.

Energy:

- UNKNOWN.

Attention:

- Relevant because over-classification increases attention cost, but evidence needed.

Cognitive Load:

- Strongly relevant as a design risk: too many Projects create cognitive load.

Health:

- UNKNOWN.

Capacity Recommendation:

- The system should avoid forcing classification to reduce cognitive load, but this is an inference from principles, not case-specific evidence.

## Ontology Fit

Status: FAIL

Reason:

- The current ontology intentionally separates Core Entities and Supporting Concepts but does not define Note, Reference, or Inbox.
- Sprint 0 rejects Inbox and forced Project creation, but Batch 1 exposes that JenOS may need a way to hold early, unclassified information without making it Project.

## Challenged Decisions

- OWN-001: Project should emerge, not be forced.
- OWN-002: Core Entities and Supporting Concepts may be missing Note/Reference/Capture.
- OWN-005: AI may suggest classification but user decides.
- OWN-006: low evidence requires low-confidence language.

## Missing Concepts

- Note
- Reference
- Capture
- Unclassified Item
- Project Candidate

These should not all be added. They should be tracked as possible names for the same gap.

## Unnecessary Concepts

- Event is unnecessary unless capture time matters.
- Project is unnecessary until evidence satisfies project criteria.

## Failure Log Entry

Failure Type:

- Ontology Failed

Reason:

- The model needs a non-inbox, non-project holding pattern for early information. Current ontology says what should not happen, but does not yet say where the information lives.

Challenged Decision or Principle:

- OWN-001
- OWN-002

Possible Revision:

- Do not revise in Batch 1. Collect more examples of early notes becoming or not becoming Projects.

Evidence Needed:

- Real note examples
- Whether notes need state
- Whether notes answer Current State / Next Action / Blocker
- Whether Reference is enough
- Whether Project Candidate should be a state/label rather than entity

Should this affect Sprint 0 principles now, or wait for repeated evidence?

- Wait for repeated evidence, but record as strongest Batch 1 failure.

