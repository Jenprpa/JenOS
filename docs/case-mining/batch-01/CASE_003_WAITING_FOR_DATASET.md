# Case #003: ติดตามทีมโครงงานที่ยังไม่ส่ง Dataset

## Case Header

```text
Case ID: CASE-003
Case Name: ติดตามทีมโครงงานที่ยังไม่ส่ง Dataset
Batch: Sprint 0.2 / Batch 1
Source: docs/reviews/CASE_MINING_BACKLOG_V0.1.md, item 22
Real-life Context: โครงงานนักเรียน / AI / Waiting / External Dependency
```

## Reality

Facts from repository/backlog:

- มีเคสชื่อ "ติดตามทีมโครงงานที่ยังไม่ส่ง Dataset"
- Backlog also includes "Train AI หลังได้รับ Dataset", which implies Dataset is a dependency for later work.
- Sprint 0 philosophy includes dependency thinking: work may not move because it waits on another thing.

Interpretation:

- This is a strong Waiting / external dependency case.
- The Dataset may be a Resource, Document, or input artifact.
- "ติดตามทีม" may be an Action within a larger Project rather than a standalone Project.
- If repeated follow-up and decision-making are required, it may become a sub-project or case inside the AI project.

Unknown:

- Which project/team
- Dataset deadline
- Who owns dataset collection
- Whether the user can act or only follow up
- Whether missing Dataset creates risk to competition deadline

## Core Entities

Person:

- Student team members: implied but identities UNKNOWN
- User as teacher/advisor: inferred

Role:

- Research Advisor / Project Advisor / Teacher: likely, exact role UNKNOWN

Area:

- Research / Student Project Supervision / Teaching: possible

Project:

- Parent Project: AI project or competition project, UNKNOWN
- Current item: likely Action or Waiting dependency inside a Project
- Could become Project if "recover missing Dataset" requires bounded management

Resource:

- Dataset: likely Resource or Document-like artifact

Document:

- Dataset file(s): possible Document, format UNKNOWN

Event:

- Dataset submission: expected Event, not observed
- Follow-up message: possible Event if sent, not observed

Decision:

- Whether to wait, follow up, reduce scope, change dataset plan, or escalate
- Whether current state of parent Project should be Suggested Waiting

## Supporting Concepts

State:

- Observed State: Dataset not submitted, based on case title
- Suggested State: Waiting for parent Project or task
- Confirmed State: UNKNOWN

Context:

- Deadline pressure likely relevant but UNKNOWN
- Dependency chain: Dataset -> Train AI -> Test -> Submit, inferred from backlog items

Action:

- Follow up with team
- Ask for status
- Decide contingency if dataset remains unavailable

Observation:

- "ทีมโครงงานยังไม่ส่ง Dataset" is stated in case title.

Risk:

- Delay risk to AI training/testing/submission
- Dependency risk
- Scope risk if dataset quality/availability is insufficient

Commitment:

- Potential commitment to competition/submission timeline, UNKNOWN

Relationship:

- Advisor-student team relationship

Tag:

- waiting
- dependency
- student-project
- ai
- dataset

## State Analysis

Observed State:

- Dataset not submitted, if accepting the case title as source.

Suggested State:

- Suggested Waiting for the dependent work.
- Suggested Risk if deadline exists and is near, but deadline is UNKNOWN.

Confirmed State:

- UNKNOWN. User must confirm whether parent Project is officially Waiting.

What changed:

- No event timestamp provided.

When did it change:

- UNKNOWN.

Who has authority to confirm it:

- User confirms project state.
- Student/team may be source for dataset status.

## Memory Analysis

Observation:

- Team has not submitted Dataset.

Event:

- No submission event yet.
- Follow-up would become an Event when it happens.

Log:

- Future log should record follow-up attempts and responses with timestamps.

History:

- This may become part of the AI project history: waiting for dataset -> dataset received -> train AI -> test.

Memory Candidate:

- No confirmed Memory yet.
- Possible future Memory: "Dataset collection should start earlier than AI training window" if repeated/confirmed by timeline evidence.

AI Authority:

- AI may propose the parent state as Waiting, not confirm it.
- AI may propose a memory after actual delay impact is known.

## Decision Rights

Inform:

- AI can state that Dataset is currently not submitted if sourced from case title/real record.

Recommend:

- AI can recommend follow-up or contingency options if deadline/context are known.

Require Confirmation:

- Changing parent Project Confirmed State to Waiting.
- Changing project plan or scope.
- Creating Memory about team reliability or planning pattern.

User Only:

- Deciding escalation to students/parents/administration.
- Deciding whether to reduce scope or change project direction.

## Human Capacity

Time:

- Likely relevant if training/testing deadline is near, but actual time UNKNOWN.

Energy:

- UNKNOWN.

Attention:

- Relevant if many dependencies compete, but UNKNOWN.

Cognitive Load:

- Tracking dependencies can create cognitive load; evidence needed.

Health:

- UNKNOWN.

Capacity Recommendation:

- If capacity is limited, JenOS might suggest minimum viable follow-up or delegate, but current evidence is insufficient.

## Ontology Fit

Status: PASS with TENSION

Reason:

- The model handles Waiting/external dependency well through State, Action, Resource/Document, Event, and Project.
- Tension remains around whether Dataset is Resource, Document, or both.
- Tension also exists around whether "ติดตามทีม" is Action, Event, or Project.

## Challenged Decisions

- OWN-001: Action vs Project boundary.
- OWN-002: Resource vs Document distinction.
- OWN-003: Suggested Waiting vs Confirmed Waiting.
- OWN-004: future Memory from dependency pattern.
- OWN-011: possible Defer/Reduce Scope/Delegate if dependency persists.

## Missing Concepts

- Dependency may need explicit treatment in Domain Discovery if repeated.
- Artifact may be useful as a neutral term covering Dataset/Document/Resource.

## Unnecessary Concepts

- Area is not central for this case after parent Project is known.
- Role may be lightweight metadata unless authority changes by role.

## Failure Log Entry

Failure Type:

- Conceptual Tension

Reason:

- Dataset does not fit cleanly as only Resource or only Document. Dependency is central but currently only implied as Supporting Concept/relationship.

Challenged Decision or Principle:

- OWN-002
- OWN-003

Possible Revision:

- Do not revise yet. Track whether Dependency or Artifact appears repeatedly in case mining.

Evidence Needed:

- Actual dataset format
- Whether Dataset is managed like a file, resource, deliverable, or dependency
- Parent project timeline
- Who owns dataset submission

Should this affect Sprint 0 principles now, or wait for repeated evidence?

- Wait for repeated evidence.

