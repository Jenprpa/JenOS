# Dependency Promotion Gate

Status: Closed - Approved

Sprint: 0.3 Domain Consolidation

Purpose:

Evaluate whether Dependency has earned the right to move from analytical language to a Candidate Supporting Concept in Domain Model v0.2.

This document recorded a recommendation for Owner Review.

Owner Review approved Dependency promotion to Supporting Concept for Domain Model v0.2.

## Candidate

Dependency

## Current Status

Approved by Owner at the end of Candidate Validation to move from analytical language to Candidate Supporting Concept review.

Approved by Owner during Sprint 0.3 to become Supporting Concept in Domain Model v0.2.

Target review stage:

```text
Sprint 0.3 Domain Consolidation
```

Guardrails:

- Ontology promotion: YES, in Domain Model v0.2.
- Domain Model change: NO, not outside the v0.2 proposal.
- OWN amendment: NO.
- Status after this gate: recommendation pending Owner Review.

## Proposed Meaning

Dependency is a decision-support condition where progress on a Project, Action, Decision, Deliverable, or bounded workstream depends on a needed thing, response, resource, decision, or external condition.

A useful Dependency should answer:

- What is needed?
- Who or what controls it?
- What scope is affected?
- What can still move?
- What resolves it?
- What consequence exists if it remains unresolved?

## Evidence Tests

### Test 1: Repeated Cross-Case Occurrence

Result: PASS

Evidence:

- Batch 3 and Batch 4 repeatedly found work blocked by datasets, approvals, responses, artifacts, or external outcomes.
- Candidate validation found that removing Dependency scattered decision-relevant truth across Action, Relationship, Event, Observation, and Risk.

Interpretation:

Dependency is not a one-off label. It appears across teaching, student work, administration, project competition, vehicle repair, and follow-up cases.

### Test 2: Decision-Relevant Truth

Result: PASS

Dependency changes recommendations.

Examples:

- If only one Action is waiting, recommend moving another part of the Project.
- If the whole Project is waiting, recommend follow-up, defer, reduce scope, or review commitment.
- If the user controls the needed item, recommend direct action.
- If another person or organization controls it, recommend follow-up or escalation.

Without Dependency, JenOS may wrongly treat the whole Project as Waiting.

### Test 3: Existing Concept Substitution

Result: PARTIAL FAILURE

Tested substitutions:

- Relationship only: too broad; it says things are connected but not what is needed or blocking.
- Action only: captures work to do, not external condition or affected scope.
- Event only: captures what happened, not what remains unresolved.
- Risk only: captures possible harm, not the needed thing itself.
- Context only: captures situation, not persistent dependency.

Conclusion:

Existing concepts can store pieces of the truth, but not the decision-support structure cleanly.

### Test 4: Identity Requirement

Result: MEDIUM PASS

Dependency does not need to become a Core Entity. It may need lightweight identity as a Supporting Concept so it can be tracked, resolved, linked, and explained.

Required identity may include:

- source or evidence,
- needed item,
- owner/controller,
- affected target,
- affected scope,
- current condition,
- expected resolution,
- resolution evidence.

### Test 5: Scope Without New Concept

Result: PASS

Dependency Scope does not need to survive as a separate concept.

Scope can be represented as an attribute or relationship of Dependency and the affected concept:

```text
Dependency
target: Project / Action / Decision / Deliverable
scope: partial / total / specific component
```

The scope is decision-relevant, but it does not require a standalone concept.

### Test 6: State Boundary

Result: PASS

Dependency clarifies OWN-003 rather than amending it.

Dependency explains why something may appear Waiting.

It must not automatically set:

```text
Project State = Waiting
```

Project-level Waiting is appropriate only when the dependency prevents meaningful progress across the Project boundary and the Owner confirms or accepts that interpretation.

### Test 7: Complexity Cost

Result: ACCEPTABLE IF SUPPORTING

Dependency would be too heavy as a Core Entity at this stage.

It is justified as a Supporting Concept because:

- it supports recommendations,
- it explains Waiting,
- it preserves external control,
- it keeps Project State truthful.

## What Dependency Is Not

Dependency is not:

- a Project,
- a State,
- a generic Relationship,
- a Risk by itself,
- an Action,
- a Resource,
- a Commitment,
- automatic proof that a Project is Waiting.

## Recommendation

```text
PROMOTE TO SUPPORTING CONCEPT - APPROVED
```

Meaning:

Dependency is included in Domain Model v0.2 as a Supporting Concept.

This is the first evidence-driven concept promotion in JenOS.

## Owner Review Required

COMPLETED

Reason:

Owner approved promotion with Experimental confidence and review after implementation evidence.
