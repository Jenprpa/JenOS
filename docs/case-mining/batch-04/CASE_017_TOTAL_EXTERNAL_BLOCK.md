# CASE-017: Total External Block

## Case Header

```text
Case ID: CASE-017
Case Name: Project cannot proceed until approval or access is granted
Batch: 04 - Dependency and Closure Evidence
Source: Backlog item 9; Batch 3 CASE-012
Purpose: Test whether whole-Project Waiting can be truthful.
```

## 1. Reality

Fact:

- Project approval or access is required.
- Without approval/access, implementation cannot start.

Interpretation:

- This is a deliberately contrasting case where whole-Project Waiting may be true.

Unknown:

- Exact approving authority.
- Whether preparation, planning, or alternative work remains.
- Deadline and consequence.

External reality:

- Approval/access is granted, denied, pending, or revision requested by an external authority/system.

## 2. Project Boundary

Intended outcome:

- Execute an approved project or access-controlled work.

Owner responsibility:

- Prepare request, submit, follow up, and respond.

What "done with my responsibility" means:

- UNKNOWN; may be submission of request or successful approval and follow-up.

External processes outside user's responsibility:

- Approval decision / system access decision.

## 3. State

Observed:

- Approval/access is required and unresolved.

Suggested:

- If no useful work remains until approval, whole-Project Waiting may be a truthful Suggested State.

Confirmed:

- UNKNOWN.

Evidence:

- This case is constructed from approval/access class in backlog, but exact real evidence is thin.

Authority:

- External authority resolves approval/access.
- User confirms Project State.

## 4. Dependency Map

Dependency target:

- Approval or access.

What is needed:

- External permission to proceed.

Scope:

- Whole Project if no useful work remains.

Dependency owner:

- Organization / system / external authority.

Control:

- Partial or none.

Effect:

- Blocked.

Can parallel progress continue?

```text
NO, only if all meaningful preparation is already complete.
```

Expected resolution event:

- Approval/access granted or denied.

Consequence of non-resolution:

- Project remains unable to proceed or must be stopped/re-scoped.

## 5. Waiting Test

Is anything waiting?

- Yes.

What exactly?

- Whole project path may wait for approval/access.

Is the Project as a whole waiting?

- Yes, if no meaningful parallel work remains.

Would setting Project = Waiting hide active work?

- No, if the no-parallel-work condition is true.

Would NOT representing waiting lose decision-relevant information?

- Yes. The dashboard would fail to explain inactivity.

## 6. Delivery & Closure Timeline

```text
Request prepared
-> Submitted
-> Approval/access pending
-> Approved or denied
-> Implementation begins or project response decision
```

| Stage | Type | Owner responsibility remains? | Would Project completion here be truthful? | Why |
|---|---|---:|---:|---|
| Request prepared | Fact / Work performed | YES | NO | Not submitted/resolved. |
| Submitted | Event | YES or PARTIAL | DEPENDS | If boundary is request-only, maybe. |
| Approval pending | External condition | YES | NO | Waiting for decision. |
| Approved/denied | Outcome | YES or PARTIAL | DEPENDS | Response may remain. |
| Owner closure | Decision | NO | YES | Owner closes based on boundary/outcome. |

## 7. Completion Test

OWN-010 explains the case, but the case shows Project-level Waiting may be valid when meaningful work is truly impossible.

## 8. Decision Rights

- Mark completion: User only.
- Recommend waiting: AI may recommend if evidence shows total block.
- Declare dependency resolved: External source/system or owner.
- Record outcome: System may record sourced approval status.
- Close project: User only.

## 9. Ontology Fit

```text
PASS WITH TENSION
```

The case preserves Project-level Waiting as valid under strict evidence.

## 10. Hypotheses Tested

D1:

```text
SUPPORTS D1-C
PARTIALLY SUPPORTS D1-A
DISCONFIRMS any claim that Project-level Waiting is never valid
```

C1:

```text
MIXED
```

## 11. Failure Log Entry

```text
Failure Type: TENSION
Reason: Whole-Project Waiting may be truthful, but only if no meaningful parallel work remains.
Challenged Decision: OWN-003.
Evidence Needed: Actual cases where owner confirms total block.
```

