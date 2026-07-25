# Sprint 2: Core Capture and Projects

Status: Proposed plan

Purpose:

Build the first real-life vertical slice of JenOS.

Definition of Done:

```text
Owner can capture a real situation, turn it into a Project when appropriate, understand its current reality, and identify what can move next without maintaining JenOS becoming another job.
```

## Sprint 2.1: Capture

Goal:

Make it fast to bring real situations into JenOS.

Scope:

- create capture input,
- preserve raw situation,
- allow unknown classification,
- distinguish actionable/reference/unclear at review level.

Non-goals:

- no Project auto-creation,
- no full ontology forms,
- no AI classification.

Evidence needed:

- Can owner capture final exam, PDF reference, missing Dataset, and submitted deliverable?

DoD:

- capture can be created quickly,
- capture can remain unresolved,
- reference-only capture does not become Project.

Stop condition:

- stop before building Project workspace.

## Sprint 2.2: Project Workspace

Goal:

Allow owner to explicitly create Project from capture and see minimal Project reality.

Scope:

- create Project from capture,
- record boundary,
- show source evidence,
- show current reality summary.

Non-goals:

- no dashboard,
- no complete project management UI,
- no percentage complete.

Evidence needed:

- Can final exam become Project without a large setup form?

DoD:

- Project creation is deliberate,
- Project has boundary,
- source capture remains visible.

Stop condition:

- stop before broad actions/context system.

## Sprint 2.3: Actions and Context

Goal:

Represent what can move next.

Scope:

- record movement as Action/Decision/Information Needed/Dependency Resolution/Owner Review,
- represent basic context when immediately useful,
- show scoped Dependency without whole-Project Waiting by default.

Non-goals:

- no Task entity,
- no priority engine,
- no recommendation engine.

Evidence needed:

- Can Dataset dependency block Train AI while other work remains visible?

DoD:

- owner can see next movement,
- dependency scope is clear,
- unblocked work is not hidden.

Stop condition:

- stop before persistence vendor.

## Sprint 2.4: Persistence

Goal:

Make first-slice data survive refresh.

Scope:

- choose minimal persistence adapter,
- persist captures/projects/movements/dependencies/events,
- keep export/deletion possible.

Non-goals:

- no cloud sync,
- no auth,
- no backend unless evidence forces it.

Evidence needed:

- Does first slice need IndexedDB, local files, or another adapter?

DoD:

- refresh does not lose first-slice data,
- domain remains storage-agnostic.

Stop condition:

- stop before real-life pilot expansion.

## Sprint 2.5: First Real-Life Pilot

Goal:

Use JenOS with 3-5 real situations.

Scope:

- final exam,
- reference PDF,
- missing Dataset,
- submitted deliverable,
- one owner-selected live case.

Non-goals:

- no polish sprint,
- no broad feature expansion,
- no AI.

Evidence needed:

- Does JenOS reduce decision burden?
- Does the workflow force reality into the model?
- Does maintenance feel cheap enough?

DoD:

- owner can move at least one real Project forward,
- one non-Project capture remains cleanly non-Project,
- at least one scoped dependency is represented truthfully,
- at least one closure boundary is tested.

Stop condition:

- stop for evidence review before Sprint 3.

