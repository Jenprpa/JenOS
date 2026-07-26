# Finance Ledger v1

Status: Implemented for Sprint 2.3 Owner Pilot

## Purpose

Represent owner-confirmed finance routes as a lightweight personal ledger.

## Scope

Supported:

- Income,
- Expense,
- amount in THB,
- date text,
- description,
- possible context,
- totals: income, expense, net.

## Boundary

Finance Ledger is a structured destination/application model built from existing routed records.

It is not promoted as a new Core Entity merely because the UI needs a ledger view.

## Non-Goals

- budgeting,
- accounting,
- bank sync,
- debt management,
- tax features,
- investment tracking,
- financial advice,
- complex category system.

## Ambiguity Rule

Ambiguous finance input must not silently become income or expense.

Example:

```text
เงิน 500 เรื่อง 4/1
```

Result:

```text
clarification required
```
