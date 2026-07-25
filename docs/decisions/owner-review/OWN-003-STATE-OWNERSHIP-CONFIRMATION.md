# OWN-003: State Ownership and Confirmation

## Decision ID

OWN-003

## Decision Title

State Ownership and Confirmation

## Status

Decided

## Context

State คือความจริงของ Project แต่ระบบอาจ observe หรือ suggest state ได้ การยืนยัน state สำคัญเกี่ยวข้องกับ autonomy โดยตรง

## Why This Decision Matters

State change ส่งผลต่อ Today, history, risk และ completion ถ้า AI หรือ system เปลี่ยน state เองมากเกินไปจะกลายเป็น AI Authority

## Evidence from Existing Documents

- Operating Principles: ทุก State Change ต้องมี Timestamp และ Source
- Constitution: ผู้ใช้เป็นเจ้าของการตัดสินใจเสมอ
- Domain Model: State Change ต้องมี timestamp, source และเหตุผลเท่าที่เป็นไปได้

## Decision Question

State Change ประเภทใดระบบเปลี่ยนได้เอง ประเภทใดเสนอได้แต่ต้อง confirm และประเภทใดผู้ใช้เท่านั้นที่เปลี่ยนได้?

## Options

- Option A: User-confirmed only for all state changes
- Option B: System may change observed state; confirmed state ต้องให้ผู้ใช้ยืนยัน
- Option C: System may auto-change low-risk state; high-impact state ต้อง confirm
- Option D: AI never changes state; AI only suggests

## Trade-offs

- A ปลอดภัยแต่เพิ่มภาระ
- B แยก observed/suggested/confirmed ชัด
- C practical แต่ต้องนิยาม low-risk
- D ป้องกัน AI Authority แต่ system rules ยังต้องกำหนด

## State Examples

- Planning -> In Progress: อาจเสนอจาก activity แต่ควร confirm
- In Progress -> Waiting: อาจ system suggest จาก dependency แต่ควร confirm
- Waiting -> Ready: อาจ observed จาก source ใหม่ แต่ confirmed โดยผู้ใช้
- In Progress -> Completed: ผู้ใช้เท่านั้นหรือ confirm เสมอ
- In Progress -> Paused: ผู้ใช้เท่านั้นหรือ confirm เสมอ
- Paused -> Archived: ผู้ใช้เท่านั้น

## Risk of No Decision

ระบบอาจเปลี่ยนความจริงของ Project โดยไม่มีสิทธิ์ หรือถาม confirm ทุกอย่างจนเป็นภาระ

## AI Recommendation

แนะนำ Option B + D: แยก Observed State, Suggested State, Confirmed State; AI เสนอได้แต่ไม่เปลี่ยน confirmed state

## Owner Decision

Selected Option: Layered State Model — Observed State, Suggested State, Confirmed State

State คือหัวใจของ JenOS เพราะ JenOS ต้องตอบคำถามว่า:

> ตอนนี้ความจริงของสิ่งนี้คืออะไร?

State ไม่ใช่ Project และไม่ใช่ Action แต่เป็นคุณสมบัติที่สะท้อนสภาพจริงของบางสิ่ง

## State Philosophy

> State represents reality, not intention.

State ควรสะท้อนสิ่งที่เกิดขึ้นจริง มากกว่าความตั้งใจของผู้ใช้

ตัวอย่าง:

- ผู้ใช้ตั้งใจจะเริ่มงาน ยังไม่ใช่ `In Progress`
- ผู้ใช้เปิดไฟล์แล้วแต่ยังไม่ได้ทำจริง ยังไม่ใช่ `In Progress`
- ผู้ใช้ทำงานไปแล้ว จึงอาจเป็น `In Progress`

## State Layers

### 1. Observed State

Observed State คือข้อเท็จจริงหรือสัญญาณที่ระบบสังเกตได้ เช่น:

- มีการแก้ไขเอกสาร
- ส่งอีเมลแล้ว
- มีการประชุม
- อัปโหลดไฟล์

ระบบรู้หรือบันทึกสิ่งเหล่านี้ได้ แต่ยังไม่ถือว่าเป็นความจริงเชิงความหมายของ Project

### 2. Suggested State

Suggested State คือการตีความของระบบหรือ AI จาก Observed State และ context

ตัวอย่าง:

```text
Planning
  -> Suggested: In Progress
```

เพราะระบบเห็นว่ามีการทำงานต่อเนื่อง

Suggested State ยังไม่ใช่ State อย่างเป็นทางการ

### 3. Confirmed State

Confirmed State คือ State อย่างเป็นทางการที่ผู้ใช้ยืนยันแล้ว

ผู้ใช้เป็นเจ้าของการยืนยัน State ที่มีความหมาย เช่น:

```text
ใช่ ตอนนี้ Project นี้ถือว่า In Progress
```

## State Flow

```text
Reality
  -> Observed
  -> AI Interpretation
  -> Suggested State
  -> Owner Decision
  -> Confirmed State
```

## State Change Authority

### Auto

ระบบเปลี่ยนหรือบันทึกได้เองเมื่อเป็นข้อเท็จจริงเชิงเทคนิคหรือสัญญาณที่ไม่ใช่ความหมายหลักของ Project เช่น:

- Draft -> Saved
- Deadline state -> Deadline Passed
- File uploaded

### Suggested

ระบบเสนอได้ แต่ต้องให้ผู้ใช้ยืนยันก่อนกลายเป็น Confirmed State เช่น:

- Planning -> In Progress
- In Progress -> Waiting
- Waiting -> Ready

### Manual Only

ผู้ใช้เท่านั้นที่เปลี่ยนได้ เพราะเป็นการตัดสินใจเชิงความหมาย:

- Completed
- Cancelled
- Archived
- Paused, หากมีผลต่อความตั้งใจของ Project

## Event and State Rule

> Events happen. States persist.

Event คือสิ่งที่เกิดขึ้น

State คือสภาพที่ดำรงอยู่

ตัวอย่าง:

```text
Event: ประชุมทีม
State: Planning
```

ประชุมจบแล้ว แต่ Project อาจยังอยู่ใน Planning

```text
Event: ส่งโครงงาน
State: Waiting
```

Event ผ่านไปแล้ว แต่ Project ยังคงอยู่ใน Waiting

## Non-decision

OWN-003 ไม่ตัดสินรายการ State ทั้งหมด เช่น Planning, Waiting, Completed หรือ Archived

OWN-003 ตัดสินเฉพาะ:

- State คืออะไร
- ใครเป็นเจ้าของ State
- State เปลี่ยนได้อย่างไร
- ระบบมีสิทธิ์แค่ไหน

รายการ State จริงควรถูกตัดสินใน Sprint 0.2 — Domain Discovery หลังมีตัวอย่างจากชีวิตจริง

## Owner Rationale

โมเดล Observed/Suggested/Confirmed รักษาหลัก User Owns the Decision และ No False Certainty พร้อมกัน

การแยก State Philosophy ออกจาก State taxonomy ช่วยป้องกันการสร้าง enum เร็วเกินไป และเปิดทางให้ Domain Discovery ทดสอบ State จากชีวิตจริงก่อน

Confidence: Experimental

## Consequences

- State เป็น representation ของ reality ไม่ใช่ intention
- ระบบสามารถ observe facts ได้ แต่ไม่ควรแปลงเป็น confirmed meaning โดยอัตโนมัติ
- AI สามารถตีความและเสนอ Suggested State ได้ แต่ไม่เปลี่ยน Confirmed State เอง
- Confirmed State ที่มีความหมายต้องมาจาก owner decision
- Event และ State ต้องแยกกันใน Domain Discovery
- State taxonomy ยังไม่ถูกตัดสินใน OWN-003
- OWN-010 เรื่อง Completion ต้องใช้หลัก Manual Only สำหรับ Completed/Cancelled/Archived เป็นฐาน

## Documents to Revise

Constitution, Operating Principles, Domain Model, Today Experience

## Open Follow-up Questions

- Review date update นับเป็น state change หรือ metadata change?
- State taxonomy ชุดแรกควรถูกค้นพบจากตัวอย่างใดใน Sprint 0.2?
