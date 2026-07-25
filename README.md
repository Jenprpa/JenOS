# JenOS

JenOS คือ **Personal Decision Support System** สำหรับช่วยเจ้าของระบบเข้าใจสถานะของชีวิต โครงการ บริบท ความทรงจำ ข้อจำกัด และสิ่งที่ควรให้ความสำคัญในเวลานั้น

JenOS ไม่ใช่ To-do App และไม่ใช่ระบบ Productivity ทั่วไป เป้าหมายของระบบไม่ใช่การเพิ่มจำนวนงานที่ทำเสร็จ แต่คือการช่วยให้ผู้ใช้ตัดสินใจได้ดีขึ้นว่าเวลานี้ควรใช้เวลา พลัง และความสนใจกับอะไร

> JenOS must serve the user. The user must never be required to serve JenOS.

## Sprint ปัจจุบัน

Sprint 0: Foundation ปิดแล้ว

ขณะนี้กำลังเข้าสู่ **Sprint 0.2: Domain Discovery through Case Mining**

Sprint 0.2 จะไม่เริ่มจากการออกแบบ Domain Model เพิ่ม แต่จะเริ่มจาก Case Mining ด้วยเคสจริง 30-50 เคส เพื่อพิสูจน์ว่าหลักการ Sprint 0 อธิบายชีวิตจริงได้หรือไม่

> Reality over Elegance: ถ้าเคสจริงขัดกับโมเดล ให้แก้โมเดล ไม่ใช่บังคับเคสให้เข้ากับโมเดล

ยังไม่ทำ:

- Dashboard
- To-do UI
- Database schema แบบตายตัว
- Authentication
- Multi-tenant SaaS architecture
- Workflow ที่ hard-code เร็วเกินไป

## เอกสารหลัก

### Philosophy

- [JenOS Manifesto v0.1](docs/philosophy/JENOS_MANIFESTO_V0.1.md)
- [JenOS Constitution v0.1](docs/philosophy/JENOS_CONSTITUTION_V0.1.md)
- [Operating Principles v0.1](docs/philosophy/OPERATING_PRINCIPLES_V0.1.md)

### Product

- [Product Vision v0.1](docs/product/PRODUCT_VISION_V0.1.md)
- [Core Concepts v0.1](docs/product/CORE_CONCEPTS_V0.1.md)
- [Today Experience v0.1](docs/product/TODAY_EXPERIENCE_V0.1.md)
- [Non-goals v0.1](docs/product/NON_GOALS_V0.1.md)

### Architecture

- [Domain Model v0.1](docs/architecture/DOMAIN_MODEL_V0.1.md)
- [System Context v0.1](docs/architecture/SYSTEM_CONTEXT_V0.1.md)

### Decisions

- [ADR-0001: JenOS as Decision Support System](docs/decisions/ADR-0001-JENOS-AS-DECISION-SUPPORT-SYSTEM.md)
- [ADR-0002: Project and State Centered Model](docs/decisions/ADR-0002-PROJECT-AND-STATE-CENTERED-MODEL.md)

### Sprint

- [Sprint 0 Foundation](docs/sprints/SPRINT_0_FOUNDATION.md)
- [Sprint 0 Closure](docs/sprints/SPRINT_0_CLOSURE.md)
- [Sprint 0.2 Domain Discovery through Case Mining](docs/sprints/SPRINT_0_2_DOMAIN_DISCOVERY.md)

### Case Mining

- [Case Mining Template v0.1](docs/reviews/CASE_MINING_TEMPLATE_V0.1.md)
- [Case Mining Backlog v0.1](docs/reviews/CASE_MINING_BACKLOG_V0.1.md)

## กฎเหล็กของข้อมูล

ข้อมูลที่เป็นข้อมูลขับเคลื่อนชีวิตควรตอบได้อย่างน้อยหนึ่งข้อ:

1. ตอนนี้อยู่ที่ไหน? (**Current State**)
2. ต้องทำอะไรต่อ? (**Next Action**)
3. อะไรเป็นตัวขวาง? (**Blocker**)

ถ้าข้อมูลตอบไม่ได้เลย ข้อมูลนั้นอาจเป็นเพียง Reference ไม่ใช่ข้อมูลที่ใช้ขับเคลื่อนการตัดสินใจ

## Open Questions

- JenOS ควรเก็บข้อมูลเริ่มต้นในรูปแบบใดก่อนเลือกฐานข้อมูลจริง?
- State taxonomy ควรยืดหยุ่นแค่ไหนในรุ่นแรก?
- Today Experience ควรใช้เกณฑ์ใดในการเสนอสิ่งที่ควรขยับ โดยไม่กลายเป็น To-do List?
- ขอบเขตระหว่างคำแนะนำของ AI กับการตัดสินใจของผู้ใช้ควรถูกแสดงอย่างไร?
