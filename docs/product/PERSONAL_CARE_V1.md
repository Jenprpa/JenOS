# Personal Care V1

## Purpose

Personal Care lets JenOS remember basic owner self-reports that affect sustainable capacity.

It exists to help the owner make kinder and more realistic decisions, not to create another tracking obligation.

## Captured Signals

V1 supports:

- Sleep self-report.
- Meal status.
- Capacity / energy self-report.
- General self-care note.

These are not Core Entities.

## Self-Report

Self-report means the owner said it.

Examples:

- "เมื่อคืนได้นอน 5 ชั่วโมง"
- "กินข้าวเที่ยงแล้ว"
- "วันนี้เหนื่อยมาก"

JenOS may store this after owner confirmation.

## Observed Fact

V1 does not integrate wearables, calendars, medical devices, or external providers.

Therefore most Personal Care data in this sprint is self-report, not independently observed fact.

## Derived Data

JenOS may safely derive:

- Sleep duration from explicit start/wake time.
- Summary labels from owner-confirmed records.
- Recommendation evidence from confirmed Personal Care plus commitments.

JenOS must not derive:

- Diagnosis.
- Health risk.
- Productivity score.
- Human worth.

## Missing Data

Missing data means `unknown`.

It does not mean failure.

JenOS must not pressure the owner to fill every meal, every sleep field, or every capacity signal.

