# Domain Model v0.2 Proposal

## Status

```text
Accepted as precursor proposal.
Superseded by DOMAIN_MODEL_V0.2.md.
No schema, API, UI, or implementation.
```

Owner Review result:

```text
ACCEPT V0.2 WITH CLARIFICATIONS
```

Authoritative working model:

```text
DOMAIN_MODEL_V0.2.md
```

## Model Center

JenOS v0.2 should center on:

```text
Project + State + Decision + Memory + Context
```

with Dependency recommended as a Supporting Concept for decision support.

Task remains non-central. Action is a way to move meaningful work.

## A. Core Entities

Supported Core Entities:

- Person
- Project
- Area
- Role
- Resource
- Document
- Event
- Decision

### Person

Human being. Never Project, Resource, or Task.

### Project

Bounded managed change or outcome owned/confirmed by user.

Project should emerge, not be forced.

### Area

Long-lived responsibility that does not complete like Project.

### Role

Contextual hat held by Person.

### Resource

Thing used for work or decision. May include equipment, links, templates, budget, or Dataset.

### Document

Document/file/artifact with content. May also serve as Resource, evidence, or deliverable.

### Event

Something that happened at a time.

### Decision

Accountable choice with target, reason, evidence, consequences, and owner.

Closure is represented as:

```text
Decision(target = Project, purpose = closure)
```

## B. Supporting Concepts

Supported:

- State
- Context
- Memory
- Action
- Observation
- Risk
- Commitment
- Relationship
- Tag
- Dependency (recommended promotion)

### State

State represents reality, not intention.

Preserve:

- Observed State
- Suggested State
- Confirmed State

### Context

Lens/influence such as time, place, capacity, constraints, or current condition.

### Memory

Curated insight for future decisions.

### Action

Concrete move in context.

### Observation

Raw noticed fact/signal.

### Risk

Possible harm or negative consequence.

### Commitment

Promise/obligation to person/time/project.

### Relationship

General link among entities/concepts.

### Tag

Lightweight classification. Evidence is still thin; avoid overusing it as ontology substitute.

### Dependency

Recommended Supporting Concept.

Meaning:

```text
Something needed for progress, controlled by a person/organization/system/external reality, affecting a specific scope, with expected resolution and consequence.
```

Not:

- not a Project,
- not a Relationship in general,
- not automatically a whole-Project Waiting State,
- not a permanent state enum.

## C. Derived Concepts

These should not become standalone concepts under current evidence:

- Dependency Scope: derive from Dependency -> affected Action/Decision/Deliverable/Workstream/Project.
- Blocking Condition: derive from Dependency.effect.
- Closure Decision: derive from Decision(target=Project, purpose=closure).
- Outcome Record: derive from Event/Observation linked to Project and classified as external outcome.
- Pre-project: derive as review/classification question about existing concept.

## D. Analytical/UI Language

Useful language but not ontology by itself:

- Waiting summary.
- Blocked display.
- Ready / stuck / needs review labels.
- Pre-project.
- Follow-up needed.
- Outcome known.

These may appear in user-facing experience if derived from domain truth.

## E. Relationships

Semantic relationships, not database cardinality:

- Person has Role.
- Person participates in Project.
- Area contains or contextualizes Projects.
- Project has State.
- Project has Decisions.
- Project has Events/Timeline.
- Project has Documents/Resources.
- Project has Memory.
- Dependency affects Action/Decision/Deliverable/Workstream/Project.
- Dependency owner may be Person/Organization/System/External Reality.
- Decision may close Project.
- Event/Observation may record external outcome.

## F. State Model

Preserve:

```text
Reality
-> Observed
-> Suggested
-> Owner Decision
-> Confirmed State
```

Waiting behavior:

- Partial Dependency: Project may remain active while a scoped item waits.
- Total Dependency: Project-level Waiting may be truthful when no meaningful progress remains or owner confirms.
- AI may suggest; owner confirms meaningful state.

Do not create permanent State enum.

## G. Completion Model

Preserve:

```text
Completion is a human judgment, not an event.
```

Represent:

- evidence: submitted, accepted, feedback received, outcome known,
- owner responsibility: whether user still has expected work,
- project boundary: what "done" means,
- external outcome: Event/Observation, not automatic completion,
- closure decision: Decision(target=Project, purpose=closure).

Submission can support completion only when responsibility ends at submission.

## H. Memory Model

Preserve:

```text
Reality
-> Observation
-> Event
-> Log
-> History
-> Memory
```

Memory is curated, not accumulated.

AI may propose Memory; user confirms.

User owns Memory and derived knowledge.

## I. Decision Rights

Preserve:

- Inform
- Recommend
- Require Confirmation
- User Only

Examples:

- AI may suggest Dependency or Waiting.
- System may observe external event.
- Owner confirms Confirmed State and Project closure.
- External reality may resolve factual dependency.

## J. Human Capacity

Human Capacity influences recommendations:

- time
- energy
- attention
- emotion
- cognitive load
- health

It must not become productivity scoring or moral judgment.

Capacity can recommend reduce scope, defer, delegate, rest, or minimum viable action.

Capacity alone does not change Project State.

## Proposal Summary

v0.2 should:

- keep all evidence-backed Core Entities,
- clarify Project/State/Completion boundaries,
- promote Dependency only if Owner approves at consolidation gate,
- derive Scope/Closure/Outcome from existing concepts,
- avoid state taxonomy and schema.
