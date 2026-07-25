# Philosophy Ambiguities v0.1

เอกสารนี้รวบรวมคำและแนวคิดที่ยังตีความได้หลายแบบ โดยไม่ทำให้ทุกคำเป็นนิยามตายตัวก่อนเวลา

## Project

- นิยามปัจจุบัน: หน่วยหลักของชีวิตหรืองานที่มีทิศทาง สถานะ บริบท ความทรงจำ และผลลัพธ์ที่ต้องการ
- สิ่งที่ยังคลุมเครือ: อะไรเล็กเกินไปหรือกว้างเกินไปที่จะเป็น Project
- การตีความต่างกัน: "สุขภาพ" เป็น Project ใหญ่, "กินยาให้ตรงเวลา" เป็น Action, "ตรวจสุขภาพปีนี้" เป็น Project ย่อย
- ผลกระทบต่อระบบ: ถ้ากว้างเกินไป ระบบจะบวม; ถ้าแคบเกินไป context จะหาย
- Working Definition: Project คือเรื่องที่ควรติดตามสถานะและเหตุผลข้ามเวลา เพราะมีผลต่อชีวิตหรือ commitment
- Open Question: Project ต้องมี Definition of Done เสมอหรือไม่
- Future Design Decision: Project nesting หรือ project/context distinction

## State

- นิยามปัจจุบัน: สภาพจริงของ Project หรือ Concept สำคัญ
- สิ่งที่ยังคลุมเครือ: State เป็นของ Project เท่านั้นหรือของ Action/Waiting/Document ได้ด้วย
- การตีความต่างกัน: Project state = Waiting; Document state = Draft; Health state = Low energy
- ผลกระทบต่อระบบ: ถ้า state หลายชนิดปนกัน reasoning จะสับสน
- Working Definition: State คือสถานะปัจจุบันของสิ่งที่ระบบใช้ตัดสินใจว่าจะขยับ รอ ลดขอบเขต หรือหยุด
- Open Question: State taxonomy ควรแยกตาม object type หรือใช้ชุดกลาง
- Future Design Decision: State model และ transition rules

## Context

- นิยามปัจจุบัน: ข้อมูลแวดล้อมที่ทำให้สิ่งหนึ่งมีความหมาย
- สิ่งที่ยังคลุมเครือ: Context ใดจำเป็นต่อ decision และ context ใดเป็น reference
- การตีความต่างกัน: เวลา, energy, ภาคเรียน, คนเกี่ยวข้อง, ข้อจำกัดโรงเรียน
- ผลกระทบต่อระบบ: เสี่ยงเกิด Context Tax
- Working Definition: Context คือข้อมูลที่เปลี่ยนคำตอบของระบบต่อ Current State, Next Action หรือ Blocker
- Open Question: Context ใดต้องบันทึกเอง และใดควร infer
- Future Design Decision: Minimum context capture

## Memory

- นิยามปัจจุบัน: ความทรงจำของ Project และระบบ เช่น เหตุผล ประวัติ บทเรียน
- สิ่งที่ยังคลุมเครือ: ต่างจาก Log, History, Event อย่างไร
- การตีความต่างกัน: Memory เป็น summary; History เป็น timeline; Log เป็น raw record
- ผลกระทบต่อระบบ: อาจเก็บมากเกินโดยไม่เกิดคุณค่า
- Working Definition: Memory คือข้อมูลจากอดีตที่ยังมีผลต่อการตัดสินใจในอนาคต
- Open Question: Memory ใดควรถูกสรุปอัตโนมัติ
- Future Design Decision: Memory storage and summarization

## Progress

- นิยามปัจจุบัน: ยังไม่มีนิยามตรง
- สิ่งที่ยังคลุมเครือ: Progress คือทำงานเพิ่ม, ลด risk, ตัดสินใจ, หรือวาง Project ลงอย่างมีเหตุผล
- การตีความต่างกัน: ส่งเอกสาร = progress; รู้ว่าควรหยุด = progress; รอคนอื่นอาจไม่ใช่ failure
- ผลกระทบต่อระบบ: ถ้านิยามตื้น ระบบจะกลับไปนับงานเสร็จ
- Working Definition: Progress คือการเปลี่ยนสถานการณ์ให้ชัดขึ้น ดีขึ้น ปลอดภัยขึ้น หรือตัดสินใจได้ดีขึ้น
- Open Question: Progress ที่เป็นการ pause/stop นับอย่างไร
- Future Design Decision: Progress signals

## Priority

- นิยามปัจจุบัน: ต้องไม่คำนวณจาก Deadline เพียงอย่างเดียว
- สิ่งที่ยังคลุมเครือ: Priority ใช้ ranking, grouping หรือ explanation
- การตีความต่างกัน: urgent, important, high impact, low energy fit
- ผลกระทบต่อระบบ: เสี่ยงเป็น productivity scoring
- Working Definition: Priority คือเหตุผลว่าทำไมเรื่องหนึ่งควรได้รับ attention ในบริบทปัจจุบัน
- Open Question: JenOS ควรใช้คะแนนหรือใช้ reasoning แบบข้อความก่อน
- Future Design Decision: Ranking method

## Impact

- นิยามปัจจุบัน: เป็นปัจจัยแยกจาก urgency, effort, energy, risk
- สิ่งที่ยังคลุมเครือ: Impact ต่อใครและวัดอย่างไร
- การตีความต่างกัน: impact ต่อ deadline, ต่อเด็ก, ต่อสุขภาพ, ต่อเงิน, ต่อความสัมพันธ์
- ผลกระทบต่อระบบ: ถ้าไม่ชัด ระบบจะจัดลำดับไม่โปร่งใส
- Working Definition: Impact คือผลที่คาดว่าจะเกิดกับ Project, people, commitments หรือ life area หากทำหรือไม่ทำ
- Open Question: Impact ควรเป็น qualitative หรือ scale
- Future Design Decision: Impact assessment model

## Meaningful

- นิยามปัจจุบัน: ใช้เวลาและพลังกับสิ่งที่มีความหมาย
- สิ่งที่ยังคลุมเครือ: ความหมายถูกกำหนดโดย vision, commitment, value หรือ urgency
- การตีความต่างกัน: งานเอกสารอาจไม่รู้สึก meaningful แต่สำคัญต่อ commitment
- ผลกระทบต่อระบบ: ระบบอาจ bias ไปทางงานที่รู้สึกดี แต่ละเลยหน้าที่
- Working Definition: Meaningful คือสิ่งที่สอดคล้องกับ value, commitment, care หรือ consequence สำคัญของผู้ใช้
- Open Question: เจ้าของระบบต้องนิยาม value หลักหรือไม่
- Future Design Decision: Value/context profile

## Human Capacity / Energy

- นิยามปัจจุบัน: สภาพพลังงานหรือความสามารถของผู้ใช้ในช่วงเวลาหนึ่ง
- สิ่งที่ยังคลุมเครือ: รวมสุขภาพ เวลา อารมณ์ สมาธิ หรือ physical capacity แค่ไหน
- การตีความต่างกัน: มีเวลา 2 ชั่วโมงแต่พลังต่ำ; ป่วยแต่ deadline สูง
- ผลกระทบต่อระบบ: ถ้าไม่ใช้จริง Health Decoration จะเกิด
- Working Definition: Human Capacity คือข้อจำกัดปัจจุบันของผู้ใช้ที่ควรเปลี่ยนคำแนะนำของระบบ
- Open Question: ผู้ใช้สามารถ override health recommendation ได้อย่างไร
- Future Design Decision: Energy input and override

## Risk

- นิยามปัจจุบัน: สิ่งที่อาจทำให้ผลลัพธ์เสียหายหากไม่จัดการ
- สิ่งที่ยังคลุมเครือ: risk ต่อ Project หรือชีวิตส่วนอื่น
- การตีความต่างกัน: ส่งไม่ทัน, สุขภาพทรุด, ข้อมูลไม่ครบ, ความสัมพันธ์เสีย
- ผลกระทบต่อระบบ: เสี่ยงซ่อน risk หรือทำให้ทุกอย่างเร่งด่วน
- Working Definition: Risk คือ possible negative consequence ที่ควรถูกมองเห็นและจัดการอย่างไม่กล่าวโทษ
- Open Question: Risk severity/likelihood ควรใช้ scale หรือภาษา
- Future Design Decision: Risk model

## Commitment

- นิยามปัจจุบัน: สิ่งที่ผู้ใช้รับปากหรือมีพันธะกับคน/เวลา/Project
- สิ่งที่ยังคลุมเครือ: commitment ต่างจาก deadline หรือ obligation อย่างไร
- การตีความต่างกัน: นัดแพทย์, รับปากตรวจงาน, deadline โรงเรียน
- ผลกระทบต่อระบบ: Life before Productivity จะตึงกับ commitment
- Working Definition: Commitment คือพันธะที่ถ้าเปลี่ยนต้องมีผลต่อคน ความไว้ใจ หรือ consequence สำคัญ
- Open Question: Commitment ยกเลิกไม่ได้มีระดับอย่างไร
- Future Design Decision: Commitment flexibility

## Decision / Recommendation

- นิยามปัจจุบัน: Decision เป็นการเลือกของผู้ใช้; Recommendation เป็นคำแนะนำพร้อมเหตุผล
- สิ่งที่ยังคลุมเครือ: คำแนะนำแรงแค่ไหนจึงกลายเป็นการสั่ง
- การตีความต่างกัน: suggest, recommend, warn, block, require confirmation
- ผลกระทบต่อระบบ: กระทบ autonomy โดยตรง
- Working Definition: Recommendation คือข้อเสนอที่ผู้ใช้ปฏิเสธหรือแก้ไขได้; Decision คือการยืนยันของผู้ใช้
- Open Question: ระบบควรใช้คำว่า "ควร" มากน้อยเพียงใด
- Future Design Decision: Recommendation UX language

## Life Before Productivity

- นิยามปัจจุบัน: ไม่ทำงานให้ได้มากที่สุด แต่ใช้เวลาและพลังอย่างมีความหมายโดยไม่ทำลายชีวิต
- สิ่งที่ยังคลุมเครือ: เมื่อสุขภาพขัดกับ commitment ระบบควรทำอะไร
- การตีความต่างกัน: ให้พัก, ลด scope, ทำขั้นต่ำ, ขอความช่วยเหลือ
- ผลกระทบต่อระบบ: ถ้าไม่แปลงเป็น rule จะเป็นเพียง slogan
- Working Definition: หลักที่บังคับให้ recommendation พิจารณา health/energy เป็น constraint จริง
- Open Question: สุขภาพมีสิทธิ์ veto recommendation หรือไม่
- Future Design Decision: Health-aware recommendation policy

## Serve the User

- นิยามปัจจุบัน: ระบบต้องรับใช้ผู้ใช้ ผู้ใช้ไม่ควรต้องรับใช้ระบบ
- สิ่งที่ยังคลุมเครือ: วัดอย่างไรว่า service กลายเป็น burden
- การตีความต่างกัน: ลดกรอกข้อมูล, ปฏิเสธคำแนะนำได้, ใช้ต่อได้แม้ข้อมูลไม่ครบ
- ผลกระทบต่อระบบ: เป็นหลักตัดสิน feature สำคัญ
- Working Definition: ระบบรับใช้ผู้ใช้เมื่อช่วยให้ตัดสินใจดีขึ้นโดยเพิ่มภาระน้อยที่สุดและรักษา autonomy
- Open Question: ภาระระดับใดถือว่ายอมรับได้
- Future Design Decision: Burden budget

