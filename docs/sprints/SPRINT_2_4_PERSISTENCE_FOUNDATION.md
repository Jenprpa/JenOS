# Sprint 2.4 - Persistence Foundation

Status: Implemented for Owner Pilot

## Principle

Persist structured reality, not transient UI state.

## Implemented

- IndexedDB local persistence,
- schema version 1,
- load on startup,
- save after accepted route,
- save after reminder edit/remove,
- save after theme change,
- backup/export,
- restore/import with preview and confirmation,
- clear local data with confirmation,
- migration/recovery foundation.

## Persisted

- accepted routed records,
- calendar/schedule truth through routed records,
- reminder data attached to routed records,
- finance data attached to routed records,
- unresolved context attached to routed records,
- theme preference.

## Not Persisted

- active navigation,
- hover/animation state,
- temporary form contents,
- interpretation preview,
- rejected candidates,
- pending authority decisions.

## Authority Guardrail

Persistence does not gain authority.

Storage must never convert suggested or unconfirmed information into confirmed truth merely because it survived reload.

## Backup / Restore

Backup exports durable owner data as JSON.

Restore is full replacement for Sprint 2.4 and requires explicit owner confirmation.

## Known Limitations

- local browser/device only,
- no cloud sync,
- no multi-device sync,
- no Google Calendar sync,
- no merge restore,
- visual "new" marker is still runtime presentation.

## Owner Pilot

Status:

```text
PENDING
```

Required pilot:

- create routed schedule/reminder/finance records,
- refresh and verify survival,
- customize theme and refresh,
- export backup,
- alter data,
- restore backup,
- clear local data with confirmation.

## Recommendation

Sprint 2.5 can proceed to Personal Care & Human Capacity once persistence passes owner pilot.
