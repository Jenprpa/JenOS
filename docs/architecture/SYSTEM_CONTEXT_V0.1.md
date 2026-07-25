# System Context v0.1

เอกสารนี้อธิบายภาพรวมระบบ JenOS ในระดับแนวคิด ยังไม่เลือกฐานข้อมูล framework หรือ infrastructure จริง

## Initial Assumption

JenOS ควรเริ่มจาก Modular Monolith เป็นสมมติฐานเบื้องต้น

เหตุผล:

- ผู้ใช้เริ่มต้นมีคนเดียว
- Domain ยังต้องเรียนรู้จากการใช้งานจริง
- Microservices จะเพิ่มภาระก่อนมีความจำเป็น
- การแยก module ชัดเจนเพียงพอสำหรับ Sprint แรก ๆ

สมมติฐานนี้ยังเปลี่ยนได้เมื่อมีหลักฐานจริง

## Conceptual Layers

```text
Experience Layer
Decision Support Layer
Domain Layer
Memory and History Layer
Integration Layer
```

## Experience Layer

รับผิดชอบประสบการณ์ที่ผู้ใช้เห็นและโต้ตอบ เช่น Today, Project view หรือ Review flow ในอนาคต

ใน Sprint 0 ยังไม่ออกแบบ UI จริง และยังไม่สร้าง Dashboard

หน้าที่หลักในอนาคตคือแสดงสิ่งที่เกี่ยวข้องกับเวลานั้น โดยไม่ท่วมผู้ใช้ด้วยข้อมูลทั้งหมด

## Decision Support Layer

รับผิดชอบการช่วยตีความสถานการณ์ เช่น:

- อะไรควรได้รับความสนใจ
- อะไรควรขยับ
- อะไรกำลังรอ
- อะไรเป็น Risk หรือ Blocker
- เหตุผลของคำแนะนำคืออะไร
- ข้อมูลใดเป็น Fact, Assumption, Inference หรือ Unknown

Layer นี้ต้องไม่ตัดสินใจแทนผู้ใช้

## Domain Layer

รับผิดชอบ Concept หลัก เช่น Project, State, Decision, Waiting, Blocker, Person, Event, Risk, Energy และ Memory

Layer นี้ต้องป้องกันไม่ให้ Task กลายเป็นศูนย์กลางของระบบ

## Memory and History Layer

รับผิดชอบการรักษาประวัติ เช่น:

- State Change
- Decision
- Rationale
- Event
- Timeline
- Lesson
- Revision

Layer นี้ทำให้ระบบย้อนกลับและอธิบายได้

## Integration Layer

รับผิดชอบการเชื่อมต่อกับแหล่งข้อมูลภายนอกในอนาคต เช่น Drive, Calendar, Email หรือไฟล์เอกสาร

ใน Sprint 0 ยังไม่สร้าง integration จริง

Integration ต้องไม่กลายเป็นการดึงทุกอย่างเข้า Inbox กลางโดยไม่มีบริบท

## Explicit Non-choices

Sprint 0 ยังไม่เลือก:

- Database
- Authentication
- Frontend framework
- Deployment model
- AI provider integration
- Calendar หรือ Drive integration

## Architecture Guardrails

- หลีกเลี่ยง Microservices
- หลีกเลี่ยง Overengineering
- หลีกเลี่ยง Multi-tenant Architecture ก่อนมีเหตุผลจริง
- แยก module ตาม domain ไม่ใช่ตามเทคโนโลยี
- เก็บทางเลือกไว้จนกว่าจะมีหลักฐานจากการใช้งาน

## Open Questions

- Module boundary แรกควรแบ่งตาม layer หรือแบ่งตาม domain concept?
- Memory and History ควรเป็นแกนกลางตั้งแต่ต้นหรือเริ่มจากเอกสาร versioned?
- Integration ใดให้คุณค่าสูงสุดโดยไม่สร้าง Inbox กลาง?
