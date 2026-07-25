# Case #007: Reference Only — เก็บ PDF ไว้อ่านทีหลัง

## Case Header

```text
Case ID: CASE-007
Case Name: Reference Only — เก็บ PDF ไว้อ่านทีหลัง
Batch: Sprint 0.2 / Batch 2
Test Role: Disconfirmation case
Source: user-provided example in Batch 1 review request
```

## Reality

Fact:

- A PDF is saved for possible later reading.

Interpretation:

- This is reference material.
- It does not imply commitment, Project, Memory, or Action unless the user decides later.

Unknown:

- PDF topic
- Why it was saved
- Whether it relates to any Project or Area

## Entity Analysis

Person: User  
Role: UNKNOWN  
Area: UNKNOWN  
Project: NO  
Resource: YES, reference material  
Document: YES, PDF  
Event: Saving the PDF may be an Event  
Decision: Whether to read/use/delete later

## State Analysis

Observed State:

- PDF saved, if sourced.

Suggested State:

- Reference / Document.

Confirmed State:

- UNKNOWN.

## Pre-Project Test Questions

Does this item need persistence?

- YES, as Document/Resource.

Does it have owner responsibility yet?

- NO.

Does it have intended outcome yet?

- NO.

Does it have meaningful State?

- Document state may exist, such as unread/read, but Project State is unnecessary.

Does it require Decisions yet?

- No meaningful decision beyond keep/read/delete.

Can it be represented cleanly using existing concepts?

- YES: Document + Resource + optional Context/Tag.

If forced into Project, what becomes false?

- It falsely implies managed change and ongoing responsibility.

If left outside Project, what information is lost?

- Little, if Document/Resource metadata is retained.

What event/decision would convert it into a Project?

- User decides to use the PDF to create a lesson, write a report, or complete a bounded outcome.

Can it disappear without ever becoming a Project?

- YES.

## Memory Analysis

Observation:

- PDF saved.

Event:

- Save event, if timestamped.

Log:

- File saved/imported.

History:

- Not needed unless it becomes part of a Project.

Memory Candidate:

- None.

## Decision Rights

- AI can inform that PDF exists.
- AI can suggest possible links if evidence exists.
- User decides whether it becomes Project or Memory.

## Ontology Fit

Status: PASS

Reason:

- Existing Document + Resource concepts represent this cleanly.
- No pre-project concept is needed for this case.

## Hypothesis Impact

- Disconfirms broad "Capture for everything".
- Supports NO CHANGE or narrow clarification.

