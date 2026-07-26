import { describe, expect, it } from "vitest";
import {
  createNaturalInput,
  deterministicNaturalInterpreter,
  routeCandidate,
} from "../natural-routing";
import {
  buildDestinationView,
  destinationForFamily,
  displayDateFor,
  resolveDestinationItem,
} from "../routed-destinations";

const now = "2026-07-26T03:00:00.000Z";

function acceptedRecordFor(text: string, family: string, id = family) {
  const interpretation = deterministicNaturalInterpreter.interpret(
    createNaturalInput({
      id: `input-${id}`,
      text,
      enteredAt: now,
    }),
  );

  const candidate = interpretation.candidates.find((item) => item.family === family)!;

  const record = routeCandidate(candidate, {
    actor: "owner",
    outcome: "accepted",
    routedRecordId: `record-${id}`,
    decidedAt: now,
  });

  if (!record) {
    throw new Error("Expected accepted route to produce a record.");
  }

  return record;
}

describe("routed destinations", () => {
  it("places routed schedule records in the calendar destination", () => {
    const record = acceptedRecordFor("พรุ่งนี้สอน 4/1 เรื่องเซลล์", "schedule");
    const view = buildDestinationView([record]);

    expect(
      view.sections.find((section) => section.destination === "calendar-teaching")?.items,
    ).toHaveLength(1);
    expect(view.calendarItems[0]?.displayDate).toBe("27 ก.ค. 2569");
  });

  it("places an Action in the Action section", () => {
    const record = acceptedRecordFor("ต้องตรวจข้อสอบ 4/1 ให้เสร็จ", "action");

    expect(destinationForFamily(record.family)).toBe("action");
  });

  it("places Finance in the Finance section", () => {
    const record = acceptedRecordFor("วันนี้จ่ายค่าถ่ายเอกสาร 420 บาท", "finance");

    expect(resolveDestinationItem(record).destination).toBe("finance");
    expect(resolveDestinationItem(record).summary).toContain("420");
  });

  it("places Dependency in the Waiting section", () => {
    const record = acceptedRecordFor("เด็กยังไม่ส่ง Dataset", "dependency");

    expect(resolveDestinationItem(record).destination).toBe("waiting");
  });

  it("places general information in the Information section", () => {
    const record = acceptedRecordFor("เก็บไฟล์แนวทางหลักสูตรไว้ใช้อ้างอิง", "information");

    expect(resolveDestinationItem(record).destination).toBe("information");
  });

  it("does not duplicate one routed record merely for multiple views", () => {
    const record = acceptedRecordFor("พรุ่งนี้สอน 4/1 เรื่องเซลล์", "schedule");
    const view = buildDestinationView([record]);
    const sectionItemCount = view.sections.reduce(
      (count, section) => count + section.items.length,
      0,
    );

    expect(sectionItemCount).toBe(1);
    expect(view.calendarItems).toHaveLength(1);
    expect(view.calendarItems[0]?.sourceRecordId).toBe(record.id);
  });

  it("distinguishes meeting-like schedule items without creating another record", () => {
    const record = acceptedRecordFor("วันจันทร์มีประชุมฝ่ายวิชาการ 15.30 น.", "schedule");
    const view = buildDestinationView([record]);

    expect(view.calendarItems).toHaveLength(1);
    expect(view.calendarItems[0]?.scheduleKind).toBe("meeting");
    expect(view.calendarItems[0]?.sourceRecordId).toBe(record.id);
  });

  it("keeps unresolved context visible", () => {
    const record = acceptedRecordFor("เด็กยังไม่ส่ง Dataset", "dependency");
    const item = resolveDestinationItem(record);

    expect(item.contextStatus).toBe("unresolved");
    expect(item.detail).toContain("ยังไม่ทราบว่าเกี่ยวกับโปรเจกต์ใด");
  });

  it("maps relative dates for display", () => {
    const record = acceptedRecordFor("พรุ่งนี้สอน 4/1 เรื่องเซลล์", "schedule");

    expect(displayDateFor(record)).toBe("27 ก.ค. 2569");
  });

  it("keeps Project creation behind owner authority", () => {
    const interpretation = deterministicNaturalInterpreter.interpret(
      createNaturalInput({
        id: "input-project",
        text: "ต้องทำโครงงานใหม่เรื่องระบบตรวจคุณภาพน้ำ",
        enteredAt: now,
      }),
    );
    const project = interpretation.candidates.find((item) => item.family === "project")!;

    expect(project.authority).toBe("owner-only");
  });

  it("does not show a rejected route in destinations", () => {
    const interpretation = deterministicNaturalInterpreter.interpret(
      createNaturalInput({
        id: "input-rejected",
        text: "วันนี้จ่ายค่าถ่ายเอกสาร 420 บาท",
        enteredAt: now,
      }),
    );
    const finance = interpretation.candidates.find((item) => item.family === "finance")!;
    const rejected = routeCandidate(finance, {
      actor: "owner",
      outcome: "rejected",
      routedRecordId: "record-rejected",
      decidedAt: now,
    });
    const view = buildDestinationView(rejected ? [rejected] : []);

    expect(view.sections.every((section) => section.items.length === 0)).toBe(true);
  });

  it("destination mapping does not mutate routed record truth", () => {
    const record = acceptedRecordFor("เด็กยังไม่ส่ง Dataset", "dependency");
    const before = structuredClone(record);

    resolveDestinationItem(record);

    expect(record).toEqual(before);
  });

  it("destination category styling does not alter routing semantics", () => {
    const record = acceptedRecordFor("วันนี้จ่ายค่าถ่ายเอกสาร 420 บาท", "finance");
    const item = resolveDestinationItem(record);

    expect(item.visualTone).toBe("finance");
    expect(record.family).toBe("finance");
    expect(record.summary).toContain("420");
  });

  it("new-item marker is visual only", () => {
    const record = acceptedRecordFor("เก็บไฟล์แนวทางหลักสูตรไว้ใช้อ้างอิง", "information");
    const item = resolveDestinationItem(record);

    expect(item.isNew).toBe(true);
    expect("isNew" in record).toBe(false);
  });
});
