# OWN-009: Privacy, Deletion and Redaction

## Decision ID

OWN-009

## Decision Title

Privacy, Deletion and Redaction

## Status

Decided

## Context

JenOS ต้องรักษา history และ memory แต่เจ้าของระบบต้องมีสิทธิ์ควบคุมข้อมูลส่วนตัว

## Why This Decision Matters

History is Gold อาจขัดกับ privacy, right to correct และ right to forget

## Evidence from Existing Documents

- Constitution: ต้องปกป้องความเป็นส่วนตัวและห้ามลบเหตุผลสำคัญอย่างเงียบ ๆ
- Tension Map: Memory vs Privacy
- Proposed Revisions PHIL-005: ต้องมี Memory and Privacy section

## Decision Question

เจ้าของระบบสามารถลบ, redact, hide from AI, retain หรือแยก source/summary ได้อย่างไร?

## Options

- Option A: Full owner control; delete anything permanently
- Option B: Delete/redact content but keep tombstone metadata
- Option C: Privacy levels: visible, private, hidden from AI, local-only
- Option D: Hybrid policy by data type

## Data Actions to Decide

- ลบข้อมูล
- Redact บางส่วน
- ซ่อนจาก AI
- เก็บเฉพาะในเครื่อง
- ตั้ง Retention
- ลบ Summary แต่เก็บ Source
- ลบ Source แต่เก็บ Derived Insight
- ลบทั้งสองอย่าง

## Trade-offs

- Full deletion เคารพ privacy สูงแต่ history อาจขาด
- Tombstone ช่วย audit แต่ยังอาจ sensitive
- Privacy levels ยืดหยุ่นแต่เพิ่ม complexity
- Hybrid practical แต่ต้องมี policy

## Risk of No Decision

ระบบอาจออกแบบ history ที่ผู้ใช้ไม่ไว้ใจ หรือ privacy ที่ทำให้ explainability พัง

## AI Recommendation

แนะนำ Option D: owner controls data, default supports redact/delete/hide from AI, and uses tombstone only when owner allows or when needed for non-sensitive audit

## Owner Decision

Selected Direction: User-owned Memory and Deletable Derived Knowledge

ผู้ใช้เป็นเจ้าของข้อมูลและความทรงจำทั้งหมดของ JenOS

> User owns every memory.

ไม่มี Memory ใดที่เป็นของ AI มากกว่าของเจ้าของระบบ

## User Rights

เจ้าของระบบมีสิทธิ์อย่างน้อย 5 ระดับ:

| Right | Meaning |
|---|---|
| Delete | ลบจริง |
| Redact | ซ่อนหรือลบบางส่วน |
| Hide from AI | ยังเก็บไว้ แต่ AI ใช้ไม่ได้ |
| Archive | เก็บไว้ แต่ไม่ใช้งานหรือไม่ surfaced ตามปกติ |
| Export | นำข้อมูลออกได้ทั้งหมด |

## Derived Knowledge

> Derived knowledge must never become undeletable.

Insight หรือ Memory ที่ AI สร้างจาก source data ยังต้องอยู่ใต้สิทธิ์ของผู้ใช้

ตัวอย่าง:

```text
Memory: คุณชอบทำงานกลางคืน
Source: Log 500 รายการ
```

ถ้าผู้ใช้ลบ source log ระบบต้องไม่แอบเก็บ derived insight ไว้โดยไม่บอก

ระบบควรให้ผู้ใช้เลือก เช่น:

- ลบทั้ง Source และ Insight
- ลบเฉพาะ Source
- เก็บเฉพาะ Insight
- ตรวจสอบใหม่จากข้อมูลที่เหลือ

หาก insight อ้างอิงข้อมูลที่ถูกลบแล้ว ระบบต้องบอกหรือทำให้ตรวจสอบได้ตาม policy ที่เจ้าของระบบเลือก

## Right to Be Forgotten

> The user has the right to be forgotten by their own system.

หลักนี้ไม่ได้แปลว่า JenOS ต้องลืมทุกอย่างอัตโนมัติ แต่หมายความว่าผู้ใช้มีสิทธิ์ควบคุมว่าอะไรถูกจำ อะไรถูกใช้โดย AI และอะไรต้องถูกลืม

## Privacy Rule

Memory, History, Log, Event, Observation และ Derived Insight ต้องอยู่ใต้สิทธิ์ของผู้ใช้

AI ไม่มีสิทธิ์ทำให้ knowledge ใดกลายเป็นถาวรหรือ undeletable

## Owner Rationale

History is Gold ต้องไม่กลายเป็นข้ออ้างให้ระบบสะสมข้อมูลโดยไม่เคารพ privacy

ถ้า derived knowledge ลบไม่ได้ JenOS จะขัดกับหลัก User Owns the Data และอาจกลายเป็นระบบที่ผู้ใช้ไม่ไว้ใจ

Confidence: Experimental

## Consequences

- Privacy และ deletion ต้องถูกออกแบบตั้งแต่ก่อนเลือก storage
- AI memory และ derived insights ต้องมี source relationship หรือ deletion policy
- Hide from AI เป็นสิทธิ์แยกจาก Delete
- Export เป็นสิทธิ์พื้นฐานของเจ้าของระบบ
- Tombstone หรือ audit metadata ต้องไม่ override right to be forgotten โดยไม่มี owner decision
- OWN-005 Decision Rights ต้องรวมสิทธิ์ของผู้ใช้เหนือ memory/data
- Sprint 0.2 ต้องทดสอบกรณี source ถูกลบแต่ insight ยังอยู่

## Documents to Revise

Constitution, Operating Principles, Domain Model, System Context

## Open Follow-up Questions

- ข้อมูลบุคคลอื่นควร anonymize เมื่อใด?
- Tombstone ควรถูกใช้เมื่อใด และเจ้าของระบบควรปิดได้หรือไม่?
