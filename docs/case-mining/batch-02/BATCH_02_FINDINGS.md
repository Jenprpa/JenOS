# Batch 2 Findings

## Batch Goal

Batch 2 tested the pre-project hypothesis from Batch 1.

The goal was to try to falsify the hypothesis, not confirm it.

## Cases

1. CASE-006: Idea Only — กิจกรรมทดลองที่น่าสนใจ
2. CASE-007: Reference Only — เก็บ PDF ไว้อ่านทีหลัง
3. CASE-008: Incoming Request Not Yet Accepted
4. CASE-009: Emerging Concern — นักเรียนหลายคนเริ่มส่งงานช้า
5. CASE-010: Conditional Future Work — สมัครแข่งขันถ้านักเรียนพร้อม

## Ontology Fit Summary

```text
PASS: 1
PASS WITH TENSION: 2
TENSION: 2
FAIL: 0
```

## Disconfirmation Evidence

CASE-007 is the strongest disconfirmation case.

Reference-only material fits existing concepts:

- Document
- Resource
- optional Tag/Context

It does not need a new Capture/Core Entity.

This weakens any broad proposal to create a universal pre-project entity for everything saved or noticed.

## Supporting Evidence

CASE-006, CASE-008, CASE-009, and CASE-010 all show that there are items that:

- are not Projects,
- may deserve persistence,
- may need later review,
- may disappear without becoming Projects.

However, the cases do not prove that these need a new Core Entity.

## Emerging Pattern

The repeated pattern is not "new object with full identity."

The repeated pattern is:

```text
existing thing + unresolved classification / future review
```

Examples:

- idea stored as Document/Observation
- request stored as Event + Decision
- concern stored as Observation + Risk
- opportunity stored as Resource/Context + Trigger

## Concepts Under Pressure

Potentially useful:

- Project Candidate
- Review Status
- Trigger
- Pending Decision
- Emerging Concern

Potentially too broad:

- Capture
- Item
- Note as Core Entity

## Batch 2 Conclusion

Batch 2 does not justify adding a new Core Entity.

It does support clarifying that some existing concepts may carry a lightweight review/classification status before Project formation.

