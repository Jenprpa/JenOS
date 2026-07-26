# Context Resolution v1

Status: Discovery

Sprint: 2.0.1 Natural Capture & Routing Discovery

Purpose:

Define how JenOS should resolve shorthand and context-heavy owner language.

## Context Resolution Problem

The owner will naturally say:

- "4/1"
- "วันนี้"
- "งานฝุ่น"
- "เด็กยังไม่ส่ง Dataset"
- "ส่งรอง"
- "เตรียมสอน"

These phrases may be meaningful only inside the owner's current life context.

## Evidence Hierarchy

JenOS should resolve context using this order:

1. current conversation/input,
2. active Project/Area/context,
3. known schedule/calendar,
4. linked Person/Role/Area,
5. recent history,
6. owner clarification if ambiguity remains.

## Resolution Examples

### "4/1"

Possible meaning:

- class 4/1.

Evidence needed:

- teaching schedule,
- known class list,
- active teaching context.

If ambiguous:

- ask owner.

### "วันนี้"

Possible meaning:

- current local date.

Evidence needed:

- system date/time,
- timezone.

Risk:

- low if used for local note.
- higher if used for deadline/commitment.

### "งานฝุ่น"

Possible meaning:

- a known Project nickname,
- a topic,
- a task/action,
- a document/resource.

Evidence needed:

- recent history,
- active Project names,
- owner-defined aliases.

If ambiguous:

- ask owner before routing to Project.

### "เด็กยังไม่ส่ง Dataset"

Possible meaning:

- dependency in student project,
- observation,
- follow-up action.

Evidence needed:

- active Project,
- student/team relationship,
- expected Dataset.

If ambiguous:

- suggest possible matches.

### "ส่งรอง"

Possible meaning:

- submit to deputy director,
- send secondary version,
- unknown shorthand.

Evidence needed:

- recent school/admin context,
- known roles,
- current Project.

If ambiguity changes recipient/commitment:

- ask owner.

### "เตรียมสอน"

Possible meaning:

- prepare lesson,
- action,
- recurring responsibility,
- Project if bounded by specific class/topic/date.

Evidence needed:

- schedule,
- class/topic,
- upcoming deadline.

## Rule: Never Guess Silently

JenOS must not guess silently when ambiguity changes meaning materially.

Material ambiguity includes:

- creating Project,
- assigning person,
- setting deadline,
- creating commitment,
- changing state,
- recording sensitive student/finance data,
- linking to wrong Project.

## Safe Guessing

Low-risk interpretation may be allowed with visible undo:

- record raw observation,
- keep a reference,
- suggest possible destination,
- show "JenOS thinks this may relate to..."

## Clarification UX

Clarification should be lightweight:

- "หมายถึงห้อง 4/1 ใช่ไหม?"
- "เรื่องนี้เกี่ยวกับโปรเจกต์ไหน?"
- "ต้องการให้สร้างเป็นสิ่งที่ต้องทำไหม?"

Avoid long forms.

