# Batch 3 Findings

## Batch

```text
Sprint: 0.2 - Domain Discovery through Case Mining
Batch: 03 - State Under Pressure
Cases analyzed: 5
Baseline: a25e6cd docs: add Sprint 0.2 case mining evidence
```

## Selected Cases

1. CASE-011: Waiting for Student Dataset
2. CASE-012: Waiting for Project Approval
3. CASE-013: Submitted but Not Closed
4. CASE-014: Low Capacity with Deadline
5. CASE-015: Equipment Not Ready and Scope Ambiguity

## Coverage

```text
Waiting on another person: CASE-011
External deadline / partial control: CASE-012
Submitted but not truly finished: CASE-013
Capacity conflict: CASE-014
Stop / Pause / Reduce Scope ambiguity: CASE-015
```

## Ontology Fit Summary

```text
PASS: 0
PASS WITH TENSION: 1
TENSION: 4
FAIL: 0
```

Details:

- CASE-011: TENSION
- CASE-012: TENSION
- CASE-013: TENSION
- CASE-014: PASS WITH TENSION
- CASE-015: TENSION

## Cross-Case Questions

### 1. Is Waiting behaving like a State, a Dependency condition, or both?

Both, but Batch 3 evidence leans toward Dependency condition first.

In CASE-011, CASE-012, CASE-013, and CASE-015, the evidence points to a specific thing being waited for:

- Dataset.
- Approval decision.
- Review / acceptance / result.
- Equipment readiness.

The evidence does not prove that the whole Project must be Waiting.

### 2. Is Project-level Waiting too coarse?

Often yes.

Project-level Waiting risks hiding useful work that can continue while one dependency is unresolved. It may be appropriate only when the dependency blocks all meaningful progress or the owner confirms the whole Project is waiting.

### 3. Does External Dependency need independent identity?

Possibly, but not yet as a new Core Entity.

Repeated evidence shows dependencies often have:

- owner
- expected event
- control level
- consequence
- affected scope
- follow-up threshold

Existing concepts can represent pieces, but the blocking relationship remains under-specified.

### 4. Can a Project be operationally inactive but still not Waiting?

Yes, as a candidate interpretation.

CASE-014 shows low capacity may cause temporary inactivity without external waiting. CASE-015 may be inactive because continuing is not worth the cost yet, even if waiting for equipment is only one factor.

Do not create "Dormant" or similar states from this batch.

### 5. Is Submitted materially different from Completed?

Yes.

CASE-013 is strong evidence. Submission is an Event or checkpoint. Completion is an owner judgment about project closure or intended process completion.

### 6. Is Accepted materially different from Completed?

Likely yes.

Acceptance is an external outcome or response. It may be required for closure in some Projects, but it does not automatically close the Project unless owner-defined scope says so.

### 7. Does Completion require closure separate from outcome?

Often yes.

OWN-010 survives: a project can complete its intended process while external outcome remains separate. However, Batch 3 suggests JenOS may need to record closure evidence or closure decision separately from outcome.

### 8. Are Human Capacity recommendations sufficiently grounded?

The principles are sufficient, but the evidence layer is not yet clear enough.

CASE-014 shows OWN-007 and OWN-008 work as guidance, but recommendations depend on whether capacity is:

- fact
- self-report
- inference
- unknown

### 9. Do Pause / Reduce Scope / Delegate / Defer / Stop remain distinct in real cases?

Yes.

CASE-015 shows they are different response options:

- Pause: wait before continuing current path.
- Reduce Scope: continue with smaller or alternate deliverable.
- Delegate: move part of execution/follow-up to someone else.
- Defer: move timing.
- Stop: end by owner judgment.

They overlap in practice, but the decision consequences differ enough to keep them distinct for now.

### 10. Which principles survived unchanged?

- State represents reality, not intention.
- Observed / Suggested / Confirmed State separation.
- Authority follows accountability.
- Completion is a human judgment, not an event.
- Project can end without succeeding.
- Protect the human who does the work.
- AI never stops a project.
- Reality over Elegance.

### 11. Which principles were strained?

OWN-003 was strained most.

The strain is not state ownership itself, but the assumption that Waiting can be cleanly suggested at Project level from dependency evidence.

OWN-010 was strongly tested but mostly survived. It now has more evidence for submitted/accepted/outcome/closed distinctions.

OWN-011 was strained by CASE-015 because options overlap and require clearer evidence thresholds.

### 12. Which concepts repeatedly failed to explain reality?

No existing concept fully failed.

The repeated weak spot is not a missing object but a missing relationship:

```text
something blocks something else, with scope, owner, and consequence
```

## OWN Decisions Challenged

OWN-003:

- Strongest challenge.
- Waiting may need scoped interpretation before Project State suggestion.

OWN-005:

- Approval and external decision cases support authority boundaries.

OWN-007:

- Capacity principles survive, but source of evidence matters.

OWN-008:

- Trade-off model survives.

OWN-010:

- Strongly validated against Submitted = Completed.

OWN-011:

- Continue options remain useful but need evidence thresholds.

## Recurring Ambiguity

1. Waiting scope:

- What exactly is waiting?
- Whole Project, Action, Decision, Document, Deliverable, Resource, or external response?

2. Dependency identity:

- Dependency has owner/control/consequence, but existing ontology does not name the relationship clearly.

3. Completion checkpoints:

- Submitted, accepted, outcome known, follow-up done, and owner closed are distinct realities.

4. Capacity evidence:

- Capacity-aware recommendations require knowing whether evidence is self-reported, inferred, factual, or unknown.

5. Continue options:

- Pause, Reduce Scope, Delegate, Defer, Stop remain distinct but can co-exist in one recommendation.

## Missing Concepts

Candidates only:

- Dependency.
- Blocking Condition.
- Dependency Scope.
- Dependency Owner.
- External Decision.
- Response Due Date.
- Submission Event.
- Outcome Record.
- Closure Decision.
- Definition of Done Evidence.
- Capacity Evidence Type.
- Commitment Flexibility.
- Minimum Viable Action.
- Alternative Path.
- Scope Option.

No concept is accepted by this batch.

## Unnecessary Concepts

Potentially unnecessary or premature:

- A broad Project-level Waiting state for every unresolved dependency.
- A permanent state taxonomy including Submitted / Awaiting Review / Awaiting Result / Paused / Blocked / Dormant.
- Failed as an automatic state.
- New Core Entity for Equipment; Resource appears sufficient.

## Evidence Gaps

Across Batch 3, repository evidence still lacks:

- actual deadlines
- exact parent Projects
- responsible people
- owner-confirmed Project State
- whether useful work can continue while waiting
- dependency owner and control level
- Definition of Done
- accepted/submitted/outcome timestamps
- capacity source and severity
- consequence if no action is taken
- chosen owner response

## Owner Evidence Requests

For Waiting:

- When one part is blocked, do you want JenOS to show the whole Project as Waiting, or show "blocked part" inside an otherwise active Project?
- What evidence would make you personally say the whole Project is Waiting?

For External Dependency:

- Should a dependency have its own owner, expected event, due date, and scope, even if it is not a Core Entity?
- Which dependencies matter most in your real work: students, admin approval, documents, equipment, external agencies, or competition results?

For Completion:

- In "submit project book before deadline," is the Project done when submitted, when accepted, when result is known, or when you close it after follow-up?
- Should JenOS ask for Definition of Done before deadline projects begin?

For Capacity:

- Should capacity normally come from self-report, calendar/workload inference, or both?
- What is the lightest acceptable capacity check-in during busy days?

For Continue Options:

- In equipment-not-ready cases, what usually feels most realistic: pause, reduce scope, delegate, defer, or stop?
- Should JenOS recommend one option or present trade-offs among several?

## Recommendation for Next Test

Do not revise OWN decisions yet.

Next test should stress:

- external dependency scope across several domains
- post-submission lifecycle
- project closure after outcome

Suggested Batch 4 target:

```text
Dependency and Closure Evidence
```

The goal would be to determine whether Dependency / Blocking Condition and Closure Decision are concepts that earn the right to exist, or whether existing Event + Decision + Risk + Resource can still carry the truth cleanly.

## Batch 3 Conclusion

Batch 3 does not break the Sprint 0 foundation.

It does show that Project-level Waiting is dangerous if used too eagerly.

The strongest emerging rule is:

```text
Do not call the whole Project Waiting until you know what is blocked and whether anything useful can still move.
```

This is evidence, not a new doctrine.

