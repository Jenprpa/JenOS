# Pre-Project Hypothesis v0.1

## Source Evidence

Primary evidence:

- CASE-005: ตัดสินใจว่าเรื่องหนึ่งควรเป็น Project หรือยังเป็น Note

Supporting pressure:

- CASE-001: deliverable-centered work may be Project or Action.
- CASE-002: person-centered support may be Project, Area, Relationship, or Case.
- CASE-004: context/capacity can drive decisions without being Project.

## Hypothesis to Test

There exists a meaningful class of information or emerging work that:

- is not yet a Project,
- should not be forced into Project structure,
- still deserves persistence and later review,
- may later become a Project, Reference, Memory, or be discarded.

## Candidate Explanation A: New Core Entity

Example names:

- Note
- Capture
- Item

Problem it solves:

- Gives early information independent identity.
- Prevents forcing everything into Project.

What it would own:

- Content
- Source
- Created time
- Later classification
- Links to Person/Area/Project/Document

Lifecycle:

```text
Captured -> Reviewed -> Classified -> Converted / Archived / Deleted
```

Overlap risk:

- Document already owns written content.
- Observation already owns raw observed fact.
- Memory owns curated future-use insight.
- Project owns managed change.

Risks of over-modeling:

- Recreates Inbox under another name.
- Makes every passing thought a Core Entity.
- Adds lifecycle burden too early.

Evidence needed:

- Concrete cases where Document, Observation, Context, or Reference fail without semantic distortion.
- Repeated need for identity and relationships before Project exists.

## Candidate Explanation B: Supporting Concept

Example names:

- Project Candidate
- Intake Item
- Captured Signal

Problem it solves:

- Allows classification pressure without promoting the item to full entity.

What it would own:

- Classification status
- Evidence for/against becoming Project
- Review prompt

Lifecycle:

```text
Unreviewed -> Candidate -> Accepted as Project / Kept as Reference / Discarded
```

Overlap risk:

- Could duplicate State or Tag.
- Could become a hidden mini-Project.

Risks of over-modeling:

- Many supporting concepts become taxonomy noise.
- May still recreate an Inbox.

Evidence needed:

- Cases where lightweight classification solves the problem without needing identity.

## Candidate Explanation C: Lifecycle / Transitional Classification

Example names:

- Pre-Project
- Emerging
- Not Yet Project

Problem it solves:

- Treats the gap as lifecycle stage rather than new thing.
- Preserves "Project should emerge, not be forced."

What it would own:

- Nothing independent.
- It labels another thing such as Document, Observation, or Request.

Lifecycle:

```text
Captured as existing concept -> marked Emerging -> Project decision
```

Overlap risk:

- May confuse State with classification.
- "Pre-Project" may imply eventual Project even when no commitment exists.

Risks of over-modeling:

- Creates false gravity toward Project.
- May bias the system to turn notes into Projects.

Evidence needed:

- Cases that have clear emergence path toward Project.
- Cases that disappear without becoming Project.

## Candidate Explanation D: No Domain Concept Needed

Explanation:

- The gap belongs to UI/capture/review mechanics.
- Existing domain concepts may be sufficient:
  - Document for saved files/text
  - Resource for useful external material
  - Observation for raw facts
  - Event for things that happened
  - Context for temporary influence
  - Project only after owner commitment

Problem it solves:

- Avoids ontology bloat.
- Preserves Sprint 0 simplicity.

What it would own:

- Nothing in ontology.

Lifecycle:

- Handled by product workflow, not domain model.

Overlap risk:

- May hide meaningful pre-project information in UI mechanics.
- May make later review harder.

Risks of under-modeling:

- No place to persist meaningful but unclassified signals.
- Loss of emergence history.

Evidence needed:

- Cases where Document/Observation/Resource cleanly represent early items.
- Cases where losing "pre-project" identity causes no harm.

## Working Hypothesis

Batch 2 should test whether the gap is real and reproducible.

The preferred hypothesis before evidence is conservative:

Pre-project may be a transitional classification or workflow state, not necessarily a new Core Entity.

## Competing Hypotheses

1. New Core Entity is needed.
2. Supporting Concept is enough.
3. Transitional classification is enough.
4. No ontology change is needed.

## Evidence Required

To justify a new concept, Batch 2 should show repeated cases where:

- persistence is needed,
- Project is false,
- Document/Observation/Resource/Context are insufficient,
- later review matters,
- conversion/discarding needs to be remembered,
- identity or relationships exist before Project formation.

## Disconfirmation Conditions

The hypothesis is weakened if:

- reference-only cases fit Document/Resource cleanly,
- idea-only cases can disappear without loss,
- incoming requests can be represented as Decision/Commitment only after acceptance,
- emerging concerns fit Observation + Review without new entity,
- conditional future work fits Context/Trigger + Project only after trigger.

If most Batch 2 cases fit existing concepts, recommendation should be NO CHANGE or CLARIFY EXISTING CONCEPT, not ADD ENTITY.

