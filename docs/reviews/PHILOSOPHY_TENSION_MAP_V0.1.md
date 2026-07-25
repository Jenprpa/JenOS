# Philosophy Tension Map v0.1

JenOS มีหลักการบางคู่ที่ไม่ขัดแย้งกันตรง ๆ แต่มีแรงตึงที่ต้องออกแบบอย่างระวัง

## Truth vs Emotional Safety

- หลักการสองด้าน: ต้องพูดความจริงและไม่ซ่อนความเสี่ยง; ต้องไม่ทำให้ผู้ใช้รู้สึกผิดหรือถูกตัดสิน
- สถานการณ์: Project ใกล้ deadline และมี risk สูง แต่ผู้ใช้เหนื่อยมาก
- ความเสี่ยง: ระบบอาจกลายเป็น guilt design หรือปลอบจนซ่อน risk
- แนวทางสมดุล: แสดง risk แบบ factual, non-judgmental, controllable/uncontrollable และเสนอทางลดความเสียหาย
- สิ่งที่ระบบห้ามทำ: ใช้คำตำหนิ, สีขู่, หรือจำนวนงานค้างเพื่อกดดัน
- คำถามที่ยังต้องตัดสินใจ: tone ของ warning ควรเข้มแค่ไหน

## Memory vs Privacy

- หลักการสองด้าน: Every Project has Memory และ History is Gold; ผู้ใช้มี privacy และสิทธิควบคุมข้อมูล
- สถานการณ์: ผู้ใช้ต้องการลบเหตุผลเก่าที่อ่อนไหว แต่เหตุผลนั้นอธิบาย state change สำคัญ
- ความเสี่ยง: เก็บมากเกินละเมิด privacy; ลบหมดทำให้ history ขาดความหมาย
- แนวทางสมดุล: รองรับ delete, redact, archive, private, และ tombstone โดยเจ้าของระบบเลือก
- สิ่งที่ระบบห้ามทำ: ลบเงียบ ๆ หรือเก็บข้อมูลอ่อนไหวโดยไม่มีเหตุผล
- คำถามที่ยังต้องตัดสินใจ: ข้อมูลชนิดใดต้องลบได้แบบถาวร

## Guidance vs Autonomy

- หลักการสองด้าน: ระบบต้องช่วยตอบว่าควรสนใจอะไร; ระบบห้ามตัดสินใจแทน
- สถานการณ์: AI มี recommendation ชัดเจนว่า Project ควรถูก pause
- ความเสี่ยง: ผู้ใช้รู้สึกถูกระบบสั่ง หรือระบบตัดสินใจแทนโดยปริยาย
- แนวทางสมดุล: แสดง recommendation พร้อม reason, confidence, alternatives, dismiss/edit controls
- สิ่งที่ระบบห้ามทำ: เปลี่ยน state สำคัญจาก recommendation โดยไม่ให้ผู้ใช้ยืนยัน
- คำถามที่ยังต้องตัดสินใจ: มีกรณีใดที่ระบบควร block action เพื่อความปลอดภัยหรือไม่

## Personalization vs Predictability

- หลักการสองด้าน: Build for Jen first และเรียนรู้จากผู้ใช้; พฤติกรรมต้องโปร่งใสและคาดเดาได้
- สถานการณ์: ระบบเรียนรู้ว่าผู้ใช้มักทำงานหนักตอนกลางคืน แล้วเริ่มเสนอแบบนั้น
- ความเสี่ยง: personalization reinforce habit ที่ทำร้ายสุขภาพ
- แนวทางสมดุล: personalization ต้องถูกอธิบายและอยู่ใต้ constitution
- สิ่งที่ระบบห้ามทำ: เปลี่ยน ranking แบบไม่มีเหตุผลหรือเรียนรู้ pattern ที่ขัด Life before Productivity
- คำถามที่ยังต้องตัดสินใจ: ผู้ใช้ควรเห็นและแก้ learning profile ได้หรือไม่

## Context Awareness vs Data Burden

- หลักการสองด้าน: Everything has Context; ระบบต้องลดการกรอกข้อมูลซ้ำและไม่บังคับกรอกทุกกิจกรรม
- สถานการณ์: Today ต้องใช้ energy/deadline/risk แต่ข้อมูลไม่ครบ
- ความเสี่ยง: ระบบถามมากจนเป็น Context Tax หรือแนะนำมั่วเพราะข้อมูลน้อย
- แนวทางสมดุล: ถามเฉพาะข้อมูลที่เปลี่ยนคำแนะนำ และแสดง Unknown เมื่อไม่รู้
- สิ่งที่ระบบห้ามทำ: บังคับกรอกข้อมูลครบก่อนใช้ระบบ
- คำถามที่ยังต้องตัดสินใจ: minimum useful context ของ Project คืออะไร

## Life Before Productivity vs Commitments

- หลักการสองด้าน: ปกป้องสุขภาพ; ผู้ใช้อาจมี commitment/deadline ที่เลี่ยงไม่ได้
- สถานการณ์: ผู้ใช้นอนน้อยแต่ต้องส่งเอกสารโรงเรียนวันนี้
- ความเสี่ยง: ระบบบอกให้พักจนละเลย consequence หรือผลักให้ทำจนสุขภาพเสีย
- แนวทางสมดุล: เสนอ minimum viable action, reduce scope, ask for help, reschedule, recovery plan
- สิ่งที่ระบบห้ามทำ: บอกให้ "ลุย" โดยไม่พูดถึง health cost หรือบอกให้พักโดยไม่พูดถึง consequence
- คำถามที่ยังต้องตัดสินใจ: commitment ระดับใด override health recommendation ได้

## Flexible Workflow vs Consistent Model

- หลักการสองด้าน: ไม่บังคับ workflow เดียว; ต้องมี model ที่ reasoning ได้
- สถานการณ์: Project แต่ละชนิดต้องการ state ต่างกัน
- ความเสี่ยง: model แข็งเกินจนใช้จริงไม่ได้ หรือยืดหยุ่นเกินจนระบบคิดไม่ได้
- แนวทางสมดุล: มี core concepts กลาง แต่ state labels/process ปรับตาม project type ได้
- สิ่งที่ระบบห้ามทำ: hard-code workflow ที่ยังไม่ได้ validate
- คำถามที่ยังต้องตัดสินใจ: อะไรคือ invariant ขั้นต่ำของ Project

## Complete History vs Simplicity

- หลักการสองด้าน: History is Gold; หน้าใช้งานต้องไม่ท่วมผู้ใช้
- สถานการณ์: Project มี log หลายสิบรายการ แต่ Today ต้องแสดงสิ่งที่เกี่ยวข้องตอนนี้
- ความเสี่ยง: เก็บครบแต่ใช้ยาก หรือสรุปมากจนเหตุผลหาย
- แนวทางสมดุล: แยก raw history, meaningful memory, current summary
- สิ่งที่ระบบห้ามทำ: แสดง log ทั้งหมดเป็นค่าเริ่มต้น
- คำถามที่ยังต้องตัดสินใจ: อะไรทำให้ log กลายเป็น memory ที่ควร surfaced

