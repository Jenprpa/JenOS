# JenOS Primary Interaction v2

Status: Discovery

Sprint: 2.0.1 Natural Capture & Routing Discovery

Purpose:

Compare Capture-first Inbox, Project-first, and Natural-language Routing to determine the primary JenOS interaction.

## Option 1: Capture-First Inbox

Shape:

```text
Capture
-> Review
-> Classify
-> Route
```

Result:

```text
RETAIN PARTIALLY
```

What works:

- supports unclear information,
- avoids forced Project creation,
- handles reference-only cases.

What fails:

- feels like intake/inbox,
- makes owner classify manually,
- can turn Jen into data-entry clerk.

## Option 2: Project-First

Shape:

```text
Projects
-> Create/Open Project
-> Add details/actions/files/relationships
```

Result:

```text
RETAIN PARTIALLY
```

What works:

- matches owner's mental model for known Projects,
- gives Projects a living workspace,
- avoids global inbox feeling.

What fails:

- does not handle natural mixed input well,
- may still require owner to decide structure first,
- may miss non-project information.

## Option 3: Natural-Language Routing

Shape:

```text
Owner says/writes naturally
-> JenOS interprets
-> routes candidate records
-> asks only when owner authority is needed
```

Result:

```text
SUPPORTED
```

Why:

It best matches the owner's clarified goal:

```text
I speak in human language; the system organizes the data world for me.
```

## Recommended Primary Interaction

Natural-language intake and routing should become the primary JenOS interaction.

Projects remain persistent management spaces.

Project creation can happen:

- explicitly from Projects view,
- from natural input as a suggestion requiring owner confirmation.

## Where Projects Live

Projects remain central as managed responsibility spaces.

They are not necessarily the first UI action every time.

After routing, Projects collect:

- Actions,
- Details,
- Files,
- Links,
- Sources,
- Destinations,
- Relationships,
- Dependencies,
- Events/evidence,
- State/history.

## Product Implication

Sprint 2.1 should not implement Capture-first or Project-first alone.

It should implement the smallest test of:

```text
Natural input
-> interpreted candidate routes
-> owner confirms selected routes
```

No AI provider is required initially if the interpretation is rule/demo-based, but the architecture must acknowledge that interpretation is a core input layer.

