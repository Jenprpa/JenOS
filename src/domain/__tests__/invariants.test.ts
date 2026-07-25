import { describe, expect, it } from "vitest";
import {
  assertCanExecuteDecision,
  capacityToProductivityScore,
  confirmMemory,
  confirmState,
  createCapacityDecisionInput,
  createDependency,
  dependencyImpliesWholeProjectWaiting,
  externalOutcomeCompletesProject,
  isArea,
  isProject,
  proposeMemoryFromAi,
  submissionEventCompletesProject,
  suggestStateFromAi,
  type Area,
  type DomainEvent,
  type Person,
  type Project,
} from "../index";
import { entityId } from "../../shared/id";

const now = "2026-07-25T16:00:00.000Z";

const source = {
  kind: "user" as const,
  label: "test evidence",
  capturedAt: now,
};

const evidence = {
  source,
  summary: "Evidence captured for invariant test.",
};

const person: Person = {
  id: entityId("person", "jen"),
  kind: "person",
  displayName: "Jen",
};

const project: Project = {
  id: entityId("project", "exam"),
  kind: "project",
  name: "Biology final exam",
  boundary: "Prepare and submit final exam materials.",
  ownerId: person.id,
};

const area: Area = {
  id: entityId("area", "teaching"),
  kind: "area",
  name: "Teaching",
};

const submissionEvent: DomainEvent = {
  id: entityId("event", "submit-final"),
  kind: "event",
  title: "Submitted final exam file",
  happenedAt: now,
  purpose: "submission",
  evidence,
};

const outcomeEvent: DomainEvent = {
  id: entityId("event", "outcome-known"),
  kind: "event",
  title: "External outcome known",
  happenedAt: now,
  purpose: "external-outcome",
  evidence,
};

describe("Domain invariants", () => {
  it("does not treat Person as Project", () => {
    expect(isProject(person)).toBe(false);
    expect(person.kind).toBe("person");
  });

  it("distinguishes Area and Project", () => {
    expect(isArea(area)).toBe(true);
    expect(isProject(area)).toBe(false);
    expect(isProject(project)).toBe(true);
  });

  it("does not allow AI suggestion path to produce Confirmed State", () => {
    const suggestion = suggestStateFromAi({
      targetId: project.id,
      suggestedAt: now,
      reason: "File edits were observed.",
      evidence: [evidence],
    });

    expect(suggestion.layer).toBe("suggested");
    expect(() =>
      confirmState(
        suggestion,
        {
          actor: "ai",
          level: "user-only",
        },
        "In progress",
        now,
      ),
    ).toThrow("AI cannot confirm state");
  });

  it("does not automatically complete a Project from a submission event", () => {
    expect(submissionEventCompletesProject(submissionEvent, project)).toBe(false);
  });

  it("does not automatically complete a Project from an external outcome", () => {
    expect(externalOutcomeCompletesProject(outcomeEvent, project)).toBe(false);
  });

  it("requires user authority to confirm Memory", () => {
    const proposed = proposeMemoryFromAi({
      id: entityId("memory", "prep-window"),
      targetId: project.id,
      insight: "Two weeks was too short for this project.",
      proposedAt: now,
      evidence: [evidence],
    });

    expect(proposed.status).toBe("proposed");
    expect(() =>
      confirmMemory(
        proposed,
        {
          actor: "ai",
          level: "require-confirmation",
        },
        now,
      ),
    ).toThrow("Only the user can confirm memory");

    const confirmed = confirmMemory(
      proposed,
      {
        actor: "user",
        level: "user-only",
      },
      now,
    );

    expect(confirmed.status).toBe("confirmed");
  });

  it("prevents AI from executing User Only decision paths", () => {
    expect(() =>
      assertCanExecuteDecision({
        actor: "ai",
        level: "user-only",
      }),
    ).toThrow("Actor ai cannot execute user-only decision");
  });

  it("does not make scoped Dependency imply whole-project Waiting", () => {
    const dependency = createDependency({
      id: entityId("dependency", "dataset"),
      needed: "Student dataset",
      affectedTarget: {
        kind: "action",
        id: "train-ai-model",
      },
      controlledBy: "person",
      consequenceIfUnresolved: "Training cannot start.",
    });

    expect(dependencyImpliesWholeProjectWaiting(dependency)).toBe(false);
  });

  it("does not convert Human Capacity into productivity score", () => {
    const input = createCapacityDecisionInput({
      energy: "low",
      attention: "fragmented",
    });

    expect(input.note).toContain("must not become a productivity score");
    expect(() => capacityToProductivityScore(input.snapshot)).toThrow(
      "Human Capacity must not be converted",
    );
  });
});
