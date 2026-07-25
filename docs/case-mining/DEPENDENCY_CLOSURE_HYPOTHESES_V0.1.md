# Dependency and Closure Hypotheses v0.1

## Status

```text
Experimental hypotheses for Batch 4.
Not an Owner Decision.
Not ontology.
Not state taxonomy.
```

## Purpose

Batch 3 suggested that:

- Waiting often behaves as scoped dependency/blocking condition.
- Submission, acceptance, outcome, follow-up, and closure may be distinct realities.

This document converts those observations into testable hypotheses.

## HYPOTHESIS D1 - Scoped Dependency

A Project may remain active while one or more scoped parts are waiting on external conditions.

Therefore:

```text
Waiting may often describe a dependency relation / condition rather than the entire Project State.
```

### D1-A: Waiting is a legitimate Project State; scope problems are case-description issues

Supporting evidence:

- OWN-003 already uses `In Progress -> Waiting` as a possible Suggested State example.
- Some real cases may genuinely have no useful work until an external decision/resource arrives.

Conflicting evidence:

- Batch 3 repeatedly identified specific dependency targets rather than whole-project inactivity.
- CASE-011, CASE-012, CASE-013, and CASE-015 all risk losing active work if the whole Project is marked Waiting.

What would disconfirm it:

- Multiple cases where Project-level Waiting hides meaningful parallel work and causes wrong recommendations.

Information lost if wrong:

- Blocked scope.
- Dependency owner.
- Parallel work.
- Mitigation options.

### D1-B: Waiting is primarily a scoped dependency/blocking condition

Supporting evidence:

- Batch 3 identifies concrete waiting targets: Dataset, approval, review/result, equipment.
- Decision support needs owner/control/consequence/scope, not just a project label.

Conflicting evidence:

- There may be total-block cases where the whole Project really cannot proceed.
- Users may still need a high-level "Waiting" view.

What would disconfirm it:

- Repeated cases where all important work is inactive because one unresolved condition controls the entire Project.

Information lost if wrong:

- Whole-project inactivity.
- Simpler dashboard grouping.
- User's intuitive sense that "this project is waiting."

### D1-C: Both exist; whole-project Waiting is valid only when unresolved dependency prevents meaningful progress across the Project

Supporting evidence:

- Best explains Batch 3 without forcing all waiting into one level.
- Preserves project-level summary while protecting scoped truth.

Conflicting evidence:

- Requires knowing what "meaningful progress" means.
- May add modeling complexity.

What would disconfirm it:

- Cases show no need to distinguish scoped and whole-project waiting.
- Existing Event/Action/Decision links prove sufficient.

Information lost if wrong:

- If too complex: usability.
- If too vague: inconsistent classification.

### D1-D: No explicit Dependency concept is needed; existing relationships/events/actions are sufficient

Supporting evidence:

- Dataset can be Resource/Document.
- Approval can be Decision.
- Submission/review can be Event/Outcome.
- Equipment can be Resource + Risk.

Conflicting evidence:

- Batch 3 repeatedly needed the phrase "blocks X, controlled by Y, expected event Z."
- Existing concepts represent objects but not consistently the blocking relation.

What would disconfirm it:

- Batch 4 shows decision support can be cleanly expressed with Event + Action + Decision + Risk only.

Information lost if wrong:

- Blocked scope.
- Dependency owner/control.
- Expected resolution.
- Consequence of non-resolution.

## HYPOTHESIS C1 - Closure Is Distinct from Outcome

A Project's work lifecycle, delivery lifecycle, external outcome, and owner closure may be different dimensions.

### C1-A: Submitted is sufficient for Project completion

Supporting evidence:

- If the explicitly intended boundary is "prepare and submit X", submission may truthfully complete user responsibility.

Conflicting evidence:

- Batch 3 and OWN-010 warn that submission alone may leave review, correction, outcome, or follow-up.

What would disconfirm it:

- Cases where submission occurs but owner still has expected responsibility.

Information lost if wrong:

- Follow-up.
- Revision.
- Review status.
- Closure rationale.

### C1-B: Accepted is sufficient

Supporting evidence:

- Acceptance may be the required external confirmation in some administrative/reporting processes.

Conflicting evidence:

- Accepted may not require further user action.
- Accepted may arrive after the user's project already completed.
- Accepted does not itself record owner closure.

What would disconfirm it:

- Cases where acceptance arrives but owner still needs archive, report, notify, or reflect.

Information lost if wrong:

- Owner responsibility after acceptance.
- Difference between external fact and internal closure.

### C1-C: Outcome Known is sufficient

Supporting evidence:

- Some projects are psychologically or operationally unresolved until result is known.

Conflicting evidence:

- OWN-010 says outcome is not process.
- A project can complete even if result is negative or unknown.

What would disconfirm it:

- Cases where user's intended work ended at submission, and later result does not change project completion.

Information lost if wrong:

- Fairness to completed effort.
- Separation of process from external success.

### C1-D: Completion depends on intended Project boundary and owner judgment; submission/acceptance/outcome are evidence/events, not universal completion states

Supporting evidence:

- Directly matches OWN-010.
- Explains both submission-as-completion and submission-not-completion cases.

Conflicting evidence:

- May be too vague unless Definition of Done or owner responsibility boundary is recorded.

What would disconfirm it:

- Cases where owner judgment alone creates inconsistent or misleading closure without evidence.

Information lost if wrong:

- If too vague: auditability.
- If too event-driven: autonomy and truth.

### C1-E: A separate Closure Decision concept may be needed

Supporting evidence:

- Completion is human judgment.
- Owner closure may need timestamp, rationale, evidence, and relation to outcome.

Conflicting evidence:

- State change rationale may be enough.
- Adding a concept too early may over-model.

What would disconfirm it:

- Batch 4 shows closure can be represented cleanly as Project State change with reason and source.

Information lost if wrong:

- Closure rationale.
- Why submission/outcome did or did not complete the Project.

## Checkpoint Classification Test

These are analytical classifications only:

| Item | Possible Type |
|---|---|
| Submitted | Event, Observation, state evidence |
| Accepted | External fact, Event, Outcome, state evidence |
| Outcome Known | Event, Outcome, External Reality |
| Follow-up Done | Event, Observation, state evidence |
| Closed | Owner Decision, Confirmed State change, closure rationale |

Do not create enum from this table.

## Evidence Thresholds Before OWN Amendment

OWN-003 amendment requires:

- repeated evidence across domains,
- semantic distortion under current wording,
- decision-support consequence,
- and evidence that clarification is insufficient.

OWN-010 amendment requires:

- repeated cases where "completion is human judgment" cannot explain closure truth,
- cross-domain cases,
- evidence that closure/event/outcome distinctions contradict the decision itself,
- and decision-support consequences.

Candidate concept acceptance requires:

- repeated pattern,
- cross-case utility,
- clear boundary from existing concepts,
- no cleaner existing concept,
- and a concrete recommendation/decision capability that would otherwise be lost.

