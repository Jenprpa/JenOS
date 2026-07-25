# Technical Architecture Decision v1

Status: Accepted for Sprint 1

Decision:

```text
React + TypeScript + Vite local-first browser app
No backend initially
No authentication initially
Storage abstraction before storage vendor
AI provider boundary without real AI integration
```

## Why

JenOS v1 is a single-user Personal Decision Support System.

The architecture should protect:

- user ownership,
- privacy,
- offline-first usage,
- deletion/redaction,
- export,
- auditability,
- domain semantics,
- future implementation learning.

React + TypeScript + Vite is boring enough to maintain, strong enough for domain-safe modeling, and small enough to avoid accidental SaaS architecture.

## Chosen Architecture

Application shape:

```text
Local-first desktop web app
```

Frontend:

```text
React + TypeScript + Vite
```

Persistence:

```text
Storage abstraction first.
In-memory adapter for Sprint 1.
Likely future adapter: IndexedDB.
```

Backend:

```text
No backend initially.
```

Authentication:

```text
No authentication initially.
```

AI:

```text
Provider boundary only.
No real provider integration in Sprint 1.
```

## Rejected Alternatives

### Next.js

Rejected for v1 because JenOS does not yet need server rendering, API routes, deployment assumptions, or auth-oriented architecture.

### Cloud-first Web App

Rejected because it weakens privacy, offline readiness, and user data ownership before evidence requires sync.

### Local Desktop App

Deferred because Electron/Tauri-level file access is not needed for the first technical foundation.

### Full Backend

Rejected because v1 is single-user and local-first.

## Trade-offs

Benefits:

- small operational burden,
- easy local development,
- strong type safety,
- good test speed,
- no cloud dependency,
- clear domain/application/infrastructure boundaries.

Costs:

- browser storage limitations,
- no multi-device sync initially,
- no native filesystem integration initially,
- export/backup must be designed carefully later.

## Risks

- IndexedDB may become awkward for complex history.
- Browser-only local storage may not satisfy future backup expectations.
- Without import-boundary tooling, infrastructure could leak into domain.
- React UI could tempt premature product features.

## Revisit Triggers

Revisit this decision if:

- multi-device sync becomes required,
- local file backup becomes central,
- data volume requires query capabilities beyond IndexedDB,
- the user needs native desktop integration,
- security requirements require authentication,
- AI integration needs server-side secret protection.

## Architecture Invariants

- Domain must not import React.
- Domain must not import storage adapters.
- Domain must not import AI providers.
- Storage must depend on domain contracts, not define them.
- AI may suggest but not mutate confirmed domain truth.
- Confirmed State requires user/system authority appropriate to the decision.
- Memory confirmation requires user authority.
- Export and deletion must remain possible.
- No database vendor may define domain shape.
- No AI provider may define domain shape.

