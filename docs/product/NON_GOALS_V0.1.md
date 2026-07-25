# Non-goals v0.1

เอกสารนี้ระบุสิ่งที่ JenOS ยังไม่ควรเป็นในระยะแรก เพื่อป้องกันการออกแบบเกินจริงและการหลุดจากแกน Decision Support

## JenOS Is Not

JenOS ไม่ใช่:

- To-do App
- Calendar Replacement
- Notion Clone
- Project Management สำหรับองค์กร
- ระบบวัด Productivity ของพนักงาน
- AI ที่ตัดสินใจแทนมนุษย์
- ระบบที่ต้องกรอกข้อมูลทุกกิจกรรมในชีวิต
- ระบบ Gamification ที่ให้รางวัลจากจำนวนงานที่เสร็จ
- Medical Diagnosis System
- ระบบที่รับประกันว่าคำแนะนำถูกต้องเสมอ

## Why These Are Non-goals

### ไม่ใช่ To-do App

เพราะ Task ไม่ใช่ศูนย์กลางของ JenOS

JenOS สนใจ Project, State, Context, Memory และ Blocker มากกว่ารายการงานค้าง

### ไม่ใช่ Calendar Replacement

Calendar บอกว่าเวลาถูกจองอย่างไร แต่ JenOS ควรช่วยอธิบายว่าควรใช้เวลาและพลังที่มีอย่างไร

### ไม่ใช่ Notion Clone

JenOS ไม่ควรเริ่มจากการเป็น workspace ที่เก็บทุกอย่าง แต่ควรเริ่มจากระบบที่ช่วยขับเคลื่อนการตัดสินใจ

### ไม่ใช่ Project Management สำหรับองค์กร

ผู้ใช้เริ่มต้นคือ Jen คนเดียว ไม่ใช่องค์กร ทีม หรือ SaaS multi-tenant

### ไม่ใช่ AI ที่ตัดสินใจแทนมนุษย์

AI อาจช่วยสรุป เสนอ หรือชี้ความเสี่ยง แต่สิทธิ์การตัดสินใจยังอยู่กับผู้ใช้

### ไม่ใช่ระบบกรอกข้อมูลทุกกิจกรรมในชีวิต

ข้อมูลที่ไม่ช่วยตอบ Current State, Next Action หรือ Blocker อาจเป็นเพียง Reference และไม่ควรถูกบังคับให้กรอก

### ไม่ใช่ Medical Diagnosis System

JenOS อาจคำนึงถึงสุขภาพและพลังงาน แต่ไม่วินิจฉัยโรคหรือแทนคำแนะนำจากผู้เชี่ยวชาญ

## Guardrails

เมื่อมีแนวคิดฟีเจอร์ใหม่ ให้ตรวจว่า:

- ฟีเจอร์นั้นทำให้ JenOS กลายเป็น To-do App หรือไม่?
- ฟีเจอร์นั้นบังคับให้กรอกข้อมูลเกินคุณค่าที่ได้หรือไม่?
- ฟีเจอร์นั้นเอาสิทธิ์การตัดสินใจไปจากผู้ใช้หรือไม่?
- ฟีเจอร์นั้นสร้าง architecture สำหรับผู้ใช้จำนวนมากก่อนมีหลักฐานหรือไม่?

## Open Questions

- Non-goal ใดอาจกลายเป็น goal ในอนาคตหลังมีหลักฐาน?
- Calendar integration ควรเริ่มเมื่อใดโดยไม่กลายเป็น Calendar Replacement?
- ระบบควรแยก Reference data กับ Decision-driving data อย่างไร?
