# Owner Decision Session v0.1

เอกสารนี้จัด Decision เป็น session สั้น ๆ เพื่อให้เจ้าของระบบตอบเป็นชุด โดยเรียงตาม dependency

## Session 1: Identity and Project Boundary

- Decisions Included: OWN-001, OWN-002
- Current Progress: OWN-001 Decided; OWN-002 Decided; Session 1 Completed
- Why These Belong Together: ต้องรู้ก่อนว่าอะไรเป็น Project และอะไรเป็น Area/Role/Context จึงจะทำ Domain Discovery ได้
- Required Reading: Owner Decision Inventory, OWN-001 brief, OWN-002 brief, Core Concepts, Philosophy Ambiguities
- Decision Questions:
  - อะไรทำให้สิ่งหนึ่งเป็น Project? Decided: Hybrid C + D — Bounded Responsibility with Flexible Classification
  - JenOS ต้องแยก Project, Area, Role, Context, Responsibility หรือไม่? Decided: Lightweight conceptual separation between Core Entities and Supporting Concepts
- Available Options: Outcome-based, Managed Change, Bounded Responsibility, Flexible Classification; และ hierarchy แบบ minimal หรือ explicit
- Recommended Order: Session 1 completed; proceed to Session 2
- Expected Outputs: Project qualification heuristic, initial classification rule

## Session 2: State and Completion

- Decisions Included: OWN-003, OWN-010
- Current Progress: OWN-003 Decided; OWN-010 Decided; Session 2 Completed
- Why These Belong Together: State ownership และ Completed/Closed/Archived เป็น lifecycle เดียวกัน
- Required Reading: OWN-003 brief, OWN-010 brief, Domain Model, ADR-0002
- Decision Questions:
  - State change ใดต้อง confirm? Decided: Observed / Suggested / Confirmed State model
  - Completed หมายถึงอะไร? Decided: Completion is a human judgment, not an event; multiple end modes remain provisional for Sprint 0.2
- Available Options: observed/suggested/confirmed state; Completed/Closed/Cancelled/Transferred/Archived
- Recommended Order: Session 2 completed; proceed to Session 3
- Expected Outputs: State authority rule, completion vocabulary

## Session 3: Memory and Privacy

- Decisions Included: OWN-004, OWN-009
- Current Progress: OWN-004 Decided; OWN-009 Decided; Session 3 Completed
- Why These Belong Together: นิยาม memory/history ต้อง balance กับ deletion/redaction
- Required Reading: OWN-004 brief, OWN-009 brief, Constitution, Tension Map
- Decision Questions:
  - Memory, History, Log, Event ต่างกันอย่างไร? Decided: Observation/Event/Log/History/Memory are distinct; Memory is curated, not accumulated
  - ผู้ใช้ลบหรือ redact อะไรได้บ้าง? Decided: Delete, Redact, Hide from AI, Archive, Export; derived knowledge must never become undeletable
- Available Options: raw log vs meaningful memory; delete/redact/archive/tombstone/hide from AI
- Recommended Order: Session 3 completed; proceed to Session 4
- Expected Outputs: Memory working definition, privacy/deletion philosophy

## Session 4: Guidance and Decision Rights

- Decisions Included: OWN-005, OWN-006
- Current Progress: OWN-005 Decided; OWN-006 Decided; Session 4 Completed
- Why These Belong Together: ต้องรู้ว่าใครมีสิทธิ์ทำอะไร ก่อนกำหนดภาษาคำแนะนำ
- Required Reading: OWN-005 brief, OWN-006 brief, Constitution, Operating Principles, Today Experience
- Decision Questions:
  - User/System/AI/External Sources มีอำนาจแค่ไหน? Decided: Authority follows accountability; AI influences but never owns decisions
  - ระบบควรใช้คำว่า ต้องทำ/ควรทำ/แนะนำ/อาจพิจารณา เมื่อใด? Decided: Inform/Explain/Suggest/Recommend/Warn language levels
- Available Options: decision-rights table, guidance language levels
- Recommended Order: Session 4 completed; proceed to Session 5
- Expected Outputs: Decision rights model, guidance language policy

## Session 5: Health and Human Capacity

- Decisions Included: OWN-007, OWN-008, OWN-011
- Current Progress: OWN-007 Decided; OWN-008 Decided; OWN-011 Decided; Session 5 Completed
- Why These Belong Together: Life before Productivity, Health vs Commitment และ Pause/Stop เป็น policy เดียวกัน
- Required Reading: OWN-007 brief, OWN-008 brief, OWN-011 brief, Tension Map, Review Scenarios
- Decision Questions:
  - Health/energy เปลี่ยน recommendation อย่างไร? Decided: Human Capacity before Productivity
  - เมื่อ health ชน commitment ระบบเสนออะไร? Decided: Capacity / Commitment / Consequence Trade-off
  - ระบบเสนอ pause/reduce/delegate/stop ได้เมื่อใด? Decided: AI may recommend continue options, but never stops a project
- Available Options: trade-off only, risk/flexibility model, escalation model
- Recommended Order: Session 5 completed; proceed to Sprint 0.2 Domain Discovery
- Expected Outputs: Health-aware behavior, escalation rule, stop/pause recommendation rule

## Session 6: AI Learning and Recommendations

- Decisions Included: OWN-012
- Why These Belong Together: ต้องมี decision-rights และ guidance language ก่อน จึงค่อยกำหนด learning จาก rejection
- Required Reading: OWN-012 brief, Scenario 10, Tension Map
- Decision Questions:
  - ระบบเรียนรู้อะไรได้จาก rejected recommendation?
  - การปฏิเสธหนึ่งครั้งควรกลายเป็น preference ถาวรหรือไม่?
- Available Options: no learning, explicit feedback only, temporary signal, pattern after repeated evidence
- Recommended Order: หลัง Session 4
- Expected Outputs: Rejection learning policy

## First Session to Answer

เจ้าของระบบควรเริ่ม **Sprint 0.2: Domain Discovery**

เหตุผล: Session 1-5 completed แล้ว และปรัชญาหลักของ JenOS เพียงพอสำหรับเปลี่ยนจากการคิดเชิงหลักการไปเป็นการพิสูจน์ด้วยเคสจริง
