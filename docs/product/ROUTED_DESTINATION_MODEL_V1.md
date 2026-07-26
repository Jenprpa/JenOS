# Routed Destination Model v1

Status: Implemented for Sprint 2.2 Owner Pilot

## Purpose

Define how accepted routed records appear in owner-facing destination spaces.

This model belongs to the application/presentation layer. It does not create new domain entities.

## Mapping

| Routed family | Destination |
|---|---|
| schedule | Calendar / Teaching |
| action | Action |
| finance | Finance |
| dependency | Waiting / Dependency |
| project | Project |
| information | Information / Note |
| relationship | Information / Note, unless later evidence proves a better supporting-context view |
| context | Information / Note, unless later evidence proves a better supporting-context view |

## Rules

- One routed record receives one primary destination.
- Calendar views may reference the same calendar-destination record, but must not duplicate domain truth.
- Destination mapping must not mutate routed record truth.
- Unresolved context remains visible.
- UI convenience alone does not promote a destination into the ontology.

## Implementation Boundary

```text
RoutedRecord
-> DestinationResolver
-> BoardSection / Calendar representation
```

Routing decisions must not be buried inside React components.
