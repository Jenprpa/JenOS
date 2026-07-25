# Case #006: Idea Only — กิจกรรมทดลองที่น่าสนใจ

## Case Header

```text
Case ID: CASE-006
Case Name: Idea Only — กิจกรรมทดลองที่น่าสนใจ
Batch: Sprint 0.2 / Batch 2
Test Role: Pre-project hypothesis support or disconfirmation
Source: synthetic case type requested by Sprint 0.2 Batch 2 instructions
```

## Reality

Fact:

- This case represents an idea noticed by the user.
- No commitment exists in the case definition.

Interpretation:

- The idea may be useful later.
- It is not a Project unless the user decides to develop it.

Unknown:

- Actual idea content
- Subject/course
- Deadline
- Whether it should be used

## Entity Analysis

Person: User; students possibly later, UNKNOWN  
Role: Teacher, inferred  
Area: Teaching, possible  
Project: NO, not yet  
Resource: UNKNOWN  
Document: Could be a note if written down  
Event: Noticing/capturing the idea could be an Event if timestamped  
Decision: Whether to keep, ignore, or develop later

## State Analysis

Observed State:

- Idea exists only as case definition.

Suggested State:

- Not a Project.
- Could be Reference/Idea if persisted.

Confirmed State:

- UNKNOWN.

## Pre-Project Test Questions

Does this item need persistence?

- Maybe. If the idea is worth later review.

Does it have owner responsibility yet?

- NO.

Does it have intended outcome yet?

- NO.

Does it have meaningful State?

- Weak. It may have review status, but not Project State.

Does it require Decisions yet?

- Only a lightweight keep/discard/develop decision.

Can it be represented cleanly using existing concepts?

- Partly. Document can store it; Decision can classify it later.

If forced into Project, what becomes false?

- It falsely implies responsibility, outcome, and management.

If left outside Project, what information is lost?

- The idea may be forgotten unless persisted somewhere.

What event/decision would convert it into a Project?

- User decides to design and use the activity in a class or lesson plan.

Can it disappear without ever becoming a Project?

- YES.

## Memory Analysis

Observation:

- Idea was noticed.

Event:

- Captured idea, if timestamped.

Log:

- Capture timestamp.

History:

- Only if it later evolves.

Memory Candidate:

- None now.

## Decision Rights

- AI may suggest classification.
- User decides whether to keep or develop.
- Creating a Project requires confirmation.

## Ontology Fit

Status: PASS WITH TENSION

Reason:

- Existing concepts can mostly handle this as Document/Observation plus later Decision.
- Tension remains because "idea worth later review" has no explicit home.

## Hypothesis Impact

- Supports a lightweight pre-project mechanism.
- Does not support a new Core Entity yet.

