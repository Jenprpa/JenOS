# Philosophy Review Scenarios v0.1

Scenario เหล่านี้ใช้ทดสอบปรัชญาเท่านั้น ไม่ใช่การออกแบบหน้าจอ

## Scenario 1: มีเวลา 2 ชั่วโมง แต่งานสำคัญ 5 เรื่อง

- Situation: ผู้ใช้มีเวลา 2 ชั่วโมงก่อนประชุม
- Known Facts: มี Project สำคัญ 5 เรื่อง, บางเรื่องมี deadline, บางเรื่อง waiting
- Unknowns: energy จริง, impact ของแต่ละเรื่อง
- Constraints: เวลา 2 ชั่วโมง
- Projects Involved: งานสอน, เอกสารโรงเรียน, โครงงานนักเรียน, สุขภาพ, การเงิน
- People Involved: ผู้ใช้, นักเรียน, ครูร่วม
- Possible Decisions: เลือก 1 เรื่อง, แบ่งเวลา, follow up waiting, พัก
- What JenOS Should Do: เสนอ 1-3 options พร้อม reason/impact/energy fit
- What JenOS Must Not Do: แสดง 5 งานเป็น to-do list
- Philosophy Principles Tested: Life is not To-do, Priority not deadline-only, Serve the user
- Open Questions: Today ควรเสนอมากสุดกี่รายการ

## Scenario 2: งานใกล้ Deadline แต่ผู้ใช้นอนน้อย

- Situation: เอกสารต้องส่งพรุ่งนี้ แต่ผู้ใช้นอนน้อยมาก
- Known Facts: deadline ใกล้, energy ต่ำ
- Unknowns: เลื่อนได้หรือไม่, minimum submission คืออะไร
- Constraints: สุขภาพและเวลา
- Projects Involved: เอกสารโรงเรียน, สุขภาพ
- People Involved: ผู้ใช้, ผู้รับเอกสาร
- Possible Decisions: ทำขั้นต่ำ, ขอเลื่อน, ขอช่วย, พักก่อน
- What JenOS Should Do: แสดง trade-off และเสนอ reduce scope/recovery plan
- What JenOS Must Not Do: บอกให้ฝืนโดยไม่พูดถึง health cost
- Philosophy Principles Tested: Life before Productivity, Commitments, Truth vs Safety
- Open Questions: health มีสิทธิ์ veto แค่ไหน

## Scenario 3: Project รอข้อมูลจากบุคคลอื่น

- Situation: โครงงานนักเรียนรอ dataset จากเด็ก
- Known Facts: Project waiting, owner ของ waiting คือเด็ก
- Unknowns: เด็กติดปัญหาอะไร
- Constraints: deadline การส่งเล่ม
- Projects Involved: โครงงานนักเรียน
- People Involved: ผู้ใช้, นักเรียน
- Possible Decisions: follow up, ปรับแผน, ใช้ข้อมูลสำรอง
- What JenOS Should Do: แสดงว่า Waiting ไม่ใช่ Failure และเสนอ review/follow-up timing
- What JenOS Must Not Do: นับเป็นงานค้างของผู้ใช้ทุกวัน
- Philosophy Principles Tested: Waiting is not Failure, Dependency
- Open Questions: waiting overdue กลายเป็น blocker เมื่อใด

## Scenario 4: ผู้ใช้ต้องการทำต่อ แต่ข้อมูลบ่งชี้ว่าควรพัก

- Situation: ผู้ใช้อยากทำงานต่อกลางคืน แต่ energy ต่ำหลายวัน
- Known Facts: recent workload สูง, rest ต่ำ
- Unknowns: สุขภาพจริง, urgency ของงาน
- Constraints: human capacity
- Projects Involved: สุขภาพ, งานเอกสาร
- People Involved: ผู้ใช้
- Possible Decisions: พัก, ทำขั้นต่ำ 20 นาที, เลื่อนไปเช้า
- What JenOS Should Do: เตือนอย่างไม่ตัดสินและเสนอทางเลือกเบา
- What JenOS Must Not Do: block ผู้ใช้โดยไม่มีสิทธิ์ หรือ guilt trip
- Philosophy Principles Tested: Guidance vs Autonomy, Life before Productivity
- Open Questions: ระบบควรเตือนซ้ำได้กี่ครั้ง

## Scenario 5: งานง่ายผลกระทบน้อย vs งานยากผลกระทบสูง

- Situation: งานง่ายทำเสร็จเร็ว แต่งานยากช่วยลด risk ใหญ่
- Known Facts: effort และ impact ต่างกัน
- Unknowns: energy พอทำงานยากหรือไม่
- Constraints: เวลาและสมาธิ
- Projects Involved: งานสอน, คศ.3
- People Involved: ผู้ใช้
- Possible Decisions: ทำงานยากบางส่วน, ทำงานง่ายเพื่อ momentum, พัก
- What JenOS Should Do: อธิบาย trade-off ไม่ใช้ completion count
- What JenOS Must Not Do: ให้คะแนนงานง่ายสูงเพราะเสร็จเร็ว
- Philosophy Principles Tested: Impact, Effort, Energy, No productivity scoring
- Open Questions: progress วัดอย่างไร

## Scenario 6: AI ไม่มีข้อมูลพอ แต่ผู้ใช้ถามว่าควรเลือกอะไร

- Situation: ผู้ใช้ถามให้ AI เลือกระหว่างสองทาง
- Known Facts: ข้อมูลบางส่วน
- Unknowns: consequence, constraint, owner preference
- Constraints: uncertainty สูง
- Projects Involved: Project ที่กำลังตัดสินใจ
- People Involved: ผู้ใช้
- Possible Decisions: ขอข้อมูลเพิ่ม, list alternatives, delay decision
- What JenOS Should Do: แยก Fact/Assumption/Unknown และไม่ให้ false certainty
- What JenOS Must Not Do: ตอบมั่นใจปลอม
- Philosophy Principles Tested: No False Certainty, Explainable Recommendations
- Open Questions: confidence ควรแสดงอย่างไร

## Scenario 7: Project เปลี่ยนหัวข้อหลายครั้ง

- Situation: โครงงานนักเรียนเปลี่ยนหัวข้อหลายรอบ ต้องอธิบายเหตุผล
- Known Facts: มี state/decision history
- Unknowns: เหตุผลบางรอบอาจหาย
- Constraints: ต้องเขียนรายงาน
- Projects Involved: โครงงานนักเรียน
- People Involved: นักเรียน, ครู
- Possible Decisions: สรุป rationale, เก็บ lesson, ปรับ timeline
- What JenOS Should Do: ดึง Memory/History ที่เกี่ยวข้อง
- What JenOS Must Not Do: แสดง log ดิบทั้งหมดโดยไม่ช่วยสรุป
- Philosophy Principles Tested: Memory, History, Explainability
- Open Questions: Memory ต่างจาก Log อย่างไรในระบบจริง

## Scenario 8: Commitment ยกเลิกไม่ได้แต่ขัดกับสุขภาพ

- Situation: ต้องไปงานโรงเรียนแม้ไม่พร้อม
- Known Facts: commitment สูง, health ต่ำ
- Unknowns: สามารถ delegate ได้ไหม
- Constraints: เวลา, หน้าที่, สุขภาพ
- Projects Involved: งานโรงเรียน, สุขภาพ
- People Involved: ผู้ใช้, โรงเรียน, ครูร่วม
- Possible Decisions: ไปแบบลด scope, ขอช่วย, แจ้งข้อจำกัด
- What JenOS Should Do: เสนอ mitigation ไม่ทำให้ health หายไปจาก reasoning
- What JenOS Must Not Do: ตัดสินว่า commitment ไม่สำคัญ
- Philosophy Principles Tested: Life before Productivity vs Commitments
- Open Questions: commitment flexibility มีกี่ระดับ

## Scenario 9: ข้อมูลอดีตไม่สะท้อนสภาวะปัจจุบัน

- Situation: ระบบเคยเห็นว่าผู้ใช้ทำงานกลางคืนได้ดี แต่ตอนนี้ป่วย
- Known Facts: historical pattern, current health signal
- Unknowns: current capacity แน่ชัด
- Constraints: personalization ต้องไม่ override reality
- Projects Involved: สุขภาพ, งานด่วน
- People Involved: ผู้ใช้
- Possible Decisions: ปรับคำแนะนำชั่วคราว, ถามยืนยัน
- What JenOS Should Do: ให้ current context มีน้ำหนักมากกว่า pattern เก่า
- What JenOS Must Not Do: แนะนำตามอดีตแบบไม่สนสภาพปัจจุบัน
- Philosophy Principles Tested: Personalization vs Predictability
- Open Questions: learning profile แก้ได้ไหม

## Scenario 10: ผู้ใช้ปฏิเสธคำแนะนำ

- Situation: ระบบแนะนำให้ pause แต่ผู้ใช้เลือกทำต่อ
- Known Facts: recommendation ถูกปฏิเสธ
- Unknowns: เหตุผลของผู้ใช้
- Constraints: autonomy
- Projects Involved: Project นั้น, สุขภาพ
- People Involved: ผู้ใช้
- Possible Decisions: รับการปฏิเสธ, ขอเหตุผล optional, ปรับ learning
- What JenOS Should Do: เคารพการตัดสินใจและอาจบันทึก rationale หากผู้ใช้ต้องการ
- What JenOS Must Not Do: ย้ำเตือนแบบกดดันหรือเปลี่ยนกลับเอง
- Philosophy Principles Tested: User Owns Decision, Serve the User
- Open Questions: ระบบควรเรียนรู้จาก rejection อย่างไร

## Scenario 11: ไม่มี Task ค้าง แต่ Project ยังไม่เสร็จ

- Situation: Project ไม่มี action เปิดอยู่ แต่ยังอยู่ระหว่างรอผล
- Known Facts: ไม่มี task, state = Waiting/Reviewing
- Unknowns: result จะมาเมื่อใด
- Constraints: review date
- Projects Involved: โครงงาน, เอกสาร
- People Involved: ผู้ใช้, คนที่รอ
- Possible Decisions: ตั้ง review date, archive ไม่ได้, mark waiting
- What JenOS Should Do: แสดง state จริง ไม่ถือว่า completed
- What JenOS Must Not Do: mark เสร็จเพราะ task list ว่าง
- Philosophy Principles Tested: State > Task, Waiting is not Failure
- Open Questions: Completed หมายถึงอะไร

## Scenario 12: สิ่งหนึ่งเป็น Project หรือ Context

- Situation: "รถ" มีผลต่อการเดินทางไปโรงเรียน แต่ตอนนี้ไม่มีงานเฉพาะ
- Known Facts: รถเป็น life area ที่อาจกระทบ work
- Unknowns: มี outcome หรือ state ที่ต้องติดตามไหม
- Constraints: ไม่อยากสร้าง Project เกินจำเป็น
- Projects Involved: รถ, งานโรงเรียน
- People Involved: ผู้ใช้
- Possible Decisions: เป็น Context, Project, Resource หรือ Risk
- What JenOS Should Do: ช่วยแยกว่าต้องติดตามเป็น Project หรือเป็น context เท่านั้น
- What JenOS Must Not Do: บังคับทุก life area เป็น Project
- Philosophy Principles Tested: Project boundary, Context
- Open Questions: Project qualification heuristic คืออะไร

