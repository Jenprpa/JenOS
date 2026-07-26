import { describe, expect, it } from "vitest";
import {
  createBackup,
  createPersistedData,
  loadPersistedData,
  parseBackup,
} from "../persistence-model";
import { routeCandidate, type RouteCandidate } from "../natural-routing";
import { budgieTheme } from "../theme-system";

const candidate: RouteCandidate = {
  id: "candidate-1",
  inputId: "input-1",
  family: "finance",
  title: "รายจ่าย",
  summary: "ค่าถ่ายเอกสาร 420 บาท • วันนี้",
  authority: "confirm-required",
  confidence: "demo-rule",
  contextStatus: "not-needed",
  sourceText: "วันนี้จ่ายค่าถ่ายเอกสาร 420 บาท",
  finance: {
    direction: "expense",
    amount: 420,
    currency: "THB",
    description: "ค่าถ่ายเอกสาร",
    dateText: "today",
  },
};

function acceptedRecord() {
  const record = routeCandidate(candidate, {
    actor: "owner",
    outcome: "accepted",
    routedRecordId: "record-1",
    decidedAt: "2026-07-26T04:00:00.000Z",
  });

  if (!record) {
    throw new Error("Expected accepted record.");
  }

  return record;
}

describe("persistence model", () => {
  it("loads accepted routed records after a simulated reload", () => {
    const saved = createPersistedData({ routedRecords: [acceptedRecord()], theme: budgieTheme });
    const loaded = loadPersistedData(saved);

    expect(loaded.data.routedRecords).toHaveLength(1);
    expect(loaded.data.routedRecords[0]?.id).toBe("record-1");
  });

  it("does not persist rejected candidates as truth", () => {
    const rejected = routeCandidate(candidate, {
      actor: "owner",
      outcome: "rejected",
      routedRecordId: "record-rejected",
      decidedAt: "2026-07-26T04:00:00.000Z",
    });
    const saved = createPersistedData({
      routedRecords: rejected ? [rejected] : [],
      theme: budgieTheme,
    });

    expect(loadPersistedData(saved).data.routedRecords).toHaveLength(0);
  });

  it("exports durable data with version metadata and no transient UI state", () => {
    const backup = createBackup(
      createPersistedData({ routedRecords: [acceptedRecord()], theme: budgieTheme }),
      "2026-07-26T04:00:00.000Z",
    );

    expect(backup.backupFormatVersion).toBe(1);
    expect(backup.data.schemaVersion).toBe(1);
    expect(JSON.stringify(backup)).not.toContain("candidateStatuses");
    expect(JSON.stringify(backup)).not.toContain("hover");
  });

  it("restores a valid backup", () => {
    const backup = createBackup(
      createPersistedData({ routedRecords: [acceptedRecord()], theme: budgieTheme }),
      "2026-07-26T04:00:00.000Z",
    );

    expect(parseBackup(backup).data.routedRecords).toHaveLength(1);
  });

  it("rejects invalid backup without requiring current data deletion", () => {
    expect(() => parseBackup({ app: "Other" })).toThrow("Invalid JenOS backup file.");
  });

  it("recognizes unsupported future schema version safely", () => {
    const loaded = loadPersistedData({ schemaVersion: 999, routedRecords: [acceptedRecord()] });

    expect(loaded.data.routedRecords).toHaveLength(0);
    expect(loaded.recovery.unsupportedVersion).toBe(999);
  });

  it("keeps valid records when one persisted record is malformed", () => {
    const loaded = loadPersistedData({
      schemaVersion: 1,
      routedRecords: [acceptedRecord(), { id: "broken" }],
      theme: budgieTheme,
    });

    expect(loaded.data.routedRecords).toHaveLength(1);
    expect(loaded.recovery.invalidRecordCount).toBe(1);
  });

  it("migrates a small legacy fixture without schemaVersion", () => {
    const loaded = loadPersistedData({
      routedRecords: [acceptedRecord()],
      theme: budgieTheme,
    });

    expect(loaded.data.schemaVersion).toBe(1);
    expect(loaded.data.routedRecords).toHaveLength(1);
  });
});
