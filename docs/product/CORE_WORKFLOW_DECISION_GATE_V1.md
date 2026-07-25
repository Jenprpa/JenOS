# Core Workflow Decision Gate v1

Status: Ready with Clarifications

Sprint: 2.0 Core Workflow Definition

## Gate Questions

### 1. Can real situations enter JenOS without becoming Projects?

YES.

Capture preserves raw situations before classification.

### 2. Can Project emerge by explicit owner decision?

YES.

Project creation requires owner confirmation, boundary, and source evidence.

### 3. Can unknown classification remain unresolved?

YES.

Unknown is allowed and should not become guilt or hidden work.

### 4. Can Project show current reality without percentage-complete logic?

YES.

Current reality uses State, events, decisions, dependencies, and movement, not percentage complete.

### 5. Can next movement be represented without a Task entity?

YES.

Next movement can be represented through Action, Decision, Dependency, Information Needed, Waiting for External Reality, and Owner Review.

### 6. Can scoped Dependency be represented without Project-level Waiting?

YES.

Dependency carries affected target/scope. Whole-Project Waiting is only appropriate when no meaningful progress remains and owner confirms.

### 7. Can completion remain owner judgment?

YES.

Submission/outcome/acceptance are evidence. Closure is owner decision.

### 8. Does the workflow require any new domain concept?

NO.

Capture representation is required at product/technical workflow level, but evidence does not justify a new Core Entity called Capture.

### 9. Is the workflow cheaper to maintain than a normal task manager?

LIKELY YES, if Sprint 2.1 keeps capture minimal and avoids full metadata.

This must be validated in Sprint 2.5 pilot.

### 10. Is Sprint 2.1 ready for implementation?

YES.

## Final Disposition

```text
READY WITH CLARIFICATIONS
```

## Clarifications

- Capture is a workflow representation, not a promoted domain concept.
- Unknown classification must be supported.
- Project creation must be explicit.
- Next movement must not become Task center.
- Persistence should wait until Sprint 2.4.
- No AI behavior in Sprint 2.

## Owner Review Required

```text
NO
```

Reason:

No new domain concept, OWN amendment, or architecture change is required.

## Sprint 2.1 Readiness

```text
YES
```

