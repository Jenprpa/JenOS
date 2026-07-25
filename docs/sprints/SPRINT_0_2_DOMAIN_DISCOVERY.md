# Sprint 0.2 — Domain Discovery through Case Mining

## Status

Planned.

## Sprint Goal

Prove the Sprint 0 principles against real life.

Sprint 0.2 is not a Domain Model design sprint.

It is a Case Mining sprint.

## Sprint Principle

> The model earns the right to exist by surviving real cases.

The model is not correct because it is elegant.

The model becomes trustworthy only when it can explain real cases without distorting them.

If the model cannot explain reality, the model must change.

## Working Rule

### Reality over Elegance

> ถ้าเคสจริงขัดกับโมเดล ให้แก้โมเดล ไม่ใช่บังคับเคสให้เข้ากับโมเดล

If a real case contradicts the current JenOS model, the model is the thing under test.

The case should not be simplified, renamed or distorted only to fit an elegant structure.

## Why Case Mining Comes First

JenOS is a Personal Decision Support System.

That means the model must explain actual responsibility, constraint, memory, state, people, documents, deadlines and decisions.

Starting from a database schema would risk making life fit the data model.

Starting from real cases lets JenOS discover the model that life actually needs.

## Method

Collect 30-50 real cases.

For each case, ask:

- What is the Person?
- What is the Role?
- What is the Area?
- What is the Project, if any?
- What is the Resource, Document, Event or Decision?
- What Observations exist?
- What Events happened?
- What State changed, and when?
- Which State is Observed, Suggested or Confirmed?
- What Decisions are required?
- What Context affects the decision?
- What Human Capacity constraints exist?
- What Risks or Commitments are involved?
- What should become Memory?
- What should remain only Log or History?
- What should JenOS say?
- What must JenOS not say or do?
- Does the case challenge any Sprint 0 principle?

## Failure Log

Sprint 0.2 must record model failures explicitly.

A failed case is more valuable than an easy pass because it shows where JenOS is still lying, oversimplifying or missing a concept.

Failure Log entries should use this shape:

```text
Case:

Failure Type:

Reason:

Challenged Decision or Principle:

Possible Revision:

Evidence Needed:
```

Example:

```text
Case #12

Failure Type:
Ontology Failed

Reason:
Area and Project cannot be separated cleanly in this case.

Challenged Decision or Principle:
OWN-002

Possible Revision:
Clarify whether recurring bounded responsibilities can contain project-like cycles.
```

## Expected Outputs

- Case Mining backlog
- Completed case notes for at least 30 real cases
- Failure Log
- Domain stress points
- Classification patterns
- State transition patterns
- Memory candidates and anti-memory examples
- Decision Rights examples
- Human Capacity examples
- Proposed revisions for Sprint 0 principles, if reality requires them
- First evidence-backed outline for Domain Model v0.2

## Sprint KPI

Sprint 0.2 should not be evaluated only by the number of cases processed.

The real KPI is whether the cases expose truth about the model.

Measure:

- which principles need revision
- which Owner Decisions are challenged
- which entities are unnecessary
- which concepts are missing
- which distinctions are still unclear
- which cases force JenOS to choose between elegance and reality

If 50 cases pass without challenging anything, the case set may be too easy or too curated.

## Non-Goals

Sprint 0.2 will not produce:

- UI
- dashboard
- prototype
- database schema
- framework selection
- authentication
- automation rules
- AI learning policy for rejected recommendations
- final state taxonomy

## Definition of Done

- [ ] 30-50 real cases collected
- [ ] each case analyzed with the Case Mining Template
- [ ] each case identifies Project / Area / Role / Person boundaries where relevant
- [ ] each case identifies Event, Decision, State, Context and Memory candidates where relevant
- [ ] unclear or contradictory cases are preserved instead of forced into the model
- [ ] model failures are recorded in a Failure Log
- [ ] at least some hard or ambiguous cases are included
- [ ] domain stress points are listed
- [ ] challenged principles and Owner Decisions are identified
- [ ] unnecessary entities and missing concepts are explicitly considered
- [ ] proposed model revisions are based on repeated case evidence
- [ ] no new principle is added unless reality makes the current principles insufficient
- [ ] Sprint 0.2 findings are summarized before any Domain Model v0.2 design begins

## Readiness

Sprint 0.2 can begin as soon as the owner provides or approves the first real case batch.
