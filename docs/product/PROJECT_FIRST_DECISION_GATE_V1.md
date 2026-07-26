# Project-First Decision Gate v1

Status: Ready to Reimplement

Sprint: 2.1 Owner Workflow Revision

## Gate Questions

### 1. Should Project become the primary owner entry point?

YES.

Owner pilot provides direct product evidence that Project-first matches the owner's mental model better than Capture-first.

### 2. Can Capture remain without being mandatory?

YES.

Capture remains valid as secondary quick capture or project-local capture.

### 3. Can "things to do" map to Action without Task?

YES, for now.

Owner wording does not require a Task Core Entity yet. Test Action first.

### 4. Can files and links map to existing Document/Resource?

YES.

Files map to Document/Resource. Links map to Resource.

### 5. Can relationships use existing Relationship?

YES.

Related people, related Projects, Area/Context links, and resource connections can use Relationship initially.

### 6. Can source/destination be modeled without new Core Entity?

YES, for now.

Source/destination meanings are varied and can be represented as relationship/context/evidence metadata until evidence proves identity is required.

### 7. Does owner evidence require Domain Model amendment?

NO.

The evidence changes primary product workflow, not the domain ontology.

### 8. What should Sprint 2.1 become after revision?

Sprint 2.1 should become:

```text
Project-first creation and workspace shell
```

Recommended flow:

```text
Home
-> Projects
-> Create Project
-> Project Workspace shell
-> Add first Action/detail/source item
```

Capture-first implementation should be replaced or moved to secondary status.

## Final Disposition

```text
READY TO REIMPLEMENT
```

## Owner Review Required

```text
YES
```

Reason:

The primary workflow changed from Capture-first to Project-first.

## Domain Review Required

```text
NO
```

Reason:

No Domain Model amendment or new concept is required.

## Implementation Guardrails

Do not add:

- Task Core Entity,
- Priority,
- AI,
- dashboard,
- persistence vendor,
- full Project Workspace,
- new domain concepts.

Do implement:

- Project-first home/projects surface,
- lightweight Project creation,
- workspace shell,
- first Action entry or placeholder if scoped,
- secondary/deferred capture decision.

