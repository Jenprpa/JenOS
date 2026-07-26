import type { RouteCandidate, RoutedRecord } from "./natural-routing";

export interface InstructionResolution {
  readonly instruction: RouteCandidate;
  readonly toDefer: readonly RoutedRecord[];
  readonly toKeep: readonly RoutedRecord[];
  readonly reason: string;
}

export function resolveOwnerInstruction(
  instruction: RouteCandidate,
  records: readonly RoutedRecord[],
): InstructionResolution | null {
  if (instruction.ownerInstruction?.kind !== "defer-non-urgent") {
    if (instruction.ownerInstruction?.kind !== "defer-ambiguous") {
      return null;
    }

    return {
      instruction,
      toDefer: [],
      toKeep: records.filter(isWorkLikeRecord).filter(isDeadlineBound),
      reason:
        "คำว่าไม่สำคัญยังไม่มีหลักฐานใน JenOS ว่า record ไหนเข้าเงื่อนไข จึงไม่เลื่อนอะไรให้อัตโนมัติ",
    };
  }

  const workRecords = records.filter(isWorkLikeRecord);
  const toDefer = workRecords.filter((record) => !isDeadlineBound(record) && !record.deferred);
  const toKeep = workRecords.filter((record) => isDeadlineBound(record));

  return {
    instruction,
    toDefer,
    toKeep,
    reason: "เจ้าของสั่งให้เลื่อนงานที่ไม่รีบ และ JenOS resolve จาก evidence เท่าที่มี",
  };
}

export function applyInstructionResolution(input: {
  readonly records: readonly RoutedRecord[];
  readonly instructionRecord: RoutedRecord;
  readonly resolution: InstructionResolution;
  readonly decidedAt: string;
}): readonly RoutedRecord[] {
  const deferIds = new Set(input.resolution.toDefer.map((record) => record.id));

  return [
    input.instructionRecord,
    ...input.records.map((record) =>
      deferIds.has(record.id)
        ? {
            ...record,
            deferred: {
              reason: input.resolution.reason,
              decidedAt: input.decidedAt,
              instructionRecordId: input.instructionRecord.id,
            },
          }
        : record,
    ),
  ];
}

function isWorkLikeRecord(record: RoutedRecord): boolean {
  return ["action", "information", "project"].includes(record.family);
}

function isDeadlineBound(record: RoutedRecord): boolean {
  if (record.schedule || record.reminder) {
    return true;
  }

  const evidenceText = `${record.title} ${record.summary} ${record.sourceText}`;

  return includesAny(evidenceText, [
    "ต้องส่ง",
    "ก่อน",
    "วันนี้",
    "พรุ่งนี้",
    "deadline",
    "ด่วน",
    "ใช้พรุ่งนี้",
    "กำหนดเวลา",
  ]);
}

function includesAny(text: string, values: readonly string[]): boolean {
  return values.some((value) => text.includes(value));
}
