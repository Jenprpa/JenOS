# Sprint 2 Workflow Evidence Review

Status: Superseding evidence review

Sprint: 2.0.1 Natural Capture & Routing Discovery

Purpose:

Classify previous Sprint 2 workflow conclusions after new owner evidence.

Do not erase previous documents. This records how owner evidence supersedes them.

## Capture-First Inbox

Disposition:

```text
RETAIN PARTIALLY
```

Retain:

- capture does not equal Project,
- unclear information may exist,
- reference-only items should not be forced into Projects,
- owner can decide later.

Reject:

- Capture-first as mandatory front door,
- manual classification as normal daily interaction,
- Inbox-like accumulation.

Evidence:

- Owner rejected Capture-first runtime flow as primary experience.

## Project-First

Disposition:

```text
RETAIN PARTIALLY
```

Retain:

- Projects are living management spaces,
- known Projects should be easy to create/open,
- Projects contain actions/details/files/links/relationships/dependencies/history.

Reject:

- Project-first as the only primary intake pattern,
- owner having to pre-structure every input before JenOS helps.

Evidence:

- Owner first clarified Project-first, then clarified deeper need: natural language should be interpreted/routed by system.

## Natural Capture and Routing

Disposition:

```text
SUPPORTED
```

Supported because:

- owner wants to speak naturally,
- one input may contain several meanings,
- system should route data to the right places,
- owner should only decide what requires owner authority.

Evidence:

- Owner explicitly described: "ฉันพูดเป็นภาษาคน ส่วนระบบรับหน้าที่จัดโลกข้อมูลให้ฉัน."

## Domain Model Impact

Current evidence does not require Domain Model amendment.

It does require product/architecture recognition that:

- interpretation is an input-layer concern,
- routing is application behavior,
- AI may be architectural core later,
- Projects remain important but not always the front door.

## Current Uncommitted Code

The current uncommitted Sprint 2.1 Capture-first implementation should not be committed as product direction.

Options:

- discard/rework in next implementation step,
- salvage small pieces only if they support natural routing,
- keep tests only if relevant after reimplementation.

Do not continue polishing it.

