# Pre-Project Decision Gate

## Inputs

- Batch 1 Review
- Pre-Project Hypothesis v0.1
- Batch 2 Findings
- Batch 1 CASE-005 failure
- Batch 2 disconfirmation case: Reference Only PDF

## Gate Questions

### 1. Is the pre-project gap reproducible across multiple domains?

YES, but weakly.

It appears in ideas, incoming requests, emerging concerns, and conditional future work.

### 2. Is the gap conceptual or merely workflow/UI?

Mixed.

The persistence/review need is real, but much of it may belong to workflow rather than ontology.

### 3. Can existing entities represent it without semantic distortion?

Often yes.

- PDF fits Document/Resource.
- Emerging concern fits Observation/Risk/Area.
- Incoming request fits Event/Decision before Commitment.
- Conditional opportunity fits Resource/Context/Decision later.

### 4. Does it need identity?

Not proven.

Some items need persistence, but persistence does not automatically imply a new Core Entity.

### 5. Does it need persistence?

Sometimes yes.

But persistence can attach to existing concepts.

### 6. Does it need lifecycle/state?

It may need review/classification status.

It does not yet need Project-like State.

### 7. Does it need relationships?

Sometimes.

But relationships can attach to existing concepts.

### 8. Does it need its own decision rights?

Not as a Core Entity.

Existing decision rights already cover classification, project creation, memory creation, and commitment acceptance.

### 9. Would adding a concept reduce ambiguity or create more complexity?

Adding a broad Core Entity would create more complexity.

A narrow clarification may reduce ambiguity.

## Recommendation

CLARIFY EXISTING CONCEPT

No new Core Entity should be added from current evidence.

Batch 2 shows that:

- Some pre-project items are real.
- Many can be represented by existing concepts.
- The missing piece is likely review/classification behavior, not a new ontology object.

## Not Recommended

NO CHANGE:

- Too weak, because Batch 1 and Batch 2 show recurring ambiguity.

ADD SUPPORTING CONCEPT:

- Possible later, but evidence is not yet strong enough.

ADD CORE ENTITY:

- Not supported.

INSUFFICIENT EVIDENCE:

- Evidence is sufficient to reject new Core Entity for now.
- Evidence is not sufficient for final ontology revision.

## Affected OWN Decisions If Clarification Is Later Approved

- OWN-001: clarify "Project should emerge, not be forced."
- OWN-002: clarify that early information should first be represented as existing concepts where possible.
- OWN-005: clarify owner authority over classification.
- OWN-006: low-confidence guidance for early ambiguous items.

## Affected Docs If Revision Is Later Approved

- Core Concepts
- Domain Model
- Today Experience
- Operating Principles
- Case Mining Template

## Migration Implications

None yet.

No ontology change is being made.

If later approved, migration should avoid converting all notes/captures into a new entity.

## Risks

Risk of over-modeling:

- Creating Capture/Item as Core Entity may recreate Inbox.

Risk of under-modeling:

- Without review status, meaningful signals may disappear.

Risk of false Project gravity:

- "Pre-Project" wording may imply that everything should become Project.

## Evidence Supporting Recommendation

Supports clarification:

- CASE-006: idea may need persistence but not Project.
- CASE-008: incoming request needs pending decision, not Project.
- CASE-009: repeated observations need review, not immediate Project.
- CASE-010: conditional work needs trigger tracking.

Supports no Core Entity:

- CASE-007 fits Document/Resource cleanly.
- Most Batch 2 cases can be represented as existing concept + review/classification status.

## Owner Decision Required?

Not yet.

This gate produces a recommendation, not an Owner Decision.

Owner review should decide whether to run another targeted batch or authorize clarifying text in existing documents.

## Final Gate Result

```text
Recommendation: CLARIFY EXISTING CONCEPT
Ontology revision now: NO
New Core Entity now: NO
New Supporting Concept now: NOT YET
Run another batch before formal OWN revision: OPTIONAL
```

