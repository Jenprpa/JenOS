# Technical Architecture Options v1

Status: Evaluated

Sprint: 1.0 Technical Architecture Decision

Purpose:

Evaluate the minimum viable technical architecture for JenOS v1.

## Decision Context

JenOS v1 is:

- single-user first,
- privacy-sensitive,
- local-first by default,
- domain-driven,
- not a SaaS product,
- not a team project management system,
- not an AI agent that owns decisions.

The architecture must preserve:

- user ownership,
- offline capability,
- export and deletion,
- source-aware memory,
- Observed / Suggested / Confirmed State separation,
- AI boundaries,
- future sync possibility.

## A. Application Shape

| Option | Fit | Strengths | Weaknesses | Verdict |
|---|---:|---|---|---|
| Desktop web app | High | Simple, portable, easy local development, works with local-first storage | Browser sandbox limits filesystem access | Choose |
| PWA | Medium | Offline installable later | Adds service worker complexity early | Defer |
| Local desktop app | Medium | Strong local file access | Tauri/Electron complexity too early | Defer |
| Cloud web app | Low | Easy sync later | Bad default for privacy and single-user first | Reject |
| Hybrid | Medium | Flexible long-term | Too much architecture now | Defer |

## B. Frontend

| Option | Domain fit | Simplicity | Testability | Operational burden | Verdict |
|---|---:|---:|---:|---:|---|
| React + TypeScript + Vite | High | High | High | Low | Choose |
| Next.js | Medium | Medium | High | Medium | Reject for v1 |
| Vanilla TypeScript | Medium | High | Medium | Low | Reject |

Reason:

React + TypeScript + Vite gives a small local app shell, strong type modeling, fast tests, and no backend requirement.

Next.js adds routing/server assumptions JenOS does not need yet.

## C. Persistence

| Option | Privacy | Offline | Export | Complexity | Future sync | Verdict |
|---|---:|---:|---:|---:|---:|---|
| IndexedDB | High | High | Medium | Medium | Medium | Candidate |
| SQLite | High | High | High | Medium | Medium | Candidate later |
| Local files | High | High | High | Medium | Medium | Candidate later |
| Supabase/Postgres | Medium | Low | Medium | Medium | High | Reject for v1 |
| Firestore | Medium | Medium | Medium | Medium | High | Reject for v1 |
| Cloud-first | Low | Low | Medium | Medium | High | Reject |

Decision:

Do not select a storage vendor in Sprint 1.

Create a storage abstraction first. Use in-memory adapter for tests and technical shell.

Likely first real adapter:

```text
IndexedDB
```

Revisit SQLite/local files if the app becomes desktop-first.

## D. Backend

Options:

- no backend initially,
- thin backend,
- full backend.

Decision:

```text
No backend initially.
```

Reason:

JenOS v1 is single-user and local-first. A backend would increase operational burden and privacy risk before evidence requires it.

## E. AI Integration Boundary

Do not implement AI in Sprint 1.

Define only:

- provider interface,
- permission boundary,
- suggestion result shape,
- forbidden mutation rules.

AI may:

- read explicitly granted context,
- suggest State,
- suggest Memory,
- recommend options,
- explain reasoning.

AI may never:

- mutate Confirmed State directly,
- create Confirmed Memory,
- close Project,
- execute User Only decisions,
- delete or export user data autonomously.

## F. Authentication

Decision:

```text
No authentication in v1 technical foundation.
```

Reason:

The first user is local single-user. Authentication would solve a problem JenOS does not yet have.

Revisit if:

- multi-device sync is introduced,
- cloud storage is introduced,
- multiple users share an installation.

## G. Export and Backup

Options:

- JSON export,
- Markdown export,
- local file backup,
- cloud sync later.

Decision:

Start with interfaces:

- structured JSON export,
- human-readable Markdown export,
- future file backup adapter.

Do not implement cloud sync now.

## H. Security and Privacy Baseline

Baseline:

- no secrets in source,
- no real AI provider keys,
- no external telemetry,
- no cloud persistence,
- logs must avoid sensitive data by default,
- deletion and redaction must remain possible,
- AI access must be explicit and bounded.

## I. Testing Strategy

Required:

- domain unit tests,
- invariant tests,
- typecheck,
- lint,
- build.

Later:

- integration tests for persistence,
- UI tests after meaningful UI exists,
- architecture tests to enforce import boundaries.

## Score Summary

| Architecture | Domain fit | Simplicity | Privacy | Offline | Maintainability | Testability | Data ownership | Operational burden | Score |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| React/Vite local-first, no backend | 5 | 5 | 5 | 4 | 5 | 5 | 5 | 5 | 39 |
| Next.js cloud-ready | 3 | 3 | 3 | 2 | 4 | 5 | 3 | 3 | 26 |
| Desktop app now | 4 | 2 | 5 | 5 | 3 | 3 | 5 | 2 | 29 |
| Cloud web app | 2 | 3 | 2 | 1 | 4 | 4 | 2 | 2 | 20 |

## Recommendation

Choose:

```text
React + TypeScript + Vite
Local-first browser app
No backend
No authentication
Storage abstraction first
AI provider boundary only
```

