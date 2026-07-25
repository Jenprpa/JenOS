# Case #009: Emerging Concern — นักเรียนหลายคนเริ่มส่งงานช้า

## Case Header

```text
Case ID: CASE-009
Case Name: Emerging Concern — นักเรียนหลายคนเริ่มส่งงานช้า
Batch: Sprint 0.2 / Batch 2
Test Role: repeated observations before intervention
Source: Batch 2 requested case type
```

## Reality

Fact:

- Repeated observations suggest a possible issue.
- No intervention/project has been formed yet.

Interpretation:

- This may be a pattern, risk, or emerging concern.
- It is not yet a Project unless the user decides to intervene with bounded change.

Unknown:

- Number of students
- Course/class
- Cause
- Whether action is required

## Entity Analysis

Person: students, user  
Role: Teacher  
Area: Teaching / Student Support  
Project: NO, not yet  
Resource: assignment records, UNKNOWN  
Document: submission logs, UNKNOWN  
Event: repeated late submissions  
Decision: whether to investigate or intervene

## State Analysis

Observed State:

- Repeated late submissions, if sourced.

Suggested State:

- Emerging Risk / Attention Needed.

Confirmed State:

- UNKNOWN.

## Pre-Project Test Questions

Does this item need persistence?

- YES, because repeated observations may affect future decision.

Does it have owner responsibility yet?

- Partly. Teacher has Area responsibility, but no Project commitment yet.

Does it have intended outcome yet?

- NO.

Does it have meaningful State?

- Risk/concern state maybe meaningful; Project State is premature.

Does it require Decisions yet?

- YES: investigate, ignore, monitor, intervene.

Can it be represented cleanly using existing concepts?

- Partly: Observation + Risk + Area + Decision.

If forced into Project, what becomes false?

- It falsely implies intervention has been chosen.

If left outside Project, what information is lost?

- Pattern visibility and trigger for later intervention.

What event/decision would convert it into a Project?

- User decides to run a bounded intervention, such as "improve assignment submission for class X this month."

Can it disappear without ever becoming a Project?

- YES, if trend resolves or is judged insignificant.

## Memory Analysis

Observation:

- Late submissions observed repeatedly.

Event:

- Each late submission is an Event if timestamped.

Log:

- Submission log.

History:

- Trend history.

Memory Candidate:

- None yet; possible future Memory if intervention produces lesson.

## Decision Rights

- AI can inform about the pattern if data is sourced.
- AI can suggest monitoring or investigation.
- User decides intervention.

## Ontology Fit

Status: PASS WITH TENSION

Reason:

- Observation + Risk + Area handles most of this.
- Tension: repeated observations may deserve review without becoming Project.

## Hypothesis Impact

- Supports a lightweight review/candidate mechanism.
- Does not support a Core Entity.

