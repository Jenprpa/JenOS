import type { CapacityLevel, MealName, MealStatus, RoutedRecord } from "./natural-routing";

export interface PersonalCareSummary {
  readonly latestSleep: {
    readonly label: string;
    readonly sourceRecordId: string;
  } | null;
  readonly meals: Record<MealName, MealStatus>;
  readonly latestCapacity: {
    readonly level: CapacityLevel;
    readonly label: string;
    readonly sourceRecordId: string;
  } | null;
  readonly recentRecords: readonly RoutedRecord[];
}

export interface CapacityRecommendationInput {
  readonly records: readonly RoutedRecord[];
}

export interface CapacityRecommendation {
  readonly title: string;
  readonly guidance: string;
  readonly evidence: readonly string[];
  readonly confidence: "low" | "medium";
  readonly ownerAuthority: "owner-decides";
}

const mealDefaults: Record<MealName, MealStatus> = {
  breakfast: "unknown",
  lunch: "unknown",
  dinner: "unknown",
};

export function buildPersonalCareSummary(records: readonly RoutedRecord[]): PersonalCareSummary {
  const careRecords = records.filter((record) => record.family === "personal-care");
  const latestSleepRecord = careRecords.find((record) => record.personalCare?.kind === "sleep");
  const latestCapacityRecord = careRecords.find(
    (record) => record.personalCare?.kind === "capacity",
  );
  const meals = { ...mealDefaults };

  for (const record of [...careRecords].reverse()) {
    const meal = record.personalCare?.meal;
    if (meal) {
      meals[meal.meal] = meal.status;
    }
  }

  return {
    latestSleep: latestSleepRecord
      ? {
          label: latestSleepRecord.summary,
          sourceRecordId: latestSleepRecord.id,
        }
      : null,
    meals,
    latestCapacity: latestCapacityRecord?.personalCare?.capacity
      ? {
          level: latestCapacityRecord.personalCare.capacity.level,
          label: latestCapacityRecord.personalCare.capacity.label,
          sourceRecordId: latestCapacityRecord.id,
        }
      : null,
    recentRecords: careRecords.slice(0, 6),
  };
}

export function createCapacityRecommendation(
  input: CapacityRecommendationInput,
): CapacityRecommendation {
  const summary = buildPersonalCareSummary(input.records);
  const urgentRecords = input.records.filter(
    (record) => record.family !== "personal-care" && hasUrgentSignal(record.sourceText),
  );
  const urgentCommitment =
    urgentRecords.find((record) => record.family === "action") ??
    urgentRecords.find((record) => record.family === "schedule") ??
    urgentRecords[0];
  const overloadedCalendar = input.records.filter(
    (record) =>
      record.family === "schedule" && includesAny(record.sourceText, ["4 คาบ", "ตารางแน่น"]),
  );
  const ownerWantsDefer = input.records.some((record) =>
    includesAny(record.sourceText, ["เลื่อนไปก่อน", "ไม่รีบ"]),
  );
  const evidence: string[] = [];

  if (summary.latestCapacity) {
    evidence.push(`คุณบันทึกว่า: ${summary.latestCapacity.label}`);
  }

  if (summary.latestSleep) {
    evidence.push(`ข้อมูลการนอนล่าสุด: ${summary.latestSleep.label}`);
  }

  if (urgentCommitment) {
    evidence.push(`มีเรื่องผูกกับกำหนดเวลา: ${urgentCommitment.summary ?? urgentCommitment.title}`);
  }

  if (overloadedCalendar.length > 0) {
    evidence.push("มีสัญญาณว่าตารางวันนี้ค่อนข้างแน่น");
  }

  if (ownerWantsDefer) {
    evidence.push("เจ้าของระบุเองว่างานที่ไม่รีบเลื่อนได้");
  }

  if (summary.latestCapacity?.level === "low" && urgentCommitment) {
    return {
      title: "วันนี้ใช้แรงกับเรื่องจำเป็นก่อน",
      guidance:
        "มีเรื่องที่ผูกกับเวลาอยู่ จึงอาจเลือกทำเฉพาะส่วนที่ต้องส่งก่อน แล้วเลื่อนงานที่ไม่ผูก deadline ออกไป",
      evidence,
      confidence: "medium",
      ownerAuthority: "owner-decides",
    };
  }

  if (summary.latestCapacity?.level === "low" && !urgentCommitment) {
    return {
      title: "วันนี้ลดขอบเขตได้",
      guidance:
        "จากข้อมูลที่มี ยังไม่เห็น deadline เร่งด่วน จึงอาจเลือกพัก ลด scope หรือขยับเรื่องเบา ๆ ก่อน",
      evidence,
      confidence: "medium",
      ownerAuthority: "owner-decides",
    };
  }

  if (summary.latestCapacity?.level === "limited" && urgentCommitment) {
    return {
      title: "เลือกงานที่จำกัดขอบเขตชัด",
      guidance:
        "พลังงานวันนี้มีจำกัด แต่มี commitment ที่ต้องระวัง จึงอาจแบ่งเป็นชิ้นเล็กและทำเฉพาะส่วนที่มีผลต่อ deadline",
      evidence,
      confidence: "medium",
      ownerAuthority: "owner-decides",
    };
  }

  if (summary.latestCapacity?.level === "good" && overloadedCalendar.length > 0) {
    return {
      title: "พลังดี แต่ยังควรดูภาระรวม",
      guidance:
        "แม้ self-report ดูพร้อม แต่ตารางที่แน่นอาจใช้ attention มาก ควรเหลือ buffer ให้ตัวเอง",
      evidence,
      confidence: "medium",
      ownerAuthority: "owner-decides",
    };
  }

  if (urgentCommitment) {
    return {
      title: "ยังไม่มีข้อมูลพลังงานวันนี้",
      guidance:
        "JenOS เห็น commitment ที่มีเวลาเกี่ยวข้อง แต่ยังไม่มี self-report เรื่องพลังงาน จึงเสนอได้แค่ให้ตรวจเรื่องที่ต้องส่งก่อน",
      evidence: evidence.length > 0 ? evidence : ["ยังไม่มีข้อมูล Human Capacity ที่ยืนยันแล้ว"],
      confidence: "low",
      ownerAuthority: "owner-decides",
    };
  }

  return {
    title: "ยังไม่มีสัญญาณพอให้แนะนำแรง ๆ",
    guidance:
      "JenOS ยังไม่เห็น Human Capacity หรือ deadline ที่ชัด จึงเก็บข้อมูลไว้ก่อนโดยไม่สรุปแทนคุณ",
    evidence: evidence.length > 0 ? evidence : ["ข้อมูลยังไม่พอสำหรับ recommendation"],
    confidence: "low",
    ownerAuthority: "owner-decides",
  };
}

export function mealStatusLabel(status: MealStatus): string {
  switch (status) {
    case "eaten":
      return "กินแล้ว";
    case "not-yet-eaten":
      return "ยังไม่ได้กิน";
    case "unknown":
      return "ยังไม่รู้";
  }
}

function hasUrgentSignal(text: string): boolean {
  return includesAny(text, ["ต้องส่ง", "ก่อนบ่ายสาม", "deadline", "ด่วน"]);
}

function includesAny(text: string, values: readonly string[]): boolean {
  return values.some((value) => text.includes(value));
}
