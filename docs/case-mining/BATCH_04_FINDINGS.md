# Batch 4 Findings

## Batch

```text
Sprint: 0.2 - Domain Discovery through Case Mining
Batch: 04 - Dependency and Closure Evidence
Cases analyzed: 6
Baseline: a25e6cd docs: add Sprint 0.2 case mining evidence
Batch 3 status: uncommitted input evidence
```

## Cases

1. CASE-016: Scoped Dependency with Parallel Work Possible
2. CASE-017: Total External Block
3. CASE-018: Multiple Simultaneous Dependencies
4. CASE-019: Submitted and Responsibility Ends
5. CASE-020: Submitted but Revision Remains Possible
6. CASE-021: External Outcome After Work Ends

## Ontology Fit Summary

```text
PASS: 1
PASS WITH TENSION: 2
TENSION: 3
FAIL: 0
```

Details:

- CASE-016: TENSION
- CASE-017: PASS WITH TENSION
- CASE-018: TENSION
- CASE-019: PASS
- CASE-020: TENSION
- CASE-021: PASS WITH TENSION

## Dependency Questions

### 1. Is Waiting reproducibly scoped below Project level?

Yes.

Batch 3 and Batch 4 repeatedly show waiting targets below the Project level:

- Dataset blocks Train AI.
- Approval blocks implementation or decision.
- Equipment blocks experiment/prototype.
- Feedback blocks revision.
- Result may be only informational.

### 2. Are there real cases where whole-Project Waiting is truthful?

Yes, as a supported contrasting pattern.

CASE-017 shows whole-Project Waiting can be truthful when:

- approval/access is required,
- no meaningful preparation or alternative work remains,
- and the owner confirms that the Project cannot move.

This disconfirms the overcorrection "Waiting is never Project State."

### 3. What distinguishes total waiting from partial blocking?

The key distinction is whether meaningful progress remains.

```text
Partial blocking:
One Action / Decision / Deliverable / Workstream cannot proceed, but other work can.

Total waiting:
No meaningful Project progress can continue until the dependency resolves.
```

### 4. Does "blocked" add semantic value beyond dependency information?

Yes, but mostly as an effect, not as a standalone object.

Dependency says what is needed and who controls it.

Blocked says what cannot proceed because of it.

Useful analytical shape:

```text
Dependency -> creates Blocking Condition -> affects Scope
```

### 5. Does Dependency require identity?

Likely yes as a candidate supporting concept, but not as a Core Entity.

Repeated cases need:

- target
- owner
- control level
- affected scope
- expected resolution
- consequence

This looks like identity enough for decision support, but not necessarily full lifecycle.

### 6. Does Dependency require lifecycle?

Insufficient evidence for a full lifecycle.

What appears necessary:

- unresolved
- resolved by evidence
- obsolete due to scope change

But Batch 4 should not define lifecycle or state taxonomy.

### 7. Does Dependency require owner/source/expected resolution?

Yes for decision support.

Without these, JenOS cannot answer:

- who to follow up with,
- whether user has control,
- when to revisit,
- and what work is affected.

### 8. Could Relationship + Action + Event already model it cleanly?

Partially.

Existing concepts can model pieces:

- Action: follow up
- Event: response received
- Decision: approve/revise/close
- Resource: Dataset/equipment
- Relationship: person or organization involved

But the blocking relation itself remains awkward and repeated.

### 9. What decision-support capability is lost without explicit dependency representation?

JenOS may lose:

- targeted follow-up,
- parallel-work recommendations,
- "do not touch this yet" reasoning,
- distinction between partial and total waiting,
- consequence of non-resolution,
- and owner/control clarity.

## Closure Questions

### 1. Is Submitted consistently distinct from Completed?

Submitted is consistently distinct as a type of fact/event.

But it is not always distinct in timing from completion.

CASE-019 shows completion can truthfully occur at submission when the intended boundary is "prepare and submit X."

### 2. Are there valid cases where submission and completion coincide?

Yes.

CASE-019 is the strongest disconfirmation against the simplistic rule "Submitted is never Completed."

The truthful condition is:

```text
Submitted + owner boundary ends at submission + no expected follow-up
```

### 3. What determines the difference?

Owner responsibility boundary determines the difference.

Useful test:

```text
After submission, does the owner still have expected responsibility?
```

If yes, submission is not completion.

If no, submission may support completion.

### 4. Is Accepted an external fact/event or Project State?

Accepted behaves primarily as external fact/event/outcome.

It may support completion evidence, but it is not universally Project State.

### 5. Is Outcome Known orthogonal to Project completion?

Often yes.

CASE-021 shows outcome can arrive after the user's work ended. Outcome may update history and learning without reopening or redefining completion.

### 6. Does owner responsibility provide a stronger completion boundary?

Yes.

Owner responsibility explains all three closure contrasts:

- CASE-019: responsibility ends at submission.
- CASE-020: responsibility continues through review/revision.
- CASE-021: outcome may be outside responsibility.

### 7. Is "Closed" different from "Completed"?

Possible pattern, but not yet resolved.

Completed appears to describe a successful or intended end mode.

Closed may be the act/decision of ending the Project record with a reason.

Evidence suggests a closure decision may be useful, but not enough to define a new state.

### 8. Does Closure Decision need explicit representation?

Candidate supporting concept.

The repeated need is to record:

- who closed,
- when,
- why,
- based on what evidence,
- and what remained external.

This may be representable as a state-change record rather than a new entity.

### 9. Can OWN-010 explain all six cases without semantic distortion?

Yes, with clarification.

OWN-010 survives because "Completion is human judgment, not an event" explains:

- completion at submission,
- non-completion after submission,
- external outcome after closure,
- and negative outcome without failure.

The wording should clarify that events can be evidence for completion without automatically being completion.

## Hypothesis Results

## D1 - Scoped Dependency

Result:

```text
MIXED SUPPORT, strongest for D1-C
```

Evidence:

- CASE-016 and CASE-018 support scoped dependency.
- CASE-017 supports whole-Project Waiting under strict conditions.
- CASE-020 and CASE-021 show waiting can be deliverable/outcome scoped.

Best current explanation:

```text
Both scoped waiting and whole-project waiting exist.
Whole-project Waiting is valid only when unresolved dependency prevents meaningful progress across the Project.
```

## C1 - Closure Is Distinct from Outcome

Result:

```text
SUPPORTED
```

Evidence:

- CASE-019 shows submission and completion can coincide if boundary ends there.
- CASE-020 shows submission is not completion when revision remains.
- CASE-021 shows outcome can be outside completion.

Best current explanation:

```text
Submitted, Accepted, Outcome Known, Follow-up Done, and Owner Closed are not universal states.
They are events, evidence, outcomes, or decisions whose meaning depends on project boundary and owner responsibility.
```

## Concepts Under Pressure

### Dependency

Evidence strength:

```text
HIGH as analytical vocabulary
MODERATE as candidate supporting concept
LOW as core entity
```

### Blocking Condition

Evidence strength:

```text
HIGH as effect/relationship
MODERATE as candidate supporting concept
LOW as core entity
```

### Dependency Scope

Evidence strength:

```text
HIGH as required attribute/relation for decision support
```

### Closure Decision

Evidence strength:

```text
MODERATE as candidate supporting concept or state-change record
```

### Outcome Record

Evidence strength:

```text
MODERATE as candidate supporting concept
```

## Principles Survived

- State represents reality, not intention.
- Completion is human judgment, not event.
- Authority follows accountability.
- AI may recommend but not decide.
- Reality over Elegance.

## Principles Needing Clarification

OWN-003:

- Waiting examples should distinguish scoped dependency condition from Project State.

OWN-010:

- Completion examples should clarify that submission/acceptance/outcome can be evidence but are not universal completion triggers.

## Evidence Gaps

- Fully documented real total-block case.
- Fully documented multi-dependency project.
- Owner-defined Definition of Done for report/submission cases.
- Whether owners want explicit Closure Decision records or state-change rationale is enough.
- Whether dependencies need lifecycle or only current condition.

## Batch 4 Conclusion

Batch 4 supports clarification, not amendment.

Most important disconfirmation:

- Waiting can be legitimate at Project level in total-block cases.
- Submission can legitimately coincide with completion when project boundary ends at submission.

Most important evidence:

- The truthful unit is not always the Project. It may be Action, Decision, Deliverable, Workstream, Outcome, or Owner Closure.

