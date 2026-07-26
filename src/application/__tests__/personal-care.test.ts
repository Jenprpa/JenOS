import { describe, expect, it } from "vitest";
import { createBackup, createPersistedData, loadPersistedData } from "../persistence-model";
import { buildReminder } from "../reminders";
import { applyInstructionResolution, resolveOwnerInstruction } from "../command-resolution";
import {
  createNaturalInput,
  deterministicNaturalInterpreter,
  routeCandidate,
  type RouteCandidate,
  type RoutedRecord,
} from "../natural-routing";
import {
  buildPersonalCareSummary,
  createCapacityRecommendation,
  mealStatusLabel,
} from "../personal-care";
import { budgieTheme } from "../theme-system";

const now = "2026-07-26T01:00:00.000Z";

function input(text: string) {
  return createNaturalInput({
    id: crypto.randomUUID(),
    text,
    enteredAt: now,
  });
}

function candidates(text: string): readonly RouteCandidate[] {
  return deterministicNaturalInterpreter.interpret(input(text)).candidates;
}

function accept(candidate: RouteCandidate): RoutedRecord {
  const routed = routeCandidate(candidate, {
    actor: "owner",
    outcome: "accepted",
    routedRecordId: crypto.randomUUID(),
    decidedAt: now,
  });

  if (!routed) {
    throw new Error("Expected routed record.");
  }

  return routed;
}

describe("personal care natural routing", () => {
  it("records explicit sleep duration without diagnosis", () => {
    const sleep = candidates("เมื่อคืนได้นอน 5 ชั่วโมง").find(
      (candidate) => candidate.personalCare?.kind === "sleep",
    );

    expect(sleep?.family).toBe("personal-care");
    expect(sleep?.personalCare?.sleep?.durationHours).toBe(5);
    expect(sleep?.detail).toContain("self-report");
    expect(sleep?.summary).not.toContain("คะแนน");
  });

  it("derives start and wake duration across midnight", () => {
    const sleep = candidates("เมื่อคืนเข้านอนตีหนึ่ง ตื่นหกโมงครึ่ง").find(
      (candidate) => candidate.personalCare?.kind === "sleep",
    );

    expect(sleep?.personalCare?.sleep?.startTime).toBe("01:00");
    expect(sleep?.personalCare?.sleep?.wakeTime).toBe("06:30");
    expect(sleep?.personalCare?.sleep?.durationHours).toBe(5.5);
  });

  it("does not invent duration from ambiguous sleep quality", () => {
    const sleep = candidates("เมื่อคืนหลับไม่ค่อยดี").find(
      (candidate) => candidate.personalCare?.kind === "sleep",
    );

    expect(sleep?.personalCare?.sleep?.quality).toBe("poor");
    expect(sleep?.personalCare?.sleep?.durationHours).toBeUndefined();
  });

  it("records meal statuses without requiring all meals", () => {
    const records = candidates("กินข้าวเที่ยงแล้ว วันนี้ยังไม่ได้กินข้าวเช้า")
      .filter((candidate) => candidate.personalCare?.kind === "meal")
      .map(accept);
    const summary = buildPersonalCareSummary(records);

    expect(summary.meals.breakfast).toBe("not-yet-eaten");
    expect(summary.meals.lunch).toBe("eaten");
    expect(summary.meals.dinner).toBe("unknown");
    expect(mealStatusLabel(summary.meals.dinner)).toBe("ยังไม่รู้");
  });

  it("maps qualitative capacity without creating a productivity score", () => {
    const routed = candidates("วันนี้เหนื่อยมาก งานที่ไม่รีบเลื่อนไปก่อน");
    const capacity = routed.find((candidate) => candidate.personalCare?.kind === "capacity");

    expect(capacity?.personalCare?.capacity?.level).toBe("low");
    expect(capacity?.detail).not.toContain("score");
    expect(capacity?.detail).not.toContain("คะแนน");
    expect(
      routed.some((candidate) => candidate.ownerInstruction?.kind === "defer-non-urgent"),
    ).toBe(true);
  });

  it("creates explicit personal care reminders without automatic reminders", () => {
    const withReminder = accept(
      candidates("กินข้าวเที่ยงแล้ว เย็นนี้เตือนกินข้าวตอนหนึ่งทุ่ม").find(
        (candidate) => candidate.personalCare?.meal?.meal === "dinner",
      )!,
    );
    const withoutReminder = accept(
      candidates("กินข้าวเที่ยงแล้ว").find(
        (candidate) => candidate.personalCare?.meal?.meal === "lunch",
      )!,
    );

    expect(withReminder.reminder?.time).toBe("19:00");
    expect(buildReminder(withReminder)?.label).toContain("19:00");
    expect(withoutReminder.reminder).toBeUndefined();
    expect(buildReminder(withoutReminder)).toBeNull();
  });

  it("routes capacity, commitment, and deadline from one natural input", () => {
    const routed = candidates("วันนี้พลังเหลือครึ่งเดียว แต่ต้องส่งรายงานก่อนบ่ายสาม");

    expect(routed.map((candidate) => candidate.family)).toEqual(
      expect.arrayContaining(["personal-care", "action", "schedule"]),
    );
    expect(routed.find((candidate) => candidate.personalCare?.kind === "capacity")?.summary).toBe(
      "วันนี้พลังงานเหลือประมาณครึ่งเดียว",
    );
    expect(routed.find((candidate) => candidate.family === "action")?.summary).toBe("ส่งรายงาน");
    expect(routed.find((candidate) => candidate.family === "schedule")?.summary).toContain(
      "ก่อน 15:00",
    );
  });

  it("does not let personal care suppress an action candidate", () => {
    const routed = candidates("วันนี้พลังเหลือครึ่งเดียว แต่ต้องส่งรายงานก่อนบ่ายสาม");

    expect(routed.some((candidate) => candidate.personalCare?.kind === "capacity")).toBe(true);
    expect(routed.some((candidate) => candidate.family === "action")).toBe(true);
  });

  it("routes sleep plus deadline-bound work together", () => {
    const routed = candidates("เมื่อคืนได้นอน 5 ชั่วโมง วันนี้ต้องส่งข้อสอบก่อนเที่ยง");

    expect(routed.some((candidate) => candidate.personalCare?.kind === "sleep")).toBe(true);
    expect(routed.find((candidate) => candidate.family === "action")?.summary).toBe("ส่งข้อสอบ");
    expect(routed.find((candidate) => candidate.family === "schedule")?.summary).toContain(
      "ก่อน 12:00",
    );
  });

  it("routes meal input combined with a meeting", () => {
    const routed = candidates("ยังไม่ได้กินข้าวเช้า แล้วสิบโมงมีประชุม");

    expect(routed.find((candidate) => candidate.personalCare?.kind === "meal")?.summary).toBe(
      "มื้อเช้า: ยังไม่ได้กิน",
    );
    expect(routed.find((candidate) => candidate.family === "schedule")?.schedule?.time).toBe(
      "10:00 น.",
    );
  });

  it("recognizes defer non-urgent work as owner instruction, not generic advice", () => {
    const routed = candidates("วันนี้เหนื่อยมาก งานที่ไม่รีบเลื่อนไปก่อน");

    expect(routed.map((candidate) => candidate.family)).toEqual(
      expect.arrayContaining(["personal-care", "instruction"]),
    );
    expect(routed.find((candidate) => candidate.family === "instruction")?.authority).toBe(
      "owner-only",
    );
  });

  it("treats vague importance-based deferral as ambiguous instruction", () => {
    const instruction = candidates("งานที่ไม่สำคัญเลื่อนไปก่อน").find(
      (candidate) => candidate.ownerInstruction?.kind === "defer-ambiguous",
    );

    expect(instruction?.family).toBe("instruction");
    expect(instruction?.authority).toBe("owner-only");
    expect(instruction?.detail).toContain("ยังไม่มีหลักฐาน");
  });
});

describe("owner instruction resolution", () => {
  it("previews non-urgent work to defer while keeping deadline-bound work", () => {
    const instruction = candidates("วันนี้เหนื่อยมาก งานที่ไม่รีบเลื่อนไปก่อน").find(
      (candidate) => candidate.ownerInstruction?.kind === "defer-non-urgent",
    )!;
    const records = [
      accept(
        candidates("วันนี้ต้องส่งรายงานก่อนบ่ายสาม").find(
          (candidate) => candidate.family === "action",
        )!,
      ),
      accept(
        candidates("เก็บ PDF ไว้อ่านทีหลัง").find(
          (candidate) => candidate.family === "information",
        )!,
      ),
      accept(candidates("จัดแฟ้มเอกสาร").find((candidate) => candidate.family === "information")!),
      accept(
        candidates("พรุ่งนี้สอน 4/1 เรื่องเซลล์ ยังไม่ได้ทำใบงาน").find(
          (candidate) => candidate.family === "action",
        )!,
      ),
    ];

    const resolution = resolveOwnerInstruction(instruction, records);

    expect(resolution?.toDefer.map((record) => record.summary)).toEqual([
      "เก็บ PDF ไว้อ่านทีหลัง",
      "จัดแฟ้มเอกสาร",
    ]);
    expect(resolution?.toKeep.map((record) => record.summary)).toEqual(
      expect.arrayContaining(["ส่งรายงาน", "เตรียมใบงานสำหรับ ม.4/1"]),
    );
  });

  it("mutates deferred records only after owner confirmation", () => {
    const instruction = candidates("วันนี้เหนื่อยมาก งานที่ไม่รีบเลื่อนไปก่อน").find(
      (candidate) => candidate.ownerInstruction?.kind === "defer-non-urgent",
    )!;
    const records = [
      accept(
        candidates("วันนี้ต้องส่งรายงานก่อนบ่ายสาม").find(
          (candidate) => candidate.family === "action",
        )!,
      ),
      accept(
        candidates("เก็บ PDF ไว้อ่านทีหลัง").find(
          (candidate) => candidate.family === "information",
        )!,
      ),
    ];
    const resolution = resolveOwnerInstruction(instruction, records)!;
    const instructionRecord = accept(instruction);
    const nextRecords = applyInstructionResolution({
      records,
      instructionRecord,
      resolution,
      decidedAt: now,
    });

    expect(
      nextRecords.find((record) => record.summary === "เก็บ PDF ไว้อ่านทีหลัง")?.deferred,
    ).toBeDefined();
    expect(nextRecords.find((record) => record.summary === "ส่งรายงาน")?.deferred).toBeUndefined();
    expect(nextRecords[0]?.ownerInstruction?.kind).toBe("defer-non-urgent");
  });

  it("does not broadly mutate ambiguous importance instructions", () => {
    const instruction = candidates("งานที่ไม่สำคัญเลื่อนไปก่อน").find(
      (candidate) => candidate.ownerInstruction?.kind === "defer-ambiguous",
    )!;
    const records = [
      accept(
        candidates("วันนี้ต้องส่งรายงานก่อนบ่ายสาม").find(
          (candidate) => candidate.family === "action",
        )!,
      ),
      accept(
        candidates("เก็บ PDF ไว้อ่านทีหลัง").find(
          (candidate) => candidate.family === "information",
        )!,
      ),
    ];

    const resolution = resolveOwnerInstruction(instruction, records);

    expect(resolution?.toDefer).toHaveLength(0);
    expect(resolution?.reason).toContain("ไม่เลื่อนอะไรให้อัตโนมัติ");
  });
});

describe("capacity-aware recommendations", () => {
  it("prioritizes bounded urgent work when capacity is low and deadline exists", () => {
    const records = [
      accept(candidates("วันนี้เหนื่อยมาก").find((candidate) => candidate.personalCare)!),
      accept(
        candidates("ต้องส่งรายงานก่อนบ่ายสาม").find((candidate) => candidate.family === "action")!,
      ),
    ];

    const recommendation = createCapacityRecommendation({ records });

    expect(recommendation.title).toContain("จำเป็น");
    expect(recommendation.evidence.length).toBeGreaterThan(1);
    expect(recommendation.ownerAuthority).toBe("owner-decides");
  });

  it("may suggest defer or reduce scope when capacity is low and no urgent deadline exists", () => {
    const records = [
      accept(
        candidates("วันนี้เหนื่อยมาก งานที่ไม่รีบเลื่อนไปก่อน").find(
          (candidate) => candidate.personalCare?.kind === "capacity",
        )!,
      ),
    ];

    const recommendation = createCapacityRecommendation({ records });

    expect(recommendation.guidance).toMatch(/พัก|ลด scope|เบา/);
    expect(recommendation.guidance).not.toContain("ยกเลิกโปรเจกต์");
  });

  it("does not invent low or high capacity when capacity is unknown", () => {
    const records = [
      accept(
        candidates("ต้องส่งรายงานก่อนบ่ายสาม").find((candidate) => candidate.family === "action")!,
      ),
    ];

    const recommendation = createCapacityRecommendation({ records });

    expect(recommendation.title).toContain("ยังไม่มีข้อมูลพลังงาน");
    expect(recommendation.confidence).toBe("low");
  });

  it("keeps owner decision authority even when owner continues with low capacity", () => {
    const records = [
      accept(
        candidates("วันนี้เหนื่อยมาก แต่ขอทำต่อ").find(
          (candidate) => candidate.personalCare?.kind === "capacity",
        )!,
      ),
    ];

    const recommendation = createCapacityRecommendation({ records });

    expect(recommendation.ownerAuthority).toBe("owner-decides");
    expect(recommendation.guidance).not.toContain("JenOS จะหยุด");
  });

  it("keeps personal care interpretation local and deterministic", () => {
    const interpretation = deterministicNaturalInterpreter.interpret(
      input("วันนี้พลังเหลือครึ่งเดียว"),
    );

    expect(interpretation.interpreter).toBe("deterministic-demo");
    expect(interpretation.candidates[0]?.confidence).toBe("demo-rule");
  });

  it("references detected commitment instead of generic capacity advice", () => {
    const records = candidates("วันนี้พลังเหลือครึ่งเดียว แต่ต้องส่งรายงานก่อนบ่ายสาม")
      .filter((candidate) => candidate.family === "personal-care" || candidate.family === "action")
      .map(accept);

    const recommendation = createCapacityRecommendation({ records });

    expect(recommendation.guidance).toContain("deadline");
    expect(recommendation.evidence).toContain("มีเรื่องผูกกับกำหนดเวลา: ส่งรายงาน");
  });
});

describe("personal care persistence", () => {
  it("keeps personal care records in persisted data and backups", () => {
    const record = accept(
      candidates("เมื่อคืนได้นอน 5 ชั่วโมง").find(
        (candidate) => candidate.personalCare?.kind === "sleep",
      )!,
    );
    const data = createPersistedData({ routedRecords: [record], theme: budgieTheme });
    const backup = createBackup(data, now);
    const loaded = loadPersistedData(backup.data);

    expect(loaded.data.routedRecords[0]?.personalCare?.kind).toBe("sleep");
    expect(JSON.stringify(backup)).toContain("personalCare");
  });

  it("clear semantics remain represented by empty persisted data", () => {
    const loaded = loadPersistedData({ schemaVersion: 1, routedRecords: [], theme: budgieTheme });

    expect(buildPersonalCareSummary(loaded.data.routedRecords).recentRecords).toHaveLength(0);
  });
});
