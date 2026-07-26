# Project-First Workflow v1

Status: Proposed revised workflow

Sprint: 2.1 Owner Workflow Revision

Purpose:

Define the smallest Project-first owner workflow for JenOS after owner pilot rejected Capture-first as the primary entry point.

## Primary Workflow

```text
Home
-> Projects
-> Create Project
-> Project Workspace
```

## Home

Purpose:

Provide a calm entry point into the owner's active Projects.

Home should not be:

- dashboard overload,
- productivity scoreboard,
- task list,
- technical status screen.

Home should answer:

- What Projects exist?
- Which Project do I want to open?
- Do I need to create a Project?
- Is there quick capture for something not yet a Project?

## Projects

Projects should be the primary owner entry point.

Minimum display:

- Project name.
- Short owner-facing description or boundary.
- Current reality summary if known.
- Small signal if something needs attention.

Avoid:

- percentage complete,
- forced state taxonomy,
- full metadata table,
- Jira-style issue lists.

## Create Project

Project creation should require only minimum useful information.

Required:

- Project name.

Optional at creation:

- short description or boundary.

Do not require:

- Area,
- Role,
- Person,
- Document,
- Resource,
- State enum,
- Dependency,
- deadline,
- full definition of done.

Rationale:

The owner wants to start with Project responsibility and let the Project grow incrementally.

## Project Workspace

After creation, the owner lands in the Project Workspace.

The workspace should make it easy to add:

- things to do,
- details,
- files,
- links,
- sources,
- destinations,
- related people,
- related Projects,
- Area/Context relationships,
- dependencies,
- events/evidence,
- state/history.

Not all sections need to be implemented immediately.

## Minimum Sprint 2.1 Reimplementation Slice

Recommended revised Sprint 2.1:

```text
Home
-> Create Project
-> Project Workspace shell
-> Add first thing to do
```

Capture can remain as a secondary affordance or be deferred.

## Guardrails

- Project-first does not mean everything is Project.
- People are never Projects.
- "Things to do" maps to Action first, not Task.
- Project creation remains owner decision.
- Project details can grow incrementally.
- No full ontology UI.
- No AI.
- No persistence vendor unless explicitly scoped later.

