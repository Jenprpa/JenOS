# CASE-016: Scoped Dependency with Parallel Work Possible

## Case Header

```text
Case ID: CASE-016
Case Name: Dataset missing, but other project work can continue
Batch: 04 - Dependency and Closure Evidence
Source: Derived from backlog items 22, 23, 25, 26 and Batch 3 CASE-011
Purpose: Test whether whole-Project Waiting distorts reality when parallel work exists.
```

## 1. Reality

Fact:

- A Dataset is missing.
- The missing Dataset prevents a later activity such as Train AI.
- Other workstreams may exist in the same parent project, such as revising chapter 3 or preparing the submission document.

Interpretation:

- The Project may remain active while the Dataset-dependent Action is blocked.

Unknown:

- Whether the other workstreams are actually available in this specific project.
- Dataset owner, deadline, and severity.

External reality:

- Dataset is either received or not received.
- Student team or another person likely controls delivery.

## 2. Project Boundary

Intended outcome:

- Complete the student project / competition preparation. Exact boundary UNKNOWN.

Owner responsibility:

- User likely advises, follows up, and decides mitigation.

What "done with my responsibility" means:

- UNKNOWN. It may include submission, student readiness, or project closure.

External processes outside user's responsibility:

- Student delivery of Dataset.

## 3. State

Observed:

- Dataset missing.

Suggested:

- Dataset-dependent action is blocked or waiting.
- Do not infer whole-Project Waiting if other work can continue.

Confirmed:

- UNKNOWN.

Evidence:

- Backlog and Batch 3 show Dataset missing; parallel work is a test condition.

Authority:

- System may observe Dataset receipt if source exists.
- AI may suggest scoped waiting.
- Owner confirms Project State.

## 4. Dependency Map

Dependency target:

- Dataset from student team.

What is needed:

- Usable Dataset.

Scope:

- Action: Train AI.
- Workstream: experimental / model training.

Dependency owner:

- Person / student team.

Control:

- Partial for user.

Effect:

- Blocked for Train AI.
- Reduced Options for project plan.

Can parallel progress continue?

```text
YES, if documentation or planning work remains.
```

Expected resolution event:

- Dataset received / uploaded / confirmed usable.

Consequence of non-resolution:

- Training delays; deadline risk increases.

## 5. Waiting Test

Is anything waiting?

- Yes. Train AI waits for Dataset.

What exactly?

- Dataset-dependent Action.

Is the Project as a whole waiting?

- Not necessarily.

Would setting Project = Waiting hide active work?

- Yes, if documentation/planning can continue.

Would NOT representing waiting lose decision-relevant information?

- Yes. JenOS would miss the need to follow up and protect the training path.

## 6. Delivery & Closure Timeline

```text
Dataset requested
-> Dataset received
-> Train AI
-> Test
-> Submit project book
-> Owner closure
```

| Stage | Type | Owner responsibility remains? | Would Project completion here be truthful? | Why |
|---|---|---:|---:|---|
| Dataset requested | Event | YES | NO | Needed material not received. |
| Dataset received | Event / Fact | YES | NO | Only dependency resolved. |
| Train AI | Event / Work performed | YES | NO | Later testing/submission remains. |
| Submit project book | Event | DEPENDS | DEPENDS | Depends on boundary. |
| Owner closure | Decision | NO | YES | Owner confirms responsibility ended. |

## 7. Completion Test

OWN-010 explains the case cleanly.

Dependency resolution is not completion. Submission may or may not be completion depending on boundary.

## 8. Decision Rights

- Mark completion: User only.
- Recommend waiting: AI may recommend scoped waiting with explanation.
- Declare dependency resolved: System may observe; owner or trusted source confirms usability.
- Record outcome: System/AI may record sourced fact.
- Close project: User only.

## 9. Ontology Fit

```text
TENSION
```

The case fits current concepts but exposes that waiting needs scope.

## 10. Hypotheses Tested

D1:

```text
SUPPORTS D1-B and D1-C
DISCONFIRMS broad D1-A if Project = Waiting hides parallel work
```

C1:

```text
INCONCLUSIVE
```

## 11. Failure Log Entry

```text
Failure Type: TENSION
Reason: Whole-Project Waiting would hide parallel progress.
Challenged Decision: OWN-003.
Evidence Needed: Confirm real parallel work in actual student project.
```

