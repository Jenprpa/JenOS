# Sprint 2.1 Capture

Status: Implemented

Purpose:

Implement the first product slice where the owner can bring a real situation into JenOS without immediately turning it into a Project.

## Workflow

```text
Reality
-> Capture
-> Review
-> Keep as information / Decide later / Create Project
```

## Implemented

- Fast capture input.
- Captures remain unreviewed by default.
- Captures can be kept as information/reference.
- Captures can be left unresolved as "decide later".
- Captures can deliberately create a Project seed.
- Project seed requires name and boundary.
- Full Project Workspace is deferred to Sprint 2.2.
- Data is in-memory only.
- Technical status is secondary/collapsible.
- Capture and Review are the primary owner-facing flow.

## Owner Runtime Review Fix

Owner pilot found a possible mismatch between the implementation report and visible runtime hierarchy:

```text
The report said Capture -> Review -> Keep / Decide later / Create Project,
but the first visible runtime impression looked like Capture only.
```

Fix:

- made Capture the primary interaction,
- moved Env/Version/Storage/AI/Backend into secondary technical details,
- added a visible status notice after Capture,
- made Review panel visibly active after a capture is selected,
- made review choices more direct,
- clarified that Project creation is only for bounded responsibility,
- kept Project creation to name + boundary only.

## Owner-Facing UI Polish

Owner feedback after the first runtime review:

- Thai should be the primary everyday UI language.
- The interface should feel personal and warm, not like a technical prototype.
- Visual polish must preserve the validated workflow and domain semantics.

Changes:

- converted owner-facing UI copy to natural Thai,
- kept internal code/domain terms unchanged,
- moved technical architecture status to a secondary disclosure at the bottom,
- made the primary focus "ตอนนี้มีอะไรที่อยากเก็บไว้?",
- used a warmer cream/sage/peach visual direction,
- softened cards, spacing, borders, and shadows,
- changed Project creation to progressive disclosure,
- kept Project creation limited to name + boundary.

Workflow preserved:

```text
Reality
-> Capture
-> Review
-> Keep as information / Decide later / Create Project
```

No new functionality was added.

## Guardrails Preserved

- Capture is not a Project.
- Classification is not required on entry.
- Unknown classification is allowed.
- No Task entity.
- No Priority.
- No AI.
- No dashboard.
- No persistence vendor.
- No full ontology UI.

## Domain Boundary

Capture workflow lives in the application layer as workflow representation.

It is not promoted to Domain Model v0.2 as a new Core Entity.

## Verification

Automated checks:

- Build: PASS.
- Typecheck: PASS.
- Lint: PASS.
- Tests: PASS.
- Format: PASS.

Test coverage:

- 5 capture workflow tests.
- 9 domain invariant tests.
- 14 total tests passing.

Manual runtime:

- Owner should run `npm run dev`.
- Expected URL: `localhost:5173`.

Expected exact runtime flow:

1. Owner enters a real situation and clicks "บันทึก".
2. The captured situation appears in the capture list.
3. The captured situation is auto-selected.
4. The Review panel becomes active.
5. Owner can choose:
   - เก็บไว้เป็นข้อมูล,
   - ไว้ตัดสินใจทีหลัง,
   - สร้างเป็นโปรเจกต์.
6. Project form appears only after "สร้างเป็นโปรเจกต์".
7. Create Project requires:
   - ชื่อโปรเจกต์,
   - ขอบเขตของเรื่องนี้.
8. Project seed appears in Project seeds.

## Definition of Done

Owner can type one real situation into JenOS within a few seconds, see it after capture, open review, and choose:

- keep as information,
- decide later,
- create Project,

without being forced to provide metadata that is not immediately useful.
