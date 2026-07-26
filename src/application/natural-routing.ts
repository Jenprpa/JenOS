export type RouteFamily =
  | "schedule"
  | "action"
  | "relationship"
  | "project"
  | "dependency"
  | "finance"
  | "personal-care"
  | "instruction"
  | "context"
  | "information";

export type RouteAuthority =
  "auto-route-candidate" | "confirm-required" | "clarification-required" | "owner-only";

export type RouteDecision = "accepted" | "rejected";
export type RouteActor = "system" | "owner";
export type ReminderOffsetMinutes = 0 | 10 | 30 | 60 | 1440;
export type FinanceDirection = "income" | "expense";
export type PersonalCareKind = "sleep" | "meal" | "capacity" | "self-care";
export type MealName = "breakfast" | "lunch" | "dinner";
export type MealStatus = "eaten" | "not-yet-eaten" | "unknown";
export type CapacityLevel = "low" | "limited" | "ok" | "good" | "unknown";
export type OwnerInstructionKind = "defer-non-urgent" | "defer-ambiguous";

export interface ReminderSpec {
  readonly offsetMinutes: ReminderOffsetMinutes;
  readonly label: string;
  readonly time?: string;
}

export interface ScheduleSpec {
  readonly relativeDate: "today" | "tomorrow" | "monday" | "unknown";
  readonly time?: string;
  readonly kind: "teaching" | "meeting" | "general";
}

export interface FinanceSpec {
  readonly direction: FinanceDirection;
  readonly amount: number;
  readonly currency: "THB";
  readonly description: string;
  readonly dateText: "today" | "yesterday" | "tomorrow" | "unknown";
  readonly possibleContext?: string;
}

export interface PersonalCareSpec {
  readonly kind: PersonalCareKind;
  readonly dateText: "today" | "last-night" | "tonight" | "unknown";
  readonly sleep?: {
    readonly startTime?: string;
    readonly wakeTime?: string;
    readonly durationHours?: number;
    readonly quality?: "poor" | "ok" | "good" | "unknown";
  };
  readonly meal?: {
    readonly meal: MealName;
    readonly status: MealStatus;
  };
  readonly capacity?: {
    readonly level: CapacityLevel;
    readonly label: string;
  };
  readonly note?: string;
}

export interface OwnerInstructionSpec {
  readonly kind: OwnerInstructionKind;
  readonly scope: "non-urgent-work" | "ambiguous-work";
  readonly requestedEffect: "defer";
  readonly requiresResolution: true;
}

export interface NaturalInput {
  readonly id: string;
  readonly text: string;
  readonly enteredAt: string;
}

export interface RouteCandidate {
  readonly id: string;
  readonly inputId: string;
  readonly family: RouteFamily;
  readonly title: string;
  readonly summary: string;
  readonly detail?: string;
  readonly authority: RouteAuthority;
  readonly confidence: "demo-rule" | "needs-context";
  readonly contextStatus: "resolved" | "unresolved" | "not-needed";
  readonly sourceText: string;
  readonly schedule?: ScheduleSpec;
  readonly reminder?: ReminderSpec;
  readonly finance?: FinanceSpec;
  readonly personalCare?: PersonalCareSpec;
  readonly ownerInstruction?: OwnerInstructionSpec;
}

export interface NaturalInterpretation {
  readonly input: NaturalInput;
  readonly candidates: readonly RouteCandidate[];
  readonly interpreter: "deterministic-demo";
}

export interface RoutedRecord {
  readonly id: string;
  readonly candidateId: string;
  readonly inputId: string;
  readonly family: RouteFamily;
  readonly title: string;
  readonly summary: string;
  readonly detail?: string;
  readonly contextStatus: RouteCandidate["contextStatus"];
  readonly schedule?: ScheduleSpec;
  readonly reminder?: ReminderSpec;
  readonly finance?: FinanceSpec;
  readonly personalCare?: PersonalCareSpec;
  readonly ownerInstruction?: OwnerInstructionSpec;
  readonly deferred?: {
    readonly reason: string;
    readonly decidedAt: string;
    readonly instructionRecordId: string;
  };
  readonly routedAt: string;
  readonly sourceText: string;
  readonly ownerDecision: RouteDecision;
}

export interface NaturalInterpreter {
  interpret(input: NaturalInput): NaturalInterpretation;
}

export function createNaturalInput(input: {
  readonly id: string;
  readonly text: string;
  readonly enteredAt: string;
}): NaturalInput {
  const text = input.text.trim();

  if (text.length === 0) {
    throw new Error("Natural input text is required.");
  }

  return {
    id: input.id,
    text,
    enteredAt: input.enteredAt,
  };
}

export const deterministicNaturalInterpreter: NaturalInterpreter = {
  interpret(input) {
    return interpretWithDemoRules(input);
  },
};

export function interpretWithDemoRules(input: NaturalInput): NaturalInterpretation {
  const candidates: RouteCandidate[] = [];
  const text = input.text;
  const reminder = extractReminder(text);
  const personalCareCandidates = extractPersonalCareCandidates(input, reminder);
  const ownerInstructionCandidates = extractOwnerInstructionCandidates(
    input,
    personalCareCandidates.length,
  );
  const hasTeachingContext = includesAny(text, ["สอน", "4/1", "ม.4/1"]);
  const hasWorksheetAction = includesAny(text, ["ใบงาน", "ยังไม่ได้เตรียม", "ยังไม่ได้ทำ"]);
  const hasMeetingSchedule = includesAny(text, ["ประชุม", "15.30", "15:30", "วันจันทร์"]);
  const hasExamAction = includesAny(text, ["ตรวจข้อสอบ", "ให้เสร็จ"]);
  const hasSubmissionAction = includesAny(text, ["ต้องส่ง", "ส่งรายงาน", "ส่งข้อสอบ"]);
  const hasDeadlineSignal = includesAny(text, ["ก่อนบ่ายสาม", "ก่อนเที่ยง", "deadline", "ด่วน"]);
  const hasProjectSignal = includesAny(text, ["โครงงานใหม่", "โปรเจกต์ใหม่", "project ใหม่"]);
  const hasDatasetDependency =
    includesAny(text, ["Dataset", "dataset"]) && includesAny(text, ["ยังไม่ส่ง", "ไม่ได้ส่ง"]);
  const hasGuidanceDependency = includesAny(text, ["รอรอง", "เอกสารแนะแนว"]);
  const hasExpenseSignal = includesAny(text, [
    "จ่าย",
    "เสีย",
    "ซื้อ",
    "ค่าปริ้นท์",
    "ค่าพริ้นท์",
    "ค่าถ่ายเอกสาร",
    "print",
  ]);
  const hasIncomeSignal = includesAny(text, [
    "ได้ค่าสอน",
    "ได้รับเงิน",
    "ได้เงิน",
    "รายรับ",
    "ค่าสอนพิเศษ",
  ]);
  const hasFinanceAmount =
    /\d[\d,]*/.test(text) && (text.includes("บาท") || hasExpenseSignal || hasIncomeSignal);
  const hasAmbiguousFinance =
    text.includes("เงิน") && /\d[\d,]*/.test(text) && !hasExpenseSignal && !hasIncomeSignal;
  const hasPdfReference = includesAny(text, [
    "PDF",
    "pdf",
    "อ่านทีหลัง",
    "เก็บไฟล์",
    "อ้างอิง",
    "หลักสูตร",
  ]);

  candidates.push(...personalCareCandidates);
  candidates.push(...ownerInstructionCandidates);

  if (hasTeachingContext) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "schedule",
        title: "ตาราง / การสอน",
        summary: "พรุ่งนี้ • ม.4/1 • เรื่องเซลล์",
        detail: "บันทึกเป็นบริบทการสอนจากข้อความที่เล่า ไม่ได้สร้างตารางเต็ม",
        authority: "auto-route-candidate",
        contextStatus: "resolved",
        schedule: {
          relativeDate: text.includes("วันนี้") ? "today" : "tomorrow",
          kind: "teaching",
        },
        ...(reminder ? { reminder } : {}),
      }),
    );

    candidates.push(
      createCandidate(input, candidates.length, {
        family: "relationship",
        title: "เชื่อมกับ",
        summary: "ม.4/1",
        detail: "ใช้เป็นบริบทของเรื่องนี้ โดยยังไม่สร้างข้อมูลนักเรียนหรือชั้นเรียนใหม่",
        authority: "auto-route-candidate",
        contextStatus: "resolved",
      }),
    );
  }

  if (hasMeetingSchedule) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "schedule",
        title: "ตาราง / นัดหมาย",
        summary: `${extractScheduleDateText(text)} • ประชุมฝ่ายวิชาการ • ${extractScheduleTime(text)}`,
        detail: "เพิ่มในปฏิทิน JenOS เท่านั้น ยังไม่ได้เชื่อมกับปฏิทินภายนอก",
        authority: "confirm-required",
        contextStatus: "not-needed",
        schedule: {
          relativeDate: text.includes("พรุ่งนี้")
            ? "tomorrow"
            : text.includes("วันจันทร์")
              ? "monday"
              : "unknown",
          time: extractScheduleTime(text),
          kind: "meeting",
        },
        ...(reminder ? { reminder } : {}),
      }),
    );
  }

  if (hasDeadlineSignal && hasSubmissionAction) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "schedule",
        title: "กำหนดเวลา",
        summary: `${extractScheduleDateText(text)} • ${extractSubmissionTarget(text)} • ${extractDeadlineTime(text)}`,
        detail: "บันทึกเป็นข้อจำกัดด้านเวลาเพื่อช่วยตัดสินใจ ไม่ได้ทำให้ JenOS ตัดสินใจแทน",
        authority: "confirm-required",
        contextStatus: "not-needed",
        schedule: {
          relativeDate: text.includes("วันนี้")
            ? "today"
            : text.includes("พรุ่งนี้")
              ? "tomorrow"
              : "unknown",
          time: extractDeadlineTime(text),
          kind: "general",
        },
      }),
    );
  }

  if (hasWorksheetAction) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "action",
        title: "สิ่งที่ต้องทำ",
        summary: "เตรียมใบงานสำหรับ ม.4/1",
        detail: "การสร้างสิ่งที่ต้องทำต้องให้เจ้าของยืนยันก่อน",
        authority: "confirm-required",
        contextStatus: hasTeachingContext ? "resolved" : "unresolved",
      }),
    );
  }

  if (hasExamAction) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "action",
        title: "สิ่งที่ต้องทำ",
        summary: "ตรวจข้อสอบ 4/1 ให้เสร็จ",
        detail: "บันทึกเป็นสิ่งที่ต้องขยับต่อ หลังเจ้าของยืนยัน",
        authority: "confirm-required",
        contextStatus: text.includes("4/1") ? "resolved" : "unresolved",
      }),
    );
  }

  if (hasSubmissionAction) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "action",
        title: "สิ่งที่ต้องส่ง",
        summary: extractSubmissionTarget(text),
        detail: hasDeadlineSignal
          ? `มีข้อจำกัดด้านเวลา: ${extractDeadlineTime(text)}`
          : "บันทึกเป็น commitment ที่ต้องให้เจ้าของยืนยันก่อน",
        authority: "confirm-required",
        contextStatus: hasTeachingContext ? "resolved" : "not-needed",
      }),
    );
  }

  if (hasProjectSignal) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "project",
        title: "โปรเจกต์ที่อาจเกิดขึ้น",
        summary: extractProjectName(text),
        detail: "JenOS เสนอได้ แต่การสร้างโปรเจกต์ต้องเป็นการตัดสินใจของเจ้าของ",
        authority: "owner-only",
        contextStatus: "not-needed",
      }),
    );
  }

  if (hasDatasetDependency) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "dependency",
        title: "กำลังรอ",
        summary: "Dataset จากนักเรียน",
        detail: "ยังไม่ทราบว่าเกี่ยวกับโปรเจกต์ใด จึงไม่ผูกบริบทให้เอง",
        authority: "clarification-required",
        contextStatus: "unresolved",
      }),
    );
  }

  if (hasGuidanceDependency) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "dependency",
        title: "กำลังรอ",
        summary: "รอรองส่งเอกสารแนะแนว",
        detail: "บันทึกเป็นเรื่องที่รอจากคนอื่น โดยยังไม่เปลี่ยน state ของโปรเจกต์ใด",
        authority: "confirm-required",
        contextStatus: "not-needed",
      }),
    );
  }

  if ((hasExpenseSignal || hasIncomeSignal) && hasFinanceAmount) {
    const direction: FinanceDirection = hasIncomeSignal ? "income" : "expense";
    const amount = extractAmount(text);
    const description = extractFinanceLabel(text, direction);
    const possibleContext = extractPossibleFinanceContext(text);

    candidates.push(
      createCandidate(input, candidates.length, {
        family: "finance",
        title: direction === "income" ? "รายรับ" : "รายจ่าย",
        summary: `${description} ${formatAmount(amount)} บาท • ${extractRelativeDateText(text)}`,
        detail: "ข้อมูลการเงินควรให้เจ้าของยืนยันก่อนบันทึกเป็นรายการ",
        authority: "confirm-required",
        contextStatus: possibleContext ? "resolved" : "not-needed",
        finance: {
          direction,
          amount,
          currency: "THB",
          description,
          dateText: extractFinanceDate(text),
          ...(possibleContext ? { possibleContext } : {}),
        },
      }),
    );
  }

  if (hasAmbiguousFinance) {
    const amount = extractAmount(text);

    candidates.push(
      createCandidate(input, candidates.length, {
        family: "finance",
        title: "การเงินที่ยังไม่ชัด",
        summary: `เงิน ${formatAmount(amount)} บาท • ยังไม่รู้ว่าเป็นรายรับหรือรายจ่าย`,
        detail: "JenOS จะไม่เดาว่านี่เป็นรายรับหรือรายจ่าย ต้องให้เจ้าของช่วยยืนยันก่อน",
        authority: "clarification-required",
        contextStatus: "unresolved",
      }),
    );
  }

  if (hasPdfReference) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "information",
        title: "ข้อมูลอ้างอิง",
        summary: extractInformationSummary(text),
        detail: "เก็บเป็นข้อมูลได้โดยไม่ผลักให้เป็นโปรเจกต์",
        authority: "auto-route-candidate",
        contextStatus: "not-needed",
      }),
    );
  }

  if (candidates.length === 0) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "information",
        title: "เรื่องที่เล่าไว้",
        summary: text,
        detail: "ยังไม่มี rule ที่แยกความหมายได้ชัด จึงเก็บเป็นข้อมูลจากเจ้าของก่อน",
        authority: "auto-route-candidate",
        contextStatus: "unresolved",
        confidence: "needs-context",
      }),
    );
  }

  return {
    input,
    candidates,
    interpreter: "deterministic-demo",
  };
}

export function routeCandidate(
  candidate: RouteCandidate,
  decision: {
    readonly actor: RouteActor;
    readonly outcome: RouteDecision;
    readonly routedRecordId: string;
    readonly decidedAt: string;
  },
): RoutedRecord | null {
  if (decision.outcome === "rejected") {
    return null;
  }

  if (decision.actor === "system" && !canSystemAccept(candidate)) {
    throw new Error("System cannot accept this candidate without owner authority.");
  }

  return {
    id: decision.routedRecordId,
    candidateId: candidate.id,
    inputId: candidate.inputId,
    family: candidate.family,
    title: candidate.title,
    summary: candidate.summary,
    ...(candidate.detail ? { detail: candidate.detail } : {}),
    contextStatus: candidate.contextStatus,
    ...(candidate.schedule ? { schedule: candidate.schedule } : {}),
    ...(candidate.reminder ? { reminder: candidate.reminder } : {}),
    ...(candidate.finance ? { finance: candidate.finance } : {}),
    ...(candidate.personalCare ? { personalCare: candidate.personalCare } : {}),
    ...(candidate.ownerInstruction ? { ownerInstruction: candidate.ownerInstruction } : {}),
    routedAt: decision.decidedAt,
    sourceText: candidate.sourceText,
    ownerDecision: decision.outcome,
  };
}

export function canSystemAccept(candidate: RouteCandidate): boolean {
  return candidate.authority === "auto-route-candidate";
}

function createCandidate(
  input: NaturalInput,
  index: number,
  candidate: Omit<RouteCandidate, "id" | "inputId" | "sourceText" | "confidence"> & {
    readonly confidence?: RouteCandidate["confidence"];
  },
): RouteCandidate {
  return {
    ...candidate,
    id: `${input.id}-candidate-${index + 1}`,
    inputId: input.id,
    sourceText: input.text,
    confidence: candidate.confidence ?? "demo-rule",
  };
}

function includesAny(text: string, values: readonly string[]): boolean {
  return values.some((value) => text.includes(value));
}

function extractPersonalCareCandidates(
  input: NaturalInput,
  reminder: ReminderSpec | undefined,
): readonly RouteCandidate[] {
  const candidates: RouteCandidate[] = [];
  const text = input.text;
  const sleep = extractSleepSpec(text);
  const meals = extractMealSpecs(text);
  const capacity = extractCapacitySpec(text);

  if (sleep) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "personal-care",
        title: "การนอน",
        summary: summarizeSleep(sleep),
        detail: "บันทึกเป็น self-report จากเจ้าของ ไม่ใช่ข้อสรุปทางการแพทย์",
        authority: "confirm-required",
        contextStatus: "not-needed",
        personalCare: {
          kind: "sleep",
          dateText: text.includes("คืนนี้") ? "tonight" : "last-night",
          sleep,
        },
      }),
    );
  }

  for (const meal of meals) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "personal-care",
        title: "มื้ออาหาร",
        summary: summarizeMeal(meal),
        detail: "บันทึกเฉพาะสิ่งที่เล่าไว้ ไม่ต้องกรอกครบทุกมื้อ",
        authority: "confirm-required",
        contextStatus: "not-needed",
        ...(reminder && meal.meal === "dinner" ? { reminder } : {}),
        personalCare: {
          kind: "meal",
          dateText: text.includes("พรุ่งนี้") ? "unknown" : "today",
          meal,
        },
      }),
    );
  }

  if (capacity) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "personal-care",
        title: "พลังงาน / ความพร้อม",
        summary: capacity.label,
        detail: "JenOS ใช้สัญญาณนี้เพื่อเสนอทางเลือกที่เบาลงได้ แต่ไม่แปลงเป็น productivity metric",
        authority: "confirm-required",
        contextStatus: "not-needed",
        personalCare: {
          kind: "capacity",
          dateText: "today",
          capacity,
        },
      }),
    );
  }

  if (!sleep && meals.length === 0 && !capacity && includesAny(text, ["ดูแลตัวเอง", "พักก่อน"])) {
    candidates.push(
      createCandidate(input, candidates.length, {
        family: "personal-care",
        title: "การดูแลตัวเอง",
        summary: "บันทึกเรื่องการดูแลตัวเอง",
        detail: "เก็บเป็น self-report แบบเบา ๆ โดยไม่วินิจฉัย",
        authority: "confirm-required",
        contextStatus: "not-needed",
        personalCare: {
          kind: "self-care",
          dateText: "today",
          note: text,
        },
      }),
    );
  }

  return candidates;
}

function extractOwnerInstructionCandidates(
  input: NaturalInput,
  startIndex: number,
): readonly RouteCandidate[] {
  const text = input.text;

  if (
    includesAny(text, ["งานที่ไม่รีบ", "เรื่องที่ไม่รีบ"]) &&
    includesAny(text, ["เลื่อนไปก่อน", "เลื่อนออกไป", "พักไว้ก่อน"])
  ) {
    return [
      createCandidate(input, startIndex, {
        family: "instruction",
        title: "คำสั่งของเจ้าของ",
        summary: "เลื่อนงานที่ไม่รีบออกจากวันนี้",
        detail:
          "JenOS ต้องตรวจงานปัจจุบันก่อนว่าอะไรไม่ผูกกำหนดเวลา แล้วให้คุณยืนยันก่อนเปลี่ยนข้อมูลจริง",
        authority: "owner-only",
        contextStatus: "unresolved",
        ownerInstruction: {
          kind: "defer-non-urgent",
          scope: "non-urgent-work",
          requestedEffect: "defer",
          requiresResolution: true,
        },
      }),
    ];
  }

  if (
    includesAny(text, ["งานที่ไม่สำคัญ", "เรื่องที่ไม่สำคัญ"]) &&
    includesAny(text, ["เลื่อนไปก่อน", "เลื่อนออกไป", "พักไว้ก่อน"])
  ) {
    return [
      createCandidate(input, startIndex, {
        family: "instruction",
        title: "คำสั่งของเจ้าของ",
        summary: "เลื่อนงานที่ไม่สำคัญ",
        detail:
          "JenOS ยังไม่มีหลักฐานว่า record ไหนไม่สำคัญ จึงต้องให้คุณเลือกหรือยืนยันรายการที่กระทบก่อน",
        authority: "owner-only",
        contextStatus: "unresolved",
        ownerInstruction: {
          kind: "defer-ambiguous",
          scope: "ambiguous-work",
          requestedEffect: "defer",
          requiresResolution: true,
        },
      }),
    ];
  }

  return [];
}

function extractSleepSpec(text: string): PersonalCareSpec["sleep"] | undefined {
  const hasSleepSignal = includesAny(text, ["นอน", "เข้านอน", "ตื่น", "หลับ"]);

  if (!hasSleepSignal) {
    return undefined;
  }

  const explicitDuration = extractSleepDuration(text);
  const startTime = extractSleepStartTime(text);
  const wakeTime = extractWakeTime(text);
  const derivedDuration =
    explicitDuration ?? (startTime && wakeTime ? hoursBetween(startTime, wakeTime) : undefined);
  const quality = extractSleepQuality(text);

  if (!explicitDuration && !startTime && !wakeTime && !quality) {
    return { quality: "unknown" };
  }

  return {
    ...(startTime ? { startTime } : {}),
    ...(wakeTime ? { wakeTime } : {}),
    ...(derivedDuration ? { durationHours: derivedDuration } : {}),
    ...(quality ? { quality } : {}),
  };
}

function extractSleepDuration(text: string): number | undefined {
  const match = text.match(/นอน(?:ประมาณ)?\s*(\d+(?:\.\d+)?)\s*ชั่วโมง/);
  return match?.[1] ? Number.parseFloat(match[1]) : undefined;
}

function extractSleepStartTime(text: string): string | undefined {
  if (includesAny(text, ["ตีหนึ่ง", "เข้านอนตีหนึ่ง"])) {
    return "01:00";
  }

  const afterSleep = text.match(/เข้านอน\s*(\d{1,2})[.:](\d{2})/);
  if (afterSleep?.[1] && afterSleep[2]) {
    return `${afterSleep[1].padStart(2, "0")}:${afterSleep[2]}`;
  }

  return undefined;
}

function extractWakeTime(text: string): string | undefined {
  if (includesAny(text, ["ตื่นหกโมงครึ่ง", "ตื่น 6 โมงครึ่ง"])) {
    return "06:30";
  }

  const afterWake = text.match(/ตื่น\s*(\d{1,2})[.:](\d{2})/);
  if (afterWake?.[1] && afterWake[2]) {
    return `${afterWake[1].padStart(2, "0")}:${afterWake[2]}`;
  }

  return undefined;
}

function extractSleepQuality(text: string): "poor" | "ok" | "good" | "unknown" | undefined {
  if (includesAny(text, ["หลับไม่ค่อยดี", "นอนไม่ค่อยดี", "นอนไม่ดี"])) {
    return "poor";
  }

  if (includesAny(text, ["หลับดี", "นอนดี"])) {
    return "good";
  }

  return undefined;
}

function hoursBetween(startTime: string, wakeTime: string): number {
  const [startHour = 0, startMinute = 0] = startTime.split(":").map(Number);
  const [wakeHour = 0, wakeMinute = 0] = wakeTime.split(":").map(Number);
  const start = startHour * 60 + startMinute;
  let wake = wakeHour * 60 + wakeMinute;

  if (wake <= start) {
    wake += 24 * 60;
  }

  return Number(((wake - start) / 60).toFixed(2));
}

function extractMealSpecs(text: string): readonly NonNullable<PersonalCareSpec["meal"]>[] {
  const meals: NonNullable<PersonalCareSpec["meal"]>[] = [];

  for (const meal of [
    { name: "breakfast" as const, labels: ["ข้าวเช้า", "มื้อเช้า"] },
    { name: "lunch" as const, labels: ["ข้าวเที่ยง", "มื้อเที่ยง", "กลางวัน"] },
    { name: "dinner" as const, labels: ["ข้าวเย็น", "มื้อเย็น", "เย็นนี้"] },
  ]) {
    if (!includesAny(text, meal.labels)) continue;

    const mealText = meal.labels.find((label) => text.includes(label)) ?? "";
    const status = mealStatusNear(text, mealText);
    meals.push({ meal: meal.name, status });
  }

  return meals;
}

function mealStatusNear(text: string, mealText: string): MealStatus {
  if (text.includes(`ยังไม่ได้กิน${mealText}`) || text.includes(`ยังไม่กิน${mealText}`)) {
    return "not-yet-eaten";
  }

  if (text.includes(`กิน${mealText}แล้ว`)) {
    return "eaten";
  }

  const mealIndex = text.indexOf(mealText);
  const localText = mealIndex >= 0 ? text.slice(Math.max(0, mealIndex - 16), mealIndex + 32) : text;

  if (includesAny(localText, ["ยังไม่ได้", "ไม่ได้กิน", "ยังไม่กิน"])) {
    return "not-yet-eaten";
  }

  if (includesAny(localText, ["กินแล้ว", "แล้ว"])) {
    return "eaten";
  }

  return "unknown";
}

function extractCapacitySpec(text: string): PersonalCareSpec["capacity"] | undefined {
  if (includesAny(text, ["พลังเหลือครึ่ง", "พลังเหลือประมาณครึ่ง", "พลังเหลือครึ่งเดียว"])) {
    return { level: "limited", label: "วันนี้พลังงานเหลือประมาณครึ่งเดียว" };
  }

  if (includesAny(text, ["เหนื่อยมาก", "สมองไม่ค่อยไป", "ทำงานหนักไม่ไหว", "พลังต่ำ"])) {
    return { level: "low", label: "วันนี้พลังงานต่ำ" };
  }

  if (includesAny(text, ["วันนี้โอเค", "พอไหว", "ยังไหว"])) {
    return { level: "ok", label: "วันนี้พอไหว" };
  }

  if (includesAny(text, ["พลังดี", "พร้อมมาก"])) {
    return { level: "good", label: "วันนี้พลังงานดี" };
  }

  return undefined;
}

function summarizeSleep(sleep: NonNullable<PersonalCareSpec["sleep"]>): string {
  if (sleep.durationHours) {
    return `นอนประมาณ ${formatHours(sleep.durationHours)} ชั่วโมง`;
  }

  if (sleep.startTime && sleep.wakeTime) {
    return `เข้านอน ${sleep.startTime} • ตื่น ${sleep.wakeTime}`;
  }

  if (sleep.quality === "poor") {
    return "เมื่อคืนหลับไม่ค่อยดี";
  }

  if (sleep.quality === "good") {
    return "เมื่อคืนหลับดี";
  }

  return "มีข้อมูลการนอนที่ยังไม่ครบ";
}

function summarizeMeal(meal: NonNullable<PersonalCareSpec["meal"]>): string {
  const mealName = mealLabel(meal.meal);
  const status =
    meal.status === "eaten"
      ? "กินแล้ว"
      : meal.status === "not-yet-eaten"
        ? "ยังไม่ได้กิน"
        : "ยังไม่ชัด";

  return `${mealName}: ${status}`;
}

function mealLabel(meal: MealName): string {
  switch (meal) {
    case "breakfast":
      return "มื้อเช้า";
    case "lunch":
      return "มื้อกลางวัน";
    case "dinner":
      return "มื้อเย็น";
  }
}

function formatHours(hours: number): string {
  return Number.isInteger(hours) ? String(hours) : String(hours).replace(".", ".");
}

function extractProjectName(text: string): string {
  const marker = "เรื่อง";
  const markerIndex = text.indexOf(marker);

  if (markerIndex === -1) {
    return text;
  }

  const projectName = text.slice(markerIndex + marker.length).trim();
  return projectName.length > 0 ? projectName : text;
}

function extractReminder(text: string): ReminderSpec | undefined {
  if (!text.includes("เตือน")) {
    return undefined;
  }

  const time = extractExplicitReminderTime(text);
  const timeLabel = time ? ` ${time} น.` : "";

  if (text.includes("ครึ่งชั่วโมง") || text.includes("30 นาที")) {
    return { offsetMinutes: 30, label: "เตือนก่อน 30 นาที", ...(time ? { time } : {}) };
  }

  if (text.includes("1 ชั่วโมง") || text.includes("หนึ่งชั่วโมง")) {
    return { offsetMinutes: 60, label: "เตือนก่อน 1 ชั่วโมง", ...(time ? { time } : {}) };
  }

  if (text.includes("10 นาที")) {
    return { offsetMinutes: 10, label: "เตือนก่อน 10 นาที", ...(time ? { time } : {}) };
  }

  if (text.includes("1 วัน") || text.includes("หนึ่งวัน")) {
    return { offsetMinutes: 1440, label: "เตือนก่อน 1 วัน", ...(time ? { time } : {}) };
  }

  if (includesAny(text, ["กินข้าว", "มื้อ"])) {
    return {
      offsetMinutes: 0,
      label: `เตือนเรื่องมื้ออาหาร${timeLabel}`,
      ...(time ? { time } : {}),
    };
  }

  if (includesAny(text, ["เข้านอน", "นอน"])) {
    return {
      offsetMinutes: 0,
      label: `เตรียมเข้านอน${timeLabel}`,
      ...(time ? { time } : {}),
    };
  }

  return { offsetMinutes: 0, label: `เตือนเมื่อถึงเวลา${timeLabel}`, ...(time ? { time } : {}) };
}

function extractExplicitReminderTime(text: string): string | undefined {
  const numericTime = text.match(/\d{1,2}[.:]\d{2}/)?.[0].replace(".", ":");

  if (numericTime) {
    return numericTime.padStart(5, "0");
  }

  if (includesAny(text, ["หนึ่งทุ่ม", "ทุ่มหนึ่ง"])) {
    return "19:00";
  }

  if (includesAny(text, ["ห้าทุ่มครึ่ง", "23.30", "23:30"])) {
    return "23:30";
  }

  if (includesAny(text, ["ห้าทุ่ม", "23:00", "23.00"])) {
    return "23:00";
  }

  return undefined;
}

function extractAmount(text: string): number {
  const amount = text.match(/\d[\d,]*/)?.[0].replaceAll(",", "");
  return amount ? Number.parseInt(amount, 10) : 0;
}

function formatAmount(amount: number): string {
  return new Intl.NumberFormat("th-TH").format(amount);
}

function extractFinanceLabel(text: string, direction: FinanceDirection): string {
  if (direction === "income") {
    if (text.includes("ค่าสอนพิเศษ")) {
      return "ค่าสอนพิเศษ";
    }

    if (text.includes("ค่าสอน")) {
      return "ค่าสอน";
    }

    return "รายรับ";
  }

  if (text.includes("ถ่ายเอกสาร")) {
    return "ค่าถ่ายเอกสาร";
  }

  if (text.includes("พริ้นท์")) {
    return "ค่าพริ้นท์";
  }

  return "ค่าปริ้นท์";
}

function extractFinanceDate(text: string): FinanceSpec["dateText"] {
  if (text.includes("เมื่อวาน")) {
    return "yesterday";
  }

  if (text.includes("พรุ่งนี้")) {
    return "tomorrow";
  }

  if (text.includes("วันนี้")) {
    return "today";
  }

  return "unknown";
}

function extractPossibleFinanceContext(text: string): string | undefined {
  if (text.includes("งานฝุ่น")) {
    return "งานฝุ่น";
  }

  if (text.includes("4/1")) {
    return "4/1";
  }

  return undefined;
}

function extractRelativeDateText(text: string): string {
  if (text.includes("เมื่อวาน")) {
    return "เมื่อวาน";
  }

  if (text.includes("วันนี้")) {
    return "วันนี้";
  }

  if (text.includes("พรุ่งนี้")) {
    return "พรุ่งนี้";
  }

  return "ไม่ระบุวัน";
}

function extractScheduleDateText(text: string): string {
  if (text.includes("พรุ่งนี้")) {
    return "พรุ่งนี้";
  }

  if (text.includes("วันนี้")) {
    return "วันนี้";
  }

  if (text.includes("วันจันทร์")) {
    return "วันจันทร์";
  }

  return "ไม่ระบุวัน";
}

function extractScheduleTime(text: string): string {
  const time = text.match(/\d{1,2}[.:]\d{2}/)?.[0].replace(".", ":");
  if (time) {
    return `${time} น.`;
  }

  if (includesAny(text, ["สิบโมง", "10 โมง"])) {
    return "10:00 น.";
  }

  if (includesAny(text, ["ก่อนเที่ยง", "เที่ยง"])) {
    return "12:00 น.";
  }

  if (includesAny(text, ["ก่อนบ่ายสาม", "บ่ายสาม"])) {
    return "15:00 น.";
  }

  return "ไม่ระบุเวลา";
}

function extractDeadlineTime(text: string): string {
  if (includesAny(text, ["ก่อนบ่ายสาม", "บ่ายสาม"])) {
    return "ก่อน 15:00 น.";
  }

  if (includesAny(text, ["ก่อนเที่ยง", "เที่ยง"])) {
    return "ก่อน 12:00 น.";
  }

  const time = text.match(/\d{1,2}[.:]\d{2}/)?.[0].replace(".", ":");
  return time ? `${time} น.` : "ไม่ระบุเวลา";
}

function extractSubmissionTarget(text: string): string {
  if (text.includes("รายงาน")) {
    return "ส่งรายงาน";
  }

  if (text.includes("ข้อสอบ")) {
    return "ส่งข้อสอบ";
  }

  return "เรื่องที่ต้องส่ง";
}

function extractInformationSummary(text: string): string {
  if (includesAny(text, ["หลักสูตร", "อ้างอิง"])) {
    return "เก็บไฟล์แนวทางหลักสูตรไว้ใช้อ้างอิง";
  }

  if (includesAny(text, ["PDF", "pdf"])) {
    return "เก็บ PDF ไว้อ่านทีหลัง";
  }

  return text;
}
