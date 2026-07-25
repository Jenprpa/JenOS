# Batch 1 Failure Log

This log records only failures, tensions, and ambiguities found in Batch 1.

It does not revise the model.

## Summary

```text
PASS: 0
PASS with TENSION: 1
TENSION: 3
FAIL: 1
```

## Entries

### CASE-001: ออกข้อสอบปลายภาค

Failure Type:

- Ontology Tension

Reason:

- The case title alone may represent a Project, Action, or Document-production task.

Challenged Decisions:

- OWN-001
- OWN-002

Evidence Needed:

- Deadline
- Deliverables
- Review/approval flow
- Whether this belongs inside a larger course or assessment project

Model Action:

- No revision yet. Track repeated deliverable-centered cases.

### CASE-002: ดูแลนักเรียนรายบุคคล

Failure Type:

- Ontology Tension

Reason:

- The case sits between Person, Area/Responsibility, Relationship, and possible Project/Case.

Challenged Decisions:

- OWN-001
- OWN-002
- OWN-009

Evidence Needed:

- Specific issue
- Boundary
- Desired change
- Follow-up pattern
- Privacy constraints

Model Action:

- No revision yet. Track whether "Case" is needed.

### CASE-003: ติดตามทีมโครงงานที่ยังไม่ส่ง Dataset

Failure Type:

- Conceptual Tension

Reason:

- Dataset may be Resource, Document, Artifact, Deliverable, or Dependency.

Challenged Decisions:

- OWN-002
- OWN-003

Evidence Needed:

- Dataset format
- Ownership
- Parent project timeline
- Whether the Dataset is managed as file, resource, or dependency

Model Action:

- No revision yet. Track Dependency and Artifact pressure.

### CASE-004: รับมือวันที่พลังงานต่ำแต่มี Deadline

Failure Type:

- Ontology Tension

Reason:

- This case is not a Project. It is a decision situation created by Context + Capacity + Commitment.

Challenged Decisions:

- OWN-002
- OWN-007
- OWN-008
- OWN-011

Evidence Needed:

- Underlying Project
- Deadline
- Capacity source
- Consequences
- Commitment flexibility

Model Action:

- No revision yet. Track whether "Decision Situation" is needed.

### CASE-005: ตัดสินใจว่าเรื่องหนึ่งควรเป็น Project หรือยังเป็น Note

Failure Type:

- Ontology Failed

Reason:

- Current ontology has no explicit place for early unclassified information that should not become Inbox and should not be forced into Project.

Challenged Decisions:

- OWN-001
- OWN-002
- OWN-005
- OWN-006

Evidence Needed:

- Real note examples
- Whether Reference is enough
- Whether Project Candidate should be state/label/entity
- Whether captured information needs lifecycle/state

Model Action:

- No revision in Batch 1. Record as strongest failure.

