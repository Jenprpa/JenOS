# Owner Philosophy Review Questions v0.1

คำถามชุดนี้เป็นคำถามตัดสินใจจริงสำหรับเจ้าของ JenOS ก่อนเดินหน้าสู่ Domain Discovery

## Must Decide Before Sprint 0.2

### Identity

- JenOS ควรใช้คำจำกัดความหลักว่า "Personal Decision Support System" ต่อไปหรือมีคำไทยที่ต้องใช้ควบคู่?
- อะไรคือ boundary ที่ทำให้ JenOS ยังเป็นของ Jen ก่อน ไม่ generalize เร็วเกินไป?

### Autonomy

- ระบบควรใช้คำว่า "ควร" ได้มากน้อยแค่ไหนก่อนรู้สึกเหมือนสั่ง?
- การเปลี่ยน State สำคัญต้องให้ผู้ใช้ยืนยันเสมอหรือไม่?

### Health

- เมื่อสุขภาพและ Commitment ขัดกัน ระบบควรเสนออะไรเป็นค่าเริ่มต้น: พัก, ลด scope, ขอช่วย, หรือทำขั้นต่ำ?
- ผู้ใช้สามารถปิดคำแนะนำด้านสุขภาพชั่วคราวได้หรือไม่?

### Memory

- ระบบควรเก็บเหตุผลของทุก State Change หรือเฉพาะการเปลี่ยนแปลงสำคัญ?
- Memory ต่างจาก Log ในความรู้สึกของเจ้าของระบบอย่างไร?

### Privacy

- ผู้ใช้ควรลบ History ได้หรือไม่?
- ถ้าลบ History แล้วทำให้เหตุผลขาด ระบบควรเก็บ tombstone ไว้หรือควรลบถาวร?

### Projects

- อะไรทำให้สิ่งหนึ่งมีสถานะเป็น Project?
- Project ต้องมีผลลัพธ์ปลายทางเสมอหรือไม่?
- ความสัมพันธ์กับบุคคลควรเป็น Project หรือ Context?

### State

- Project ควรมี State เดียวหรือหลาย State ตามมิติ เช่น work state, risk state, health impact?
- Waiting และ Blocked ต่างกันที่เงื่อนไขใด?

### Today

- Today ควรแสดงคำแนะนำกี่รายการต่อครั้ง?
- Today ควรเริ่มจาก ranking, grouping หรือ reasoning แบบข้อความ?

### AI

- AI สามารถสร้าง Assumption ได้หรือไม่ และต้องแสดงอย่างไร?
- AI suggestion ใดต้องห้ามบันทึกจนกว่าผู้ใช้ยืนยัน?

### Recommendations

- Recommendation ต้องมี alternatives เสมอหรือเฉพาะกรณี decision สำคัญ?
- หากผู้ใช้ต้องการทำสิ่งที่ระบบเห็นว่าเสี่ยง ระบบควรทำอย่างไร?

## Should Decide Soon

### Failure

- อะไรคือ failure ใน JenOS หาก Waiting ไม่ใช่ Failure?
- Project ที่ไม่ประสบความสำเร็จถือว่า Completed ได้หรือไม่?

### Completion

- อะไรคือความหมายของ Completed ใน JenOS?
- Completed ต้องมี Definition of Done ที่ตรวจสอบได้หรือไม่?

### Stopping

- ระบบควรเสนอให้ยกเลิก Project ภายใต้เงื่อนไขใด?
- Pause, Stop, Archive และ Completed ต่างกันอย่างไร?

### State

- State taxonomy ชุดแรกควรมีน้อยแค่ไหน?
- ผู้ใช้ควรแก้ชื่อ State เองได้ตั้งแต่รุ่นแรกหรือไม่?

### Memory

- Lesson ควรเป็น global memory หรือผูกกับ Project?
- ระบบควรสรุป Memory อัตโนมัติได้หรือควรเสนอให้ผู้ใช้ยืนยันก่อน?

### Today

- Today ควรมี section สุขภาพที่มีผลต่อ recommendation จริงอย่างไร?
- ควรมีคำแนะนำประเภท "ไม่ต้องแตะวันนี้" หรือไม่?

## Can Defer

### Privacy

- ต้องมี privacy level หลายระดับตั้งแต่ต้นหรือไม่?
- ข้อมูลของบุคคลอื่นควรถูก anonymize เมื่อใด?

### AI

- AI ควรเรียนรู้จากการที่ผู้ใช้ปฏิเสธคำแนะนำหรือไม่?
- ผู้ใช้ควรแก้ learning profile เองได้หรือไม่?

### Recommendations

- ระบบควรมี confidence score เป็นตัวเลขหรือใช้ภาษาธรรมดา?
- ระบบควรมี mode เข้ม/อ่อนสำหรับ warning หรือไม่?

### Projects

- Project nesting ต้องมีในรุ่นแรกหรือไม่?
- Life area เช่น บ้าน รถ เงิน สุขภาพ ควรเป็น Project ถาวรหรือเป็น Context hub?

