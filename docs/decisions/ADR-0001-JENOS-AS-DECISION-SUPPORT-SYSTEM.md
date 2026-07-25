# ADR-0001: JenOS เป็น Decision Support System ไม่ใช่ Task Management System

## Status

Proposed

## Context

JenOS เริ่มจากความต้องการเข้าใจชีวิตและโครงการจำนวนมากที่เชื่อมโยงกัน ไม่ใช่จากความต้องการมีรายการงานค้างอีกชุดหนึ่ง

ระบบ To-do และ Task Management ทั่วไปมักเริ่มจากงานแต่ละชิ้น แล้วค่อยจัดกลุ่มหรือกำหนดวันครบกำหนด แต่ JenOS ต้องเริ่มจาก Project, State, Context, Memory, Constraint และ Human Capacity

ผู้ใช้ต้องการระบบที่ช่วยตอบว่า:

- ตอนนี้ควรให้ความสนใจกับอะไร
- เพราะเหตุใด
- อะไรควรขยับ
- อะไรกำลังรอ
- อะไรเป็นตัวขวาง
- อะไรเสี่ยงหากไม่จัดการ

## Decision

JenOS จะถูกนิยามเป็น **Personal Decision Support System** ไม่ใช่ Task Management System

Task หรือ Action อาจมีอยู่ได้ แต่ต้องเป็นผลลัพธ์ของการเข้าใจ Project และ State ไม่ใช่ศูนย์กลางของระบบ

## Rationale

การตัดสินใจนี้ช่วยให้ระบบ:

- โฟกัสที่ความหมายและบริบทของชีวิตจริง
- แยก Waiting ออกจาก Failure
- มอง Project เป็นหน่วยที่มี Memory และ Timeline
- ลดความเสี่ยงที่ระบบจะกลายเป็นรายการงานยาว ๆ
- ให้ความสำคัญกับสุขภาพและพลังงาน ไม่ใช่จำนวนงานที่เสร็จ

## Consequences

ผลที่ตามมา:

- เอกสารและโมเดลต้องเริ่มจาก Project, State, Context และ Memory
- Today Experience ต้องไม่แสดงรายการงานทั้งหมด
- Priority ต้องอธิบายด้วยเหตุผล ไม่ใช่แค่ Deadline
- AI suggestion ต้องเป็นคำแนะนำพร้อม rationale ไม่ใช่คำสั่ง

## Risks

- แนวคิดอาจดู abstract กว่า To-do App ทำให้ต้องอธิบายชัด
- ผู้ใช้อาจยังต้องการ Action ที่จับต้องได้ ระบบจึงต้องแปลง State เป็น Action อย่างระวัง
- หากออกแบบไม่ดี Decision Support อาจกลายเป็น Dashboard หนัก ๆ ได้

## Alternatives Considered

### Build a To-do App First

ปฏิเสธ เพราะจะทำให้ Task กลายเป็นศูนย์กลางตั้งแต่ต้น

### Build a Project Management App

ปฏิเสธในระยะนี้ เพราะเป้าหมายไม่ใช่การบริหารทีม องค์กร หรือการวัดผลงาน

### Build a Personal Knowledge Base

ยังไม่เลือก เพราะ JenOS ต้องขับเคลื่อนการตัดสินใจ ไม่ใช่เพียงเก็บข้อมูลอ้างอิง

## Open Questions

- Decision Support ควรถูกแสดงผ่าน Today, Review หรือ Project view ก่อน?
- Action ควรถูกบันทึกเมื่อใดจึงไม่ทำให้ระบบกลายเป็น Task Management?
