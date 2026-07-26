import type { RoutedRecord, RouteFamily } from "./natural-routing";

export type DestinationKind =
  "calendar-teaching" | "action" | "finance" | "waiting" | "project" | "information";

export interface DestinationItem {
  readonly id: string;
  readonly destination: DestinationKind;
  readonly visualTone: DestinationKind;
  readonly sourceRecordId: string;
  readonly title: string;
  readonly summary: string;
  readonly detail?: string;
  readonly displayDate?: string;
  readonly reminderLabel?: string;
  readonly contextStatus: RoutedRecord["contextStatus"];
  readonly isNew: boolean;
}

export interface BoardSection {
  readonly destination: DestinationKind;
  readonly title: string;
  readonly icon: string;
  readonly description: string;
  readonly items: readonly DestinationItem[];
}

export interface CalendarItem {
  readonly id: string;
  readonly sourceRecordId: string;
  readonly displayDate: string;
  readonly context: string;
  readonly description: string;
  readonly scheduleKind: "teaching" | "meeting" | "general";
  readonly reminderLabel?: string;
}

export interface DestinationViewModel {
  readonly sections: readonly BoardSection[];
  readonly calendarItems: readonly CalendarItem[];
}

const sectionDefinitions: readonly Omit<BoardSection, "items">[] = [
  {
    destination: "calendar-teaching",
    title: "ตาราง / การสอน",
    icon: "📅",
    description: "เรื่องที่ควรเห็นเป็นเวลา บริบทการสอน หรือนัดหมาย",
  },
  {
    destination: "action",
    title: "สิ่งที่ต้องทำ",
    icon: "✓",
    description: "สิ่งที่ต้องขยับต่อ ไม่ใช่ task backlog หนัก ๆ",
  },
  {
    destination: "finance",
    title: "การเงิน",
    icon: "฿",
    description: "ค่าใช้จ่ายหรือข้อมูลเงินที่เจ้าของยืนยันแล้ว",
  },
  {
    destination: "waiting",
    title: "กำลังรอ",
    icon: "⏳",
    description: "สิ่งที่ติดอยู่กับคนอื่นหรือบริบทที่ยังไม่ครบ",
  },
  {
    destination: "project",
    title: "โปรเจกต์",
    icon: "◉",
    description: "เรื่องที่เจ้าของยืนยันว่าเป็นพื้นที่รับผิดชอบต่อเนื่อง",
  },
  {
    destination: "information",
    title: "ข้อมูล / บันทึก",
    icon: "◇",
    description: "ข้อมูลอ้างอิงหรือเรื่องที่ยังไม่ต้องผลักไปที่อื่น",
  },
];

export function buildDestinationView(records: readonly RoutedRecord[]): DestinationViewModel {
  const items = records.map(resolveDestinationItem);

  return {
    sections: sectionDefinitions.map((section) => ({
      ...section,
      items: items.filter((item) => item.destination === section.destination),
    })),
    calendarItems: items
      .filter((item) => item.destination === "calendar-teaching")
      .map((item) => ({
        id: `calendar-${item.id}`,
        sourceRecordId: item.sourceRecordId,
        displayDate: item.displayDate ?? "ไม่ระบุวัน",
        context: extractContext(item.summary),
        description: item.summary,
        scheduleKind: scheduleKindFor(item.summary),
        ...(item.reminderLabel ? { reminderLabel: item.reminderLabel } : {}),
      })),
  };
}

export function resolveDestinationItem(record: RoutedRecord): DestinationItem {
  const destination = destinationForFamily(record.family);
  const displayDate = displayDateFor(record);

  return {
    id: `destination-${record.id}`,
    destination,
    visualTone: destination,
    sourceRecordId: record.id,
    title: record.title,
    summary: record.summary,
    ...(record.detail || record.reminder || record.deferred
      ? { detail: joinDetails(record.detail, record.reminder?.label, record.deferred?.reason) }
      : {}),
    ...(record.reminder ? { reminderLabel: record.reminder.label } : {}),
    ...(displayDate ? { displayDate } : {}),
    contextStatus: record.contextStatus,
    isNew: true,
  };
}

function joinDetails(
  detail: string | undefined,
  reminderLabel: string | undefined,
  deferredReason: string | undefined,
): string {
  return [detail, reminderLabel, deferredReason ? `เลื่อนไว้ก่อน: ${deferredReason}` : undefined]
    .filter(Boolean)
    .join(" • ");
}

export function destinationForFamily(family: RouteFamily): DestinationKind {
  switch (family) {
    case "schedule":
      return "calendar-teaching";
    case "action":
      return "action";
    case "finance":
      return "finance";
    case "dependency":
      return "waiting";
    case "project":
      return "project";
    case "relationship":
    case "context":
    case "personal-care":
    case "instruction":
    case "information":
      return "information";
  }
}

export function displayDateFor(record: RoutedRecord): string | undefined {
  if (record.sourceText.includes("พรุ่งนี้")) {
    return formatThaiDate(addDays(new Date(record.routedAt), 1));
  }

  if (record.sourceText.includes("วันนี้")) {
    return formatThaiDate(new Date(record.routedAt));
  }

  if (record.sourceText.includes("เมื่อวาน")) {
    return formatThaiDate(addDays(new Date(record.routedAt), -1));
  }

  if (record.sourceText.includes("วันจันทร์")) {
    return "วันจันทร์";
  }

  return undefined;
}

function extractContext(summary: string): string {
  if (summary.includes("4/1") || summary.includes("ม.4/1")) {
    return "ม.4/1";
  }

  if (summary.includes("ประชุม")) {
    return "ประชุม";
  }

  return "JenOS";
}

function scheduleKindFor(summary: string): CalendarItem["scheduleKind"] {
  if (summary.includes("4/1") || summary.includes("ม.4/1") || summary.includes("สอน")) {
    return "teaching";
  }

  if (summary.includes("ประชุม")) {
    return "meeting";
  }

  return "general";
}

function addDays(date: Date, days: number): Date {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
}

function formatThaiDate(date: Date): string {
  const monthNames = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];

  return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear() + 543}`;
}
