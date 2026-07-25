# Dependency Validation

## Candidate

```text
Dependency
Status: Under validation
Default verdict: DERIVE FROM EXISTING CONCEPTS unless evidence proves material loss.
```

## Test A - Existing Concept Substitution

Attempt:

- Represent needed object as Resource / Document.
- Represent person or organization as Relationship.
- Represent follow-up as Action.
- Represent expected resolution as Event.
- Represent approval as Decision.
- Represent risk as Risk.

Result:

```text
PARTIAL
```

Existing concepts can represent pieces, but not the repeated relation:

```text
needed thing -> controlled by owner -> affects scope -> expected resolution -> consequence
```

## Test B - Information Loss

Remove Dependency from CASE-016, CASE-018, and CASE-020.

Loss:

- Harder to ask "what is blocking progress?"
- Harder to know who controls resolution.
- Harder to distinguish follow-up from waiting.
- Harder to recommend parallel work.

Classification:

```text
MATERIAL LOSS
```

## Test C - Identity Requirement

Dependency may need to be referenced independently when:

- it persists over several days,
- it blocks multiple workstreams,
- it has an external owner,
- it resolves without user action,
- it is cited as the reason not to work on something.

Result:

```text
MODERATE identity requirement
```

Not enough for Core Entity, but more than a casual note.

## Test D - Lifecycle Requirement

Observed lifecycle from evidence:

- arises / is noticed
- remains unresolved
- resolves
- becomes irrelevant after scope change

Result:

```text
MEANINGFUL BUT LIGHTWEIGHT
```

Do not define permanent states.

## Test E - Decision Rights

Who may create it:

- User may record.
- AI may suggest.
- System may observe from source.

Who confirms it:

- Owner confirms decision-relevant dependency if it affects Project State or recommendation.

Who resolves it:

- External reality or trusted source may resolve factually.
- Owner may confirm usability.

Can AI infer it:

- Yes, as suggestion only.

Does owner confirmation matter:

- Yes when it changes recommendation or Project State.

Result:

```text
Independent authority rules are needed, but can inherit OWN-003/OWN-005.
```

## Test F - Query Value

Queries:

- What is blocking progress?
- What am I waiting on?
- Who controls it?
- What can still continue?
- What happens if it does not resolve?

Without Dependency:

- Queries require reconstructing from scattered Action/Event/Decision/Resource links.
- Decision-support answer becomes less reliable.

Result:

```text
HIGH query value
```

## Test G - Cross-domain Survival

Teaching:

- Student has not submitted required work; follow-up depends on student.

Project competition:

- Dataset/equipment/result controlled by students, provider, or committee.

Administration:

- Approval or document response from office/agency.

Vehicle repair:

- Repair depends on mechanic, part availability, insurance response.

Result:

```text
SURVIVES CROSS-DOMAIN
```

## Validation Result

Disposition:

```text
CANDIDATE SUPPORTING CONCEPT
```

Confidence:

```text
MEDIUM-HIGH
```

Rationale:

- Dependency survives elimination better than the other candidates.
- It does not yet deserve Core Entity status.
- Minimum viable representation should be lightweight and relation-like.

