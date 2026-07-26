import { describe, expect, it } from "vitest";
import {
  canSystemAccept,
  createNaturalInput,
  deterministicNaturalInterpreter,
  routeCandidate,
} from "../natural-routing";

const now = "2026-07-26T01:00:00.000Z";

function input(text: string) {
  return createNaturalInput({
    id: "input-1",
    text,
    enteredAt: now,
  });
}

describe("natural capture routing", () => {
  it("produces multiple candidates from one natural teaching input", () => {
    const interpretation = deterministicNaturalInterpreter.interpret(
      input("พรุ่งนี้สอน 4/1 เรื่องเซลล์ ยังไม่ได้เตรียมใบงาน"),
    );

    expect(interpretation.candidates.map((candidate) => candidate.family)).toEqual([
      "schedule",
      "relationship",
      "action",
    ]);
  });

  it("requires owner authority for a Project candidate", () => {
    const interpretation = deterministicNaturalInterpreter.interpret(
      input("ต้องทำโครงงานใหม่เรื่องระบบตรวจคุณภาพน้ำ"),
    );

    const projectCandidate = interpretation.candidates.find(
      (candidate) => candidate.family === "project",
    );

    expect(projectCandidate?.summary).toBe("ระบบตรวจคุณภาพน้ำ");
    expect(projectCandidate?.authority).toBe("owner-only");
    expect(canSystemAccept(projectCandidate!)).toBe(false);
  });

  it("does not invent missing Project context for a Dataset dependency", () => {
    const interpretation = deterministicNaturalInterpreter.interpret(
      input("เด็กยังไม่ส่ง Dataset"),
    );

    const dependency = interpretation.candidates.find(
      (candidate) => candidate.family === "dependency",
    );

    expect(dependency?.contextStatus).toBe("unresolved");
    expect(dependency?.detail).toContain("ยังไม่ทราบว่าเกี่ยวกับโปรเจกต์ใด");
  });

  it("does not create a routed record for a rejected candidate", () => {
    const candidate = deterministicNaturalInterpreter.interpret(input("เก็บ PDF ไว้อ่านทีหลัง"))
      .candidates[0]!;

    const routed = routeCandidate(candidate, {
      actor: "owner",
      outcome: "rejected",
      routedRecordId: "route-1",
      decidedAt: now,
    });

    expect(routed).toBeNull();
  });

  it("creates a routed result for an accepted candidate", () => {
    const candidate = deterministicNaturalInterpreter.interpret(input("เก็บ PDF ไว้อ่านทีหลัง"))
      .candidates[0]!;

    const routed = routeCandidate(candidate, {
      actor: "owner",
      outcome: "accepted",
      routedRecordId: "route-1",
      decidedAt: now,
    });

    expect(routed?.family).toBe("information");
    expect(routed?.sourceText).toBe("เก็บ PDF ไว้อ่านทีหลัง");
  });

  it("finds the expected candidate families in a multi-route stress input", () => {
    const interpretation = deterministicNaturalInterpreter.interpret(
      input(
        "พรุ่งนี้ 4/1 สอนเซลล์ ใบงานยังไม่ได้ทำ แล้วเมื่อวานค่าปริ้นท์ 350 ยังไม่ได้ลง งานฝุ่นเด็กก็ยังไม่ส่ง dataset",
      ),
    );

    expect(interpretation.candidates.map((candidate) => candidate.family)).toEqual(
      expect.arrayContaining(["schedule", "action", "finance", "dependency", "relationship"]),
    );
  });

  it("does not require internal domain terminology from owner input", () => {
    const interpretation = deterministicNaturalInterpreter.interpret(
      input("พรุ่งนี้สอน 4/1 เรื่องเซลล์ ยังไม่ได้เตรียมใบงาน"),
    );

    expect(interpretation.input.text).not.toContain("Dependency");
    expect(interpretation.input.text).not.toContain("Observation");
    expect(interpretation.candidates.length).toBeGreaterThan(1);
  });

  it("prevents system acceptance from bypassing owner authority", () => {
    const interpretation = deterministicNaturalInterpreter.interpret(
      input("ต้องทำโครงงานใหม่เรื่องระบบตรวจคุณภาพน้ำ"),
    );
    const projectCandidate = interpretation.candidates.find(
      (candidate) => candidate.family === "project",
    )!;

    expect(() =>
      routeCandidate(projectCandidate, {
        actor: "system",
        outcome: "accepted",
        routedRecordId: "route-1",
        decidedAt: now,
      }),
    ).toThrow("System cannot accept this candidate without owner authority.");
  });
});
