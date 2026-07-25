# Domain Model v0.2

Status: Authoritative Working Model

Accepted in:

```text
Sprint 0.3 Domain Consolidation
```

Decision:

```text
ACCEPT V0.2 WITH CLARIFICATIONS
```

This model supersedes Domain Model v0.1 as the working model for Sprint 1 Technical Foundation.

It does not erase v0.1 history. It records what survived evidence.

## Model Center

JenOS centers on:

```text
Project + State + Decision + Memory + Context
```

with Dependency added as a Supporting Concept.

Task is not the center of JenOS.

Action is a way to move meaningful work.

## Core Entities

Core Entities are things with identity in the JenOS world.

Accepted Core Entities:

- Person
- Project
- Area
- Role
- Resource
- Document
- Event
- Decision

### Person

A human being.

Rules:

- A Person is never a Project.
- A Person is not a Resource.
- A Person may hold Roles.
- A Person may participate in Projects.
- A Person may be related to Decisions, Commitments, Events, and Memories.

### Project

A bounded unit of managed change, outcome, or responsibility.

Rules:

- Project should emerge, not be forced.
- User is final authority on Project classification.
- Project has meaningful State.
- Project can have Decisions, Memory, Timeline, Events, Documents, Resources, Risks, Commitments, Actions, and Dependencies.
- Project can complete, cancel, archive, transfer, or otherwise close by Owner judgment.

Project is not:

- every note,
- every file,
- every person,
- every concern,
- every Area.

### Area

A long-lived responsibility or life domain.

Rules:

- Area endures.
- Area does not complete like Project.
- Area may contain or contextualize Projects.

Examples:

- Teaching.
- Health.
- Finance.
- Family.
- Career.

### Role

A contextual hat held by a Person.

Rules:

- Role changes with situation.
- Role does not need State by default.
- Role may explain responsibility and authority.

Examples:

- Teacher.
- Research Advisor.
- Homeroom Teacher.
- Student.
- Daughter.

### Resource

A thing used to support work or decisions.

Rules:

- Resource may be physical, digital, financial, procedural, or informational.
- Resource may be linked to Projects, Actions, Decisions, Dependencies, or Documents.

Examples:

- Car.
- Dataset.
- Budget.
- Template.
- Equipment.
- Link.

### Document

A file or artifact with content.

Rules:

- Document may be evidence.
- Document may be a deliverable.
- Document may also function as Resource.
- Document can have State such as Draft or Submitted when evidence supports it.

Examples:

- PDF.
- Report.
- Exam draft.
- Approval letter.
- Dataset file.

### Event

Something that happened at a time.

Rules:

- Events happen.
- States persist.
- Event can provide evidence for State, Completion, Dependency resolution, or Outcome.

Examples:

- Meeting held.
- File submitted.
- Approval received.
- Deadline passed.
- Outcome announced.

### Decision

An accountable choice.

Rules:

- Decision has owner, target, reason, evidence, consequence, and time.
- AI may recommend but does not own meaningful decisions.
- Closure is represented as Decision.

Derived closure representation:

```text
Decision(target = Project, purpose = closure)
```

## Supporting Concepts

Supporting Concepts describe, qualify, connect, or move Core Entities.

Accepted Supporting Concepts:

- State
- Context
- Memory
- Action
- Observation
- Risk
- Commitment
- Relationship
- Tag
- Dependency

### State

The current reality of something.

Principle:

```text
State represents reality, not intention.
```

State layers:

- Observed State: what the system can observe.
- Suggested State: AI/system interpretation.
- Confirmed State: Owner-confirmed official state.

Waiting clarification:

```text
Waiting may describe a Confirmed Project State only when no meaningful progress remains because unresolved conditions prevent progress across the relevant Project boundary.
```

Scoped waiting/blocking should be represented through Dependency rather than automatically changing whole-Project State.

### Context

A lens or condition that influences decisions.

Examples:

- time available,
- location,
- energy,
- attention,
- emotion,
- cognitive load,
- weather,
- internet availability,
- deadline proximity.

Context is not a Project.

### Memory

Curated insight for future decisions.

Principle:

```text
Memory is curated, not accumulated.
```

Rules:

- AI may propose Memory.
- User confirms Memory.
- User owns Memory and derived knowledge.

### Action

A concrete move that can be taken.

Rules:

- Action is not the center of JenOS.
- Action can move a Project, Decision, or Commitment.
- Action may be blocked by Dependency.

### Observation

A raw noticed fact or signal.

Rules:

- Observation should preserve source.
- Observation is not automatically Memory.
- Observation may support Event, State, Dependency, Risk, or Decision.

### Risk

A possible harm or negative consequence.

Rules:

- Risk is not the same as Dependency.
- Risk may arise from unresolved Dependency.
- Risk should support recommendations and warnings with evidence.

### Commitment

A promise, obligation, or responsibility to a person, time, institution, or Project.

Rules:

- Commitment affects recommendations.
- Commitment does not automatically override Human Capacity.
- Commitment must be weighed with consequences.

### Relationship

A general semantic connection.

Rules:

- Relationship links concepts.
- Relationship alone does not express dependency semantics.
- Relationship may be used to connect Person, Project, Area, Role, Resource, Document, Event, Decision, and Dependency.

### Tag

A lightweight classification label.

Status:

```text
KEEP, LOW-EVIDENCE
```

Rules:

- Tag should not become a substitute for ontology.
- Validate during use.

### Dependency

A decision-support condition where progress depends on something needed.

Status:

```text
Supporting Concept
Confidence: Experimental
```

Definition:

```text
Dependency is something needed for progress, controlled by a person, organization, system, user, or external reality, affecting a specific scope, with expected resolution and consequence.
```

Dependency answers:

- What is needed?
- Who or what controls it?
- What is affected?
- What can still continue?
- What resolves it?
- What consequence exists if unresolved?

Dependency is not:

- a Project,
- a State,
- a generic Relationship,
- a Risk by itself,
- an Action,
- a Resource,
- automatic proof that a Project is Waiting.

Review trigger:

```text
Review after implementation evidence.
```

## Derived Concepts

Derived Concepts are useful but do not need independent ontology status now.

### Dependency Scope

Derived from:

```text
Dependency + affected concept
```

Examples:

- affects Action only,
- affects Decision only,
- affects Deliverable,
- affects whole Project.

### Blocking Condition

Derived from:

```text
unresolved Dependency + effect
```

Blocking Condition is analytical language, not a standalone concept.

### Closure Decision

Derived from:

```text
Decision(target = Project, purpose = closure)
```

Do not create a standalone Closure Decision concept.

### Outcome Record

Derived from:

```text
Event / Observation linked to Project
```

Outcome is external reality or evidence. It is not automatic completion.

### Pre-project

Derived as:

```text
classification question about an existing thing
```

Pre-project is not a thing.

## Analytical and UI Language

These terms may be useful in summaries or interface language, but they are not ontology by themselves:

- Waiting summary.
- Blocked display.
- Follow-up needed.
- Outcome known.
- Review needed.
- Project candidate.
- Pre-project.
- Closure review.

## State Model

State flow:

```text
Reality
-> Observed State
-> Suggested State
-> Owner Decision
-> Confirmed State
```

Rules:

- AI may observe and suggest.
- Owner confirms meaning-level State.
- System rules may record factual states.
- External reality may provide evidence but does not own meaning.

Waiting behavior:

- Partial dependency: represent scoped Dependency; Project may continue.
- Total dependency: Project-level Waiting may be suggested.
- Project-level Waiting is Confirmed only when it reflects reality across the relevant Project boundary.

Do not create a permanent State enum during Sprint 1 unless implementation evidence requires it.

## Completion Model

Principle:

```text
Completion is a human judgment, not an event.
```

Clarification:

```text
Submission, acceptance, external outcome, and follow-up may provide evidence relevant to completion, but none universally determines completion.
```

Completion depends on:

- Project boundary.
- Owner responsibility.
- Available evidence.
- Owner judgment.

Rules:

- Submitted is evidence.
- Accepted is evidence.
- Outcome known is evidence.
- Follow-up done is evidence.
- Closure is Decision.
- External outcome does not determine success/failure judgment by itself.

## Memory Model

Memory flow:

```text
Reality
-> Observation
-> Event
-> Log
-> History
-> Memory
```

Rules:

- Not everything becomes Memory.
- AI may propose Memory.
- Owner confirms Memory.
- Derived knowledge remains deletable and reviewable.

## Decision Rights

Authority levels:

- Inform
- Recommend
- Require Confirmation
- User Only

Rules:

- Authority follows accountability.
- AI may influence decisions but never own them.
- Recommendations should reveal reasoning and confidence.

## Human Capacity

Human Capacity includes:

- time,
- energy,
- attention,
- emotion,
- cognitive load,
- health.

Rules:

- Human Capacity affects recommendations.
- Human Capacity is not productivity scoring.
- Capacity can support recommendations to pause, reduce scope, delegate, defer, stop, or rest.
- AI never stops a Project.

## Domain Invariants

The following must remain true unless real evidence disproves them:

- People are never Projects.
- Areas endure.
- Projects emerge from managed change.
- State represents reality, not intention.
- Events happen; States persist.
- AI does not own Confirmed State.
- Dependency does not automatically mean Project Waiting.
- Waiting is not failure.
- Submission is not automatic completion.
- External outcome is not process completion.
- Closure is a Decision.
- Memory is curated.
- User owns Memory.
- Human Capacity affects recommendations, not human worth.
- Recommendations reveal reasoning.
- Reality beats model elegance.

## Sprint 1 Technical Foundation Guidance

Sprint 1 may begin technical foundation work from this model.

Guardrails:

- Do not turn every concept into a database table by default.
- Do not create a permanent State enum too early.
- Keep Dependency lightweight until implementation evidence demands more.
- Preserve traceability from technical choices to domain evidence.
- Let implementation evidence challenge Domain Model v0.2.

