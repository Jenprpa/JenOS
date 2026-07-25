# OWN-008: Health vs Commitment

## Decision ID

OWN-008

## Decision Title

Health vs Commitment

## Status

Decided

## Context

ชีวิตจริงมีกรณีที่สุขภาพและ commitment ชนกัน เช่น งานโรงเรียนที่เลี่ยงไม่ได้ในวันที่พลังต่ำ

## Why This Decision Matters

เป็น tension สำคัญระหว่าง Life before Productivity กับหน้าที่/ความไว้ใจ/Deadline

## Evidence from Existing Documents

- Tension Map: Life before Productivity vs Commitments
- Scenario 2 และ 8: deadline ใกล้และ commitment ยกเลิกไม่ได้
- Core Concepts: Commitment คือพันธะกับคน/เวลา/Project

## Decision Question

เมื่อ health และ commitment ขัดกัน ระบบควร balance อย่างไร?

## Options

- Option A: Health always overrides all commitments
- Option B: System presents trade-offs but user decides
- Option C: ใช้ระดับความเสี่ยงสุขภาพและความยืดหยุ่นของ commitment
- Option D: Escalation Model: Normal, Caution, High Risk, Immediate Safety Concern

## Trade-offs

- A ปกป้องสุขภาพชัด แต่ไม่ยืดหยุ่นกับหน้าที่จริง
- B เคารพ autonomy สูง แต่ระบบอาจไม่ช่วยพอ
- C เหมาะกับชีวิตจริง แต่ต้องนิยาม risk/flexibility
- D ชัดต่อ behavior แต่ต้องระวังไม่เป็น medical diagnosis

## Risk of No Decision

ระบบอาจทำตัวสุดโต่ง: ผลักให้ทำงานหรือบอกให้พักโดยไม่มอง consequence

## AI Recommendation

แนะนำ Option C + D: ใช้ risk/flexibility พร้อม escalation และให้ผู้ใช้ตัดสินใจสุดท้าย ยกเว้นแสดง safety concern แบบชัดเจนเมื่อข้อมูลบ่งชี้ความเสี่ยงสูง

## Owner Decision

Selected Direction: Capacity / Commitment / Consequence Trade-off

Health ไม่ชนะ Commitment เสมอ และ Commitment ก็ไม่ชนะ Health เสมอ

JenOS ควรพิจารณา:

```text
Reality
  -> Human Capacity
  -> Commitment
  -> Consequences
  -> Recommendation
```

ไม่ใช้ rule แบบ:

```text
Health > Everything
```

หรือ:

```text
Deadline > Everything
```

## Decision Rule

เมื่อ Human Capacity และ Commitment ขัดกัน JenOS ต้อง:

- แสดง trade-off
- แยกสิ่งที่ควบคุมได้และควบคุมไม่ได้
- แสดง consequence ของแต่ละทางเลือก
- เสนอ mitigation เช่น reduce scope, delegate, defer, rest, minimum viable action
- ให้ผู้ใช้ตัดสินใจขั้นสุดท้าย

## Non-medical Rule

JenOS ห้ามสร้าง medical diagnosis logic

ระบบพูดได้เรื่อง capacity, self-reported state, risk และ consequence แต่ไม่วินิจฉัยโรค

## Owner Rationale

ชีวิตจริงซับซ้อนเกินกว่าจะใช้ Health always wins หรือ Deadline always wins ระบบต้องช่วยให้ผู้ใช้เห็นความจริงและผลของทางเลือก โดยไม่ตัดสินใจแทน

Confidence: Experimental

## Consequences

- Recommendation ต้อง balance Reality, Human Capacity, Commitment และ Consequences
- Deadline ไม่ใช่ priority อัตโนมัติ
- Capacity ไม่ใช่ข้ออ้างให้ละเลย consequence
- ระบบต้องเสนอ trade-offs มากกว่าคำตอบเดียว
- OWN-011 ต้องเสนอ pause/reduce/delegate/defer/stop ได้ตาม trade-off นี้

## Documents to Revise

Today Experience, Core Concepts, Tension Map, Review Scenarios

## Open Follow-up Questions

- Commitment มีกี่ระดับความยืดหยุ่น?
- ระบบควรเสนอให้ขอความช่วยเหลือจากใครได้บ้าง?
- Consequence taxonomy ควรแยกระหว่าง consequence ต่อผู้ใช้ ต่อคนอื่น และต่อ Project หรือไม่?
