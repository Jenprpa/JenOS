# Sprint 2.3 - Personalization, Reminders & Finance Ledger

Status: Implemented for Owner Pilot

## Goal

Extend useful destination behavior without redesigning Natural Capture & Routing.

Implemented capabilities:

- Custom Theme,
- JenOS Calendar Reminders,
- Personal Finance Ledger.

## Theme

Theme is a presentation concern.

Implemented:

- Budgie default,
- Orchid alternate preset,
- Custom color controls,
- reset to Budgie,
- immediate preview through CSS variables.

Theme changes do not alter routed records, domain truth, or owner decisions.

## Reminders

Reminder is application behavior associated with schedule/calendar representation.

Implemented:

- reminder offsets: at event time, 10 minutes, 30 minutes, 1 hour, 1 day,
- deterministic parsing for owner pilot examples,
- edit/remove reminder from JenOS Calendar item,
- in-app due reminder surface while the app is open.

Not implemented:

- Google Calendar,
- background notifications when the app is closed,
- browser Notification API dependency,
- external notification infrastructure.

## Finance Ledger

Finance Ledger is a structured destination/application model built from accepted finance routes.

Implemented:

- Income,
- Expense,
- THB amount preservation,
- date text resolution,
- possible context preservation,
- ledger totals: income, expense, net.

Finance Ledger is not promoted as a new Core Entity in this sprint.

## Persistence Boundary

Sprint 2.3 creates data that obviously wants persistence:

- owner theme preference,
- reminders,
- finance ledger entries.

Current implementation remains in-memory through the existing Sprint 1 boundary. Refresh may reset runtime data.

Recommendation:

```text
Sprint 2.4 should become Persistence Foundation.
```

## Owner Pilot

Status:

```text
PENDING
```

Owner should test:

- switching preset,
- customizing colors,
- resetting to Budgie,
- calendar reminder parsing and editing,
- income route,
- expense route,
- ambiguous finance route,
- finance totals,
- readability of board/calendar/finance under custom theme.

## Guardrails

- No real AI integration,
- no Google Calendar integration,
- no bank sync,
- no full accounting,
- no budgeting,
- no financial advice,
- no full notification infrastructure,
- no persistence vendor selected,
- no Domain Model amendment,
- no OWN amendment.
