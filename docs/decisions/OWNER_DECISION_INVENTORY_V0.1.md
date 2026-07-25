# Owner Decision Inventory v0.1

Inventory นี้รวบรวม decision ที่ต้องให้เจ้าของ JenOS ตอบก่อน Sprint 0.2 — Domain Discovery

สถานะเริ่มต้นของทุก Decision คือ `Pending` จนกว่าเจ้าของระบบจะตอบอย่างชัดเจน

| Decision ID | Group | Question | Why It Matters | Affected Documents | Affected Future Design | Priority | Dependencies | Current Status |
|---|---|---|---|---|---|---|---|---|
| OWN-001 | Project Boundary | อะไรทำให้สิ่งหนึ่งเป็น Project? | ป้องกันทุกอย่างกลายเป็น Project และป้องกัน Hidden To-do App | Core Concepts, Domain Model, ADR-0002 | Project capture, Jen Graph, Today selection | Critical | None | Decided |
| OWN-002 | Identity and Scope / Project Boundary | JenOS ต้องแยก Project, Area, Role, Context, Responsibility หรือไม่? | กำหนดโครงคิดชีวิตจริงโดยไม่สร้าง hierarchy หนักเกิน | Core Concepts, Domain Model, Product Vision | Domain discovery taxonomy | Critical | OWN-001 | Decided |
| OWN-003 | State | State change ประเภทใดต้องยืนยันโดยผู้ใช้? | รักษา autonomy และ source of truth | Constitution, Operating Principles, Domain Model | State workflow, audit history | Critical | OWN-001 | Decided |
| OWN-004 | Memory and History | Memory, History, Log, Event, Decision, Observation, Lesson ต่างกันอย่างไร? | ลด Memory Without Meaning และเตรียม history model | Core Concepts, Domain Model, System Context | Memory model, review flow, summarization | Critical | OWN-001 | Decided |
| OWN-005 | Decision Rights | อำนาจของ User, System Rules, AI และ External Sources คืออะไร? | ป้องกัน AI Authority และ false certainty | Constitution, Operating Principles, Today Experience | Permissions, confirmation, undo | Critical | OWN-003, OWN-004 | Decided |
| OWN-006 | Recommendations | ระบบควรใช้ภาษา guidance ระดับใดและเมื่อใด? | ลด guilt language, over-warning และ recommendation fatigue | Today Experience, Constitution, Anti-patterns | Recommendation wording, warnings | High | OWN-005 | Decided |
| OWN-007 | Health and Human Capacity | Life before Productivity ต้องแสดงเป็น behavior ใด? | ทำให้สุขภาพมีผลจริง ไม่ใช่ decoration | Manifesto, Today Experience, Operating Principles | Health-aware recommendation | Critical | OWN-005 | Decided |
| OWN-008 | Health and Human Capacity | เมื่อ Health ขัดกับ Commitment ระบบควร balance อย่างไร? | เป็น tension สำคัญของชีวิตจริง | Tension Map, Today Experience, Core Concepts | Escalation, trade-off reasoning | Critical | OWN-007 | Decided |
| OWN-009 | Privacy and Deletion | ผู้ใช้ลบ, redact, hide from AI หรือ retain ข้อมูลได้อย่างไร? | balance History is Gold กับ Right to Forget | Constitution, Domain Model, System Context | Data retention, privacy modes | Critical | OWN-004, OWN-005 | Decided |
| OWN-010 | Completion and Stopping | Completed หมายถึงอะไร และต่างจาก Closed/Cancelled/Archived อย่างไร? | ป้องกัน mark เสร็จเพราะ task ว่าง | Core Concepts, Domain Model, ADR-0002 | State taxonomy, project lifecycle | High | OWN-003 | Decided |
| OWN-011 | Completion and Stopping | ระบบเสนอ Pause, Reduce Scope, Delegate, Defer, Stop, Archive ได้เมื่อใด? | ทำให้ระบบเสนอการวางลงอย่างมีเหตุผลได้ | Operating Principles, Today Experience | Stop/pause recommendation rules | High | OWN-005, OWN-007, OWN-010 | Decided |
| OWN-012 | AI Behavior | ระบบควรเรียนรู้อะไรจาก rejected recommendations? | ป้องกัน personalization ผิดและการตีความว่าผู้ใช้ไม่เชื่อฟัง | Tension Map, Scenarios, Constitution | Learning profile, feedback loop | Medium | OWN-005, OWN-006 | Pending |

## Deferred Candidates

Decision ที่อาจเลื่อนหลัง Sprint 0.2 ได้ หาก owner ต้องการใช้ real-life examples ก่อน:

- Confidence display เป็นตัวเลขหรือข้อความ
- Privacy levels หลายระดับตั้งแต่รุ่นแรกหรือไม่
- Project nesting ต้องมีทันทีหรือไม่
- Learning profile ให้ผู้ใช้แก้เองตั้งแต่รุ่นแรกหรือไม่
