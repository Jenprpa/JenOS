# OWN-005: Decision Rights Model

## Decision ID

OWN-005

## Decision Title

Decision Rights Model

## Status

Decided

## Context

JenOS ต้องช่วยแนะนำโดยไม่แย่งสิทธิ์ตัดสินใจจากผู้ใช้ จึงต้องกำหนดอำนาจของ User, System Rules, AI และ External Sources

## Why This Decision Matters

เป็น guardrail หลักต่อ AI Authority, false certainty และการเปลี่ยนข้อมูลสำคัญโดยไม่มีเจ้าของ

## Evidence from Existing Documents

- Constitution: ผู้ใช้เป็นเจ้าของการตัดสินใจเสมอ
- Operating Principles: AI Suggestion ไม่ใช่ Fact
- Today Experience: ห้ามเสนอคำตอบเดียวโดยไม่อธิบายเหตุผล
- Audit: Guidance vs Autonomy เป็น Major finding

## Decision Question

ใครมีสิทธิ์ทำ action ใด และ action ใดต้อง confirm/explain/undo?

## Authority Table Draft

| Action | User Authority | System Authority | AI Authority | Confirmation Required | Explanation Required | Undo Required |
|---|---|---|---|---|---|---|
| จัดลำดับความสำคัญ | Accept/override | Rank by rules | Suggest ranking | No for suggestion, yes for saved preference | Yes | Yes for saved preference |
| เปลี่ยน State | Final authority | Suggest/observed update | Suggest only | Yes for confirmed state | Yes | Yes |
| สร้าง Project | Create/confirm | Suggest from pattern | Suggest draft | Yes | Yes if suggested | Yes |
| สร้าง Action | Create/confirm | Suggest from blocker | Suggest draft | Optional unless saved | Yes | Yes |
| แนะนำให้พัก | Accept/reject | Trigger from capacity rules | Suggest | No, unless state changes | Yes | Not applicable |
| แนะนำให้หยุด Project | Decide | Flag conditions | Suggest only | Yes | Yes | Yes |
| เลื่อน Deadline | Decide | Detect conflict | Suggest | Yes | Yes | Yes |
| เปลี่ยนข้อมูลข้อเท็จจริง | Confirm/correct | Import with source | Cannot assert as fact | Yes unless trusted source policy exists | Yes | Yes |
| สรุป Memory | Approve/edit | Generate summary from history | Draft summary | Yes for canonical memory | Yes | Yes |
| ลบ History | Decide | Execute policy | No authority | Yes | Yes | Irreversible warning |
| สร้าง Assumption | Confirm or mark | Flag missing info | Suggest assumption | Yes if used as assumption | Yes | Yes |
| แจ้งเตือนความเสี่ยง | Acknowledge/dismiss | Trigger from rules | Suggest risk | No for warning | Yes | Dismissible |

## Trade-offs

- Strong confirmation protects autonomy but may add friction
- More system automation reduces burden but risks silent authority
- AI authority should remain low until trust and audit behavior are proven

## Risk of No Decision

Future prototype may accidentally let AI or rules mutate core truth

## AI Recommendation

ใช้ตาราง draft นี้เป็น baseline: User final authority; System may observe and suggest; AI may draft/suggest; confirmed truth requires user or trusted source policy

## Owner Decision

Selected Direction: Authority follows accountability

> Authority follows accountability.

ใครรับผลของการตัดสินใจ คนนั้นต้องมีอำนาจตัดสินใจ

AI รับผิดชอบผลแทนผู้ใช้ไม่ได้ จึงไม่ควรมีอำนาจตัดสินใจแทนผู้ใช้

## Decision Parties

JenOS แยกฝ่ายที่เกี่ยวข้องกับ decision rights เป็น 4 ฝ่าย:

```text
User
AI
System Rules
External Reality
```

### User

ผู้ใช้เป็นเจ้าของการตัดสินใจที่กระทบชีวิต สุขภาพ เวลา เป้าหมาย คุณค่า Project และ Memory ของตนเอง

### AI

AI วิเคราะห์ อธิบาย เสนอทางเลือก และเตือนความเสี่ยงได้ แต่ไม่เป็นเจ้าของการตัดสินใจ

> The AI may influence decisions, but never own them.

### System Rules

System Rules คือกฎของระบบ เช่น UUID ต้องไม่ซ้ำ วันที่ต้องอยู่ในรูปแบบที่กำหนด หรือ Observation ต้องมี Source

System Rules ไม่ใช่การตัดสินใจเชิงชีวิตของผู้ใช้

### External Reality

External Reality คือข้อเท็จจริงภายนอก เช่น deadline ผ่านแล้ว วันนี้วันเสาร์ หรือมีประชุมจริง

User และ AI อาจตีความหรือจัดการผลของ External Reality ได้ แต่ไม่ควรเปลี่ยนข้อเท็จจริงนั้นในระบบโดยไม่มีหลักฐาน

## Authority Levels

### Level 1 — Inform

AI หรือระบบบอกข้อเท็จจริงได้โดยไม่แนะนำและไม่ตีความ

ตัวอย่าง:

```text
เหลือเวลาอีก 3 วัน
```

### Level 2 — Recommend

AI วิเคราะห์และเสนอทางเลือกได้ แต่ยังไม่ตัดสินใจแทนผู้ใช้

ตัวอย่าง:

```text
จากข้อมูลปัจจุบัน งาน A น่าจะควรได้รับความสนใจก่อน
```

### Level 3 — Require Confirmation

AI หรือระบบทำได้เมื่อผู้ใช้ยืนยัน

ตัวอย่าง:

- เปลี่ยน Confirmed State
- Archive
- สร้าง Memory อย่างเป็นทางการ
- ลบข้อมูล

### Level 4 — User Only

AI ไม่มีสิทธิ์ทำแทน

ตัวอย่าง:

- เปลี่ยนเป้าหมายชีวิต
- ยกเลิก Project
- ลบประวัติสำคัญ
- ตัดสินว่า Project สำเร็จ
- เปลี่ยนค่านิยมของผู้ใช้

## Owner Rationale

JenOS เป็น Decision Support System ไม่ใช่ Decision Maker สิ่งนี้สอดคล้องกับ OWN-003 ที่ AI เสนอ State ได้แต่ไม่เปลี่ยน Confirmed State และ OWN-009 ที่ผู้ใช้เป็นเจ้าของ Memory/Data

Confidence: Experimental

## Consequences

- AI influence ได้ แต่ own decision ไม่ได้
- System Rules บังคับความถูกต้องเชิงระบบได้ แต่ไม่ควรปะปนกับ judgment ของชีวิตผู้ใช้
- External Reality ต้องถูกแยกจาก AI interpretation
- Action ที่เปลี่ยน confirmed meaning, memory, deletion, project ending หรือ values ต้องมี user authority
- OWN-006 ต้องใช้ language ที่สะท้อน authority level เหล่านี้

## Documents to Revise

Constitution, Operating Principles, Today Experience, System Context, ADR-0001

## Open Follow-up Questions

- External source ใดถือว่า trusted ได้ในอนาคต?
- มี action ใดที่ system ทำอัตโนมัติได้โดยไม่รบกวนผู้ใช้?
- Level 4 User Only ควรมี exception ด้าน safety หรือไม่ และถ้ามีต้องแสดงอย่างไรโดยไม่ตัดสินใจแทน?
