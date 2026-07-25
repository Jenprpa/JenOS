# Next Movement Model v1

Status: Sprint 2.0 definition

Purpose:

Define what "what can move next?" means without creating a task manager.

## Principle

The goal is not:

```text
What tasks are incomplete?
```

The goal is:

```text
What movement is currently possible or required?
```

## Movement Types

### Action

A concrete move the owner can take.

Examples:

- draft exam outline,
- send follow-up message,
- prepare training plan.

### Decision Needed

The next movement is a choice, not execution.

Examples:

- decide whether capture becomes Project,
- decide whether submitted work is closed,
- decide whether to reduce scope.

### Dependency Resolution

The next movement is about a needed thing controlled by someone/something.

Examples:

- student sends Dataset,
- approver replies,
- equipment becomes available.

### Information Needed

The next movement is to clarify missing truth.

Examples:

- find deadline,
- identify reviewer,
- confirm whether revision is expected.

### Waiting for External Reality

The truthful movement may be no owner action right now.

Examples:

- wait for external result,
- wait for approval,
- wait for submitted feedback.

### Owner Review

The next movement is for owner to interpret/confirm.

Examples:

- confirm Project boundary,
- confirm State,
- confirm closure.

## Required Representation

Next Movement can be represented with existing concepts:

- Action,
- Decision,
- Dependency,
- Observation,
- Event,
- Context.

## Not Required

Do not create:

- NextAction entity,
- Task entity,
- Queue entity,
- Priority entity.

## Dependency Behavior

If a Dependency affects only one Action or workstream:

```text
Show the blocked scope.
Show what can still continue.
Do not mark the whole Project Waiting.
```

If Dependency blocks all meaningful movement:

```text
Project-level Waiting may be suggested.
Owner confirms meaningful State.
```

## Maintenance Rule

JenOS should ask only enough to answer:

- what can move,
- who controls the block,
- what evidence supports it,
- whether owner action is useful.

