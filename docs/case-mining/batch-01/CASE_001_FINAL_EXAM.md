# Case #001: ออกข้อสอบปลายภาค

## Case Header

```text
Case ID: CASE-001
Case Name: ออกข้อสอบปลายภาค
Batch: Sprint 0.2 / Batch 1
Source: docs/reviews/CASE_MINING_BACKLOG_V0.1.md, item 1
Real-life Context: งานครู / การประเมินผล / เอกสารส่งมอบ
```

## Reality

Facts from repository/backlog:

- มีเคสชื่อ "ออกข้อสอบปลายภาค"
- เป็นเคสที่อยู่ในกลุ่ม Initial Cases from Real Life
- จาก OWN-002 มีตัวอย่างว่า "เตรียมข้อสอบปลายภาค" อาจเป็น Project หรือ Action ตามขอบเขตและ deadline
- จาก OWN-010 มีตัวอย่างว่า "ส่งข้อสอบเรียบร้อย" อาจเป็น Completed เมื่อผู้ใช้ตัดสินว่าปิดวงจรแล้ว

Interpretation:

- เคสนี้น่าจะมี deliverable คือชุดข้อสอบหรือเอกสารข้อสอบ
- เคสนี้น่าจะมี deadline แต่ repository ยังไม่บอกวัน เวลา หรือผู้รับ
- มีแนวโน้มเป็น Project ถ้ารวมการออกแบบข้อสอบ ตรวจทาน จัดรูปแบบ ส่ง และแก้ feedback
- อาจเป็น Action ถ้าหมายถึงการลงมือทำครั้งเดียวใน Project ที่ใหญ่กว่า เช่น "จัดการสอบปลายภาค"

Unknown:

- รายวิชาใด
- deadline จริงคือวันไหน
- มีผู้ร่วมตรวจหรือผู้อนุมัติหรือไม่
- ขอบเขตคือ "ออกข้อสอบ" อย่างเดียว หรือรวมส่ง/ตรวจ/แก้/จัดพิมพ์
- Definition of Done คืออะไร

## Core Entities

Person:

- ผู้ใช้ในบทบาทครู: inferred from JenOS context
- ผู้รับข้อสอบ / ผู้อนุมัติ / นักเรียน: UNKNOWN

Role:

- Teacher หรือ ครูผู้สอน
- อาจมี Role เพิ่ม เช่น ผู้ออกข้อสอบ / ผู้รับผิดชอบรายวิชา: UNKNOWN

Area:

- Teaching หรือ งานสอน
- Assessment อาจเป็น Area ย่อยหรือ responsibility แต่ยังไม่มี evidence พอ

Project:

- Candidate Project: "ออกข้อสอบปลายภาค"
- Fit: strong if work requires multiple decisions, review, document production, and deadline
- Alternative: Action inside a larger Project if scope is only "เขียนข้อสอบหนึ่งครั้ง"

Resource:

- คลังข้อสอบ, blueprint, หลักสูตร, ตารางสอบ: UNKNOWN

Document:

- ข้อสอบปลายภาค: likely Document
- เฉลย / rubric / blueprint: UNKNOWN

Event:

- ส่งข้อสอบ: possible future Event, not observed
- ตรวจทานข้อสอบ: possible future Event, not observed

Decision:

- กำหนดขอบเขตข้อสอบ
- เลือกสัดส่วนเนื้อหา
- ตัดสินว่าข้อสอบพร้อมส่งหรือยัง
- ตัดสินว่า Project นี้ Completed หรือยัง

## Supporting Concepts

State:

- Observed State: UNKNOWN
- Suggested State: Project Candidate / Planning, based only on case title
- Confirmed State: UNKNOWN, owner has not confirmed

Context:

- Deadline likely relevant, but exact deadline UNKNOWN
- Workload / available time UNKNOWN

Action:

- Draft questions
- Review coverage
- Format document
- Submit document

Observation:

- Backlog contains this case
- No observed work activity yet

Risk:

- Deadline risk: UNKNOWN but likely relevant
- Quality/coverage risk: possible, evidence needed
- Confidentiality risk: possible because exam documents are sensitive

Commitment:

- External commitment likely exists if exam must be submitted to school, but not confirmed

Relationship:

- Teacher-student relationship is indirectly involved
- Relationship with reviewer/department is UNKNOWN

Tag:

- teaching
- assessment
- deadline
- document

## State Analysis

Observed State:

- Only "case exists in backlog" is observed.

Suggested State:

- Could suggest "Planning" if no evidence of drafting exists.
- Could suggest "In Progress" only if document edits or drafting are observed later.
- Could suggest "Waiting" only if the exam is sent for review or waiting on approval.

Confirmed State:

- UNKNOWN. Must be owner-confirmed.

What changed:

- Nothing observed beyond case selection.

When did it change:

- UNKNOWN.

Who has authority to confirm it:

- User/owner.

## Memory Analysis

Observation:

- "ออกข้อสอบปลายภาค" is present as a candidate case.

Event:

- None observed yet.

Log:

- Future log could record draft, edit, review, send events with timestamps.

History:

- Could become a history of exam creation: planning -> drafting -> review -> submission -> correction.

Memory Candidate:

- None confirmed from current evidence.
- Possible future Memory: "เวลาเตรียมข้อสอบปลายภาค X วันเพียงพอ/ไม่เพียงพอ" requires actual case evidence.

AI Authority:

- AI may propose a Memory after real activity exists.
- AI must not create Confirmed Memory now.

## Decision Rights

Inform:

- The system can inform known facts, such as due date, if provided.

Recommend:

- AI can recommend next action or sequencing only after deadline/scope/capacity are known.

Require Confirmation:

- Creating the Project
- Changing Confirmed State
- Marking Completed
- Creating Memory

User Only:

- Deciding the exam is good enough
- Deciding the Project is Completed
- Deciding to reduce scope if quality/commitment trade-off exists

## Human Capacity

Time:

- Likely relevant because exam work often has a deadline, but actual time available UNKNOWN.

Energy:

- UNKNOWN.

Attention:

- Likely important because exam quality requires focus, but no case evidence yet.

Cognitive Load:

- Likely relevant; designing assessment is cognitively demanding.

Health:

- UNKNOWN. Do not infer.

Capacity Recommendation:

- Evidence needed before suggesting reduce scope, defer, or minimum viable action.

## Ontology Fit

Status: TENSION

Reason:

- The case title alone can be interpreted as Project, Action, or Document-production work.
- OWN-001/OWN-002 support this ambiguity: classification depends on boundary, decisions, follow-up, and state.

## Challenged Decisions

- OWN-001: What makes something a Project?
- OWN-002: Project / Area / Role / Context separation
- OWN-003: State cannot be inferred from intention/title alone
- OWN-010: Sending a file is not automatically Completed

## Missing Concepts

- Deliverable may need clearer treatment as distinct from Document.
- Assessment confidentiality may become a Risk subtype, but evidence is insufficient.

## Unnecessary Concepts

- Resource is not necessary unless real supporting materials are involved.
- Relationship is minimal unless review/approval or student impact is analyzed.

## Failure Log Entry

Failure Type:

- Ontology Tension

Reason:

- "ออกข้อสอบปลายภาค" may be Project, Action, or Document depending on scope. Current evidence is only a backlog title.

Challenged Decision or Principle:

- OWN-001
- OWN-002

Possible Revision:

- Do not revise yet. Need repeated evidence on when a deliverable-centered work item becomes a Project.

Evidence Needed:

- Deadline
- Required deliverables
- Number of decision points
- Review/approval flow
- Whether this belongs inside a larger course/assessment Project

Should this affect Sprint 0 principles now, or wait for repeated evidence?

- Wait for repeated evidence.

