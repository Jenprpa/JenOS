# OWN-010: Completion

## Decision ID

OWN-010

## Decision Title

Completion

## Status

Decided

## Context

JenOS ปฏิเสธ Done/Not Done แบบตื้น ๆ แต่ยังต้องนิยาม Completed และสถานะปิด Project

## Why This Decision Matters

ถ้า Completed ไม่ชัด ระบบอาจ mark เสร็จเพราะไม่มี Task ค้าง หรือถือว่า Project ที่ยกเลิกเป็น failure ทั้งหมด

## Evidence from Existing Documents

- Manifesto: State มากกว่า Done/Not Done
- Scenario 11: ไม่มี Task ค้างแต่ Project ยังไม่เสร็จ
- ADR-0002: State และ Project เป็นศูนย์กลาง

## Decision Question

Completed หมายถึงอะไรใน JenOS และต้องแยก Closed/Cancelled/Abandoned/Transferred/Archived หรือไม่?

## Cases

- ทำสำเร็จตามเป้าหมาย
- ส่งงานแล้ว แต่รอผล
- ยกเลิกอย่างมีเหตุผล
- ล้มเหลวแต่จบกระบวนการ
- ส่งต่อให้คนอื่น
- ไม่มี Action ค้าง แต่ผลลัพธ์ยังไม่เกิด
- Project หมดความสำคัญ
- Project ถูกรวมกับ Project อื่น

## Options

- Option A: Completed = achieved Definition of Done only
- Option B: Closed umbrella with completion reason
- Option C: Distinct terminal states: Completed, Cancelled, Transferred, Archived
- Option D: Minimal early taxonomy: Completed, Closed, Archived

## Trade-offs

- A ชัดแต่ไม่รองรับชีวิตจริงที่จบแบบอื่น
- B ยืดหยุ่นแต่ reason สำคัญมาก
- C อธิบายดีแต่ state เยอะ
- D เริ่มง่ายแต่ยังพอแยกจบจริงกับเก็บไว้

## Risk of No Decision

JenOS อาจกลับไปใช้ Done/Not Done หรือสร้าง state มากเกินจำเป็น

## AI Recommendation

แนะนำ Option B หรือ D: ใช้ Closed พร้อม closure reason หรือ taxonomy เล็กมากก่อน แล้วค่อยเพิ่มเมื่อมี evidence

## Owner Decision

Selected Direction: Completion as Human Judgment with Multiple End Modes

Completion เป็นการตัดสินใจของผู้ใช้ ไม่ใช่เหตุการณ์อัตโนมัติ

> Completion is a human judgment, not an event.

แค่ส่งไฟล์แล้ว ไม่ได้แปลว่า Project เสร็จ

แค่หมด Deadline ไม่ได้แปลว่า Project จบ

แค่ไม่มี Task ค้าง ไม่ได้แปลว่าบรรลุเป้าหมาย

## Meaning of Project Ending

Completion ใน OWN-010 หมายถึงการปิดวงจรของ Project ด้วยการตัดสินใจของผู้ใช้ โดย JenOS ต้องบันทึกความจริงของการสิ้นสุด ไม่ใช่ตัดสินคุณค่าของผลลัพธ์

การสิ้นสุดอาจเกิดจาก:

- บรรลุเป้าหมาย
- ยุติโดยตั้งใจ
- ส่งต่อ
- เก็บถาวร

## Provisional End Modes

OWN-010 ยังไม่ล็อกรายการ State สุดท้าย แต่ใช้ end modes ต่อไปนี้เป็น working vocabulary สำหรับ Sprint 0.2:

### Completed

บรรลุผลลัพธ์หรือวงจรกระบวนการที่ตั้งใจไว้

ตัวอย่าง:

- ส่งข้อสอบเรียบร้อย
- ปิดโครงการ AI Spark ตามแผน
- ซ่อมรถเสร็จ

Completed ไม่จำเป็นต้องแปลว่าชนะหรือได้ outcome ภายนอกที่ต้องการเสมอ

### Cancelled

ตัดสินใจยุติก่อนเสร็จ

Cancelled ไม่ใช่ความล้มเหลวเสมอไป อาจเป็นการตัดสินใจที่ถูกต้องตามข้อมูลใหม่หรือข้อจำกัดจริง

### Archived

ไม่ได้ทำต่อในตอนนี้ แต่เก็บไว้เป็นประวัติหรือ reference

Archive ไม่ใช่ Completed

### Transferred

เปลี่ยนเจ้าของหรือความรับผิดชอบ

Project อาจยังมีชีวิตอยู่ แต่ไม่ใช่ความรับผิดชอบของผู้ใช้แล้ว

## Abandoned

ยังไม่ตัดสินให้ `Abandoned` เป็น State

คำนี้มีนัยด้านลบ และอาจเป็นการตีความแทนผู้ใช้ ระบบควรถามก่อน เช่น:

```text
โครงการนี้ไม่มีความเคลื่อนไหวมา 8 เดือน ต้องการยุติ เก็บถาวร หรือดำเนินการต่อ?
```

## Key Principles

> A project can end without succeeding.

Project สามารถจบได้โดยไม่สำเร็จตาม outcome ภายนอก และยังไม่ควรถูกเรียกว่า failed โดยอัตโนมัติ

> Outcome != Process.

บางครั้ง process สำเร็จ แต่ outcome ภายนอกไม่สำเร็จ

ตัวอย่าง:

- ส่งผลงานเข้าประกวดครบ แต่ไม่เข้ารอบ
- ส่งวิทยานิพนธ์แล้ว แต่ต้องแก้

ในกรณีเหล่านี้ Project อาจ Completed ในเชิง process แต่ outcome อาจเป็น `Not selected`, `Revision required` หรือผลลัพธ์ภายนอกอื่น

> Projects are evaluated by truth, not by success.

JenOS ไม่ตัดสินว่า "ดี" หรือ "แย่" แต่บันทึกว่าเกิดอะไรขึ้น สิ้นสุดอย่างไร และเพราะเหตุใด

## Non-decision

OWN-010 ตัดสินความหมายของการสิ้นสุด ไม่ใช่รายการ State ทั้งหมด

ชื่อ State จริง เช่น Completed, Archived, Cancelled, Transferred ควรถูกยืนยันอีกครั้งใน Sprint 0.2 หลังผ่าน Domain Discovery และตัวอย่างจริง

## Owner Rationale

ถ้านิยาม Completed ผิด JenOS จะเริ่มโกหกผู้ใช้ทันที เพราะเหตุการณ์เช่นส่งไฟล์ หมด deadline หรือไม่มี task ค้าง ไม่ได้เท่ากับ Project เสร็จ

การแยก process ออกจาก outcome ช่วยให้ระบบยุติธรรมกับความจริง เช่น AI Spark ที่ส่งครบตามเป้าหมายแต่ไม่เข้ารอบควรถือว่า process completed ไม่ใช่ failed

Confidence: Experimental

## Consequences

- Completed, Cancelled, Archived และ Transferred เป็น end modes เชิงความหมายที่ต้องมาจาก user judgment
- ระบบห้าม mark Project เป็น Completed จาก event อัตโนมัติ
- ระบบห้ามถือว่าไม่มี Action ค้างเท่ากับ Completed
- ระบบควรแยก process completion ออกจาก external outcome
- ระบบไม่ควรใช้ `Failed` หรือ `Abandoned` เป็นการตีความอัตโนมัติ
- End state taxonomy ยังต้องผ่าน Domain Discovery ใน Sprint 0.2
- OWN-011 เรื่อง Pause, Stop และ Scope Reduction ต้องใช้หลักนี้เป็นฐาน

## Documents to Revise

Core Concepts, Domain Model, ADR-0002, Today Experience

## Open Follow-up Questions

- Archived เป็น State, visibility mode, หรือทั้งสองอย่าง?
- Process outcome และ external outcome ควรถูกบันทึกเป็น concept แยกกันหรือไม่?
