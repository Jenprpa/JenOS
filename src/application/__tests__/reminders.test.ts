import { describe, expect, it } from "vitest";
import {
  createNaturalInput,
  deterministicNaturalInterpreter,
  routeCandidate,
} from "../natural-routing";
import { buildReminder, dueReminders, editReminder, removeReminder } from "../reminders";

const now = "2026-07-26T03:00:00.000Z";

function acceptedSchedule(text: string) {
  const interpretation = deterministicNaturalInterpreter.interpret(
    createNaturalInput({
      id: "input-reminder",
      text,
      enteredAt: now,
    }),
  );
  const schedule = interpretation.candidates.find((candidate) => candidate.family === "schedule")!;
  const record = routeCandidate(schedule, {
    actor: "owner",
    outcome: "accepted",
    routedRecordId: "record-reminder",
    decidedAt: now,
  });

  if (!record) {
    throw new Error("Expected accepted schedule record.");
  }

  return record;
}

describe("reminders", () => {
  it("parses reminder offset correctly", () => {
    const record = acceptedSchedule("พรุ่งนี้ประชุมฝ่ายวิชาการ 15.30 เตือนก่อนครึ่งชั่วโมง");

    expect(record.reminder?.offsetMinutes).toBe(30);
  });

  it("calculates reminder due time correctly", () => {
    const record = acceptedSchedule("พรุ่งนี้ประชุมฝ่ายวิชาการ 15.30 เตือนก่อนครึ่งชั่วโมง");
    const reminder = buildReminder(record);

    expect(reminder?.eventTime).toBe("2026-07-27T08:30:00.000Z");
    expect(reminder?.dueAt).toBe("2026-07-27T08:00:00.000Z");
  });

  it("can edit reminder", () => {
    const record = acceptedSchedule("พรุ่งนี้สอน 4/1 เรื่องเซลล์ เตือนก่อน 1 ชั่วโมง");
    const edited = editReminder(record, { offsetMinutes: 10, label: "เตือนก่อน 10 นาที" });

    expect(edited.reminder?.offsetMinutes).toBe(10);
  });

  it("can remove reminder", () => {
    const record = acceptedSchedule("พรุ่งนี้สอน 4/1 เรื่องเซลล์ เตือนก่อน 1 ชั่วโมง");
    const withoutReminder = removeReminder(record);

    expect(withoutReminder.reminder).toBeUndefined();
  });

  it("shows due reminders in the in-app reminder surface", () => {
    const record = acceptedSchedule("พรุ่งนี้ประชุมฝ่ายวิชาการ 15.30 เตือนก่อนครึ่งชั่วโมง");
    const reminder = buildReminder(record)!;

    expect(dueReminders([reminder], "2026-07-27T08:01:00.000Z")).toHaveLength(1);
  });

  it("does not claim background notification support", () => {
    const record = acceptedSchedule("พรุ่งนี้ประชุมฝ่ายวิชาการ 15.30 เตือนก่อนครึ่งชั่วโมง");
    const reminder = buildReminder(record);

    expect(reminder?.externalNotification).toBe(false);
  });
});
