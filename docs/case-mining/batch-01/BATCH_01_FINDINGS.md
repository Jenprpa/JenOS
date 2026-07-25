# Batch 1 Findings

## Batch

```text
Sprint: 0.2 — Domain Discovery through Case Mining
Batch: 01 — First Contact with Reality
Cases analyzed: 5
```

## Selected Cases

1. CASE-001: ออกข้อสอบปลายภาค
2. CASE-002: ดูแลนักเรียนรายบุคคล
3. CASE-003: ติดตามทีมโครงงานที่ยังไม่ส่ง Dataset
4. CASE-004: รับมือวันที่พลังงานต่ำแต่มี Deadline
5. CASE-005: ตัดสินใจว่าเรื่องหนึ่งควรเป็น Project หรือยังเป็น Note

## Coverage

```text
Deadline and deliverable: CASE-001
Person/relationship: CASE-002
Waiting/external dependency: CASE-003
Human Capacity: CASE-004
Ambiguous Project/Area/Event/Context/Note: CASE-005
```

## Ontology Fit Summary

```text
PASS: 0
PASS with TENSION: 1
TENSION: 3
FAIL: 1
```

Details:

- CASE-001: TENSION
- CASE-002: TENSION
- CASE-003: PASS with TENSION
- CASE-004: TENSION
- CASE-005: FAIL

## OWN Decisions Challenged

OWN-001:

- Project boundary is tested by CASE-001 and CASE-005.
- Person-centered support in CASE-002 reinforces "People are never projects."

OWN-002:

- Strongly challenged by all five cases.
- The ontology handles many distinctions, but Batch 1 pressures Note, Case, Dependency, Artifact, and Decision Situation.

OWN-003:

- CASE-001 and CASE-003 show why Suggested State must not become Confirmed State.
- CASE-004 shows that context/capacity pressure is not the same as Project State.

OWN-004:

- CASE-002 and CASE-003 show that Memory should not be created early.
- Batch 1 supports "Memory is curated, not accumulated."

OWN-005:

- CASE-002, CASE-004, and CASE-005 all require user authority over classification, sensitive decisions, and capacity trade-offs.

OWN-006:

- CASE-004 and CASE-005 require low-confidence language because evidence is thin.

OWN-007:

- CASE-004 directly tests Human Capacity before Productivity.

OWN-008:

- CASE-004 directly tests Capacity / Commitment / Consequence Trade-off.

OWN-009:

- CASE-002 raises privacy questions around student-related information.

OWN-010:

- CASE-001 and CASE-003 show that sending, waiting, and no pending action do not automatically mean Completed.

OWN-011:

- CASE-003 and CASE-004 may eventually require Reduce Scope, Delegate, Defer, or Pause, but evidence is not enough yet.

## Recurring Ambiguity

1. Project vs Action:

- "ออกข้อสอบปลายภาค" may be a Project or an Action.
- "ติดตามทีม..." may be an Action inside a parent Project.

2. Person-centered work:

- "ดูแลนักเรียนรายบุคคล" should not turn the student into a Project.
- It may need Case, Project, Area, or Relationship depending on real details.

3. Context that deserves attention:

- "พลังงานต่ำแต่มี Deadline" is not Project but still drives decision support.
- Context alone may not be enough to hold the reasoning.

4. Early unclassified information:

- "Note" is not defined, but JenOS rejects Inbox and forced Projects.
- This is the clearest model gap in Batch 1.

5. Artifact / Resource / Document:

- Dataset pressures the Resource vs Document distinction.
- It may need "Artifact" or "Deliverable", but evidence is not enough yet.

## Missing Concepts

Potential concepts surfaced by Batch 1:

- Note
- Reference
- Capture
- Unclassified Item
- Project Candidate
- Case
- Dependency
- Artifact
- Deliverable
- Decision Situation
- Capacity Evidence Type
- Commitment Flexibility
- Sensitivity / Privacy Level

Important:

- These are not accepted concepts.
- Batch 1 only records pressure. It does not revise the ontology.

## Concepts That May Be Unnecessary in Some Cases

Resource:

- Not needed for CASE-001 unless actual materials/tools are involved.
- Not needed for CASE-004 without concrete deliverable.

Document:

- Not needed for CASE-004.

Project:

- Not needed for CASE-004 until underlying deadline work is known.
- Not yet justified for CASE-005.

Event:

- Not needed for CASE-005 unless capture time matters.

Relationship:

- Central for CASE-002, but minimal for CASE-001 unless review/approval roles exist.

## Evidence Gaps

Across Batch 1, the repository/backlog gives mostly case titles, not full real-life data.

Common missing evidence:

- specific deadline
- current state
- actual actions already taken
- owner-confirmed classification
- people involved
- source of observations
- Definition of Done
- parent Project
- capacity source: fact, self-report, inference, or unknown
- consequences if no action is taken
- privacy constraints

## Owner Evidence Requests

For CASE-001:

- What subject/course is the exam for?
- Is "ออกข้อสอบ" one action or a bounded project with drafting, review, formatting, and submission?
- What is the deadline and Definition of Done?

For CASE-002:

- Is this routine student support or a specific bounded issue?
- What privacy level should student-related notes have by default?
- Should person-centered bounded support be called Project, Case, or something else?

For CASE-003:

- What is the parent Project?
- Who owns the Dataset?
- What happens if the Dataset is late?
- Is Dataset a file/document, resource, deliverable, dependency, or multiple things?

For CASE-004:

- How should JenOS receive capacity data: self-report, inference, or both?
- What deadline/Project is involved?
- What options are acceptable when capacity is low: reduce scope, defer, delegate, minimum viable action, or rest?

For CASE-005:

- What should JenOS call early captured information that is not Inbox and not Project?
- Is Reference enough, or do we need Note / Capture / Project Candidate?
- Should Project Candidate be a state, label, or entity?

## Batch 1 Conclusion

Batch 1 validates the need for Case Mining.

The Sprint 0 foundation is useful, but real cases immediately expose pressure points:

- Note / unclassified capture has no stable home.
- Person-centered support may need a careful "Case" concept or a disciplined Project subtype.
- Dependency and artifact handling will matter.
- Human Capacity often appears as a decision situation, not a Project.

No philosophy should be revised from Batch 1 alone.

The next step is Owner Review of this batch, especially CASE-005 and the possible missing concepts.

