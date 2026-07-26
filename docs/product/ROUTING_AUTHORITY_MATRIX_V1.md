# Routing Authority Matrix v1

Status: Discovery

Sprint: 2.0.1 Natural Capture & Routing Discovery

Purpose:

Classify which routing operations may happen automatically and which require owner authority.

Aligned with:

- OWN-005 Decision Rights,
- OWN-006 Guidance Language,
- Domain Model v0.2.

## Authority Levels

- AUTO-ROUTE
- AUTO-ROUTE + visible undo
- SUGGEST + confirm
- OWNER ONLY

## Matrix

| Operation | Authority | Reason |
|---|---|---|
| Record Observation | AUTO-ROUTE + visible undo | Low-risk if source is preserved; owner can correct. |
| Append teaching log | AUTO-ROUTE + visible undo | Acceptable if clearly sourced and not sensitive judgment. |
| Create Action | SUGGEST + confirm | It can create perceived obligation. |
| Create Project | OWNER ONLY | Project is managed responsibility. |
| Change Confirmed State | OWNER ONLY | Meaning-level truth. |
| Create Relationship | SUGGEST + confirm | Wrong links can distort context. |
| Add Calendar event | SUGGEST + confirm | Calendar affects time/commitment. |
| Record financial item | SUGGEST + confirm | Sensitive; needs accuracy. |
| Attach file/link | AUTO-ROUTE + visible undo | Low-risk if source is explicit; confirm if linked to Project. |
| Create Dependency | SUGGEST + confirm | Affects movement/waiting. |
| Confirm Memory | OWNER ONLY | Memory affects future decisions. |
| Create Event from explicit owner statement | AUTO-ROUTE + visible undo | If phrased as happened fact; confirm if high-impact. |
| Close Project | OWNER ONLY | Completion is human judgment. |
| Suggest Project match | AUTO-ROUTE | Suggestion only; no mutation. |

## Interpretation Rules

AI/system may interpret and propose.

AI/system may not silently:

- create Project,
- confirm state,
- confirm memory,
- close Project,
- create sensitive record without review,
- assign responsibility to another person.

## Visible Undo

Visible undo is required when auto-routing creates a record.

The owner should see:

- what was created,
- why,
- source,
- confidence,
- undo/correct option.

## Confirmation Prompts

Confirmation should be short:

- "สร้างเป็นสิ่งที่ต้องทำไหม?"
- "เชื่อมกับโปรเจกต์นี้ไหม?"
- "เพิ่มลงปฏิทินไหม?"
- "บันทึกเป็นค่าใช้จ่ายไหม?"

Do not use long classification forms.

