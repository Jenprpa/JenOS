# Philosophy Proposed Revisions v0.1

ข้อเสนอนี้ยังไม่แก้เอกสารต้นฉบับ เป็นรายการให้เจ้าของระบบตรวจและอนุมัติก่อน

## PHIL-001

- Affected File: `docs/product/CORE_CONCEPTS_V0.1.md`
- Current Problem: Project ถูกนิยามกว้างจนทุกสิ่งอาจเป็น Project
- Proposed Change: เพิ่มหัวข้อ "Project Qualification Heuristic" ว่าสิ่งหนึ่งควรเป็น Project เมื่อมี state ที่ต้องติดตาม, consequence, memory หรือ decision ข้ามเวลา
- Reason: ลด risk ที่ระบบจะบวมและบังคับ classify ชีวิตเกินจำเป็น
- Impact: ช่วย Sprint 0.2 Domain Discovery
- Risk: อาจทำให้บาง life area ถูกลดเป็น context เร็วเกินไป
- Priority: High
- Requires Owner Decision: Yes

## PHIL-002

- Affected File: `docs/architecture/DOMAIN_MODEL_V0.1.md`
- Current Problem: Memory, History, Log, Event และ Timeline ทับซ้อนกัน
- Proposed Change: เพิ่ม working distinction: Event = สิ่งที่เกิด, Log = record ดิบ, History = ลำดับตรวจสอบได้, Memory = สิ่งที่มีความหมายต่อ decision
- Reason: ป้องกัน Memory Without Meaning
- Impact: ทำให้ architecture reasoning ชัดขึ้น
- Risk: อาจนิยามเร็วเกินไปถ้ายังไม่มีตัวอย่างจริงพอ
- Priority: High
- Requires Owner Decision: Yes

## PHIL-003

- Affected File: `docs/product/TODAY_EXPERIENCE_V0.1.md`
- Current Problem: Today ยังไม่ได้ระบุ decision-rights หรือวิธีปฏิเสธคำแนะนำ
- Proposed Change: เพิ่มหลักว่า Today recommendations ต้องมี reason, confidence/uncertainty, alternatives และผู้ใช้ต้อง dismiss/edit ได้
- Reason: รักษา autonomy และป้องกัน AI Authority
- Impact: เป็น guardrail สำคัญสำหรับ UI/prototype ในอนาคต
- Risk: อาจทำให้ recommendation ดูหนักเกินถ้าแสดงละเอียดทุกกรณี
- Priority: High
- Requires Owner Decision: Yes

## PHIL-004

- Affected File: `docs/philosophy/OPERATING_PRINCIPLES_V0.1.md`
- Current Problem: Life before Productivity ยังเป็นหลักใหญ่ แต่ behavior ยังไม่ชัด
- Proposed Change: เพิ่ม principle ว่าเมื่อ health/energy ต่ำ ระบบต้องเสนอ reduce scope, pause, rest, ask for help หรือ minimum viable action
- Reason: ทำให้หลักนี้ทดสอบได้
- Impact: ลด Health Decoration
- Risk: ต้องระวังไม่ให้ระบบ paternalistic
- Priority: High
- Requires Owner Decision: Yes

## PHIL-005

- Affected File: `docs/philosophy/JENOS_CONSTITUTION_V0.1.md`
- Current Problem: Memory/History อาจตึงกับ privacy และ deletion rights
- Proposed Change: เพิ่ม section "Memory and Privacy" ระบุว่าผู้ใช้ต้องควบคุม visibility, redaction, deletion หรือ archival ของข้อมูลส่วนตัวได้
- Reason: ป้องกันการรักษาประวัติแบบละเมิด privacy
- Impact: ให้กรอบก่อนออกแบบ storage
- Risk: อาจลด explainability หากลบข้อมูลสำคัญ
- Priority: High
- Requires Owner Decision: Yes

## PHIL-006

- Affected File: `docs/product/TODAY_EXPERIENCE_V0.1.md`
- Current Problem: "สิ่งที่ควรขยับวันนี้" อาจกลายเป็น list งาน
- Proposed Change: เพิ่ม anti-pattern local ว่า section นี้ต้องจำกัดจำนวนและต้องอธิบาย reason/impact/energy fit
- Reason: ป้องกัน Hidden To-do App
- Impact: ช่วยออกแบบ prototype ไม่หลุด
- Risk: ยังต้องตัดสินใจจำนวนรายการ
- Priority: Medium
- Requires Owner Decision: Yes

## PHIL-007

- Affected File: `docs/product/CORE_CONCEPTS_V0.1.md`
- Current Problem: Waiting และ Blocked แยกกันแล้วแต่เกณฑ์เปลี่ยนสถานะยังไม่ชัด
- Proposed Change: เพิ่ม working rule ว่า Waiting คือ dependency ที่คาดว่าจะมา; Blocked คือ dependency ที่ทำให้ next meaningful movement ทำไม่ได้
- Reason: ใช้ทดสอบ scenario รอผู้อื่น
- Impact: ลด ambiguity ใน Domain Discovery
- Risk: บางกรณีอาจเป็นทั้ง Waiting และ Blocked
- Priority: Medium
- Requires Owner Decision: Yes

## PHIL-008

- Affected File: `README.md`
- Current Problem: README ยังบอก Sprint ปัจจุบันเป็น Sprint 0 หลังทำ Sprint 0.1 review
- Proposed Change: หลังอนุมัติ review ให้ปรับ README เพิ่ม link ไป Sprint 0.1 และสถานะ review
- Reason: เอกสาร root จะสะท้อนสถานะล่าสุด
- Impact: navigation ดีขึ้น
- Risk: ต่ำ
- Priority: Medium
- Requires Owner Decision: No

## PHIL-009

- Affected File: `docs/philosophy/OPERATING_PRINCIPLES_V0.1.md`
- Current Problem: ยังไม่มี explicit rule เรื่อง Truth vs Emotional Safety
- Proposed Change: เพิ่ม rule ว่า risk ต้องแสดงแบบ factual, actionable, non-judgmental และแยก controllable/uncontrollable
- Reason: ป้องกัน guilt design โดยไม่ซ่อนความจริง
- Impact: ช่วยกำกับภาษาในอนาคต
- Risk: ต้องออกแบบ tone ให้ไม่อ่อนจน risk หาย
- Priority: Medium
- Requires Owner Decision: Yes

## PHIL-010

- Affected File: `docs/architecture/SYSTEM_CONTEXT_V0.1.md`
- Current Problem: Modular Monolith เป็น assumption ที่ดี แต่ยังไม่เชื่อมกับ philosophy review
- Proposed Change: เพิ่มเหตุผลว่าการไม่เลือกเทคโนโลยีเร็วเกินไปช่วยปกป้อง domain learning และลด burden
- Reason: เชื่อม architecture กับ constitution
- Impact: เพิ่มความสอดคล้อง
- Risk: ต่ำ
- Priority: Low
- Requires Owner Decision: No

