# OWN-012: Learning from Rejected Recommendations

## Decision ID

OWN-012

## Decision Title

Learning from Rejected Recommendations

## Status

Pending

## Context

ผู้ใช้อาจปฏิเสธคำแนะนำเพราะระบบผิด ข้อมูลไม่ครบ เวลาผิด หรือผู้ใช้ยอมรับความเสี่ยงเอง

## Why This Decision Matters

ถ้าระบบเรียนรู้ผิดจาก rejection จะเกิด personalization ที่คาดเดาไม่ได้หรือ reinforce pattern ที่ไม่ดี

## Evidence from Existing Documents

- Scenario 10: ผู้ใช้ปฏิเสธคำแนะนำของระบบ
- Tension Map: Personalization vs Predictability
- Constitution: ผู้ใช้แก้ไขหรือปฏิเสธการตีความได้

## Decision Question

ระบบควรเรียนรู้อะไรเมื่อผู้ใช้ปฏิเสธ recommendation?

## Rejection Reasons to Distinguish

- User disagrees with reasoning
- User lacks capacity
- User has information the system lacks
- Recommendation arrived at the wrong time
- User intentionally accepts the risk

## Options

- Option A: No learning from rejection unless user explains
- Option B: Ask optional reason and learn only from explicit feedback
- Option C: Treat rejection as weak temporary signal
- Option D: Learn pattern only after repeated evidence and show it to user

## Trade-offs

- A safest but learns slowly
- B respects autonomy and gets signal
- C useful but risk misinterpretation
- D powerful but needs transparency

## Risk of No Decision

ระบบอาจสรุปว่าผู้ใช้ "ไม่เชื่อฟัง" หรือเปลี่ยน behavior ถาวรจาก rejection ครั้งเดียว

## AI Recommendation

แนะนำ B + C: ถามเหตุผลแบบ optional, ใช้ rejection เป็น weak signal ชั่วคราว และห้ามกลายเป็น preference ถาวรโดยไม่มี evidence ซ้ำหรือ owner confirmation

## Owner Decision

Not recorded yet

## Owner Rationale

Not recorded yet

## Consequences

Pending owner decision

## Documents to Revise

Constitution, Operating Principles, Today Experience, System Context

## Open Follow-up Questions

- ผู้ใช้ต้องการให้ระบบถามเหตุผลหลังปฏิเสธบ่อยแค่ไหน?
- Learning profile ควรเปิดให้ดูและแก้ไขได้เมื่อใด?

