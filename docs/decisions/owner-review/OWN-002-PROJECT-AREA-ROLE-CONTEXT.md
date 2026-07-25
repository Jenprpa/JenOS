# OWN-002: Project, Area, Role and Context

## Decision ID

OWN-002

## Decision Title

Project, Area, Role and Context

## Status

Decided

## Context

JenOS ต้องเข้าใจชีวิตจริงโดยไม่บังคับ hierarchy ซับซ้อนเกินไป ตัวอย่าง "ครู -> งานสอน -> ชีววิทยา 1 -> เตรียมข้อสอบปลายภาค" อาจเป็น Role, Area, Project และ Action ตามลำดับ

## Why This Decision Matters

ถ้าไม่แยก concept เหล่านี้ Project จะรับน้ำหนักทุกอย่าง ถ้าแยกมากเกินไป ระบบจะกลายเป็น taxonomy tax

## Evidence from Existing Documents

- Manifesto: ชีวิตประกอบด้วย Project, role, relationship, decision
- Core Concepts: มี Project, Person, Role, Context แยกกันแล้ว
- Anti-patterns: Context Tax และ Forced Completeness เป็นสิ่งต้องหลีกเลี่ยง

## Decision Question

JenOS ต้องแยก Project, Area, Role, Context และ Responsibility เป็น concept แยกกันหรือไม่?

## Options

- Option A: Minimal model — ใช้ Project กับ Context ก่อน ยังไม่เพิ่ม Area/Responsibility เป็น object
- Option B: Lightweight distinction — แยก Role, Area, Project, Action เป็น working labels แต่ยังไม่ทำ schema แข็ง
- Option C: Explicit hierarchy — สร้างโครง Role > Area > Project > Action
- Option D: Flexible tags — ใช้ tags/labels ไปก่อนจนมี evidence

## Trade-offs

- Option A ง่าย แต่เสี่ยง Project บวม
- Option B สมดุลและเหมาะกับ Sprint 0.2
- Option C ชัด แต่เสี่ยง overengineering
- Option D ยืดหยุ่น แต่ reasoning ยาก

## Example Classification

- ครู: Role
- งานสอน: Area หรือ Responsibility
- ชีววิทยา 1: Area/Project ตามภาคเรียน
- เตรียมข้อสอบปลายภาค: Project หรือ Action ตามขอบเขตและ deadline

## Risk of No Decision

Domain Discovery จะปนบทบาท พื้นที่ชีวิต และ Project จน Today reasoning ไม่ชัด

## AI Recommendation

แนะนำ Option B: ใช้ lightweight distinction เป็น working model และยังไม่สร้าง hierarchy แข็ง

## Owner Decision

Selected Option: Lightweight distinction with explicit conceptual separation

JenOS จะแยก "สิ่งที่มีตัวตน" (**Core Entities**) ออกจาก "สิ่งที่อธิบายหรือเชื่อมโยงตัวตน" (**Supporting Concepts**) โดยยังไม่สร้าง hierarchy หรือ database schema ที่แข็งเกินไป

## Core Entities

Core Entities คือสิ่งที่มีตัวตนของตัวเอง:

```text
Person
Project
Area
Role
Resource
Document
Event
Decision
```

## Supporting Concepts

Supporting Concepts คือสิ่งที่อธิบายสถานะ บริบท ความเสี่ยง หรือความสัมพันธ์ของ Core Entities:

```text
State
Context
Memory
Action
Observation
Risk
Commitment
Relationship
Tag
```

## Key Domain Rule

State ไม่ควรเป็น Core Entity

State เป็นคุณสมบัติของบางสิ่ง เช่น:

```text
Project
  State = Planning

Document
  State = Draft

Decision
  State = Proposed
```

ไม่ใช่:

```text
State
  Project
  Document
  Decision
```

## Entity Definitions

### Person

Person คือมนุษย์ ไม่ใช่ Project และไม่ใช่ Resource

Person สามารถมีหลาย Role ได้ เช่น Jen อาจเป็นครู นักศึกษา ลูกสาว หรือหัวหน้างานวิจัย

### Role

Role คือ "หมวก" หรือบทบาทที่เปลี่ยนได้ตามสถานการณ์ เช่น Teacher, Research Advisor, Homeroom Teacher, Student, Daughter

Role ไม่ควรมี State

### Area

Area คือความรับผิดชอบระยะยาว เช่น Teaching, Health, Finance, Research, Family, Career

Area ไม่มีวัน Completed และมีไว้เพื่อจัดระเบียบชีวิต ไม่ใช่เพื่อให้ทำเสร็จ

### Project

Project คือการเปลี่ยนแปลงที่มีขอบเขต เช่น Biology Final Exam 2026, AI Spark 2027, Repair Car, Improve Sleep, Finish Thesis

Project มี State, Memory, Decision, Timeline และสามารถ Completed ได้

### Context

Context ไม่ใช่สิ่งของ แต่เป็น "เลนส์" หรือสภาพแวดล้อมที่ส่งผลต่อ decision เช่น วันนี้อยู่โรงเรียน, มีเวลา 2 ชั่วโมง, ฝนตก, อินเทอร์เน็ตล่ม, กำลังเครียด, พลังงานต่ำ, ใกล้ Deadline

Context เปลี่ยนตลอดเวลาและส่งผลต่อ Person, Project, Decision และ Recommendation แต่ไม่ควรถูกทำให้เป็น Project โดยตรง

## Conceptual Relationship

```text
Person
  has many Roles

Role
  may be responsible for Area

Area
  may contain Projects

Project
  changes through State
  produces Decisions

Decision
  creates Memory

Context
  influences Person
  influences Projects
  influences Decisions
  influences Recommendations
```

Context ไม่อยู่ในสายหลักของ entity hierarchy เพราะ Context เป็นอิทธิพล ไม่ใช่วัตถุ

## Guiding Principle

> Roles change. Areas endure. Projects evolve. People remain.

## Owner Rationale

การแยก Core Entities กับ Supporting Concepts ช่วยให้ JenOS ไม่ทำให้ทุกอย่างเป็น Project และไม่ทำให้ State/Context กลายเป็นวัตถุหลักผิดประเภท

โมเดลนี้ยังรักษาความเรียบง่ายเพราะไม่บังคับ hierarchy แบบแข็ง แต่ให้ภาษาเพียงพอสำหรับ Domain Discovery

Confidence: Experimental

## Consequences

- Person ต้องไม่ถูกลดเป็น Project หรือ Resource
- Role เป็นบทบาท ไม่ควรมี State
- Area เป็นความรับผิดชอบระยะยาว ไม่มีวัน Completed
- Project เป็นการเปลี่ยนแปลงที่มีขอบเขต มี State และสามารถ Completed ได้
- Context เป็นเลนส์หรืออิทธิพล ไม่ใช่สิ่งของและไม่ใช่ Project
- State เป็น supporting concept หรือ property ของ entity ไม่ใช่ Core Entity
- Domain Discovery ต้องเริ่มจากการแยก Core Entities และ Supporting Concepts ก่อนลงรายละเอียด relation
- Session 1 สามารถถือว่า completed เพื่อใช้เป็นฐานของ OWN-003 และ OWN-004

## Documents to Revise

Core Concepts, Domain Model, Product Vision

## Open Follow-up Questions

- Responsibility ควรเป็น synonym ของ Area ในช่วงแรก หรือควรเป็น concept แยกต่างหาก?
- Resource และ Document ควรแยกกันเสมอหรือ Document เป็น Resource ชนิดหนึ่ง?
