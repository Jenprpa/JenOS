# Domain Model v0.1

เอกสารนี้อธิบาย Domain Model ระดับแนวคิดของ JenOS โดยยังไม่เลือกฐานข้อมูล และยังไม่สร้าง schema แบบตายตัว

## Model Center

ศูนย์กลางของ JenOS คือ:

```text
Project + State + Context + Memory
```

ไม่ใช่:

```text
Task
```

Task หรือ Action เป็นเพียงวิธีขยับ Project ไม่ใช่ตัวตนหลักของระบบ

## Core Objects

### Project

Project เป็นหน่วยหลักที่รวม Vision, Current State, Milestone, Waiting, Risk, Definition of Done และ Memory

### State

State อธิบายสภาพจริงของ Project หรือสิ่งสำคัญในระบบ เช่น Planning, Waiting, Blocked หรือ Reviewing

State Change ต้องมี timestamp, source และเหตุผลเท่าที่เป็นไปได้

### Context

Context คือข้อมูลแวดล้อมที่ทำให้ระบบเข้าใจว่าการขยับบางอย่างเหมาะหรือไม่เหมาะในเวลานั้น

### Memory

Memory รวมการตัดสินใจ เหตุผล เหตุการณ์ บทเรียน และการเปลี่ยนแปลง

### Decision

Decision คือจุดที่ผู้ใช้เลือกทิศทาง โดยต้องมี rationale, alternatives และ consequences เท่าที่จำเป็น

### Waiting และ Blocker

Waiting คือสิ่งที่กำลังรอ ส่วน Blocker คือสิ่งที่ขวางไม่ให้ Project เดินต่อ

Waiting ต้องไม่ถูกตีความเป็น Failure โดยอัตโนมัติ

### Person และ Role

Person คือคนที่เกี่ยวข้องกับ Project ส่วน Role คือบทบาทของคนนั้นในบริบทนั้น

### Event และ Timeline

Event คือสิ่งที่เกิดขึ้นและกลายเป็นหมุดใน Timeline

Timeline ทำให้ Project มีลำดับเหตุการณ์ ไม่ใช่แค่สถานะล่าสุด

### Risk

Risk คือสิ่งที่อาจทำให้ Project หรือชีวิตส่วนอื่นเสียหายหากไม่จัดการ

### Energy

Energy คือ human capacity ในช่วงเวลาหนึ่ง ใช้ประกอบการตัดสินใจว่า Action ใดเหมาะสม

## Conceptual Relationships

```text
Person --has role in--> Project
Project --has current--> State
Project --has--> Timeline
Timeline --contains--> Event
Project --has--> Memory
Memory --records--> Decision
Project --may have--> Waiting
Waiting --depends on--> Person / Event / Resource
Waiting --may become--> Blocker
Project --may have--> Risk
Risk --influences--> Today
Energy --constrains--> Action
Action --moves--> Project
```

## Data Classification

JenOS ควรแยกข้อมูลอย่างน้อยเป็น:

- Fact: ข้อมูลที่ยืนยันได้
- Assumption: สิ่งที่คาดไว้แต่ยังไม่ยืนยัน
- Inference: การตีความจากข้อมูล
- Unknown: สิ่งที่ยังไม่รู้

การแยกนี้สำคัญต่อความโปร่งใสของคำแนะนำ

## Not Yet Decided

ยังไม่ตัดสินใจ:

- Database
- Storage format
- Full schema
- State taxonomy สุดท้าย
- Permission model
- Integration architecture

## Open Questions

- Jen Graph ควรเริ่มจาก edge ชนิดใดก่อน?
- Memory ควรถูกออกแบบเป็น event-sourced log หรือเอกสาร versioned?
- Action ควรเป็น object ถาวรหรือเป็น suggestion ชั่วคราว?
