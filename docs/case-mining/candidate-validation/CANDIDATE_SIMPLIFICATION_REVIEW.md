# Candidate Simplification Review

## Status

```text
Sprint: 0.2 - Candidate Validation Cycle
Purpose: Collapse candidate concepts where existing composition preserves truth.
```

## Simplification Principle

Prefer fewer concepts if explanatory power remains intact.

## Test 1: Dependency + Dependency Scope

Question:

Can Scope simply be an attribute/relation of Dependency?

Result:

```text
YES
```

Proposed minimum:

```text
Dependency:
  target
  owner
  blocks / affects: Action | Decision | Deliverable | Workstream | Project
  effect
```

Conclusion:

```text
Dependency Scope should not survive as standalone concept.
```

## Test 2: Closure Decision

Question:

Can Closure Decision simply be:

```text
Decision
target = Project
purpose = Closure
```

Result:

```text
YES
```

Needed fields belong to Decision:

- target
- purpose
- reason
- evidence
- timestamp
- owner

Conclusion:

```text
Closure Decision collapses into Decision.
```

## Test 3: Outcome Record

Question:

Can Outcome Record simply be:

```text
Event / Observation
linked to Project
classified as external outcome
```

Result:

```text
YES
```

Outcome information must survive, but not as a standalone concept.

Conclusion:

```text
Outcome Record collapses into Event / Observation classification.
```

## Test 4: Blocking Condition

Question:

Can Blocking Condition be derived from Dependency + effect?

Result:

```text
YES
```

Minimum:

```text
Dependency.effect = blocked | delayed | reduced options | informational
```

Conclusion:

```text
Blocking Condition remains analytical language, not concept.
```

## Cross-Candidate Simplification

Before:

```text
Dependency
Dependency Scope
Blocking Condition
Closure Decision
Outcome Record
```

After simplification:

```text
Dependency: candidate supporting concept

Dependency Scope: relation/attribute of Dependency
Blocking Condition: effect of Dependency
Closure Decision: Decision with purpose = closure
Outcome Record: Event/Observation classified as external outcome
```

## Most Important Simplification

Closure Decision does not need to exist.

The existing Decision entity is strong enough if it can target Project and carry closure purpose/rationale/evidence.

## Review Conclusion

The cycle does not justify expanding ontology by four concepts.

It suggests one possible supporting concept:

```text
Dependency
```

Everything else should be derived from existing concepts or kept as analytical language.

