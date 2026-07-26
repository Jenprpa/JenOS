import type { ReminderOffsetMinutes, ReminderSpec, RoutedRecord } from "./natural-routing";

export interface CalendarReminder {
  readonly id: string;
  readonly sourceRecordId: string;
  readonly label: string;
  readonly eventTime: string;
  readonly dueAt: string;
  readonly offsetMinutes: ReminderOffsetMinutes;
  readonly externalNotification: false;
}

export function buildReminder(record: RoutedRecord): CalendarReminder | null {
  if (!record.reminder || !["schedule", "personal-care"].includes(record.family)) {
    return null;
  }

  const eventTime = eventTimeFor(record);
  const dueAt = new Date(eventTime);
  dueAt.setMinutes(dueAt.getMinutes() - record.reminder.offsetMinutes);

  return {
    id: `reminder-${record.id}`,
    sourceRecordId: record.id,
    label: record.reminder.label,
    eventTime,
    dueAt: dueAt.toISOString(),
    offsetMinutes: record.reminder.offsetMinutes,
    externalNotification: false,
  };
}

export function editReminder(record: RoutedRecord, reminder: ReminderSpec): RoutedRecord {
  return {
    ...record,
    reminder,
  };
}

export function removeReminder(record: RoutedRecord): RoutedRecord {
  return {
    id: record.id,
    candidateId: record.candidateId,
    inputId: record.inputId,
    family: record.family,
    title: record.title,
    summary: record.summary,
    ...(record.detail ? { detail: record.detail } : {}),
    contextStatus: record.contextStatus,
    ...(record.schedule ? { schedule: record.schedule } : {}),
    ...(record.finance ? { finance: record.finance } : {}),
    ...(record.personalCare ? { personalCare: record.personalCare } : {}),
    ...(record.ownerInstruction ? { ownerInstruction: record.ownerInstruction } : {}),
    ...(record.deferred ? { deferred: record.deferred } : {}),
    routedAt: record.routedAt,
    sourceText: record.sourceText,
    ownerDecision: record.ownerDecision,
  };
}

export function dueReminders(
  reminders: readonly CalendarReminder[],
  nowIso: string,
): readonly CalendarReminder[] {
  const now = new Date(nowIso).getTime();
  return reminders.filter((reminder) => new Date(reminder.dueAt).getTime() <= now);
}

function eventTimeFor(record: RoutedRecord): string {
  const base = new Date(record.routedAt);

  if (record.schedule?.relativeDate === "tomorrow") {
    base.setDate(base.getDate() + 1);
  }

  if (record.schedule?.relativeDate === "today") {
    base.setDate(base.getDate());
  }

  const time = record.reminder?.time ?? record.schedule?.time?.match(/\d{1,2}:\d{2}/)?.[0];

  if (time) {
    const [hours, minutes] = time.split(":").map(Number);
    base.setHours(hours ?? 9, minutes ?? 0, 0, 0);
  } else {
    base.setHours(9, 0, 0, 0);
  }

  return base.toISOString();
}
