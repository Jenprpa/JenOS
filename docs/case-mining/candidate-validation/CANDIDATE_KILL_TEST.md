# Candidate Kill Test

## Status

```text
Sprint: 0.2 - Candidate Validation Cycle
Purpose: Attempt to eliminate candidate concepts before ontology promotion.
```

## Burden of Proof

Anything above `DERIVE FROM EXISTING CONCEPTS` requires repeated cross-domain evidence.

`CANDIDATE CORE ENTITY` requires:

- independent identity
- persistence
- lifecycle
- relationships
- independent queries
- decision-support consequence

## Dependency

1. Can it be removed entirely?

```text
NO
```

Simple cases can remove it, but complex and cross-domain cases lose decision-relevant truth.

2. Can it be derived from existing concepts?

```text
PARTIAL
```

Existing concepts represent parts, but not the blocking relation cleanly.

3. Does it need persistence?

```text
YES, lightweight
```

It may remain unresolved across days and resolve without user action.

4. Does it need identity?

```text
YES, but not Core Entity strength yet
```

It may need to be referenced in recommendations and morning briefs.

5. Does it need lifecycle?

```text
LIGHTWEIGHT ONLY
```

Arises, unresolved, resolved, irrelevant.

6. Does it enable decision support otherwise ambiguous?

```text
YES
```

It enables:

- what is blocking progress
- who controls it
- what can still continue
- when to follow up

7. Does it reduce or increase conceptual complexity?

```text
Reduces reasoning complexity in complex cases; increases ontology complexity.
```

8. Is it cross-domain?

```text
YES
```

Teaching, project competition, administration, vehicle repair, finance.

9. Is evidence repeated?

```text
YES
```

Batch 3, Batch 4, CV-02, CV-03, CV-05.

10. Minimum viable representation:

```text
Dependency as lightweight supporting concept:
  target / needed thing
  owner
  affected target
  effect
  expected resolution event
  control level
```

Disposition:

```text
CANDIDATE SUPPORTING CONCEPT
```

## Dependency Scope

1. Can it be removed entirely?

```text
NO, not as information.
YES, as standalone concept.
```

2. Can it be derived from existing concepts?

```text
YES
```

It can be relation:

```text
Dependency affects Action / Decision / Deliverable / Workstream / Project
```

3. Does it need persistence?

```text
Only as part of Dependency relation.
```

4. Does it need identity?

```text
NO
```

5. Does it need lifecycle?

```text
NO independent lifecycle.
```

6. Does it enable decision support otherwise ambiguous?

```text
YES as data, not as concept.
```

7. Does it reduce or increase conceptual complexity?

```text
As separate concept: increases complexity.
As relation/attribute: reduces ambiguity.
```

8. Is it cross-domain?

```text
YES
```

9. Is evidence repeated?

```text
YES
```

10. Minimum viable representation:

```text
Dependency.blocks = [Action | Decision | Deliverable | Workstream | Project]
Dependency.effect = blocked | delayed | reduced options | informational
```

Disposition:

```text
DERIVE FROM EXISTING CONCEPTS
```

## Closure Decision

1. Can it be removed entirely?

```text
YES as separate concept.
```

Closure truth still needs to be recorded, but existing Decision can carry it.

2. Can it be derived from existing concepts?

```text
YES
```

3. Does it need persistence?

```text
YES, via Decision.
```

4. Does it need identity?

```text
YES, via Decision.
```

5. Does it need lifecycle?

```text
Covered by Decision lifecycle.
```

6. Does it enable decision support otherwise ambiguous?

```text
NO, if Decision has target/purpose/reason/evidence.
```

7. Does it reduce or increase conceptual complexity?

```text
Increases complexity as standalone concept.
```

8. Is it cross-domain?

```text
YES as a Decision type.
```

9. Is evidence repeated?

```text
YES, but evidence supports Decision typing rather than new concept.
```

10. Minimum viable representation:

```text
Decision:
  target = Project
  purpose = closure
  reason
  evidence
  timestamp
  owner
```

Disposition:

```text
DERIVE FROM EXISTING CONCEPTS
```

## Outcome Record

1. Can it be removed entirely?

```text
YES as standalone concept.
NO as information.
```

2. Can it be derived from existing concepts?

```text
YES
```

Use Event/Observation linked to Project and classified as external outcome.

3. Does it need persistence?

```text
YES, via Event/Observation.
```

4. Does it need identity?

```text
YES, via Event/Observation.
```

5. Does it need lifecycle?

```text
No separate lifecycle proven.
```

6. Does it enable decision support otherwise ambiguous?

```text
PARTIAL
```

Outcome classification helps future retrieval, but standalone concept is not proven.

7. Does it reduce or increase conceptual complexity?

```text
As standalone concept: increases complexity.
As classification: improves clarity.
```

8. Is it cross-domain?

```text
YES
```

9. Is evidence repeated?

```text
YES
```

10. Minimum viable representation:

```text
Event / Observation:
  source = external
  linked_to = Project
  classification = outcome
```

Disposition:

```text
DERIVE FROM EXISTING CONCEPTS
```

## Kill Test Summary

```text
Dependency: CANDIDATE SUPPORTING CONCEPT
Dependency Scope: DERIVE FROM EXISTING CONCEPTS
Closure Decision: DERIVE FROM EXISTING CONCEPTS
Outcome Record: DERIVE FROM EXISTING CONCEPTS
```

No candidate earns Core Entity status.

