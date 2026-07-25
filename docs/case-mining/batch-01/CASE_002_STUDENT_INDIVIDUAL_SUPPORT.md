# Case #002: ดูแลนักเรียนรายบุคคล

## Case Header

```text
Case ID: CASE-002
Case Name: ดูแลนักเรียนรายบุคคล
Batch: Sprint 0.2 / Batch 1
Source: docs/reviews/CASE_MINING_BACKLOG_V0.1.md, item 3
Real-life Context: งานครู / นักเรียน / ความสัมพันธ์ / การติดตาม
```

## Reality

Facts from repository/backlog:

- มีเคสชื่อ "ดูแลนักเรียนรายบุคคล"
- OWN-001 ระบุชัดว่า Person ไม่ควรถูกทำให้เป็น Project
- OWN-001 มีตัวอย่างว่า "นักเรียนหนึ่งคน" เป็น Person และ "ช่วยนักเรียนแก้ปัญหาการมาเรียน" อาจเป็น Project หรือ Case
- OWN-002 ระบุว่า People remain และ Person ไม่ใช่ Resource

Interpretation:

- เคสนี้เกี่ยวข้องกับบุคคลอื่นโดยตรง
- มีความเสี่ยงสูงที่ระบบจะลดมนุษย์ให้กลายเป็น "งาน" หรือ "เคส"
- อาจเป็น Area/Responsibility หากเป็นการดูแลระยะยาวต่อเนื่อง
- อาจเป็น Project/Case หากมีปัญหาเฉพาะ ขอบเขตชัด เป้าหมาย และการติดตามหลายครั้ง

Unknown:

- นักเรียนคือใคร
- เรื่องที่ต้องดูแลคืออะไร
- เป็นการดูแลทั่วไป หรือมีปัญหาเฉพาะ
- มีผู้ปกครอง ครูที่ปรึกษา หรือผู้บริหารเกี่ยวข้องหรือไม่
- มี timeline/deadline หรือ outcome ที่ต้องการหรือไม่

## Core Entities

Person:

- Student: exists as concept, identity UNKNOWN
- User as Teacher/Homeroom Teacher/Advisor: inferred, exact role UNKNOWN

Role:

- Teacher
- Homeroom Teacher or Advisor: possible but UNKNOWN

Area:

- Student Support / Pastoral Care / Teaching responsibility: possible Area
- Exact Area name not decided

Project:

- "ดูแลนักเรียนรายบุคคล" as title is too broad.
- Candidate Project only if scoped to a bounded change, such as attendance improvement or resolving a specific issue.

Resource:

- Student records, attendance logs, contact channels: UNKNOWN

Document:

- Notes, referral forms, parent meeting records: UNKNOWN

Event:

- Meeting, follow-up, parent contact, home visit: possible, not observed

Decision:

- Whether this is routine responsibility, a Project, or a Case
- Whether to involve another person
- What information should be recorded or hidden from AI

## Supporting Concepts

State:

- Observed State: UNKNOWN
- Suggested State: Ambiguous classification
- Confirmed State: UNKNOWN

Context:

- Student situation, privacy, urgency, school policy: UNKNOWN

Action:

- Follow up
- Meet student
- Contact parent
- Record observation

Observation:

- Backlog contains this case.

Risk:

- Privacy risk
- Relationship risk
- Misclassification risk: treating a Person as Project

Commitment:

- Duty of care may exist through teacher role, but exact commitment UNKNOWN

Relationship:

- Teacher-student relationship
- Potential parent/school relationship

Tag:

- person
- student-support
- privacy
- relationship

## State Analysis

Observed State:

- No observed state beyond case title.

Suggested State:

- Suggested classification: Person + Area/Responsibility first; possible Project only if a bounded issue emerges.

Confirmed State:

- UNKNOWN.

What changed:

- Nothing observed.

Who has authority to confirm it:

- User confirms classification and any state.
- External reality may provide facts such as attendance records, if sourced.

## Memory Analysis

Observation:

- Student-related case exists.

Event:

- None observed.

Log:

- Future log should record factual contacts/events only, with privacy awareness.

History:

- Could become a history of support steps over time.

Memory Candidate:

- No confirmed Memory.
- AI should be especially cautious proposing Memory about a person.

AI Authority:

- AI may summarize sourced observations, but should not create sensitive personality judgments as Memory.

Privacy:

- OWN-009 is strongly implicated. Hide from AI / Redact may be relevant.

## Decision Rights

Inform:

- AI can inform known sourced facts only.

Recommend:

- AI can suggest possible follow-up paths if evidence exists.

Require Confirmation:

- Creating a Project/Case around a student
- Recording Memory
- Sharing or surfacing sensitive information

User Only:

- Judging what is appropriate support
- Deciding whether a student-related matter becomes a Project
- Deciding privacy/redaction levels

## Human Capacity

Time:

- UNKNOWN.

Energy:

- UNKNOWN.

Attention:

- Likely relevant due sensitivity, but evidence needed.

Cognitive Load:

- Likely relevant if many student cases exist, but not evidenced.

Health:

- UNKNOWN.

Capacity Recommendation:

- Do not recommend without data. If many student cases exist later, JenOS may need capacity-aware triage.

## Ontology Fit

Status: TENSION

Reason:

- The current ontology has Person and Project separation, which helps.
- But "ดูแลนักเรียนรายบุคคล" may need a "Case" working concept distinct from Project, or may remain a Project subtype. Sprint 0 intentionally did not decide this.

## Challenged Decisions

- OWN-001: People are never projects.
- OWN-002: Person / Project / Area / Relationship separation.
- OWN-004: what should become Memory about another person?
- OWN-009: privacy and deletion.
- OWN-005: who has authority over sensitive student data.

## Missing Concepts

- Case may be a missing or candidate concept for person-centered bounded support.
- Sensitivity/privacy level may be needed later.

## Unnecessary Concepts

- Resource may be unnecessary unless actual records/tools are involved.
- Project may be unnecessary if this is a standing responsibility.

## Failure Log Entry

Failure Type:

- Ontology Tension

Reason:

- The term "ดูแลนักเรียนรายบุคคล" sits between Person, Area/Responsibility, Relationship, and possible Project/Case.

Challenged Decision or Principle:

- OWN-001
- OWN-002
- OWN-009

Possible Revision:

- Do not revise yet. Track whether repeated person-centered support cases require a distinct "Case" concept.

Evidence Needed:

- Specific student issue
- Time boundary
- Desired change
- Follow-up pattern
- Privacy constraints
- Who else is accountable

Should this affect Sprint 0 principles now, or wait for repeated evidence?

- Wait for repeated evidence.

