# Core Workflow v1

Status: Sprint 2.0 definition

Purpose:

Define the smallest end-to-end workflow worth implementing in Sprint 2.

Primary question:

```text
Can the owner bring a real situation into JenOS, decide whether it deserves to become a Project, understand its current reality, and identify what can move next?
```

## Workflow

```text
Reality
-> Capture
-> Review / Interpret
-> Project Decision
-> Project Workspace
-> Current Reality
-> Next Movement
```

## Step 1: Reality

Reality is what happened or exists before JenOS interprets it.

Examples:

- A final exam must be prepared.
- A PDF was saved.
- A Dataset is missing.
- A deliverable was submitted.

Required information:

- short description.

Allowed unknowns:

- deadline,
- project boundary,
- people involved,
- next movement,
- whether it is a Project.

## Step 2: Capture

Capture preserves the situation with minimum burden.

Capture must support:

- actionable situation,
- information/reference,
- unresolved/unclear situation.

Required information:

- title or raw text,
- captured time,
- source type.

Optional information:

- related document/resource,
- related person,
- deadline,
- why it matters,
- initial note.

Must not require:

- Project classification,
- State selection,
- full metadata,
- area/role/resource mapping.

## Step 3: Review / Interpret

The owner reviews the captured situation and decides what it means.

JenOS may show:

- known facts,
- unknowns,
- possible interpretation,
- possible existing concepts.

JenOS must not force classification.

Required information:

- owner decision or explicit "not now".

Allowed outcomes:

- Project,
- not Project,
- undecided.

## Step 4: Project Decision

Project creation is explicit owner decision.

Required information to create Project:

- project name,
- boundary,
- source capture/evidence,
- owner confirmation.

Optional information:

- area,
- related people,
- deadline,
- first known movement,
- dependency.

What JenOS can infer later:

- related concepts,
- possible actions,
- suggested state,
- dependency effects.

## Step 5: Project Workspace

Project Workspace is the first focused place to see one Project's reality.

Required information:

- project identity,
- boundary,
- current reality summary,
- source evidence,
- movement list or open question.

Must not require:

- every Domain Model field,
- full ontology entry,
- dashboard scoring,
- percentage complete.

## Step 6: Current Reality

Current Reality answers:

```text
What is true now?
```

Minimum signals:

- confirmed or unknown state,
- known dependency,
- known event,
- known decision,
- known movement.

Unknown is allowed.

## Step 7: Next Movement

Next Movement answers:

```text
What can move next?
```

It may be:

- Action,
- Decision needed,
- Dependency resolution,
- Information needed,
- Waiting for external reality,
- Owner review.

It is not a Task queue.

## Maintenance Burden Tests

JenOS should not ask for information unless it helps answer one of:

- current reality,
- next movement,
- blocker/dependency.

If a field only makes the model prettier, defer it.

## Workflow Conclusion

Sprint 2 should implement the thinnest workflow that preserves:

- fast capture,
- delayed classification,
- explicit Project emergence,
- current reality,
- next movement,
- scoped dependency,
- owner-judged completion.

