# Sprint 2.5 — Personal Care & Human Capacity

## Status

Implemented for Owner Pilot.

No commit or push has been performed.

## Goal

Operationalize the Sprint 0 Human Capacity principle inside the existing natural capture flow.

JenOS should let the owner say ordinary things such as:

- "เมื่อคืนได้นอน 5 ชั่วโมง"
- "วันนี้ยังไม่ได้กินข้าวเช้า"
- "วันนี้พลังเหลือครึ่งเดียว"

Then JenOS can route those statements into a lightweight Personal Care / Human Capacity view after owner confirmation.

## Scope

Implemented:

- Sleep self-report routing.
- Meal status routing.
- Capacity self-report routing.
- Optional owner-requested Personal Care reminders.
- Lightweight Personal Care summary on the Life Board.
- Capacity-aware recommendations with visible evidence.
- Persistence through the existing Sprint 2.4 local storage / backup foundation.

Not implemented:

- Medical diagnosis.
- Health scoring.
- Productivity scoring.
- Calories, weight, or clinical tracking.
- Wearable integration.
- Cloud sync.
- Real AI provider integration.
- New Core Entities.
- Domain Model amendments.
- OWN amendments.

## Domain Guardrail

This sprint does not introduce `Health`, `Sleep`, `Meal`, or `Energy` as Core Entities.

Personal Care is currently an application-level destination inside natural routing. It uses owner-confirmed routed records and existing persistence.

If future evidence shows that the domain cannot represent these signals without a new semantic concept, that requires Domain Review.

## Persistence

Owner-confirmed Personal Care records are stored as routed records.

They survive:

- Refresh.
- Browser restart, subject to browser local storage behavior.
- Backup/export.
- Restore.

Rejected interpretation candidates are not persisted as truth.

## Verification

Automated checks added for:

- Sleep duration.
- Sleep timing across midnight.
- Ambiguous sleep without invented duration.
- Meal statuses.
- Capacity qualitative mapping.
- No productivity score.
- Optional reminders only when explicitly requested.
- Capacity-aware recommendation behavior.
- Persistence and backup.
- Multi-domain routing regression coverage.

## Owner Pilot Finding

MULTI-DOMAIN ROUTING REGRESSION FOUND AND FIXED.

Owner input:

```text
วันนี้พลังเหลือครึ่งเดียว แต่ต้องส่งรายงานก่อนบ่ายสาม
```

Finding:

JenOS recognized the Human Capacity signal but did not also expose the deadline-bound commitment in the same interpretation.

Fix:

- Personal Care parsing remains additive and must not suppress other route families.
- Deadline-bound submissions now produce Action / Commitment candidates.
- Deadline / time constraints now produce Schedule candidates when evidence exists.
- Capacity-aware recommendations now reason from both owner-confirmed capacity and detected deadline-bound work.
- Regression tests cover capacity + action + deadline, sleep + work, and meal + meeting combinations.

Second finding:

```text
วันนี้เหนื่อยมาก งานที่ไม่รีบเลื่อนไปก่อน
```

Finding:

JenOS treated the sentence only as Human Capacity self-report plus generic advice. The second clause is actually an owner instruction that should act on existing records after authority-aware resolution.

Fix:

- Natural routing now recognizes defer-non-urgent instructions separately from Personal Care observations.
- Instruction execution is not automatic.
- JenOS resolves affected records from existing evidence first.
- The UI previews which records would be deferred and which records stay because they are deadline-bound.
- Owner confirmation is required before any records are mutated.
- Confirmed mutations mark affected records as deferred while preserving urgent/deadline-bound records.
- Regression tests cover instruction recognition, resolution preview, and mutation after confirmation.

Owner Pilot remains pending.

## Owner Retest Results

### A. Capacity + Work + Deadline

PASS.

Input:

```text
วันนี้พลังเหลือครึ่งเดียว แต่ต้องส่งรายงานก่อนบ่ายสาม
```

Result:

- Capacity self-report is detected as limited energy.
- Action / commitment is detected as `ส่งรายงาน`.
- Deadline is detected as today before 15:00.
- Capacity-aware recommendation references both the capacity signal and the deadline-bound report.

### B. Owner Instruction

PASS.

Input:

```text
วันนี้เหนื่อยมาก งานที่ไม่รีบเลื่อนไปก่อน
```

Result:

- Low capacity self-report is detected.
- Owner instruction is detected separately from the observation.
- Existing records are resolved before mutation.
- The UI previews which records would be deferred and which records are protected by deadline or commitment.
- Owner confirmation is required before records are changed.

### C. Mixed Personal Care + Work

PASS.

Input:

```text
เมื่อคืนได้นอน 5 ชั่วโมง วันนี้ต้องส่งข้อสอบก่อนเที่ยง
```

Result:

- Sleep self-report is detected.
- Action / commitment is detected as `ส่งข้อสอบ`.
- Deadline is detected as today before 12:00.
- Personal Care parsing does not suppress work routing.

### D. Meal + Calendar

PASS.

Input:

```text
ยังไม่ได้กินข้าวเช้า แล้วสิบโมงมีประชุม
```

Result:

- Breakfast is detected as not yet eaten.
- Meeting route is detected at 10:00.
- No health advice is fabricated.

### E. Instruction With Ambiguity

PASS.

Input:

```text
งานที่ไม่สำคัญเลื่อนไปก่อน
```

Result:

- JenOS treats this as an ambiguous owner instruction.
- JenOS does not invent priority truth.
- JenOS does not mutate broadly.
- Resolution asks for owner confirmation / affected-record selection before any change.

## Product Evidence

Natural input may contain facts, commitments, and owner instructions simultaneously.

This evidence requires clarification at the product/application level, not Domain Review.

Disposition:

```text
NO Domain Review
NO Domain Model change
NO OWN amendment
Application clarification: Natural Routing must support additive multi-domain interpretation plus authority-aware command resolution.
```
