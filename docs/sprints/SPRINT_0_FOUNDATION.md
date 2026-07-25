# Sprint 0: Foundation

Sprint 0 มีเป้าหมายเพื่อวางรากฐานทางปรัชญา แนวคิดผลิตภัณฑ์ และสถาปัตยกรรมระดับแนวคิดของ JenOS

Sprint นี้ยังไม่สร้าง Dashboard, To-do UI, database, authentication หรือ framework ขนาดใหญ่

## Goal

สร้างเอกสาร foundation ที่ตอบได้ว่า:

- JenOS คืออะไร
- JenOS ไม่ใช่อะไร
- JenOS เชื่ออะไร
- JenOS ต้องปกป้องอะไร
- Concept หลักของ domain คืออะไร
- ทำไม Project และ State จึงเป็นศูนย์กลาง
- Today Experience ควรทำหน้าที่อะไร
- สถาปัตยกรรมควรเริ่มคิดอย่างไรโดยไม่ overengineer

## Created Documents

### Philosophy

- `docs/philosophy/JENOS_MANIFESTO_V0.1.md`
- `docs/philosophy/JENOS_CONSTITUTION_V0.1.md`
- `docs/philosophy/OPERATING_PRINCIPLES_V0.1.md`

### Product

- `docs/product/PRODUCT_VISION_V0.1.md`
- `docs/product/CORE_CONCEPTS_V0.1.md`
- `docs/product/TODAY_EXPERIENCE_V0.1.md`
- `docs/product/NON_GOALS_V0.1.md`

### Architecture

- `docs/architecture/DOMAIN_MODEL_V0.1.md`
- `docs/architecture/SYSTEM_CONTEXT_V0.1.md`

### Decisions

- `docs/decisions/ADR-0001-JENOS-AS-DECISION-SUPPORT-SYSTEM.md`
- `docs/decisions/ADR-0002-PROJECT-AND-STATE-CENTERED-MODEL.md`

### Root

- `README.md`

## Definition of Done

- [x] มี JenOS Manifesto v0.1
- [x] มี JenOS Constitution v0.1
- [x] มี Operating Principles v0.1
- [x] มี Product Vision
- [x] มี Core Concepts
- [x] มี Today Experience
- [x] มี Non-goals
- [x] มี Domain Model ระดับแนวคิด
- [x] มี System Context
- [x] มี ADR อย่างน้อยสองฉบับ
- [x] README อธิบายตัวตนของโครงการได้
- [x] ไม่มีการสร้าง Dashboard หรือ To-do UI
- [x] ไม่มีการเลือกเทคโนโลยีโดยไม่มีเหตุผล
- [x] ไม่มีการ Hard-code Workflow ที่ยังไม่ได้รับการตรวจสอบ
- [x] เอกสารทั้งหมดเชื่อมโยงถึงกัน
- [x] มีหัวข้อ Open Questions สำหรับสิ่งที่ยังต้องตัดสินใจ

## Consistency Checks

- Project และ State ถูกวางเป็นศูนย์กลางใน Manifesto, Product Vision, Domain Model และ ADR-0002
- Decision Support ถูกวางเป็นตัวตนหลักใน README, Product Vision และ ADR-0001
- Today ถูกนิยามเป็นประสบการณ์ช่วยตัดสินใจ ไม่ใช่ Dashboard หรือ To-do List
- Waiting ถูกแยกจาก Failure ใน Constitution, Operating Principles, Core Concepts และ Today
- AI suggestion ถูกจำกัดไม่ให้กลายเป็นข้อเท็จจริงโดยอัตโนมัติ

## Open Questions

- Sprint 1 ควรเริ่มจากเอกสารตัวอย่าง Project จริง หรือ prototype แบบ file-based?
- Jen Graph ควรเริ่มจาก relation ชนิดใดก่อน?
- State taxonomy ควรเริ่มเล็กแค่ไหน?
- Today ควรมี scoring/ranking หรือควรเริ่มจาก reasoning แบบอธิบายได้ก่อน?
- Memory ควรเก็บแบบ event log, markdown log หรือ hybrid?
