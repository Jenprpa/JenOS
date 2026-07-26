# Sprint 2.1R - Natural Capture Routing MVP

Status: Owner Pilot Passed with Next-UX Findings

## Context

Sprint 2.1 Capture-first was tested and rejected as the primary interaction.

The rejected result is useful evidence:

```text
JenOS should not make the owner sort life into system boxes.
```

Project-first remains useful as a workspace model, but Project is not the mandatory front door.

## Current Implementation Hypothesis

Natural Capture & Routing is now the active Sprint 2.1R hypothesis.

```text
Natural owner language
-> deterministic interpretation
-> route candidates
-> authority-aware review
-> in-memory routed records
-> visible result summary
```

The owner speaks in the language of life. JenOS handles structure behind the scenes.

## Deterministic Interpretation

The current interpreter is intentionally deterministic.

It exists to test interaction architecture:

- one input can produce multiple candidate interpretations,
- routing can happen without pre-classification,
- owner authority is respected,
- missing context is shown rather than invented.

It is not a real AI provider and does not claim general natural-language understanding.

Real AI interpretation is deferred.

## MVP Scenarios

### Scenario A

```text
พรุ่งนี้สอน 4/1 เรื่องเซลล์ ยังไม่ได้เตรียมใบงาน
```

Expected:

- teaching schedule/context candidate,
- worksheet action candidate,
- relationship/context candidate for 4/1.

### Scenario B

```text
ต้องทำโครงงานใหม่เรื่องระบบตรวจคุณภาพน้ำ
```

Expected:

- Project candidate,
- owner confirmation required,
- no silent Project creation.

### Scenario C

```text
เด็กยังไม่ส่ง Dataset
```

Expected:

- Dependency candidate,
- unresolved context visible,
- no invented Project.

### Scenario D

```text
พรุ่งนี้ 4/1 สอนเซลล์ ใบงานยังไม่ได้ทำ แล้วเมื่อวานค่าปริ้นท์ 350 ยังไม่ได้ลง งานฝุ่นเด็กก็ยังไม่ส่ง dataset
```

Expected candidate families:

- schedule / teaching context,
- action,
- finance-related record,
- dependency,
- context / relationship.

## Authority-Aware Review

Candidate authority is modeled explicitly:

- AUTO-ROUTE CANDIDATE,
- CONFIRM REQUIRED,
- CLARIFICATION REQUIRED,
- OWNER ONLY.

This MVP exposes confirm/reject controls for all cards so owner pilot can inspect routing correctness.

This does not establish "confirm every card forever" as the final product design.

## Current Non-Goals

- Real AI integration,
- persistent storage,
- dashboard,
- full Project Workspace,
- full Calendar,
- Finance module,
- Teaching module,
- Domain Model amendment,
- OWN amendment.

## Acceptance State

```text
Automated verification: PASS
Owner Pilot: PASS WITH NEXT-UX FINDINGS
```

## Owner Pilot Findings

Validated:

- natural owner language is a viable primary interaction,
- one input can produce multiple meaningful routes,
- owner does not need to classify before capture,
- unresolved context can remain unresolved,
- authority-aware confirmation remains valid.

Next UX findings:

- routed results should not remain a long flat list,
- information needs meaningful destination spaces,
- owner wants a visual board similar in spirit to Padlet,
- schedule-like information should become calendar-visible,
- different information families should have different visual semantics.

Sprint 2.2 continues from this evidence.
