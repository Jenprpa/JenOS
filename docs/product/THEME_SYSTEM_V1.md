# Theme System v1

Status: Implemented for Sprint 2.3 Owner Pilot

## Purpose

Allow lightweight owner personalization without turning JenOS into a design editor.

## Scope

- Budgie default theme,
- one alternate preset,
- Custom theme,
- primary accent,
- secondary accent,
- highlight accent,
- reset to Budgie.

## Boundary

Theme is presentation only.

It must not alter:

- routed records,
- domain concepts,
- owner decisions,
- authority rules,
- state,
- memory.

## Implementation Note

Themes produce CSS variables/design tokens. Components consume tokens rather than scattering hardcoded owner theme colors.
