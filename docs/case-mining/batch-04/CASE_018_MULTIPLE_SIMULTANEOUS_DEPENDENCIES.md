# CASE-018: Multiple Simultaneous Dependencies

## Case Header

```text
Case ID: CASE-018
Case Name: Several project workstreams wait on different people/resources
Batch: 04 - Dependency and Closure Evidence
Source: Derived from backlog items 22, 28, 29, 44
Purpose: Test whether Dependency needs identity/scope.
```

## 1. Reality

Fact:

- A realistic project may have several unresolved inputs at once: Dataset, equipment, parent response, or agency document.

Interpretation:

- Multiple dependencies make a single Waiting label too lossy.

Unknown:

- Exact real project with all dependencies at once.
- Which dependencies are active in the same timeline.

External reality:

- Different people/systems control different resolution events.

## 2. Project Boundary

Intended outcome:

- Complete a multi-workstream project.

Owner responsibility:

- Coordinate, follow up, mitigate, decide priority.

What "done with my responsibility" means:

- UNKNOWN.

External processes outside user's responsibility:

- Student delivery, equipment readiness, parent response, agency document.

## 3. State

Observed:

- Multiple unresolved conditions may exist.

Suggested:

- Project remains active but uneven.
- Specific workstreams are blocked/delayed.

Confirmed:

- UNKNOWN.

Evidence:

- Backlog contains all dependency types but not one detailed combined case.

Authority:

- Owner confirms project state.
- Dependency owners resolve their own parts.

## 4. Dependency Map

Dependency 1:

```text
Dependency target: Dataset
What is needed: Usable Dataset
Scope: Action / Workstream
Owner: Student team
Control: Partial
Effect: Blocked
Parallel progress: PARTIAL
Expected resolution: Dataset sent
Consequence: Train AI delayed
```

Dependency 2:

```text
Dependency target: Equipment
What is needed: Ready equipment
Scope: Workstream / Deliverable
Owner: UNKNOWN provider
Control: Partial or None
Effect: Delayed / Reduced Options
Parallel progress: PARTIAL
Expected resolution: Equipment ready or alternative selected
Consequence: Experiment/prototype risk
```

Dependency 3:

```text
Dependency target: Agency/school document response
What is needed: Reply or file
Scope: Decision / Deliverable
Owner: Organization
Control: None or Partial
Effect: Informational Only or Blocked, UNKNOWN
Parallel progress: PARTIAL
Expected resolution: Response received
Consequence: Administrative delay
```

## 5. Waiting Test

Is anything waiting?

- Yes, several scoped items.

What exactly?

- Different workstreams wait on different targets.

Is the Project as a whole waiting?

- Not necessarily.

Would setting Project = Waiting hide active work?

- Yes, and it would hide which dependency matters most.

Would NOT representing waiting lose decision-relevant information?

- Yes. It would lose follow-up ownership and priority.

## 6. Delivery & Closure Timeline

```text
Dependency A requested
-> Dependency B requested
-> some work continues
-> one dependency resolves
-> another remains
-> deliverable prepared
-> submitted
-> owner closure
```

| Stage | Type | Owner responsibility remains? | Would Project completion here be truthful? | Why |
|---|---|---:|---:|---|
| Dependency requested | Event | YES | NO | Inputs unresolved. |
| Some work continues | Work performed | YES | NO | Project still active. |
| One dependency resolves | Fact | YES | NO | Other dependencies may remain. |
| Submitted | Event | DEPENDS | DEPENDS | Boundary decides. |
| Owner closure | Decision | NO | YES | Closure confirmed. |

## 7. Completion Test

OWN-010 remains sufficient for completion, but dependency representation is strained.

## 8. Decision Rights

- Mark completion: User only.
- Recommend waiting: AI should recommend at dependency/workstream level first.
- Declare dependency resolved: External source/system/owner depending on source.
- Record outcome: System/AI with source.
- Close project: User only.

## 9. Ontology Fit

```text
TENSION
```

Existing concepts are not enough to conveniently express multiple independent blocking scopes.

## 10. Hypotheses Tested

D1:

```text
SUPPORTS D1-B and D1-C
CHALLENGES D1-D
```

C1:

```text
INCONCLUSIVE
```

## 11. Failure Log Entry

```text
Failure Type: TENSION
Reason: Multiple simultaneous dependencies require owner/scope/control to avoid flattening the project.
Challenged Decision: OWN-003.
Evidence Needed: One fully documented real multi-dependency project.
```

