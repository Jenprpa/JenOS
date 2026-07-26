# Multi-Route Capture v1

Status: Discovery

Sprint: 2.0.1 Natural Capture & Routing Discovery

Purpose:

Define behavior when one owner statement contains several meanings.

## Principle

One input does not equal one record.

Owner language may contain:

- schedule context,
- action,
- dependency,
- commitment,
- file/link,
- relationship,
- observation,
- possible Project.

JenOS should split meaning carefully and preserve source.

## Example

Owner input:

```text
พรุ่งนี้สอน 4/1 เรื่องเยื่อหุ้มเซลล์ ยังไม่ได้ทำใบงาน แล้วต้องส่งแผนให้หัวหน้ากลุ่มด้วย
```

Possible outputs:

1. Schedule/context candidate:
   - tomorrow,
   - class 4/1,
   - topic: cell membrane.

2. Action candidate:
   - prepare worksheet.

3. Commitment/action candidate:
   - submit lesson plan to head of group.

4. Relationship/context:
   - class 4/1,
   - head of group.

5. Deadline:
   - if explicitly known or resolvable.

## Output Shape

Each routed output should carry:

- source input id,
- extracted phrase,
- interpretation,
- confidence,
- destination,
- authority level,
- confirmation status.

## Splitting Rules

Split when:

- clauses have different destinations,
- one clause is fact and another is action,
- one clause needs confirmation and another does not,
- dependencies affect only part of work.

Do not split when:

- split would create noisy fragments,
- meaning depends on unresolved context,
- owner would need to manage too many records.

## Confirmation Strategy

JenOS should group confirmations:

```text
I found 3 things:
1. Tomorrow lesson context
2. Prepare worksheet
3. Submit lesson plan
```

Then ask only what needs authority:

- create Action?
- add Calendar event?
- link to Project?

## Failure Modes

Avoid:

- silently creating many records,
- making the owner clean up bad routing,
- hiding uncertainty,
- treating every clause as a task,
- losing original source sentence.

## Minimum Product Test

Sprint 2.1 reimplementation should test at least:

- one input -> one Project suggestion,
- one input -> Action + Context,
- one input -> Dependency + possible Action,
- one input -> Reference only,
- one input -> multiple candidate outputs.

