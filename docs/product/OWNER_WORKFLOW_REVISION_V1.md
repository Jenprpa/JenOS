# Owner Workflow Revision v1

Status: Owner Pilot Evidence

Sprint: 2.1 Owner Workflow Revision

Decision context:

```text
Owner Pilot Result: REJECTED WITH PRODUCT EVIDENCE
```

This document reviews the current Sprint 2 workflow against owner runtime feedback.

It does not modify the Domain Model, OWN decisions, or implementation.

## Current Sprint 2 Workflow

```text
Reality
-> Capture
-> Review
-> Project Decision
-> Project
```

## Owner Model

```text
Project
-> Actions
-> Details
-> Files / Links / Evidence
-> Relationships
-> Evolving Reality
```

Owner desired primary flow:

1. Create Project.
2. Add things to do.
3. Add Project details.
4. Add sources, destinations, files, uploaded documents, links, and evidence.
5. Define relationships and connections.
6. Continue managing the Project through its evolving reality.

## What Remains Valid from Sprint 2.0

### Capture Does Not Equal Project

Still valid.

Non-project information may exist and should not be forced into Project shape.

### Project Emerges by Owner Decision

Still valid.

The owner decides when something deserves Project responsibility.

### Unknown Classification Is Allowed

Still valid for captured information and ambiguous situations.

### Action Should Be Tested Before Task

Still valid.

"Things to do" should first map to Action. No Task Core Entity is justified yet.

### Dependency Remains Scoped

Still valid.

Dependency should not automatically turn the whole Project into Waiting.

## What Owner Pilot Disproved

### Capture-First as Mandatory Front Door

Disproved.

The owner does not primarily think:

```text
I have reality -> I capture -> I classify -> I maybe create Project
```

The owner more naturally thinks:

```text
I have a Project -> I add what belongs inside it
```

### Review Before Project as Primary Daily Flow

Disproved for the main owner experience.

Review may still be useful, but it should not be the normal front door for Project work.

### Capture UI as the First Product Surface

Disproved.

It makes JenOS feel like an intake tool rather than a living Project workspace.

## What Should Be Revised

Sprint 2 should pivot from Capture-first to Project-first.

New primary path:

```text
Home
-> Projects
-> Create Project
-> Project Workspace
-> Add Actions / Details / Files / Links / Relationships / Evidence
```

Capture becomes secondary, not mandatory.

## Capture Repositioning

Capture should become:

```text
Secondary quick capture
```

It should support:

- reference information,
- unclear future items,
- notes not yet tied to a Project,
- later linking to a Project.

It should not be:

- mandatory front door,
- global inbox that drowns the owner,
- Project creation funnel for everything.

## Product Implication

Sprint 2.1 should be revised.

Current implementation should not be committed as-is.

Next implementation should begin with a Project-first surface, not Capture-first.

