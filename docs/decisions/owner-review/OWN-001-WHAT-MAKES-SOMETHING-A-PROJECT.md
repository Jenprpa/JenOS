# OWN-001: What Makes Something a Project?

## Decision ID

OWN-001

## Decision Title

What Makes Something a Project?

## Status

Decided

## Context

เอกสาร Sprint 0 วาง Project เป็นศูนย์กลาง แต่ review พบว่า Project ถูกนิยามกว้างจนเกือบทุกสิ่งอาจกลายเป็น Project

## Why This Decision Matters

ถ้าไม่มี boundary ระบบอาจบวมและบังคับให้ผู้ใช้ classify ชีวิตมากเกินไป ถ้า boundary แคบเกินไป ระบบจะเสีย context สำคัญ

## Evidence from Existing Documents

- Core Concepts: Project คือหน่วยหลักที่มีทิศทาง สถานะ บริบท ความทรงจำ และผลลัพธ์ที่ต้องการ
- Domain Model: ศูนย์กลางคือ Project + State + Context + Memory
- Philosophy Audit: Project boundary เป็น Major finding
- Scenario 12: รถอาจเป็น Project หรือ Context

## Decision Question

อะไรทำให้สิ่งหนึ่งมีสถานะเป็น Project ใน JenOS?

## Options

- Option A: Outcome-based — เป็น Project เมื่อมีผลลัพธ์ที่ต้องการและถือว่าเสร็จได้
- Option B: Managed Change — เป็น Project เมื่อผู้ใช้ต้องบริหารการเปลี่ยนแปลง แม้ไม่มีจุดจบชัดเจน
- Option C: Bounded Responsibility — เป็น Project เมื่อมีขอบเขต ความรับผิดชอบ State และ Decision ที่ต้องติดตาม
- Option D: Flexible Classification — ผู้ใช้กำหนดเอง แต่ระบบเสนอ classification จากลักษณะข้อมูล

## Trade-offs

- Option A ชัดและง่ายต่อ Completion แต่ life areas เช่น สุขภาพ/การเงินอาจไม่เข้า
- Option B รองรับชีวิตจริง แต่เสี่ยงทำให้ทุกอย่างเป็น Project
- Option C สมดุลระหว่างขอบเขตกับความยืดหยุ่น แต่ต้องนิยาม responsibility
- Option D เคารพเจ้าของระบบ แต่ระบบอาจคาดเดาไม่สม่ำเสมอถ้าไม่มี heuristic

## Case Analysis

- สุขภาพ: มักเป็น Area หรือ Managed Change; episode เช่น "ตรวจสุขภาพปีนี้" อาจเป็น Project
- การเงิน: มักเป็น Area; "ปิดหนี้ X" หรือ "วางแผนงบเทอมนี้" เป็น Project
- รถยนต์: มักเป็น Area/Resource/Context; "ซ่อมรถก่อนเดินทาง" เป็น Project
- การสอนรายวิชา: อาจเป็น Project หรือ Area ตามภาคเรียน
- นักเรียนหนึ่งคน: มักเป็น Person/Context; กรณีดูแลโครงงานเฉพาะอาจเป็น Project
- ความสัมพันธ์: มักเป็น Context/Area; crisis หรือ event เฉพาะอาจเป็น Project
- การเรียนปริญญา: Project ใหญ่หรือ Area พร้อม sub-projects
- งานแข่งขันหนึ่งรายการ: Project ชัด
- ชีวิตโดยรวม: ไม่ควรเป็น Project เดียว อาจเป็น system context

## Risk of No Decision

Domain Discovery จะจับทุกอย่างเป็น Project หรือเลี่ยงการจับ life areas สำคัญจน context หาย

## AI Recommendation

แนะนำ Option C + D: ใช้ Bounded Responsibility เป็น heuristic กลาง และให้ผู้ใช้ override classification ได้

## Owner Decision

Selected Option: Hybrid C + D — Bounded Responsibility with Flexible Classification

Project คือหน่วยของการเปลี่ยนแปลงหรือผลลัพธ์ที่ผู้ใช้ต้องบริหาร ซึ่งมีขอบเขต มีสถานะ มีการตัดสินใจ มีความทรงจำ และต้องติดตามต่อเนื่อง

JenOS สามารถเสนอให้สิ่งหนึ่งเป็น Project ได้ แต่ผู้ใช้เป็นผู้ตัดสินใจขั้นสุดท้าย ห้ามระบบเปลี่ยนสิ่งหนึ่งให้เป็น Project โดยอัตโนมัติ

## Project Criteria

JenOS ใช้เกณฑ์ต่อไปนี้ในการประเมินว่าสิ่งหนึ่งควรเป็น Project หรือไม่:

1. มีสิ่งที่ต้องการให้เปลี่ยนแปลงหรือเกิดขึ้น
2. ต้องมีการตัดสินใจหรือติดตามหลายครั้ง
3. มีขอบเขตที่แยกจากเรื่องอื่นได้
4. มีสถานะหรือความคืบหน้าที่มีความหมาย

เกณฑ์เหล่านี้เป็นแนวทาง ไม่ใช่กฎตายตัว ไม่จำเป็นต้องครบทุกข้อ แต่ถ้าขาดเกือบทั้งหมด สิ่งนั้นมักไม่ควรถูกจัดเป็น Project

## Classification Guardrail

Person, Role, Area, Resource และ Context ไม่ควรถูกเปลี่ยนเป็น Project เพียงเพราะมีข้อมูลหรือกิจกรรมเกี่ยวข้อง

สิ่งเหล่านี้สามารถมี Project เชื่อมโยงอยู่รอบตัวได้ เช่น:

```text
Person: นักเรียน A
Project: ช่วยแก้ปัญหาการขาดเรียนของนักเรียน A
```

```text
Area: สุขภาพ
Project: ปรับเวลานอนเดือนสิงหาคม
```

```text
Role: ครูผู้สอน
Project: จัดการเรียนรู้ชีววิทยา 1 ภาคเรียนที่ 1/2569
```

Principle:

> People are never projects.
>
> Projects exist around people, not instead of people.

Additional principle:

> Project should emerge, not be forced.

JenOS ไม่ควรบังคับให้ผู้ใช้สร้าง Project ตั้งแต่แรก หากผู้ใช้เพียงจดว่า "รถมีเสียงดัง" ระบบยังไม่ต้องสร้าง Project แต่เมื่อเริ่มมีการนัดอู่ การตัดสินใจ ค่าใช้จ่าย หรือการติดตาม ระบบจึงค่อยเสนอว่าเรื่องนี้อาจกำลังกลายเป็น Project และถามผู้ใช้ก่อนสร้าง

## Owner Rationale

Outcome-based อย่างเดียวไม่เหมาะกับชีวิตจริงของ Jen เพราะเรื่องสำคัญหลายเรื่องไม่มีวันเสร็จชัดเจน เช่น สุขภาพ การเงิน หรืองานสอน แต่การปล่อยให้ทุกอย่างเป็น Project จะทำให้ JenOS เต็มไปด้วย Project และกลายเป็นภาระ

Hybrid C + D ทำให้ Project มี boundary พอสำหรับ Domain Model แต่ยังเคารพการตัดสินใจของเจ้าของระบบและชีวิตจริงที่เปลี่ยนได้

Confidence: Experimental

## Consequences

- Project ไม่เท่ากับ Everything
- JenOS ต้องรองรับ entity หลายชนิด เช่น Person, Role, Area, Resource, Project, Action, Decision, Context และ Memory
- Project เป็นหนึ่งใน entity เหล่านั้น ไม่ใช่ภาชนะของทุกอย่าง
- Domain Discovery ต้องแยก Person, Role, Area, Resource และ Context ออกจาก Project ตั้งแต่ต้น
- JenOS สามารถเสนอ classification ได้ แต่ต้องอธิบายเหตุผลและรอ owner confirmation
- หลักนี้ต้องถูกทดสอบกับสถานการณ์จริงใน Sprint 0.2

## Documents to Revise

Core Concepts, Domain Model, Product Vision, Today Experience, ADR-0002

## Open Follow-up Questions

- Project nesting จำเป็นในรุ่นแรกหรือไม่?
- หลัก "Project should emerge, not be forced" ควรถูกแยกเป็น OWN-001A หรือรวมเป็น consequence ของ OWN-001?
