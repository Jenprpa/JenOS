# Principle Testability Review v0.1

| Principle | Meaning | Observable System Behavior | Violation Example | Possible Acceptance Test | Status |
|---|---|---|---|---|---|
| Life is not a To-do List | ระบบไม่ลดชีวิตเหลือรายการงาน | Project view และ Today แสดง state, reason, blocker, context ไม่ใช่แค่รายการ action | หน้าแรกเป็น list งานค้างเรียง deadline | ผู้ใช้เห็นเหตุผลว่าทำไม Project ควรสนใจ แม้ไม่มี task ใหม่ | Enforceable Rule |
| State > Task | State คือความจริงของ Project; Action เป็นวิธีขยับ | ทุก Action ผูกกับ Project/State/Reason | Action ถูกสร้างลอย ๆ ไม่รู้ project | สร้าง Action ไม่ได้หรือไม่ควร surfaced ถ้าไม่มี context ขั้นต่ำ | Enforceable Rule |
| Every Project has Memory | Project ต้องจำเหตุผลและบทเรียน | Project มี decision/rationale/history summary | เปลี่ยนหัวข้อ Project แล้วเหตุผลหาย | State/decision change สำคัญต้องมี history entry | Enforceable Rule |
| Everything has Context | ข้อมูลต้องมีบริบทเพื่อใช้ตัดสินใจ | Recommendation แสดง project, constraints, source | แนะนำ "ทำ A" โดยไม่บอกเหตุผล | Recommendation ต้องมี context fields หรือระบุ Unknown | Enforceable Rule |
| History is Gold | การเปลี่ยนแปลงสำคัญย้อนกลับได้ | มี timestamp/source/revision สำหรับ state changes | deadline เปลี่ยนแล้วไม่รู้ว่าใครเปลี่ยน | เปลี่ยน deadline แล้วตรวจ history ได้ | Enforceable Rule |
| Life before Productivity | สุขภาพและชีวิตไม่แพ้จำนวนงานเสร็จ | Energy/health constraint เปลี่ยน recommendation ได้จริง | ระบบแนะนำงานหนักแม้ energy ต่ำโดยไม่เตือน | เมื่อ energy ต่ำ ระบบต้องเสนอ reduce scope/rest option | Design Principle |
| JenOS serves the user | ระบบช่วยผู้ใช้ ไม่ให้ผู้ใช้รับใช้ระบบ | ผู้ใช้ข้าม/ปฏิเสธ/แก้คำแนะนำได้ | บังคับกรอก field ครบก่อนใช้ต่อ | สร้าง Project ขั้นต่ำได้โดยไม่กรอกข้อมูลที่ไม่จำเป็น | Enforceable Rule |
| Explainable Recommendations | คำแนะนำต้องมีเหตุผล | Recommendation มี reason, evidence, uncertainty | "ควรทำ X" ไม่มี explanation | ทุก recommendation ต้องผ่าน reason checklist | Enforceable Rule |
| Waiting is not Failure | สิ่งที่รอผู้อื่นไม่ใช่งานค้างของผู้ใช้ | Waiting แสดง owner/reason/review date | Waiting ถูกนับเป็น overdue task | Waiting item ไม่เพิ่ม guilt/overdue count | Enforceable Rule |
| No False Certainty | ไม่เปลี่ยน unknown เป็น certainty | ระบบแสดง Unknown/Assumption/Inference | AI เดาว่าเด็กส่งงานแล้ว | ข้อมูลที่ไม่ยืนยันต้องติด label | Enforceable Rule |
| User Owns the Decision | ผู้ใช้เป็นเจ้าของการเลือก | AI suggestion ต้องรอ confirmation สำหรับ state สำคัญ | ระบบ auto-pause project จาก AI | State สำคัญเปลี่ยนไม่ได้จาก AI อย่างเดียว | Enforceable Rule |
| No Duplicate Data Entry | ลดการกรอกซ้ำ | ระบบ reuse ข้อมูลเดิมก่อนถาม | ถาม deadline ซ้ำทั้งที่มีอยู่ | เมื่อข้อมูลมีอยู่ ระบบต้อง prefill หรือ cite source | Design Principle |
| AI Suggestion is not Fact | AI เป็น suggestion จนกว่าจะยืนยัน | AI output มี source label และ confirmation state | AI summary ถูกบันทึกเป็น fact ทันที | AI-generated assumption ต้องอยู่ใน Assumption bucket | Enforceable Rule |
| System may recommend Pause or Stop | ระบบเสนอหยุด/พัก/ลด scope ได้ | Recommendation options มี pause/reduce/stop เมื่อ risk/energy เหมาะ | ระบบเสนอแต่ "ทำต่อ" เสมอ | เมื่อ project risk สูงและ impact ต่ำ ระบบต้องเสนอ pause/review option | Design Principle |

## Principles That Need More Definition

- Life before Productivity: ยังต้องกำหนดว่า health/energy มีน้ำหนักแค่ไหนเมื่อชนกับ commitment
- Serve the User: ต้องกำหนด burden budget หรือ minimum input rule
- Meaningful Work: ยังเป็น Inspirational Principle จนกว่าจะนิยาม value/commitment/impact

