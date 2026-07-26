# Natural Capture Cases v1

Status: Discovery

Sprint: 2.0.1 Natural Capture & Routing Discovery

Purpose:

Explore owner-language inputs that JenOS should understand before forcing manual classification.

This document uses example owner language to test interpretation and routing. It does not implement AI, routing, UI, or new domain concepts.

## Case 1: Teaching Schedule

Raw owner language:

```text
พรุ่งนี้สอน 4/1 เรื่องเยื่อหุ้มเซลล์
```

Known context:

- "พรุ่งนี้" is relative to current date.
- "4/1" likely refers to a class/group.
- Teaching context is implied.

Possible interpretations:

- Schedule/context for tomorrow.
- Teaching record or planned lesson.
- Related Area: Teaching.

Entities/concepts involved:

- Context
- Event
- Relationship
- Area

Destinations:

- Teaching view
- Schedule/calendar view
- Related Project if one exists

Auto-route:

- record an observation/planned teaching context with visible undo.

Requires owner confirmation:

- create a Project.
- add calendar event if it has external commitment implications.

Unknown:

- exact date if system date unavailable.
- class identity mapping.
- lesson duration.

## Case 2: Lesson Reflection

Raw owner language:

```text
วันนี้สอน 4/1 เรื่องเซลล์ เด็กส่วนใหญ่เข้าใจ แต่กิจกรรมท้ายคาบไม่ทัน
```

Known context:

- Today.
- Class 4/1.
- Topic: cells.

Possible interpretations:

- Observation: students mostly understood.
- Teaching log: activity unfinished.
- Action: prepare follow-up or continue activity.

Entities/concepts involved:

- Observation
- Event
- Action
- Context
- Relationship

Destinations:

- Teaching record.
- Related lesson/project.
- Action list inside relevant Project or Area.

Auto-route:

- record sourced observation.
- append teaching log with visible undo.

Requires owner confirmation:

- create Action if it creates a future commitment.
- create Memory.

Unknown:

- whether "ต้องเตรียมต่อ" is implied or explicitly desired.

## Case 3: Preparation Work

Raw owner language:

```text
ต้องเตรียมใบงานเรื่องเซลล์ต่อ
```

Known context:

- Preparation needed.
- Topic: cells.

Possible interpretations:

- Action.
- Document to produce.
- Part of teaching Project/lesson context.

Entities/concepts involved:

- Action
- Document
- Context
- Project if linked

Destinations:

- Action inside active Project if known.
- Teaching preparation view.

Auto-route:

- suggest Action.

Requires owner confirmation:

- attach to a specific Project if ambiguous.
- create Project.

Unknown:

- deadline.
- class.
- whether worksheet already exists.

## Case 4: Student-Related Situation

Raw owner language:

```text
นักเรียน A ขาดเรียนอีกแล้ว ต้องคุยกับผู้ปกครอง
```

Known context:

- Student-related situation.
- Possible repeated pattern.
- Parent conversation may be needed.

Possible interpretations:

- Observation.
- Risk/concern.
- Action.
- Person relationship.

Entities/concepts involved:

- Person
- Observation
- Action
- Relationship
- Risk

Destinations:

- Student support record.
- Related Project only if owner confirms bounded support responsibility.

Auto-route:

- record observation with sensitive handling.

Requires owner confirmation:

- create Action to contact parent.
- create Project/case-like Project.
- create Memory.

Unknown:

- privacy level.
- student identity record.
- whether this is routine note or bounded intervention.

## Case 5: Finance

Raw owner language:

```text
จ่ายค่าซ่อมรถไป 3,500 บาท
```

Known context:

- Financial amount.
- Vehicle repair.

Possible interpretations:

- Event: payment happened.
- Finance context.
- Project expense if car repair Project exists.

Entities/concepts involved:

- Event
- Resource
- Context
- Project
- Relationship

Destinations:

- Finance view.
- Car repair Project.

Auto-route:

- record observation/event with visible undo.

Requires owner confirmation:

- link to Project if ambiguous.
- classify as expense category if not obvious.

Unknown:

- date if not "today."
- payment method.
- whether Project exists.

## Case 6: Project Work

Raw owner language:

```text
AI Spark ต้องแก้บทที่ 3 ก่อนส่งเล่ม
```

Known context:

- Project-like work.
- Action/detail.
- Submission destination or deliverable exists.

Possible interpretations:

- Action: revise chapter 3.
- Project: AI Spark.
- Document: project book/chapter.
- Dependency or deadline if send date known.

Entities/concepts involved:

- Project
- Action
- Document
- Event
- Dependency

Destinations:

- AI Spark Project workspace.
- Action list.
- Document/evidence area.

Auto-route:

- if AI Spark Project exists, suggest route to it.

Requires owner confirmation:

- create Project if not found.
- create deadline/commitment if inferred.

Unknown:

- deadline.
- current chapter status.
- source/destination for submission.

## Case 7: Document/File

Raw owner language:

```text
ไฟล์ rubric อยู่ใน Drive โฟลเดอร์ชีววิทยา
```

Known context:

- File location.
- Document/resource.

Possible interpretations:

- Resource link.
- Document source.
- Evidence/source for teaching Project.

Entities/concepts involved:

- Document
- Resource
- Relationship
- Context

Destinations:

- Project files if active Project known.
- Resource library/reference.

Auto-route:

- record resource/document reference with visible undo.

Requires owner confirmation:

- attach to Project if ambiguous.

Unknown:

- exact URL/path.
- relevant Project.

## Case 8: Link

Raw owner language:

```text
ลิงก์ตัวอย่างข้อสอบเก็บไว้ใช้กับชีวะ 1
```

Known context:

- Link.
- Biology 1.
- Future use.

Possible interpretations:

- Resource.
- Teaching Area/reference.
- Possible Project resource.

Entities/concepts involved:

- Resource
- Relationship
- Area
- Project if one exists

Destinations:

- Resource/reference.
- Biology 1 Project/Area if known.

Auto-route:

- store as Resource.

Requires owner confirmation:

- create Project.
- treat as Action.

Unknown:

- actual URL.
- course/project mapping.

## Case 9: Deadline/Commitment

Raw owner language:

```text
ต้องส่งแผนการสอนให้หัวหน้ากลุ่มวันศุกร์
```

Known context:

- Deadline/commitment.
- Destination/person/role.
- Document/action.

Possible interpretations:

- Action: submit lesson plan.
- Commitment.
- Destination relationship.
- Deadline.

Entities/concepts involved:

- Action
- Commitment
- Person/Role
- Document
- Event

Destinations:

- Project workspace if lesson plan Project exists.
- Today/commitment view.
- Schedule/calendar view if confirmed.

Auto-route:

- suggest Action/Commitment.

Requires owner confirmation:

- calendar event/deadline.
- link to Project.
- identify "หัวหน้ากลุ่ม."

Unknown:

- which Friday.
- document location.
- person identity.

## Case 10: Waiting/Dependency

Raw owner language:

```text
เด็กยังไม่ส่ง Dataset
```

Known context:

- Dataset missing.
- Student/team controls delivery.

Possible interpretations:

- Dependency.
- Observation.
- Action: follow up.
- Related Project if known.

Entities/concepts involved:

- Dependency
- Observation
- Action
- Person/Relationship
- Project

Destinations:

- Related Project dependency area.
- Follow-up movement.

Auto-route:

- record unresolved dependency if active Project is clear.

Requires owner confirmation:

- create Project.
- decide whole Project Waiting.
- contact student.

Unknown:

- which student/team.
- which Project.
- deadline/consequence.

## Case 11: General Note

Raw owner language:

```text
ปีหน้าลองทำกิจกรรมทดลองเรื่องเอนไซม์
```

Known context:

- Future idea.
- Teaching-related.

Possible interpretations:

- Reference idea.
- Observation/note.
- Possible future Project, not now.

Entities/concepts involved:

- Observation
- Context
- Resource if source exists

Destinations:

- Idea/reference area.
- Teaching Area.

Auto-route:

- keep as reference with visible undo.

Requires owner confirmation:

- create Project.
- create Action with deadline.

Unknown:

- year/course.
- commitment level.

## Case 12: Health/Capacity

Raw owner language:

```text
วันนี้พลังงานต่ำ ขอทำแค่งานเบา ๆ
```

Known context:

- Human Capacity.
- Current day.

Possible interpretations:

- Context.
- Capacity constraint.
- Recommendation input.

Entities/concepts involved:

- Context
- Observation
- Human Capacity

Destinations:

- Today/context view.
- Recommendation input later.

Auto-route:

- record capacity context locally with visible undo.

Requires owner confirmation:

- change Project scope/state.
- defer commitments.

Unknown:

- health cause.
- impact on specific Projects.

## Case 13: File Upload + Action

Raw owner language:

```text
อัปโหลดไฟล์ข้อสอบแล้ว เหลือตรวจคำผิด
```

Known context:

- Upload event happened.
- Remaining action.

Possible interpretations:

- Event: file uploaded.
- Action: check typos.
- Document: exam file.

Entities/concepts involved:

- Event
- Document
- Action
- Project

Destinations:

- Project history.
- Project action list.
- Document/evidence.

Auto-route:

- record event if source/evidence exists.

Requires owner confirmation:

- mark Project complete.
- create Action if owner wants tracking.

Unknown:

- Project identity.
- file location.

## Case 14: Relationship/Connection

Raw owner language:

```text
โครงงานนี้เกี่ยวกับ GLOBE และต้องส่งให้ครูร่วมตรวจ
```

Known context:

- A Project exists or is implied.
- Related Project/Area/program.
- Related person/role.

Possible interpretations:

- Relationship.
- Action/Dependency for review.
- Destination.

Entities/concepts involved:

- Project
- Relationship
- Person/Role
- Dependency
- Action

Destinations:

- Project relationships.
- Project dependency/review area.

Auto-route:

- suggest relationships.

Requires owner confirmation:

- identify exact Project/person.
- create dependency.

Unknown:

- which Project.
- teacher identity.
- review deadline.

## Case 15: Mixed Multi-Meaning Input

Raw owner language:

```text
พรุ่งนี้สอน 4/1 เรื่องเยื่อหุ้มเซลล์ ยังไม่ได้ทำใบงาน แล้วต้องส่งแผนให้หัวหน้ากลุ่มด้วย
```

Known context:

- Tomorrow.
- Class 4/1.
- Lesson topic.
- Worksheet not done.
- Lesson plan submission commitment.

Possible interpretations:

- Schedule context.
- Action: prepare worksheet.
- Commitment/action: submit lesson plan.
- Relationship/destination: head of group.

Entities/concepts involved:

- Context
- Action
- Commitment
- Document
- Person/Role
- Relationship

Destinations:

- Teaching schedule/context.
- Project or preparation workspace.
- Action list.
- Commitment/deadline view.

Auto-route:

- split into candidate records.
- record low-risk observations.

Requires owner confirmation:

- calendar event/deadline if ambiguous.
- which Project/course workspace.
- exact destination/person.

Unknown:

- exact date resolution.
- whether worksheet belongs to existing Project.
- which Friday/deadline if omitted.

