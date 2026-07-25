# Case #010: Conditional Future Work — สมัครแข่งขันถ้านักเรียนพร้อม

## Case Header

```text
Case ID: CASE-010
Case Name: Conditional Future Work — สมัครแข่งขันถ้านักเรียนพร้อม
Batch: Sprint 0.2 / Batch 2
Test Role: future trigger before project formation
Source: Batch 2 requested case type
```

## Reality

Fact:

- Work may become relevant only if a trigger occurs.
- Trigger example: students are ready.

Interpretation:

- This is not yet a Project if no commitment or active management exists.
- It may be a conditional opportunity, not a task.

Unknown:

- Competition name
- Student readiness criteria
- Deadline
- Required documents

## Entity Analysis

Person: students, user  
Role: Teacher / Advisor  
Area: Student Project / Competition / Teaching  
Project: NO, not yet  
Resource: competition announcement, UNKNOWN  
Document: application documents later, UNKNOWN  
Event: trigger occurs if students become ready  
Decision: whether to enter competition

## State Analysis

Observed State:

- Conditional possibility exists.

Suggested State:

- Monitor / Conditional.

Confirmed State:

- UNKNOWN.

## Pre-Project Test Questions

Does this item need persistence?

- Maybe, if deadline or opportunity matters.

Does it have owner responsibility yet?

- NO, unless the user has committed to prepare.

Does it have intended outcome yet?

- Conditional only.

Does it have meaningful State?

- Trigger status may be meaningful; Project State is premature.

Does it require Decisions yet?

- Not yet, unless deadline approaches or trigger occurs.

Can it be represented cleanly using existing concepts?

- Partly: Resource/Document for announcement, Context/Trigger, Decision later.

If forced into Project, what becomes false?

- It falsely implies commitment and active work.

If left outside Project, what information is lost?

- Opportunity may be forgotten.

What event/decision would convert it into a Project?

- Trigger occurs and user decides to apply/prepare.

Can it disappear without ever becoming a Project?

- YES.

## Memory Analysis

Observation:

- Opportunity exists.

Event:

- Trigger occurrence or decision to apply.

Log:

- Opportunity captured, trigger checked.

History:

- Only if it evolves.

Memory Candidate:

- None now.

## Decision Rights

- AI may inform about known deadline/requirements if sourced.
- AI may suggest monitoring.
- User decides to commit.

## Ontology Fit

Status: TENSION

Reason:

- Existing Resource/Context/Decision can represent parts of it.
- A trigger-based review mechanism may be needed, but not necessarily a domain entity.

## Hypothesis Impact

- Supports transitional classification or workflow review.
- Does not justify new Core Entity.

