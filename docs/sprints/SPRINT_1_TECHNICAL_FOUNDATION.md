# Sprint 1 Technical Foundation

Status: Complete

## Goal

Build the technical foundation of JenOS without implementing major product features.

## Inputs

- Domain Model v0.2
- Domain Invariants v0.2
- Semantic Boundaries v0.2
- Domain Consolidation Gate v0.2
- Product Vision v0.1
- Constitution v0.1
- Operating Principles v0.1
- Today Experience v0.1
- Non-goals v0.1
- Owner Decision Register v0.1

## Architecture Decision

JenOS v1 uses a local-first browser app architecture:

```text
React + TypeScript + Vite
No backend initially
No authentication initially
Storage abstraction first
AI provider boundary only
```

## Stack

- React
- TypeScript
- Vite
- Vitest
- ESLint
- Prettier

## Project Structure

```text
src/
  app/
  application/
  domain/
  infrastructure/
  shared/
  ui/
```

## Domain Boundary

The domain layer contains TypeScript representations for Domain Model v0.2 concepts and invariant helpers.

It does not contain database schema, UI logic, API DTOs, or AI provider code.

## Persistence Boundary

Persistence is represented by `StoragePort`.

Sprint 1 implements only an in-memory adapter.

No database vendor is selected.

## AI Boundary

AI is represented by `AiProvider`.

Sprint 1 implements only `NoopAiProvider`.

AI may suggest but cannot mutate Confirmed State, confirm Memory, close Projects, or execute User Only decisions.

## Privacy Baseline

- no telemetry,
- no backend,
- no external AI calls,
- no secrets in source,
- logging abstraction avoids sensitive payloads by default,
- export and deletion remain architecturally possible.

## Testing Baseline

Tests cover core domain invariants:

- Person cannot be treated as Project.
- Area and Project are distinguishable.
- AI suggestion cannot produce Confirmed State.
- Submission does not automatically complete Project.
- External outcome does not automatically complete Project.
- Memory confirmation requires user authority.
- AI cannot execute User Only decision paths.
- Dependency does not automatically imply whole-project Waiting.
- Human Capacity is not converted into productivity score.

## Build and Run Commands

```powershell
npm.cmd run dev
npm.cmd run build
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run test
```

## Risks

- Browser local storage choice is still deferred.
- Import-boundary enforcement is currently by convention and tests, not a dedicated tool.
- Dependency lifecycle is intentionally minimal.
- Human Capacity technical representation is intentionally conservative.

## Deferred Decisions

- IndexedDB vs SQLite/local files.
- PWA/service worker.
- Desktop wrapper.
- Authentication.
- Real AI provider integration.
- Cloud sync.
- Full export/backup implementation.

## Definition of Done

- Architecture decision documented.
- App bootstrapped.
- App runs locally.
- Build passes.
- Typecheck passes.
- Lint passes.
- Tests pass.
- Domain Model v0.2 boundaries represented in code.
- Storage abstracted from domain.
- AI abstracted from domain.
- No major business feature implemented.

## Sprint Status

```text
Complete.
```

Verification:

- Build: PASS
- Typecheck: PASS
- Lint: PASS
- Tests: PASS
- Format check: PASS
- Runtime dev-server verification: PASS

Runtime note:

```text
Automated runtime launch inside Codex was BLOCKED BY CODEX ENVIRONMENT.
Owner manual runtime verification passed.
```

Codex on this Windows sandbox could not reliably start a persistent Vite dev server because process launch attempts hit environment/process constraints around PowerShell script execution, Start-Process environment key handling, and detached process spawning.

Owner verified runtime manually on Windows:

- localhost:5173: PASS
- Technical shell rendered: PASS
- Browser -> Vite -> React -> App Shell: PASS

Verified without persistent dev server:

- package scripts exist,
- Vite config imports React plugin,
- production build output exists in dist/,
- index.html wires #root to /src/main.tsx,
- app entry imports compile successfully through typecheck/build.

Manual owner command:

```powershell
npm run dev
```
