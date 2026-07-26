# Routing Model v1

Status: Discovery

Sprint: 2.0.1 Natural Capture & Routing Discovery

Purpose:

Define possible destinations for interpreted owner input without creating new domain concepts merely because a UI destination is useful.

## Routing Principle

One input can route to multiple destinations.

Routing should preserve source and confidence.

## Destination Types

### Domain Concept

Part of Domain Model v0.2.

Examples:

- Project,
- Action,
- Event,
- Observation,
- Decision,
- Document,
- Resource,
- Relationship,
- Dependency.

### Application View

UI or product surface that presents domain information.

Examples:

- Teaching record,
- Finance view,
- Schedule view,
- Today view,
- Project workspace.

### External Integration Destination

External system that may later receive data.

Examples:

- Calendar,
- Drive,
- file system,
- email.

External integration destination does not automatically become a Core Entity.

## Possible Routes

| Route | Type | Notes |
|---|---|---|
| Project | Domain | Requires owner confirmation to create. |
| Action | Domain | Can be suggested; confirmation depends on commitment impact. |
| Event | Domain | Can record sourced happened facts. |
| Observation | Domain | Low-risk factual observation can be auto-routed with undo. |
| Decision | Domain | Meaning-level decisions require owner. |
| Document | Domain | File/document reference. |
| Resource | Domain | Link, file, tool, reference. |
| Relationship | Domain | Link between existing things; may need confirmation if ambiguous. |
| Dependency | Domain | Often requires owner confirmation because it affects movement. |
| Schedule/Calendar view | Application / integration | Calendar may be view/integration, not Core Entity. |
| Teaching record | Application view | Can aggregate Event/Observation/Action/Context. |
| Finance-related context | Application view | Can aggregate Event/Observation/Context. |

## Routing Examples

Input:

```text
วันนี้สอน 4/1 เรื่องเซลล์ เด็กส่วนใหญ่เข้าใจ แต่กิจกรรมท้ายคาบไม่ทัน
```

Routes:

- Teaching record view,
- Observation: students mostly understood,
- Event: lesson occurred,
- Action suggestion: continue/prepare follow-up.

Input:

```text
เด็กยังไม่ส่ง Dataset
```

Routes:

- Dependency candidate,
- related Project if clear,
- possible follow-up Action.

## Routing Guardrails

- Do not force one input into one record.
- Do not route silently when ambiguity changes meaning.
- Do not create Project automatically.
- Do not change Confirmed State automatically.
- Keep source trace.
- Show what was routed and why.

