# Reminder Model v1

Status: Implemented for Sprint 2.3 Owner Pilot

## Purpose

Represent reminders attached to schedule/calendar routed records.

## Scope

Supported offsets:

- at event time,
- 10 minutes before,
- 30 minutes before,
- 1 hour before,
- 1 day before.

Owner can edit or remove a reminder from a JenOS Calendar item.

## Boundary

Reminder is application behavior associated with schedule/event representation.

It is not:

- Google Calendar integration,
- background notification infrastructure,
- a full notification system,
- a new domain entity promoted by ontology decision.

## Truthfulness Rule

JenOS may say:

```text
เตือนใน JenOS
```

JenOS must not say:

```text
แจ้งเตือนผ่านระบบ/Google Calendar แล้ว
```

unless that integration exists.
