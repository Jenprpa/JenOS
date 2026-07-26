# Capture Repositioning v1

Status: Revised product position

Sprint: 2.1 Owner Workflow Revision

Purpose:

Reposition Capture after owner pilot rejected Capture-first as the mandatory primary workflow.

## Decision

Capture should become:

```text
Secondary quick capture
```

It should not be the mandatory front door to JenOS.

## What Capture Still Solves

Capture remains useful for:

- unclear things,
- reference information,
- quick notes,
- incoming information,
- possible future Project ideas,
- items not yet tied to a Project.

## What Capture Should Not Become

Capture should not become:

- global inbox,
- mandatory intake pipeline,
- hidden to-do list,
- Project factory,
- place where everything must be classified.

## Relationship to Projects

Capture can later be:

- kept as information,
- linked to an existing Project,
- used as evidence/source,
- converted into a Project by owner decision,
- deleted/archived.

But daily owner workflow should begin with Projects when the owner already knows a Project exists.

## Product Placement Options

### Option A: Quick Capture Button

Placement:

- Home header,
- Project workspace header,
- floating quick action.

Pros:

- fast,
- available anywhere,
- not dominant.

Cons:

- may still become inbox if unmanaged.

### Option B: Project-Local Capture

Placement:

- inside Project Workspace.

Pros:

- captured information already has Project context,
- less classification burden.

Cons:

- does not handle global unclear information.

### Option C: Deferred Capture

Placement:

- not implemented in revised Sprint 2.1.

Pros:

- focuses on Project-first validation.

Cons:

- loses ability to save non-project information temporarily.

## Recommendation

For revised Sprint 2.1:

```text
Project-first implementation.
Capture either secondary quick action or deferred.
```

Do not preserve the current Capture-first UI as the main screen.

## Domain Impact

No Domain Model amendment required.

Capture remains workflow/product representation, not a Core Entity.

