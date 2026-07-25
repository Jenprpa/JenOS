# Domain Invariants v0.2

Status: Proposed invariants for Owner Review

Sprint: 0.3 Domain Consolidation

Purpose:

Record the rules that should remain true across JenOS domain modeling unless real cases disprove them.

These invariants are derived from Sprint 0 decisions and Sprint 0.2 evidence. They do not amend Owner Decisions.

## Invariant 1: People Are Never Projects

Statement:

A Person must not be converted into a Project.

Why:

People can be related to Projects, Roles, Commitments, Decisions, and Memories, but the human is not the managed unit of work.

Failure mode:

JenOS becomes a system that treats people as cases or tasks.

## Invariant 2: Areas Endure

Statement:

An Area does not complete like a Project.

Why:

Health, finance, teaching, family, and career can contain Projects, but they do not have a natural completion boundary.

Failure mode:

Long-term responsibilities become false Projects.

## Invariant 3: Projects Emerge from Managed Change

Statement:

A Project exists when the Owner needs to manage bounded change, outcome, or responsibility over time.

Why:

Project should emerge, not be forced.

Failure mode:

JenOS creates Projects for every note, file, observation, or concern.

## Invariant 4: State Represents Reality, Not Intention

Statement:

Confirmed State must reflect what is true, not what the user hopes or plans.

Why:

Intentions can inform Suggested State, but they are not reality.

Failure mode:

JenOS begins lying politely about progress.

## Invariant 5: Events Happen; States Persist

Statement:

An Event is something that happened at a time. A State is a condition that continues.

Why:

Submitted, accepted, meeting held, and file uploaded may be evidence, but they are not automatically Project State.

Failure mode:

JenOS mistakes moments for conditions.

## Invariant 6: AI Does Not Own Confirmed State

Statement:

AI may observe and suggest State, but the Owner controls Confirmed State when the State carries meaning.

Why:

Authority follows accountability.

Failure mode:

The system makes meaning-level decisions without accountability.

## Invariant 7: Dependency Does Not Automatically Mean Project Waiting

Statement:

A Dependency may affect an Action, Decision, Deliverable, or part of a Project without changing the whole Project State.

Why:

Batch 3 and Batch 4 showed partial waiting repeatedly.

Failure mode:

JenOS freezes a whole Project when meaningful progress remains possible.

## Invariant 8: Waiting Is Not Failure

Statement:

Waiting describes a condition, not a judgment of worth or performance.

Why:

External reality can delay progress without implying poor work.

Failure mode:

JenOS turns external dependency into blame.

## Invariant 9: Submission Is Not Automatic Completion

Statement:

Submitting a deliverable is evidence. It may or may not close the Project.

Why:

Completion is a human judgment, not an event.

Failure mode:

JenOS closes work before follow-up, acceptance, or owner responsibility is resolved.

## Invariant 10: External Outcome Is Not Process Completion

Statement:

Winning, losing, acceptance, rejection, or outcome known does not automatically define whether the Project was completed.

Why:

Outcome and process can diverge.

Failure mode:

JenOS judges success instead of recording truth.

## Invariant 11: Closure Is a Decision

Statement:

Closure should be represented by Decision when meaning-level responsibility ends.

Why:

Closure Decision does not need to survive as a separate concept.

Failure mode:

JenOS creates duplicate concepts for typed decisions.

## Invariant 12: Memory Is Curated

Statement:

Memory is selected for future decision value, not accumulated automatically.

Why:

Memory is curated, not accumulated.

Failure mode:

JenOS remembers everything and helps with nothing.

## Invariant 13: User Owns Memory

Statement:

The user can delete, redact, hide, archive, or export memory and derived knowledge.

Why:

The user has the right to be forgotten by their own system.

Failure mode:

AI-derived knowledge becomes more permanent than user consent.

## Invariant 14: Human Capacity Affects Recommendations, Not Human Worth

Statement:

Time, energy, attention, emotion, cognitive load, and health can shape recommendations but must not become moral scoring.

Why:

JenOS exists to help the user continue, not merely produce.

Failure mode:

The system optimizes output against the human.

## Invariant 15: Recommendations Reveal Reasoning

Statement:

Every recommendation should expose its evidence and uncertainty.

Why:

Confidence must be proportional to evidence.

Failure mode:

JenOS sounds authoritative without being accountable.

## Invariant 16: Reality Beats Model Elegance

Statement:

If real cases contradict the model, revise the model. Do not force cases to fit.

Why:

The model earns the right to exist by surviving real cases.

Failure mode:

JenOS becomes internally beautiful and externally false.

