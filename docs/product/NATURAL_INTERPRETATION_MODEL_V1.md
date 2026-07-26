# Natural Interpretation Model v1

Status: Discovery

Sprint: 2.0.1 Natural Capture & Routing Discovery

Purpose:

Define how JenOS could interpret owner language without turning the owner into a data-entry clerk.

## Core Hypothesis

JenOS should accept natural owner language first, interpret meaning using context, split one input into meaningful candidate records, route those records, and ask the owner only for decisions that require owner authority.

## Interpretation Flow

```text
Input
-> Context Resolution
-> Semantic Extraction
-> Candidate Records
-> Authority Check
-> Routing
-> Confirmation where required
```

## Input

Owner language may be informal, mixed, incomplete, and context-heavy.

Examples:

- "เด็กยังไม่ส่ง Dataset"
- "พรุ่งนี้สอน 4/1 เรื่องเยื่อหุ้มเซลล์"
- "อัปโหลดไฟล์แล้ว เหลือตรวจคำผิด"

JenOS should not require the owner to pre-select a form.

## Context Resolution

Resolve shorthand using evidence hierarchy:

1. current conversation/input,
2. active Project/Area/context,
3. known schedule/calendar,
4. linked Person/Role/Area,
5. recent history,
6. owner clarification if ambiguity remains.

## Semantic Extraction

Extract possible meanings:

- fact,
- observation,
- event,
- action,
- dependency,
- document/resource,
- relationship,
- commitment,
- state evidence,
- possible Project.

## Candidate Records

Output should be candidate records, not silent truth.

Candidate records may include:

- Observation candidate,
- Action candidate,
- Event candidate,
- Dependency candidate,
- Relationship candidate,
- Project creation suggestion.

## Authority Check

Before routing, classify authority:

- auto-route,
- auto-route with visible undo,
- suggest and confirm,
- owner only.

This preserves OWN-005.

## Routing

Route candidate records to appropriate destinations:

- Project workspace,
- Action area,
- teaching record,
- document/resource area,
- dependency area,
- schedule/calendar view,
- finance view.

Routing is not the same as confirmation.

## Confirmation Where Required

Owner confirmation is required for:

- creating Project,
- changing Confirmed State,
- confirming Memory,
- closing Project,
- executing User Only decisions,
- high-impact calendar/commitment changes,
- ambiguous sensitive records.

## Epistemic Separation

JenOS must separate:

### Fact

Something directly stated or externally observed.

### Observation

A recorded noticed signal with source.

### Inference

A conclusion drawn from facts/context.

### Suggested Interpretation

System/AI proposal.

### Owner-Confirmed Truth

Meaning-level truth confirmed by owner or authorized system rule.

## AI Boundary

AI may:

- parse,
- interpret,
- propose,
- explain confidence,
- show uncertainty,
- ask clarification.

AI may not:

- silently create owner-controlled truth,
- confirm Memory,
- change Confirmed State,
- close Project,
- make User Only decisions.

## Design Implication

AI/interpretation is not merely a later chat feature.

For JenOS, interpretation may be part of the input architecture.

The owner speaks in human language; the system helps organize the data world.

