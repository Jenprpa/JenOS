# OWN-011: Pause, Stop and Scope Reduction

## Decision ID

OWN-011

## Decision Title

Pause, Stop and Scope Reduction

## Status

Decided

## Context

Operating Principles ระบุว่าระบบต้องเสนอการลดขอบเขต หยุด หรือพัก Project ได้

## Why This Decision Matters

นี่คือจุดที่ JenOS ต่างจาก productivity system: บางครั้งคำตอบที่ดีคือไม่ทำต่อในรูปแบบเดิม

## Evidence from Existing Documents

- Operating Principles: ระบบต้องเสนอ reduce scope, stop หรือ pause ได้
- Today Experience: ควรจำกัดขอบเขตเพื่อไม่ทำร้ายชีวิตส่วนอื่น
- Anti-patterns: Permanent Urgency และ Health Decoration ต้องหลีกเลี่ยง

## Decision Question

JenOS สามารถเสนอ Pause, Reduce Scope, Delegate, Defer, Stop หรือ Archive ได้เมื่อใด?

## Options

- Pause: เมื่อ Project ยังสำคัญแต่ current capacity/context ไม่เหมาะ
- Reduce Scope: เมื่อ goal เดิมใหญ่เกินเวลา/energy/risk
- Delegate: เมื่อคนอื่นช่วยได้และ commitment ยังต้องเดิน
- Defer: เมื่อไม่เร่งและการเลื่อนมี cost ต่ำ
- Stop: เมื่อ Project ไม่สอดคล้อง value/impact หรือ cost สูงเกิน
- Archive: เมื่อไม่ active และไม่ควร surface ใน Today

## Required Explanation

ระบบต้องแสดง:

- เหตุผล
- หลักฐาน
- ความไม่แน่นอน
- ผลกระทบหากทำ
- ผลกระทบหากไม่ทำ
- ทางเลือกอื่น

## Risk of No Decision

ระบบอาจเสนอแต่ "ทำต่อ" หรือใช้ Stop/Pause แบบแรงเกินไปจนละเมิด autonomy

## AI Recommendation

ให้ระบบเสนอ pause/reduce/delegate/defer/stop/archive ได้เฉพาะเป็น recommendation พร้อม reason และ user confirmation; ห้าม auto-stop หรือ auto-archive Project สำคัญ

## Owner Decision

Selected Direction: Continue Options beyond "Do More"

JenOS ต้องไม่เสนอเฉพาะ "ทำต่อ" แต่สามารถเสนอ:

- Pause
- Reduce Scope
- Delegate
- Defer
- Stop
- Archive

แต่:

> AI never stops a project.

AI หรือระบบเสนอได้เท่านั้น ผู้ใช้เป็นผู้ตัดสินใจ

## Required Reasoning

ทุก recommendation ประเภท Pause/Reduce/Delegate/Defer/Stop/Archive ต้องแสดง:

- เหตุผล
- หลักฐาน
- ความไม่แน่นอน
- ผลกระทบหากทำ
- ผลกระทบหากไม่ทำ
- ทางเลือกอื่น

## Final Principle

> JenOS exists to help the user continue, not merely produce.

เป้าหมายไม่ใช่ผลิตงานได้มากที่สุด แต่คือช่วยให้ผู้ใช้ยังมีแรง ใช้ชีวิต และเดินต่อได้อย่างมีความหมาย

## Owner Rationale

ถ้า JenOS เสนอได้แค่ "ทำต่อ" ระบบจะกลับไปเป็น productivity tool ทั่วไป การเสนอ Pause, Reduce Scope, Delegate, Defer และ Stop ทำให้ระบบปกป้อง Human Capacity และความจริงของชีวิต

Confidence: Experimental

## Consequences

- AI ห้าม stop/archive/cancel Project เอง
- Pause/Stop/Reduce Scope เป็น recommendation ที่ต้องมี reasoning และ user confirmation
- Today Experience ต้องรองรับคำแนะนำประเภท "ไม่ต้องทำเพิ่ม" หรือ "วางไว้ก่อน"
- Sprint 0.2 ต้องทดสอบกับ Project จริงว่าระบบเสนอ continue options ได้เหมาะสมหรือไม่
- Session 5 ปิด philosophy layer ของ Sprint 0.1.1 และเปิดทางสู่ Domain Discovery

## Documents to Revise

Operating Principles, Core Concepts, Today Experience, Principle Testability Review

## Open Follow-up Questions

- Stop ต่างจาก Cancelled อย่างไร?
- Delegate ควรถูก model เป็น action, decision หรือ state?
- Archive ควรถูกจัดเป็น end mode, visibility mode หรือทั้งสองอย่าง?
