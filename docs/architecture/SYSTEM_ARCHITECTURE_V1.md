# System Architecture v1

Status: Working architecture for Sprint 1

## Layered Shape

```text
src/
  domain/
  application/
  infrastructure/
  ui/
  app/
  shared/
```

## Dependency Rule

Allowed direction:

```text
ui -> application -> domain
infrastructure -> application/domain contracts
app -> wires everything together
shared -> can be used by all layers
```

Forbidden:

```text
domain -> ui
domain -> infrastructure
domain -> AI provider
domain -> storage vendor
```

## Domain Layer

Purpose:

Represent Domain Model v0.2 semantics with TypeScript types and small domain services.

Contains:

- Core Entities.
- Supporting Concepts.
- State layer separation.
- Decision Rights.
- Memory proposal/confirmation boundary.
- Dependency semantics.
- Domain invariant helpers.

Does not contain:

- database schema,
- API DTOs,
- React components,
- AI provider code,
- browser storage implementation.

## Application Layer

Purpose:

Coordinate use cases without owning domain meaning.

Contains:

- service interfaces,
- command orchestration later,
- storage port,
- export port,
- AI port.

Sprint 1 keeps this layer intentionally small.

## Infrastructure Layer

Purpose:

Implement technical adapters behind application/domain-safe interfaces.

Sprint 1 contains:

- in-memory storage adapter,
- console logger,
- JSON/Markdown export adapter,
- no-op AI provider.

## UI Layer

Purpose:

Render a technical shell only.

Allowed:

- title,
- environment/version status,
- architecture status,
- health page placeholder.

Not allowed in Sprint 1:

- dashboard,
- project CRUD,
- memory UI,
- AI chat,
- recommendation engine,
- charts,
- productivity scoring.

## Persistence Boundary

Persistence is represented as a port:

```text
StoragePort
```

Sprint 1 uses:

```text
InMemoryStorageAdapter
```

Future likely adapter:

```text
IndexedDBStorageAdapter
```

Domain types are not persistence models.

## AI Boundary

AI is represented as a port:

```text
AiProvider
```

Sprint 1 implementation:

```text
NoopAiProvider
```

AI may return suggestions only.

AI may not:

- confirm State,
- confirm Memory,
- close Project,
- delete data,
- execute User Only decisions.

## Export Boundary

Export is represented as a port:

```text
ExportPort
```

Sprint 1 provides a simple JSON/Markdown abstraction only.

Export must preserve future user ownership and portability.

## Logging Boundary

Logging is represented as:

```text
Logger
```

Rules:

- no secrets,
- no sensitive payloads by default,
- infrastructure owns log output,
- domain does not log directly.

## Error Handling

UI uses an Error Boundary.

Application and domain functions return explicit domain-safe results where useful.

Sprint 1 avoids complex error taxonomy until evidence exists.

## Testing Boundary

Sprint 1 tests:

- domain invariants,
- decision rights,
- memory confirmation,
- dependency waiting semantics,
- completion boundaries.

Later tests:

- storage adapter integration,
- UI behavior,
- import-boundary enforcement.

