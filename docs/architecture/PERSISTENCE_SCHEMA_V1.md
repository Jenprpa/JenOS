# Persistence Schema v1

Status: Implemented for Sprint 2.4

## Principle

Persist structured reality, not transient UI state.

## Schema

```ts
{
  schemaVersion: 1,
  routedRecords: RoutedRecord[],
  theme: OwnerTheme
}
```

## Persisted

- accepted routed records,
- schedule/calendar source truth through routed records,
- reminders attached to routed records,
- finance metadata attached to routed records,
- unresolved context attached to routed records,
- theme preference/custom theme values.

## Not Persisted

- active navigation location,
- hover state,
- animation state,
- temporary form contents,
- current interpretation preview,
- rejected route candidates,
- visual new-item highlight as durable truth.

## Derived Views

The following are reconstructed from persisted routed records:

- Life Board,
- JenOS Calendar,
- Finance Ledger,
- reminder list.

The same underlying routed record must not be persisted multiple times merely because it appears in multiple views.

## Migration

Current schema version:

```text
1
```

The loader recognizes versioned data and contains a minimal migration path for unversioned legacy fixtures. Unsupported future versions fail safely without destructive reset.

## Recovery

Malformed records are skipped where possible. Valid records are preserved. JenOS must not silently wipe all storage to fix corruption.
