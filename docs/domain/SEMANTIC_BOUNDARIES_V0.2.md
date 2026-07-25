# Semantic Boundaries v0.2

## Status

```text
Sprint: 0.3 - Domain Consolidation
Purpose: Define evidence-backed distinctions.
No schema, enum, or ontology replacement.
```

## Project vs Area

A is:

- Project: bounded managed change or outcome.

B is:

- Area: long-lived responsibility.

Key distinction:

- Project can complete; Area endures.

Can coexist:

- Yes. Area can contain Projects.

Common confusion:

- Treating Health or Teaching as Project by default.

Evidence:

- OWN-001/OWN-002; Batch 1; Pre-project clarification.

Example:

- Area: Teaching. Project: Biology final exam.

Counterexample:

- Life overall should not be Project.

## Project vs Action

A is:

- Project: managed change with boundary and ongoing decisions.

B is:

- Action: a move inside context.

Key distinction:

- Project has state/memory/decisions; Action is execution step.

Can coexist:

- Yes. Project contains Actions.

Common confusion:

- "Follow up Dataset" may be Action, not Project.

Evidence:

- Batch 1 CASE-001/003; Batch 4 CASE-016.

Example:

- Project: AI competition submission. Action: remind students to send Dataset.

Counterexample:

- If follow-up itself requires repeated decisions and bounded outcome, it may become Project.

## Project vs Document

A is:

- Project: managed responsibility.

B is:

- Document: artifact/content.

Key distinction:

- Document can be evidence/resource/deliverable; Project owns change.

Can coexist:

- Yes.

Common confusion:

- Submitted document is not automatically completed Project.

Evidence:

- Batch 2 PDF; Batch 3/4 submission cases.

Example:

- Document: report file. Project: prepare and submit report.

Counterexample:

- Saved PDF for later reading is Document/Resource, not Project.

## Person vs Role

A is:

- Person: human being.

B is:

- Role: contextual hat/responsibility.

Key distinction:

- Person remains; Role changes by context.

Can coexist:

- Yes. One Person has many Roles.

Common confusion:

- Turning student into Project.

Evidence:

- OWN-002; Batch 1 CASE-002.

Example:

- Person: Student A. Role: project team member.

Counterexample:

- "Student A" is never Project.

## Resource vs Document

A is:

- Resource: thing used for work/decision.

B is:

- Document: textual/file artifact.

Key distinction:

- Document is a specific artifact type; Resource is broader.

Can coexist:

- Yes. A Document can act as Resource.

Common confusion:

- Dataset can be Document, Resource, and Dependency target.

Evidence:

- Batch 1 CASE-003; Batch 2 CASE-007.

Example:

- Equipment is Resource. Project book is Document.

Counterexample:

- Not every Resource is Document.

## Event vs Observation

A is:

- Event: thing that happened at a time.

B is:

- Observation: raw noticed fact/signal.

Key distinction:

- Event has occurrence; Observation may be a recorded signal.

Can coexist:

- Yes. Observation may detect Event.

Common confusion:

- Treating "file exists" and "file uploaded" as same thing.

Evidence:

- OWN-004; candidate Outcome Record validation.

Example:

- Event: report submitted. Observation: upload receipt found.

Counterexample:

- "Student seems tired" is Observation, not necessarily Event.

## Event vs Decision

A is:

- Event: happened.

B is:

- Decision: chosen direction with authority/rationale.

Key distinction:

- Decision requires accountable chooser; Event may be external.

Can coexist:

- Yes. Decision can create Event.

Common confusion:

- Treating approval outcome as user decision.

Evidence:

- OWN-005; Batch 4 approval/closure cases.

Example:

- Event: approval received. Decision: user closes Project.

Counterexample:

- External result is not user decision.

## History vs Memory

A is:

- History: narrative/path of what happened.

B is:

- Memory: curated insight for future decisions.

Key distinction:

- History records path; Memory extracts meaning.

Can coexist:

- Yes.

Common confusion:

- Storing every log as Memory.

Evidence:

- OWN-004; candidate CV-07.

Example:

- History: project timeline. Memory: 14 days prep was too short.

Counterexample:

- Upload timestamp is not Memory.

## State vs Event

A is:

- State: persistent condition of something.

B is:

- Event: occurrence at time.

Key distinction:

- Events happen; States persist.

Can coexist:

- Yes. Event may trigger Suggested State.

Common confusion:

- Submitted event = Completed state.

Evidence:

- OWN-003; OWN-010; Batch 4.

Example:

- Event: submitted. State: owner-confirmed Completed only if boundary supports it.

Counterexample:

- Deadline passed is not automatic completion.

## State vs Context

A is:

- State: reality of entity/concept.

B is:

- Context: lens/influence.

Key distinction:

- Context affects recommendation; it does not necessarily change Project State.

Can coexist:

- Yes.

Common confusion:

- Low energy changes Project State.

Evidence:

- Batch 1 CASE-004; Batch 3 CASE-014.

Example:

- Context: low energy. State: Project remains active.

Counterexample:

- Owner may choose Pause, which can become State after confirmation.

## State vs Dependency

A is:

- State: persistent condition of entity.

B is:

- Dependency: needed condition/resource/response controlled by someone/something.

Key distinction:

- Dependency can affect State but is not automatically State.

Can coexist:

- Yes.

Common confusion:

- Any unresolved dependency means Project = Waiting.

Evidence:

- Batch 3/4; Candidate validation.

Example:

- Dataset dependency blocks Train AI while documentation continues.

Counterexample:

- Total external block may justify Project-level Waiting.

## Waiting vs Blocking

A is:

- Waiting: temporal posture toward expected resolution.

B is:

- Blocking: effect that prevents progress in a scope.

Key distinction:

- Waiting asks "what are we waiting for"; Blocking asks "what cannot move."

Can coexist:

- Yes.

Common confusion:

- Waiting always means blocked.

Evidence:

- Batch 4 CASE-016/017/018.

Example:

- Waiting for result may be informational only; waiting for Dataset blocks Train AI.

Counterexample:

- Waiting for an outcome after closure does not block Project completion.

## Completion vs Submission

A is:

- Completion: owner judgment that responsibility/boundary is done.

B is:

- Submission: event/evidence.

Key distinction:

- Submission can support completion but does not universally cause it.

Can coexist:

- Yes.

Common confusion:

- Submitted = Completed.

Evidence:

- Batch 4 CASE-019 and CASE-020.

Example:

- Submit-only report may complete at submission.

Counterexample:

- Submitted document awaiting required revision remains open.

## Completion vs Outcome

A is:

- Completion: Project closure based on boundary and owner responsibility.

B is:

- Outcome: external result/fact.

Key distinction:

- Outcome can arrive after completion and should not judge Project success by itself.

Can coexist:

- Yes.

Common confusion:

- Not selected = failed Project.

Evidence:

- OWN-010; Batch 4 CASE-021.

Example:

- Competition project completed at submission; result later not selected.

Counterexample:

- If boundary includes result follow-up, outcome may affect closure.

## Completion vs Closure

A is:

- Completion: meaning of being done.

B is:

- Closure: decision/action of ending Project record.

Key distinction:

- Completion is end meaning; closure records owner decision.

Can coexist:

- Yes.

Common confusion:

- Needing a separate Closure Decision concept.

Evidence:

- Candidate validation killed standalone Closure Decision.

Example:

- Decision(target=Project, purpose=closure).

Counterexample:

- Closure is not separate Core Entity.

## Relationship vs Dependency

A is:

- Relationship: general link among entities/concepts.

B is:

- Dependency: needed condition with owner/control/scope/resolution/consequence.

Key distinction:

- Dependency has decision-support semantics around waiting/blocking.

Can coexist:

- Yes. Dependency may use Relationship to identify owner.

Common confusion:

- Relationship alone can answer "what is blocking?"

Evidence:

- Candidate validation: substitution partial failure.

Example:

- Student is related to Project; Dataset dependency owned by student blocks Train AI.

Counterexample:

- A co-teacher relationship is not dependency unless something needed is controlled by that person.

## Commitment vs Action

A is:

- Commitment: promise/obligation to person/time/project.

B is:

- Action: concrete move.

Key distinction:

- Commitment constrains decisions; Action executes.

Can coexist:

- Yes.

Common confusion:

- Treating every action as commitment.

Evidence:

- OWN-008; capacity cases.

Example:

- Commitment: submit report by Friday. Action: format final PDF.

Counterexample:

- Drafting note to self is not necessarily commitment.

## Risk vs Dependency

A is:

- Risk: possible harm or failure mode.

B is:

- Dependency: needed condition that affects progress.

Key distinction:

- Dependency may create Risk; Risk can exist without dependency.

Can coexist:

- Yes.

Common confusion:

- Equipment not ready as only Risk, losing who/what resolves it.

Evidence:

- Batch 3 CASE-015; Candidate validation.

Example:

- Dependency: equipment ready. Risk: miss testing deadline.

Counterexample:

- Low energy is a risk/context, not dependency unless something external must resolve.

