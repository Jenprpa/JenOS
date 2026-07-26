# Sprint 2.2 - Routed Workspace & Life Board

Status: Pending Final Polish Review

## Context

Sprint 2.1R proved that Natural Capture & Routing is the right primary interaction direction.

The next UX finding is that routed results should not remain a long flat list. After JenOS understands something, the owner needs to see where it belongs in a meaningful world.

## Goal

Build the first routed workspace and Life Board.

Target flow:

```text
Natural input
-> Interpretation
-> Routing
-> Authority review when required
-> Routed records
-> Destination workspaces
-> Life Board summary
```

## Implemented

- Lightweight routed destination families,
- Life Board view,
- JenOS Calendar view,
- minimal owner-facing navigation,
- application-layer destination resolver,
- in-memory presentation only.

## Destination Families

- Calendar / Teaching,
- Action,
- Finance,
- Waiting / Dependency,
- Project,
- Information / Note.

These are presentation/application destinations, not new domain entities.

## Guardrails

- No Google Calendar integration,
- no real AI integration,
- no persistence vendor,
- no full Finance module,
- no full Teaching module,
- no full Project Workspace,
- no dashboard analytics,
- no productivity score,
- no Domain Model amendment,
- no OWN amendment.

## Owner Pilot

Status:

```text
PASS WITH POLISH FINDINGS
```

## Owner UI Review

- Interaction direction accepted.
- Visual refinement requested.
- Budgerigar palette approved.
- Brown palette rejected.
- Traffic-light semantic palette rejected.

## Visual Direction

```text
Budgie Palette + Soft Personal Board
```

Palette direction:

- aqua / sea blue as primary,
- soft purple / lavender as secondary,
- lime green as accent,
- pale pink and soft rose as gentle accents,
- cool off-white as background.

Colors support grouping and recognition. They do not judge whether something is good, bad, urgent, or dangerous.

## Calendar Refinements

- Calendar remains in-memory only.
- Schedule records can appear in both the Life Board calendar section and the Calendar view.
- These are multiple views over one routed truth, not duplicate records.
- Meeting-like items can be visually distinguished from teaching items.

## Life Board Refinements

- Destination sections have distinct visual semantics.
- New items are visually marked.
- Unresolved context remains visible.
- Empty sections use friendly empty states.
- Board remains a personal workspace, not an analytics dashboard.

## Known Limitations

- No persistence yet.
- No external calendar integration.
- No real AI provider.
- No full Project Workspace.
- Relative date handling is still deterministic demo behavior.

## Final Polish Review

Status:

```text
PENDING FINAL POLISH REVIEW
```

Owner should test whether:

- the board feels organized,
- the owner can immediately see where information went,
- Calendar feels useful,
- information is not unnecessarily duplicated,
- the UI feels like a personal second brain,
- maintaining JenOS does not create extra work.
