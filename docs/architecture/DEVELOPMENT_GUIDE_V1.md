# Development Guide v1

Status: Sprint 1 baseline

## Requirements

- Node.js 22+
- npm 10+

On Windows PowerShell, use:

```powershell
npm.cmd <command>
```

## Install

```powershell
npm.cmd install
```

## Run

```powershell
npm.cmd run dev
```

## Build

```powershell
npm.cmd run build
```

## Typecheck

```powershell
npm.cmd run typecheck
```

## Lint

```powershell
npm.cmd run lint
```

## Test

```powershell
npm.cmd run test
```

## Format Check

```powershell
npm.cmd run check:format
```

## Project Structure

```text
src/
  app/              app wiring
  application/      ports and use-case boundaries
  domain/           domain types and invariant logic
  infrastructure/   adapters
  shared/           generic primitives
  ui/               React shell
```

## Architecture Rules

- Domain must not import React.
- Domain must not import infrastructure.
- Domain must not import AI provider implementation.
- Domain must not know storage technology.
- AI returns suggestions, not confirmed truth.
- Storage adapters store snapshots; they do not define the domain.

## Sprint 1 Scope

Allowed:

- technical shell,
- health/status placeholder,
- domain types,
- architecture ports,
- tests.

Not allowed:

- project CRUD product UI,
- AI chat,
- real persistence vendor,
- authentication,
- dashboard,
- recommendation engine.

