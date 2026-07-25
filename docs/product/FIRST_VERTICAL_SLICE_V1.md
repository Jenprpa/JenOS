# First Vertical Slice v1

Status: Sprint 2.0 definition

Purpose:

Define exactly what Sprint 2.1 through Sprint 2.5 should build.

## Slice Goal

Enable the owner to:

```text
Capture real situation
-> review capture
-> explicitly create Project when appropriate
-> see Project current reality
-> record or identify movement
-> represent scoped Dependency
-> preserve basic history/evidence
-> close Project by owner judgment
```

## Included

- Fast capture of real situation.
- Capture review.
- Explicit Project creation.
- Minimal Project workspace.
- Current reality summary.
- Next movement representation.
- Scoped Dependency.
- Basic evidence/history.
- Owner closure decision.
- Local persistence in Sprint 2.4.

## Excluded

- full dashboard,
- generic CRUD for all entities,
- AI chat,
- recommendation engine,
- calendar integration,
- authentication,
- productivity score,
- full Memory UI,
- full dependency lifecycle,
- state taxonomy,
- percentage complete.

## Required Domain Concepts

- Observation.
- Event.
- Decision.
- Project.
- State.
- Action.
- Dependency.
- Document/Resource when evidence requires.
- Person when someone controls a dependency.

## Required User Decisions

- classify capture,
- create Project,
- confirm meaningful State,
- decide what movement matters,
- close Project.

## Required Persistence Later

Sprint 2.4 should persist:

- captures,
- projects,
- decisions,
- events/observations,
- movements/actions,
- dependencies.

Persistence must not define domain shape.

## Success Criteria

The owner can:

- capture a real situation in under a minute,
- leave classification unknown,
- turn an appropriate capture into Project deliberately,
- see what is true now,
- see what can move next,
- see why something is blocked,
- close Project by owner judgment,
- refresh without losing data after Sprint 2.4.

## Failure Criteria

The slice fails if:

- every capture feels like a task,
- every capture is forced into Project,
- Project creation requires too much metadata,
- the UI becomes ontology management,
- dependency turns whole Project Waiting by default,
- completion is inferred from submission,
- maintaining JenOS feels like another job.

