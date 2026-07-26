# Natural Capture Decision Gate v1

Status: Ready to Reimplement

Sprint: 2.0.1 Natural Capture & Routing Discovery

## Gate Questions

### 1. Is natural-language intake the primary front door?

YES.

Owner evidence supports natural owner language as the primary input mode.

### 2. Can one input produce multiple records?

YES.

One owner statement may contain context, action, dependency, event, relationship, and commitment.

### 3. Can routing occur without manual classification?

YES, within authority limits.

Low-risk records may auto-route with visible undo. Meaning-level or high-impact records require confirmation.

### 4. Which routes may happen automatically?

Potentially:

- record Observation,
- append low-risk teaching log,
- attach explicit file/link reference,
- suggest Project match,
- create candidate records.

Usually with visible undo.

### 5. Which require confirmation?

Require confirmation:

- create Project,
- create Action when it becomes a commitment,
- create Dependency,
- create Relationship if ambiguous,
- add Calendar event,
- record finance item,
- change Confirmed State,
- confirm Memory,
- close Project.

### 6. Can Project remain important without being the front door?

YES.

Projects remain persistent management spaces. Natural input can route into Projects or suggest Project creation.

### 7. Does this require Domain Model amendment?

NO, not yet.

Routing and interpretation can be application/input architecture over existing concepts.

### 8. Does it require an AI interpretation layer?

YES, eventually.

For a true JenOS experience, interpretation is core input architecture, not a bolt-on chat feature.

However, the first implementation can use constrained/rule-based interpretation to test UX without real AI provider integration.

### 9. What is the smallest Sprint 2.1 implementation that can test this?

Recommended slice:

```text
Natural text input
-> deterministic/demo interpretation
-> candidate route cards
-> owner confirms or rejects routes
-> create in-memory routed records
```

Test with:

- teaching reflection,
- PDF reference,
- missing Dataset,
- project action,
- mixed multi-route input.

### 10. What should happen to current uncommitted Sprint 2.1 code?

Do not commit it as-is.

Rework or replace it.

Possible salvage:

- Thai visual direction,
- warm UI styling,
- some capture workflow ideas,
- tests only if aligned with routing.

But Capture-first UI should not remain primary.

## Final Disposition

```text
READY TO REIMPLEMENT
```

## Owner Review Required

```text
YES
```

Reason:

The primary interaction changed again from Project-first to natural-language routing.

## Domain Review Required

```text
NO
```

Reason:

No Domain Model amendment is required yet.

## Stop

No implementation in Sprint 2.0.1.

No commit.

No push.

