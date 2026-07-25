# JenOS Anti-patterns v0.1

## Hidden To-do App

- ลักษณะ: เปลี่ยนชื่อ Task เป็น Action แต่โครงสร้างยังเป็นรายการงานค้าง
- เหตุผลที่ขัดกับ JenOS: ทำให้ Task เป็นศูนย์กลางแทน Project/State
- ตัวอย่าง: หน้า Today แสดง action 30 รายการ
- วิธีตรวจพบ: Action ไม่มี Project, State, Reason หรือ Blocker
- วิธีป้องกัน: ทุก Action ที่ surfaced ต้องตอบว่าเกี่ยวกับ Project/State ใดและเพราะอะไร

## Dashboard Dump

- ลักษณะ: นำข้อมูลทุกอย่างมาแสดงพร้อมกัน
- เหตุผลที่ขัดกับ JenOS: เพิ่ม cognitive load แทนช่วยตัดสินใจ
- ตัวอย่าง: หน้าแรกเต็มไปด้วย chart, list, deadline, log
- วิธีตรวจพบ: ผู้ใช้ยังต้องถามเองว่า "แล้วควรสนใจอะไร"
- วิธีป้องกัน: Today แสดงเฉพาะสิ่งที่เปลี่ยนการตัดสินใจตอนนี้

## Productivity Scoring

- ลักษณะ: ให้คะแนนจากจำนวนงานที่เสร็จหรือ streak
- เหตุผลที่ขัดกับ JenOS: ยก productivity เหนือชีวิต
- ตัวอย่าง: คะแนนตกเพราะผู้ใช้พัก
- วิธีตรวจพบ: Metric ทำให้การพักดูเป็น failure
- วิธีป้องกัน: ใช้ qualitative reasoning แทน score ตื้น ๆ

## AI Authority

- ลักษณะ: AI แนะนำแล้วระบบถือว่าเป็นคำตอบถูกต้อง
- เหตุผลที่ขัดกับ JenOS: ละเมิด autonomy และ no false certainty
- ตัวอย่าง: AI เปลี่ยน state เป็น Completed เอง
- วิธีตรวจพบ: AI output ไม่มี confirmation/source label
- วิธีป้องกัน: AI suggestion ต้องเป็น Suggestion จนกว่าผู้ใช้ยืนยัน

## Context Tax

- ลักษณะ: ผู้ใช้ต้องกรอกข้อมูลมากเพื่อให้ระบบดูฉลาด
- เหตุผลที่ขัดกับ JenOS: ผู้ใช้กลายเป็นคนรับใช้ระบบ
- ตัวอย่าง: ต้องกรอก impact/energy/risk ทุกครั้งก่อนบันทึก Project
- วิธีตรวจพบ: Form required fields มากกว่าคุณค่าที่ได้ทันที
- วิธีป้องกัน: ขอเฉพาะข้อมูลที่เปลี่ยน recommendation

## Permanent Urgency

- ลักษณะ: ทุก Project ถูกทำให้ดูเร่งด่วน
- เหตุผลที่ขัดกับ JenOS: ลบความต่างระหว่าง urgency, importance, risk และ energy
- ตัวอย่าง: Project ทุกตัวมีสีแดงเพราะยังไม่เสร็จ
- วิธีตรวจพบ: ไม่มี state Paused/Waiting/Not now ที่สงบได้
- วิธีป้องกัน: แยก urgency จาก attention และอนุญาตให้วางลง

## Guilt Design

- ลักษณะ: ใช้สี คำ หรือจำนวนงานค้างกดดันผู้ใช้
- เหตุผลที่ขัดกับ JenOS: ขัดกับ emotional safety และ serve the user
- ตัวอย่าง: "คุณค้าง 148 งาน"
- วิธีตรวจพบ: ภาษาเน้นความผิดแทน next meaningful move
- วิธีป้องกัน: ใช้ tone factual/actionable และแยกสิ่งควบคุมได้ไม่ได้

## Memory Without Meaning

- ลักษณะ: เก็บ log จำนวนมากแต่ไม่ช่วยตัดสินใจ
- เหตุผลที่ขัดกับ JenOS: History กลายเป็นภาระ ไม่ใช่ gold
- ตัวอย่าง: แสดงทุก edit โดยไม่มี summary หรือ lesson
- วิธีตรวจพบ: Memory ไม่ตอบ Current State, Next Action หรือ Blocker
- วิธีป้องกัน: แยก raw log จาก meaningful memory

## Forced Completeness

- ลักษณะ: บังคับกรอกข้อมูลครบก่อนเริ่มใช้งาน
- เหตุผลที่ขัดกับ JenOS: ทำให้ระบบเป็นภาระ
- ตัวอย่าง: Project ต้องมี vision, milestone, risk, deadline ทุกครั้ง
- วิธีตรวจพบ: ผู้ใช้ capture เรื่องจริงเร็ว ๆ ไม่ได้
- วิธีป้องกัน: รองรับ incomplete project พร้อม Unknown label

## Workflow Imprisonment

- ลักษณะ: ผู้ใช้ต้องทำตามขั้นตอนตายตัวของระบบ
- เหตุผลที่ขัดกับ JenOS: ขัดกับ flexible workflow
- ตัวอย่าง: ทุก Project ต้องผ่าน Planning > Doing > Review เท่านั้น
- วิธีตรวจพบ: State เปลี่ยนไม่ได้ตามบริบทจริง
- วิธีป้องกัน: ใช้ core invariants แต่ไม่ hard-code workflow เร็วเกินไป

## Health Decoration

- ลักษณะ: มีส่วนสุขภาพ แต่ไม่เปลี่ยนคำแนะนำจริง
- เหตุผลที่ขัดกับ JenOS: Life before Productivity กลายเป็น decoration
- ตัวอย่าง: ระบบบอกให้ดูแลตัวเองแต่ยังแนะนำงานหนักทั้งหมด
- วิธีตรวจพบ: Energy/health ไม่มีผลต่อ ranking หรือ wording
- วิธีป้องกัน: Health/energy ต้องเป็น constraint ใน recommendation

## Explainability Theater

- ลักษณะ: แสดงเหตุผลที่ดูดีแต่ไม่ได้มาจากข้อมูลหรือกฎจริง
- เหตุผลที่ขัดกับ JenOS: ละเมิด transparency
- ตัวอย่าง: "เพราะสำคัญ" โดยไม่มี evidence
- วิธีตรวจพบ: Reason ไม่ trace ไปยัง fact/assumption/inference
- วิธีป้องกัน: Reason ต้อง cite source, uncertainty และ missing info

