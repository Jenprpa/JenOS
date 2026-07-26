# Sprint 2.1R Implementation Rework

Status: Implemented for Owner Pilot

Repository baseline:

```text
Sprint 2.1 Capture-first implementation existed as uncommitted work.
Owner pilot rejected it as primary product direction.
Sprint 2.1R reworks the implementation toward Natural Capture & Routing.
```

## Why This Rework Exists

The previous Sprint 2.1 implementation proved an important negative product result:

```text
Capture -> Review -> Keep as information / Decide later / Create Project
```

The workflow was logically consistent, but it still asked the owner to act like a classification clerk. It made Capture feel like an Inbox item waiting to be sorted.

Owner evidence supersedes that hypothesis:

```text
The owner speaks in natural life language.
JenOS should interpret and route behind the scenes.
```

The rejected implementation is preserved as evidence through product discovery documents. It is not being committed as the active product path.

## Existing Code Disposition

| Area | Disposition | Reason |
|---|---|---|
| Thai-first UI wording | SALVAGE | Owner-facing Thai remains correct product direction. |
| Warm visual foundation | SALVAGE | The tone supports daily owner use. |
| Progressive disclosure instinct | SALVAGE | JenOS should avoid forcing classification too early. |
| Capture as persistent item requiring review | REMOVE | It recreates an Inbox-like classification burden. |
| Keep / Decide later / Create Project as primary decision set | REWORK | These are not the front door; routing candidates now carry authority-aware decisions. |
| Project seed from Capture | REWORK | Project remains an owner-authorized route, not the default destination. |
| Capture workflow application module | REMOVE | Replaced by natural routing application layer. |
| Capture workflow tests | REMOVE/REPLACE | Replaced by routing tests aligned with Sprint 2.1R. |
| In-memory demonstration behavior | SALVAGE | Still appropriate for MVP runtime testing. |

## New Implementation Hypothesis

Sprint 2.1R tests:

```text
Natural input
-> deterministic interpretation
-> multiple route candidates
-> authority-aware review
-> owner confirms/rejects where required
-> in-memory routed records
-> visible result summary
```

This is interaction architecture, not real AI quality.

## Guardrails

- No real AI provider.
- No persistence vendor.
- No dashboard.
- No Project Workspace.
- No Calendar module.
- No Finance module.
- No Domain Model amendment.
- No OWN amendment.
- No hidden Project creation.
- No silent owner-controlled truth mutation.

## Owner Pilot Status

```text
Automated verification: required
Owner Pilot: PENDING
```

Sprint 2.1R must not be accepted from automated tests alone.
