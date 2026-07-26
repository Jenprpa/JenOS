# Project Workspace v1

Status: Product concept

Sprint: 2.1 Owner Workflow Revision

Purpose:

Define an owner-facing Project Workspace that maps the owner's language to existing Domain Model concepts without exposing unnecessary domain terminology.

## Owner Needs

The owner expects a Project to contain:

1. Things to do.
2. Details.
3. Files, links, sources, destinations, evidence.
4. Relationships and connections.
5. Current reality / State where useful.

## Owner Language to Domain Concepts

| Owner-facing language | Domain Model mapping | Notes |
|---|---|---|
| สิ่งที่ต้องทำ | Action | Test Action before inventing Task. |
| รายละเอียด | Project boundary, notes, Context, Observation | Keep flexible; do not over-model early. |
| ไฟล์ | Document / Resource | A file can be both content and supporting resource. |
| ลิงก์ | Resource | Link is a lightweight resource. |
| ที่มา | Evidence / SourceRef / Relationship metadata | No new Core Entity yet. |
| ปลายทาง | Relationship / Context metadata / Resource | May represent destination, recipient, submission target, or link target. |
| คนที่เกี่ยวข้อง | Person + Relationship | Person is never Project. |
| โปรเจกต์ที่เกี่ยวข้อง | Relationship(Project, Project) | No special entity needed. |
| พื้นที่/บริบทที่เกี่ยวข้อง | Area / Context / Relationship | Use only when helpful. |
| สิ่งที่รออยู่ | Dependency | Scope matters. |
| เหตุการณ์/หลักฐาน | Event / Observation / EvidenceRef | Preserve source where possible. |
| สถานะตอนนี้ | State | Observed/Suggested/Confirmed separation remains. |

## Workspace Sections

Recommended owner-facing sections:

### Things to Do

Maps to:

```text
Action
```

Do not call it Task internally unless future evidence requires it.

### Details

Maps to a flexible combination of:

- Project boundary,
- owner notes,
- Context,
- Observation.

Avoid forcing every detail into a field.

### Files and Links

Maps to:

- Document,
- Resource,
- EvidenceRef when used as proof/source.

### Sources and Destinations

Current recommendation:

```text
No new Core Entity.
```

Model as metadata/relationships until evidence proves identity is needed.

Possible meanings:

- source document,
- source person,
- source system,
- submission destination,
- Drive folder,
- recipient,
- external website.

These are too varied for a new concept now.

### Relationships

Maps to:

```text
Relationship
```

Use to connect:

- Person,
- Project,
- Area,
- Resource,
- Document,
- Event,
- Dependency.

### Current Reality

Maps to:

- State,
- Event,
- Dependency,
- Decision,
- Observation.

Show only useful reality.

Do not display a full domain object inspector.

## Workspace Anti-Patterns

Avoid:

- turning Project Workspace into a database form,
- showing every possible Domain Model concept,
- making Actions the whole product,
- requiring State selection before useful work,
- exposing technical terms like EvidenceRef or Relationship,
- adding Task just because owner says "things to do."

## Open Product Questions

- Does "destination" need a stronger model after real Project examples?
- Should files/links have sections or one unified "แหล่งข้อมูล" area?
- Does owner want related Projects visible immediately or later?
- How much current reality belongs on the first screen?

