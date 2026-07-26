# JenOS Calendar v1

Status: Implemented for Sprint 2.2 Owner Pilot

## Purpose

JenOS Calendar makes schedule-like routed records visible as time-oriented information.

It is intentionally lightweight.

## Scope

Minimum view:

- date,
- teaching/class context when available,
- topic or description,
- visual distinction from other board sections.

## Non-Goals

- Google Calendar integration,
- external calendar sync,
- invitations,
- recurrence,
- drag/drop,
- full time-grid scheduling.

## Boundary

Calendar view is a presentation/application construct.

It is not a new domain concept and does not imply a persistence provider.

Use wording such as:

```text
เพิ่มในปฏิทิน JenOS แล้ว
```

Do not claim:

```text
เพิ่มลง Google Calendar แล้ว
```

unless real integration exists.
