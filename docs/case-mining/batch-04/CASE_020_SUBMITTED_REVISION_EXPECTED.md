# CASE-020: Submitted but Revision Remains Possible

## Case Header

```text
Case ID: CASE-020
Case Name: Submit document, then revise after feedback
Batch: 04 - Dependency and Closure Evidence
Source: Backlog item 43; Batch 3 CASE-013
Purpose: Test why Submitted may not mean Completed.
```

## 1. Reality

Fact:

- A document can be submitted and later receive feedback.
- Revision may remain the user's responsibility.

Interpretation:

- Submission is a checkpoint, not closure, when review/revision is expected.

Unknown:

- Specific document.
- Whether feedback is mandatory.
- Whether revision is already requested or merely possible.

External reality:

- Reviewer may accept, request revision, or provide feedback.

## 2. Project Boundary

Intended outcome:

- Produce a document that survives review or reaches accepted form.

Owner responsibility:

- Continues through feedback response if revision is expected.

What "done with my responsibility" means:

- Submitted and accepted, or revisions completed, depending on owner boundary.

External processes outside user's responsibility:

- Reviewer response timing and decision.

## 3. State

Observed:

- Submitted if evidence exists.
- Feedback/revision request if received.

Suggested:

- After submission: awaiting review is evidence/checkpoint, not permanent state taxonomy.
- If feedback arrives: action needed.

Confirmed:

- Completion remains unconfirmed until owner closes.

Evidence:

- Backlog includes editing after feedback.

Authority:

- Reviewer controls feedback.
- User controls revision/closure.

## 4. Dependency Map

Dependency target:

- Reviewer feedback or acceptance.

What is needed:

- Review result or revision request.

Scope:

- Deliverable.
- Decision.

Dependency owner:

- Person / Organization.

Control:

- Partial before submission; none over review timing.

Effect:

- Delayed / Reduced Options.

Can parallel progress continue?

```text
PARTIAL
```

Expected resolution event:

- Feedback received / accepted / revision requested.

Consequence of non-resolution:

- Project remains unresolved if acceptance/revision is part of boundary.

## 5. Waiting Test

Is anything waiting?

- Yes, submitted document waits for review/feedback.

What exactly?

- Deliverable review path.

Is the Project as a whole waiting?

- Depends on whether other work or preparation can continue.

Would setting Project = Waiting hide active work?

- Possibly.

Would NOT representing waiting lose decision-relevant information?

- Yes. Follow-up or review tracking would be lost.

## 6. Delivery & Closure Timeline

```text
Work performed
-> Deliverable prepared
-> Submitted
-> Review
-> Feedback / revision request
-> Revision
-> Accepted
-> Owner closure
```

| Stage | Type | Owner responsibility remains? | Would Project completion here be truthful? | Why |
|---|---|---:|---:|---|
| Submitted | Event | YES | NO | Review/revision expected. |
| Review | External process | YES/PARTIAL | NO | Outcome unknown. |
| Feedback | Event / Outcome | YES | NO | User response needed. |
| Revision | Work performed | YES/PARTIAL | DEPENDS | Acceptance may remain. |
| Accepted | External fact | PARTIAL | DEPENDS | Closure/archiving may remain. |
| Owner closure | Decision | NO | YES | Responsibility ended. |

## 7. Completion Test

OWN-010 explains the case cleanly and prevents premature completion.

It may need clarification that submission can be evidence for completion only when the owner-defined boundary ends at submission.

## 8. Decision Rights

- Mark completion: User only.
- Recommend waiting: AI may suggest review dependency.
- Declare dependency resolved: Reviewer/source or owner.
- Record outcome: System/AI may record feedback with source.
- Close project: User only.

## 9. Ontology Fit

```text
TENSION
```

Closure is handled by OWN-010, but review/revision evidence may need more explicit representation.

## 10. Hypotheses Tested

D1:

```text
SUPPORTS D1-B and D1-C
```

C1:

```text
SUPPORTS C1-D
CHALLENGES C1-A
```

## 11. Failure Log Entry

```text
Failure Type: TENSION
Reason: Submitted document remains owner-active when review/revision is expected.
Challenged Decision: OWN-010.
Evidence Needed: Owner boundary and actual revision requirement.
```

