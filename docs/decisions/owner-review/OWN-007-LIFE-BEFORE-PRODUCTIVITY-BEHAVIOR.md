# OWN-007: Life before Productivity Behavior

## Decision ID

OWN-007

## Decision Title

Life before Productivity Behavior

## Status

Decided

## Context

Life before Productivity เป็นหลักสำคัญ แต่ต้องแปลงเป็น behavior ที่ตรวจสอบได้

## Why This Decision Matters

ถ้าหลักนี้ไม่มีผลต่อ recommendation จริง Today จะกลายเป็น productivity tool ที่มี health decoration

## Evidence from Existing Documents

- Manifesto: Productivity ที่ทำให้ชีวิตพังไม่ใช่ความสำเร็จของ JenOS
- Today Experience: ระบบควรคำนึงถึงพลังงาน สุขภาพ และการพัก
- Testability Review: เมื่อ energy ต่ำ ระบบต้องเสนอ reduce scope/rest option

## Decision Question

ระบบควรทำอย่างไรเมื่อ health/energy/time constraints กระทบงาน?

## Options

- Option A: Always surface health warning, user decides
- Option B: Health-aware ranking changes recommendations
- Option C: Escalation model with different response levels
- Option D: Minimal behavior until real data exists

## Behavior Cases

- ผู้ใช้นอนน้อย: แสดง caution, เสนอ reduce scope/rest
- ผู้ใช้มีเวลาน้อย: เสนอ minimum viable action
- ผู้ใช้ป่วย: ไม่วินิจฉัย, ถาม self-reported capacity, เสนอพัก/ขอช่วย
- Deadline ใกล้มาก: แสดง trade-off ไม่ใช่ผลักให้ฝืนอย่างเดียว
- Commitment ยกเลิกไม่ได้: เสนอ mitigation
- งานเสี่ยงสูง: แยก project risk กับ health risk
- ผู้ใช้ปฏิเสธการพัก: เคารพ decision แต่บันทึก rationale optional
- ข้อมูลสุขภาพไม่พอ: แสดง Unknown ไม่เดา

## Fact / Self-reported / Inference

- Fact: deadline, calendar, owner-confirmed data
- Self-reported State: เหนื่อย, ป่วย, นอนน้อย
- Inference: energy likely low จาก recent workload

## Risk of No Decision

ระบบอาจเลือก deadline เสมอ หรือเตือนสุขภาพแบบไม่มีผลจริง

## AI Recommendation

แนะนำ Option C แบบไม่วินิจฉัยโรค: Normal, Caution, High Risk, Immediate Safety Concern พร้อม behavior ต่างกัน

## Owner Decision

Selected Direction: Human Capacity before Productivity

OWN-007 ตีความ Life before Productivity เป็นหลัก:

> Protect the human who does the work.

และ:

> JenOS optimizes sustainable capacity, not maximum output.

Human Capacity กว้างกว่า health และรวมถึง:

- Energy
- Time
- Attention
- Emotion
- Cognitive Load
- Health

JenOS ไม่ควรถามเพียงว่า "วันนี้ทำได้กี่งาน" แต่ควรถามว่า:

> วันนี้ผู้ใช้มี capacity เหลือแค่ไหน และควรใช้มันอย่างไรโดยไม่ทำให้ชีวิตพัง?

## Behavior Principle

JenOS ต้องทำให้ Human Capacity เป็น constraint จริงของ recommendation ไม่ใช่ส่วนตกแต่ง

เมื่อ capacity ต่ำ ระบบควรเสนอทางเลือก เช่น:

- ลดขอบเขต
- ทำ minimum viable action
- เลื่อนโดยมีเหตุผล
- ขอความช่วยเหลือ
- พัก
- ไม่แตะบาง Project วันนี้

ระบบห้ามวินิจฉัยโรค และต้องแยก Fact, Self-reported State, Inference และ Unknown

## Owner Rationale

Life before Productivity ไม่ได้หมายถึงสุขภาพอย่างเดียว แต่หมายถึงการปกป้องคนที่ต้องทำงาน ใช้ชีวิต และรับผลของ decision

Confidence: Experimental

## Consequences

- Today และ recommendation ต้องพิจารณา Human Capacity ไม่ใช่แค่ deadline/output
- Health เป็นส่วนหนึ่งของ Capacity แต่ไม่ใช่ทั้งหมด
- Capacity ต่ำไม่ควรถูกตีความเป็น failure
- ระบบต้องเสนอการ continue อย่างยั่งยืน ไม่ใช่ maximize output
- OWN-008 และ OWN-011 ต้องใช้ Capacity เป็นฐาน

## Documents to Revise

Manifesto, Operating Principles, Today Experience, Principle Testability Review

## Open Follow-up Questions

- ผู้ใช้ยอมให้ระบบถาม health/energy บ่อยแค่ไหน?
- Immediate Safety Concern ควรนิยามอย่างไรโดยไม่เป็น medical logic?
- Capacity ควรถูก self-report, inferred, หรือผสมกันอย่างไรใน Sprint 0.2?
