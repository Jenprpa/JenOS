# Dependency Scope Validation

## Candidate

```text
Dependency Scope
Status: Under validation
Default verdict: DERIVE FROM EXISTING CONCEPTS unless it cannot be represented as a relation/attribute.
```

## Test A - Existing Concept Substitution

Attempt:

- Link unresolved dependency to Action, Decision, Deliverable, Workstream, or Project.
- Use the linked target as the scope.

Result:

```text
PASS substitution
```

Dependency Scope can be represented as a relation between Dependency and affected thing.

## Test B - Information Loss

Remove Dependency Scope but keep Dependency.

Loss:

- Cannot distinguish total waiting from partial blocking.
- Cannot answer what can still continue.

Classification:

```text
MATERIAL LOSS
```

However, the loss is caused by missing relation/attribute, not necessarily missing standalone concept.

## Test C - Identity Requirement

Does scope need independent identity?

- No evidence.
- It is referenced through the dependency and affected item.
- It does not need its own history.

Result:

```text
NO independent identity requirement
```

## Test D - Lifecycle Requirement

Scope may change when:

- more work becomes blocked,
- workarounds reduce affected scope,
- dependency resolves.

Result:

```text
Lifecycle belongs to dependency relation, not separate concept.
```

## Test E - Decision Rights

Who may create/confirm:

- AI may suggest affected scope.
- Owner confirms if recommendation changes.

Existing rules:

- OWN-003/OWN-005 cover this.

Result:

```text
No independent authority model needed.
```

## Test F - Query Value

Query:

- Which exact work is blocked?

Dependency Scope is essential for the query, but can be derived from:

```text
Dependency blocks Action / Decision / Deliverable / Workstream / Project
```

Result:

```text
HIGH query value, but DERIVABLE
```

## Test G - Cross-domain Survival

Teaching:

- Late student work blocks grading, not entire teaching Area.

Project competition:

- Dataset blocks Train AI, not documentation.

Administration:

- Approval blocks implementation, not preparation.

Vehicle repair:

- Parts availability blocks repair completion, not insurance paperwork.

Result:

```text
SURVIVES CROSS-DOMAIN AS ATTRIBUTE/RELATION
```

## Validation Result

Disposition:

```text
DERIVE FROM EXISTING CONCEPTS
```

Confidence:

```text
MEDIUM-HIGH
```

Rationale:

- Scope is decision-critical.
- It should not become a standalone candidate concept.
- Minimum viable representation: `Dependency affects <target> with effect`.

