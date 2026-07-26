# Persistence Decision v1

Status: Implemented for Sprint 2.4

## Decision

Use IndexedDB for local-first browser persistence.

## Rationale

JenOS now stores structured owner data:

- accepted routed records,
- reminders through routed records,
- finance ledger source records,
- calendar source records,
- theme preference.

IndexedDB fits this better than localStorage because it supports structured data, larger future datasets, transactional writes, schema upgrades, and a clean path toward migrations.

## Alternatives

### localStorage

Rejected for primary durable data.

Reasons:

- string-only storage,
- weaker fit for structured records,
- no real transaction model,
- migration and corruption handling become ad hoc quickly.

It may remain acceptable for tiny non-critical preferences later, but Sprint 2.4 keeps even theme preference behind the persistence boundary.

### IndexedDB

Selected.

Reasons:

- browser-native local storage,
- structured data support,
- transaction support,
- schema version support,
- good fit for local-first MVP,
- keeps cloud/vendor decision deferred.

### SQLite / local files

Deferred.

Relevant for desktop-native or server-backed variants, but not required for the current browser-first architecture.

## Boundary

Domain and application behavior do not know IndexedDB details.

```text
Application runtime data
-> persistence DTO/schema
-> IndexedDB adapter
```

UI does not manipulate object stores directly.

## Non-Goals

- cloud sync,
- authentication,
- server backend,
- Google Drive sync,
- Google Calendar sync,
- real AI persistence.
