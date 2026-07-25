# OWN-004: Memory, History, Log and Event

## Decision ID

OWN-004

## Decision Title

Memory, History, Log and Event

## Status

Decided

## Context

Sprint 0 ให้ความสำคัญกับ Memory และ History แต่ review พบว่าคำว่า Memory, History, Log, Event, Decision, Observation และ Lesson ยังทับซ้อน

## Why This Decision Matters

ถ้าไม่แยก ระบบอาจเก็บ log จำนวนมากแต่ไม่ช่วยตัดสินใจ หรือสรุปมากเกินจน audit ไม่ได้

## Evidence from Existing Documents

- Manifesto: Every Project has Memory และ History is Gold
- Core Concepts: Event, Memory, Observation, Lesson แยกเป็น concept แล้ว
- Domain Model: Memory รวม decision, reason, event, lesson, change
- Audit: Memory/History/Log/Event เป็น Major finding

## Decision Question

Working Definition ของ Memory, History, Log, Event, Decision, Observation และ Lesson คืออะไร?

## Options

- Option A: Treat all as History records first, classify later
- Option B: Four-layer model — Log, Event, History, Memory
- Option C: Meaning-first model — เก็บเฉพาะสิ่งที่ช่วยตัดสินใจ
- Option D: Hybrid — เก็บ source/raw อย่างน้อย แต่ surface เฉพาะ meaningful memory

## Trade-offs

- A ง่ายแต่รก
- B ชัดแต่ต้องนิยามหลายชั้น
- C ลดภาระแต่เสี่ยงสูญหลักฐาน
- D สมดุลแต่ต้องมี retention/privacy policy

## Working Definitions to Consider

- Log: record ดิบของสิ่งที่ถูกบันทึกหรือเปลี่ยน
- Event: สิ่งที่เกิดขึ้นในเวลาใดเวลาหนึ่ง
- History: ลำดับ event/change ที่ตรวจสอบย้อนหลังได้
- Memory: สิ่งจากอดีตที่มีผลต่อ decision ในอนาคต
- Decision: การเลือกโดยผู้ใช้หรือเจ้าของสิทธิ์
- Observation: สิ่งที่สังเกตเห็น ยังไม่ใช่ข้อสรุป
- Lesson: บทเรียนหรือ pattern ที่สรุปจาก history

## Risk of No Decision

Memory Without Meaning หรือ History ที่ละเมิด privacy อาจเกิดเร็วมาก

## AI Recommendation

แนะนำ Option D และใช้ working definitions ข้างต้นแบบ provisional

## Owner Decision

Selected Direction: Curated Memory Model

Observation, Event, Log, History และ Memory เป็นคนละแนวคิด

JenOS ใช้ลำดับคิดต่อไปนี้:

```text
Reality
  -> Observation
  -> Event
  -> Log
  -> History
  -> Memory
```

ลำดับนี้ไม่ได้หมายความว่าทุก Observation ต้องกลายเป็น Memory แต่หมายความว่าข้อมูลจะมีระดับความหมายสูงขึ้นเมื่อผ่านการคัดเลือกและตีความอย่างถูกต้อง

## 1. Observation

Observation คือสิ่งที่สังเกตพบ เป็นข้อมูลดิบที่สุด ยังไม่มีความหมายและยังไม่มีการตีความ

ตัวอย่าง:

```text
แก้ไขไฟล์เวลา 14:05
อัปโหลด PDF
ประชุม 35 นาที
น้ำหนัก 79.8 กก.
```

## 2. Event

Event คือสิ่งที่เกิดขึ้น ณ เวลาใดเวลาหนึ่ง

ตัวอย่าง:

```text
ส่งโครงงาน
ประชุมผู้ปกครอง
อุบัติเหตุรถยนต์
เริ่มภาคเรียน
```

Event คือเหตุการณ์ ไม่ใช่บทเรียน

## 3. Log

Log คือบันทึกตามลำดับเวลา

Log ควรตอบว่า:

> เกิดอะไร เมื่อไร

ตัวอย่าง:

```text
14:05 เปิดเอกสาร
14:18 แก้ไข
14:35 บันทึก
14:40 ส่ง
```

Log ไม่ควรตีความ

## 4. History

History คือเรื่องราวหรือเส้นทางที่เกิดจาก Event หลายตัว

ตัวอย่าง:

```text
Project AI Spark
  เริ่ม
  -> อบรม
  -> ทำต้นแบบ
  -> ส่ง
  -> ประกาศผล
```

History เล่าเส้นทาง แต่ยังไม่สรุปบทเรียน

## 5. Memory

Memory คือสิ่งที่ควรจำเพื่อการตัดสินใจในอนาคต

Memory ไม่ใช่ Event, Log หรือ History แต่เป็น insight หรือความหมายที่คัดเลือกแล้ว

ตัวอย่าง:

```text
การเตรียมตัว 14 วันสั้นเกินไปสำหรับ AI Spark
```

```text
นักเรียนตอบสนองดีเมื่อใช้กิจกรรมทดลองจริง
```

## Core Principle

> Memory is curated, not accumulated.

JenOS ไม่ควรจำทุกอย่าง แต่ต้องจำสิ่งที่ควรจำ เพราะถ้าจำทุกอย่าง สุดท้ายจะจำอะไรไม่ได้เลย

## AI Authority

AI สามารถสร้างหรือช่วยจัดชั้นข้อมูลได้ดังนี้:

| Concept | AI Authority |
|---|---|
| Observation | สร้างหรือบันทึกได้ หากมี source |
| Event | สร้างหรือสกัดได้ หากมี source |
| Log | สร้างหรือเรียบเรียงได้ หากมี source |
| History | สรุปหรือเรียบเรียงได้ พร้อม source และ uncertainty |
| Memory | เสนอได้เท่านั้น ต้องให้ผู้ใช้ยืนยัน |

Memory มีผลต่อการตัดสินใจในอนาคต จึงไม่ควรถูกบันทึกเป็น Memory อย่างเป็นทางการจาก AI โดยไม่มี owner confirmation

## Owner Rationale

หลายระบบพังเพราะเก็บทุกอย่างเป็นประวัติ แต่ JenOS เป็น Decision Support System จึงต้องแยกข้อมูลดิบ เหตุการณ์ ลำดับเวลา เรื่องราว และสิ่งที่ควรจำออกจากกัน

Memory ต้องเป็นสิ่งที่มีความหมายต่อการตัดสินใจในอนาคต ไม่ใช่สิ่งที่สะสมโดยอัตโนมัติ

Confidence: Experimental

## Consequences

- Not everything is Memory
- Log ต้องไม่ตีความ
- Event ต้องไม่ถูกทำให้เป็น Lesson โดยอัตโนมัติ
- History เล่าเส้นทาง แต่ยังไม่ใช่ Memory เสมอไป
- Memory ต้องถูก curated และควรมี owner confirmation
- AI เสนอ Memory ได้ แต่บันทึกเป็น official Memory เองไม่ได้
- OWN-009 ต้องกำหนดสิทธิ์ของผู้ใช้เหนือ Memory และ derived knowledge

## Documents to Revise

Core Concepts, Domain Model, System Context, Manifesto

## Open Follow-up Questions

- Log ใดลบได้ และ Memory ใดควรถูกเก็บระยะยาว?
- Lesson ควรถือเป็น Memory ประเภทหนึ่งหรือ Supporting Concept แยก?
