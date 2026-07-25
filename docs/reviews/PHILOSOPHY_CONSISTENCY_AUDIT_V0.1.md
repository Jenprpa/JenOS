# Philosophy Consistency Audit v0.1

Audit นี้ตรวจความสอดคล้องของเอกสาร Sprint 0 โดยไม่แก้เอกสารต้นฉบับ

## Files Reviewed

- `README.md`
- `docs/philosophy/JENOS_MANIFESTO_V0.1.md`
- `docs/philosophy/JENOS_CONSTITUTION_V0.1.md`
- `docs/philosophy/OPERATING_PRINCIPLES_V0.1.md`
- `docs/product/PRODUCT_VISION_V0.1.md`
- `docs/product/CORE_CONCEPTS_V0.1.md`
- `docs/product/TODAY_EXPERIENCE_V0.1.md`
- `docs/product/NON_GOALS_V0.1.md`
- `docs/architecture/DOMAIN_MODEL_V0.1.md`
- `docs/architecture/SYSTEM_CONTEXT_V0.1.md`
- `docs/decisions/ADR-0001-JENOS-AS-DECISION-SUPPORT-SYSTEM.md`
- `docs/decisions/ADR-0002-PROJECT-AND-STATE-CENTERED-MODEL.md`
- `docs/sprints/SPRINT_0_FOUNDATION.md`

## Overall Finding

เอกสารมีแกนหลักสอดคล้องกันสูง: JenOS เป็น Personal Decision Support System ที่ใช้ Project, State, Context และ Memory เป็นศูนย์กลาง โดยปฏิเสธ To-do App, Dashboard dump, Productivity scoring และ AI authority

ยังไม่พบ Critical contradiction ที่ทำให้ Sprint 0 ใช้ต่อไม่ได้ แต่มี Major ambiguity หลายจุดที่ควรตัดสินใจก่อน Domain Discovery

## Audit Items

### AUD-001: Decision Support Identity

- Severity: Minor
- เอกสารที่เกี่ยวข้อง: README, Product Vision, ADR-0001, System Context
- สอดคล้องกัน: ทุกไฟล์นิยาม JenOS เป็นระบบสนับสนุนการตัดสินใจ ไม่ใช่ Task Management
- ขัดแย้งกัน: ไม่พบ
- ช่องว่าง: ยังไม่มี boundary ชัดว่าระบบ "แนะนำ" ได้ถึงระดับใดก่อนกลายเป็นการตัดสินใจแทน
- ความเสี่ยง: Future Today หรือ AI flow อาจใช้ภาษาสั่งการเกินสิทธิ์
- ข้อเสนอแนะ: เพิ่ม decision-rights model ว่า Suggestion, Recommendation, Warning และ Decision ต่างกันอย่างไร

### AUD-002: Project and State Centered Model

- Severity: Major
- เอกสารที่เกี่ยวข้อง: Manifesto, Core Concepts, Domain Model, ADR-0002
- สอดคล้องกัน: Project และ State ถูกวางเป็นศูนย์กลาง และ Task ถูกลดบทบาทเป็น Action ที่ช่วยขยับ Project
- ขัดแย้งกัน: ไม่พบว่ามี Task เป็นศูนย์กลาง
- ช่องว่าง: Project ถูกนิยามกว้างจนเกือบทุกสิ่งอาจเป็น Project; State อาจเป็นของ Project หรือ Concept สำคัญอื่น
- ความเสี่ยง: Domain Discovery อาจสร้าง object เยอะเกินหรือทำให้ผู้ใช้ต้อง classify ทุกอย่าง
- ข้อเสนอแนะ: กำหนด Project qualification heuristic เบื้องต้น เช่น ต้องมี direction, state, owner attention, memory หรือ consequence

### AUD-003: Today Experience vs Autonomy

- Severity: Major
- เอกสารที่เกี่ยวข้อง: Today Experience, Constitution, ADR-0001
- สอดคล้องกัน: Today ระบุชัดว่าไม่ใช่ Dashboard และไม่ควรเสนอคำตอบเดียวโดยไม่อธิบายเหตุผล
- ขัดแย้งกัน: คำว่า "สิ่งที่ควรขยับวันนี้" อาจถูกตีความเป็นคำสั่ง หากไม่มี affordance ให้ผู้ใช้ปฏิเสธหรือแก้เหตุผล
- ช่องว่าง: ยังไม่มี rule ว่า Today ต้องแสดงทางเลือกหรือระดับ confidence อย่างไร
- ความเสี่ยง: Guidance อาจกลายเป็น AI Authority โดยไม่ตั้งใจ
- ข้อเสนอแนะ: เพิ่มหลักว่า Today ต้องแสดงเป็น recommendation พร้อม reason, confidence, alternatives และ option to dismiss

### AUD-004: Life Before Productivity

- Severity: Major
- เอกสารที่เกี่ยวข้อง: Manifesto, Constitution, Operating Principles, Today Experience, Product Vision
- สอดคล้องกัน: ทุกไฟล์ยืนยันว่าระบบต้องไม่ยก productivity เหนือสุขภาพ
- ขัดแย้งกัน: ไม่มี contradiction โดยตรง
- ช่องว่าง: ยังไม่ชัดว่าหลักนี้เปลี่ยน behavior จริงอย่างไรเมื่อสุขภาพขัดกับ commitment หรือ deadline
- ความเสี่ยง: หลักนี้อาจเหลือเป็นคำประกาศ แต่ ranking/recommendation จริงยังเลือกงาน deadline เสมอ
- ข้อเสนอแนะ: เพิ่ม acceptance rules เช่น ระบบต้องเสนอ reduce scope, defer, ask for help, or rest เมื่อ energy/health ต่ำ

### AUD-005: Memory, History, Log, Event, Timeline

- Severity: Major
- เอกสารที่เกี่ยวข้อง: Manifesto, Core Concepts, Domain Model, System Context, Sprint 0
- สอดคล้องกัน: ทุกไฟล์ให้ความสำคัญกับการย้อนกลับและเหตุผล
- ขัดแย้งกัน: ไม่ขัดแย้ง แต่คำเหล่านี้ทับซ้อนกันมาก
- ช่องว่าง: Memory ต่างจาก History หรือ Log อย่างไรยังไม่ชัด; Event กับ Log ยังเป็น open question
- ความเสี่ยง: ระบบอาจเก็บทุกอย่างเป็น log จำนวนมากโดยไม่เกิด decision value
- ข้อเสนอแนะ: เสนอ working split: Event = สิ่งที่เกิด, Log = record ดิบ, History = ลำดับที่ตรวจสอบได้, Memory = สิ่งที่มีความหมายต่อการตัดสินใจ

### AUD-006: Waiting vs Blocked

- Severity: Minor
- เอกสารที่เกี่ยวข้อง: Constitution, Operating Principles, Core Concepts, Domain Model, Today Experience
- สอดคล้องกัน: Waiting ถูกแยกจาก Failure และต้องมี reason/review date
- ขัดแย้งกัน: Domain Model บอก Waiting may become Blocker แต่เกณฑ์การเปลี่ยนยังไม่ชัด
- ช่องว่าง: ยังไม่ชัดว่า Waiting ที่ไม่มี owner หรือเกิน review date จะถูกยกระดับอย่างไร
- ความเสี่ยง: Waiting อาจกลายเป็นหลุมดำ หรือทุก Waiting กลายเป็น Blocked เร็วเกินไป
- ข้อเสนอแนะ: เพิ่ม rule เบื้องต้น: Waiting คือ dependency ที่ยังคาดว่าจะมา; Blocked คือ dependency ที่ทำให้ next meaningful movement ทำไม่ได้

### AUD-007: Truth vs Emotional Safety

- Severity: Major
- เอกสารที่เกี่ยวข้อง: Constitution, Today Experience, Non-goals
- สอดคล้องกัน: ระบบต้องไม่ซ่อนความเสี่ยง และต้องไม่ทำให้ผู้ใช้รู้สึกผิด
- ขัดแย้งกัน: มีแรงตึงโดยธรรมชาติ ไม่ใช่ contradiction
- ช่องว่าง: ยังไม่มี tone/risk presentation rule
- ความเสี่ยง: ถ้าพูดตรงเกินไปอาจกลายเป็น guilt design; ถ้านุ่มเกินไปอาจซ่อน risk
- ข้อเสนอแนะ: เพิ่ม principle ว่า risk ต้องถูกแสดงแบบ actionable, non-judgmental และแยก controllable/uncontrollable

### AUD-008: Memory vs Privacy

- Severity: Major
- เอกสารที่เกี่ยวข้อง: Constitution, Operating Principles, Domain Model, System Context
- สอดคล้องกัน: ระบบต้องรักษาประวัติและปกป้อง privacy
- ขัดแย้งกัน: "ห้ามลบเหตุผลสำคัญอย่างเงียบ ๆ" อาจตึงกับสิทธิ์ลบข้อมูล
- ช่องว่าง: ยังไม่มี retention/deletion philosophy
- ความเสี่ยง: การออกแบบ history อาจละเมิด privacy หรือการลบข้อมูลอาจทำลาย explainability
- ข้อเสนอแนะ: เพิ่ม owner decision เรื่อง deletion modes เช่น delete, archive, redact, private note, tombstone

### AUD-009: Data Burden

- Severity: Minor
- เอกสารที่เกี่ยวข้อง: Constitution, Operating Principles, Non-goals, System Context
- สอดคล้องกัน: ระบบต้องลด duplicate entry และไม่บังคับกรอกทุกกิจกรรม
- ขัดแย้งกัน: Context awareness ต้องการข้อมูลมาก แต่ non-goal ห้ามกรอกเกินจำเป็น
- ช่องว่าง: ยังไม่มี minimum viable capture rule
- ความเสี่ยง: Sprint ต่อไปอาจออกแบบ form หนักเกิน
- ข้อเสนอแนะ: ใช้ rule: ถ้าข้อมูลไม่ช่วย Current State, Next Action หรือ Blocker ห้ามบังคับกรอก

### AUD-010: Architecture Non-choices

- Severity: Editorial
- เอกสารที่เกี่ยวข้อง: README, System Context, Sprint 0
- สอดคล้องกัน: ยังไม่เลือก database/auth/framework และเริ่มจาก Modular Monolith เป็นสมมติฐานที่เปลี่ยนได้
- ขัดแย้งกัน: ไม่พบ
- ช่องว่าง: ไม่มี
- ความเสี่ยง: ต่ำ
- ข้อเสนอแนะ: คงสถานะ non-choice ไว้จนหลัง Domain Discovery

## Critical Findings

ไม่พบ Critical finding

## Major Findings

- Project และ State ยังมี boundary คลุมเครือ
- Memory/History/Log/Event/Timeline ทับซ้อนกัน
- Life before Productivity ยังต้องแปลงเป็น behavior ที่ทดสอบได้
- Guidance vs Autonomy ต้องมี decision-rights model
- Memory vs Privacy ต้องมี deletion/retention philosophy

