# CASE-021: External Outcome After Work Ends

## Case Header

```text
Case ID: CASE-021
Case Name: Competition result arrives after submission work ended
Batch: 04 - Dependency and Closure Evidence
Source: Backlog items 2, 8, 30; OWN-010 AI Spark example pattern
Purpose: Test outcome versus project completion.
```

## 1. Reality

Fact:

- A competition/project can be submitted.
- Later, an external result arrives.
- The result may not require further owner work.

Interpretation:

- Outcome Known can be orthogonal to Project completion.
- A negative outcome does not mean the Project failed if the intended process was completed.

Unknown:

- Whether follow-up, student notification, certificate handling, or reflection remains.
- Whether project boundary included result handling.

External reality:

- Committee announces result.

## 2. Project Boundary

Intended outcome:

- Prepare and submit competition entry; possibly support students through result.

Owner responsibility:

- Depends on boundary. Could end at submission or after result communication/closure.

What "done with my responsibility" means:

- UNKNOWN; owner must decide.

External processes outside user's responsibility:

- Judging and result.

## 3. State

Observed:

- Submission event if evidence exists.
- Result announcement if observed.

Suggested:

- Record outcome separately from completion.
- Do not mark Failed from non-selection.

Confirmed:

- Completion/closure UNKNOWN.

Evidence:

- OWN-010 explicitly uses competition submission/result as example.

Authority:

- Committee controls outcome.
- User controls closure.

## 4. Dependency Map

Dependency target:

- Competition result.

What is needed:

- Result announcement.

Scope:

- Outcome / informational dependency.
- Possibly follow-up action if owner responsibility includes informing students.

Dependency owner:

- Organization / committee.

Control:

- None.

Effect:

- Informational Only, unless follow-up is required.

Can parallel progress continue?

```text
YES or NOT RELEVANT
```

Expected resolution event:

- Result announced.

Consequence of non-resolution:

- Outcome remains unknown; closure may still be possible if boundary ended at submission.

## 5. Waiting Test

Is anything waiting?

- The outcome is waiting.

What exactly?

- Result / external outcome.

Is the Project as a whole waiting?

- Not necessarily.

Would setting Project = Waiting hide active work?

- Possibly, if project work already ended.

Would NOT representing waiting lose decision-relevant information?

- Yes if owner wants to track result or notify students.

## 6. Delivery & Closure Timeline

```text
Work performed
-> Deliverable prepared
-> Submitted
-> Owner may close process
-> External result announced
-> Optional follow-up
```

| Stage | Type | Owner responsibility remains? | Would Project completion here be truthful? | Why |
|---|---|---:|---:|---|
| Submitted | Event | DEPENDS | DEPENDS | Boundary decides. |
| Owner may close process | Decision | NO if confirmed | YES | User responsibility ended. |
| External result announced | Outcome | NO or PARTIAL | NOT BY ITSELF | Outcome is external fact. |
| Optional follow-up | Event / Action | DEPENDS | DEPENDS | If owner responsibility includes follow-up. |

## 7. Completion Test

OWN-010 explains the case strongly.

Outcome and project completion are separable. The result can update history/outcome without changing whether the project work was completed.

## 8. Decision Rights

- Mark completion: User only.
- Recommend waiting: AI may say outcome is pending, not necessarily Project is waiting.
- Declare dependency resolved: External announcement/source.
- Record outcome: System/AI may record with source.
- Close project: User only.

## 9. Ontology Fit

```text
PASS WITH TENSION
```

OWN-010 fits well, but Outcome Record may be useful.

## 10. Hypotheses Tested

D1:

```text
SUPPORTS D1-B for informational dependency
```

C1:

```text
SUPPORTS C1-D
SUPPORTS possible Outcome Record
DISCONFIRMS C1-C as universal rule
```

## 11. Failure Log Entry

```text
Failure Type: TENSION
Reason: External outcome can matter without determining completion.
Challenged Decision: OWN-010.
Evidence Needed: Owner boundary around result handling and follow-up.
```

