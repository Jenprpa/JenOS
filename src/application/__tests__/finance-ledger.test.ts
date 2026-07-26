import { describe, expect, it } from "vitest";
import {
  createNaturalInput,
  deterministicNaturalInterpreter,
  routeCandidate,
} from "../natural-routing";
import {
  buildLedger,
  buildLedgerEntry,
  calculateLedgerTotals,
  formatThaiBaht,
} from "../finance-ledger";
import { buildDestinationView } from "../routed-destinations";

const now = "2026-07-26T03:00:00.000Z";

function interpretationFor(text: string) {
  return deterministicNaturalInterpreter.interpret(
    createNaturalInput({
      id: `input-${text.length}`,
      text,
      enteredAt: now,
    }),
  );
}

function acceptedFinance(text: string, id: string) {
  const finance = interpretationFor(text).candidates.find(
    (candidate) => candidate.family === "finance",
  )!;
  const record = routeCandidate(finance, {
    actor: "owner",
    outcome: "accepted",
    routedRecordId: id,
    decidedAt: now,
  });

  if (!record) {
    throw new Error("Expected accepted finance record.");
  }

  return record;
}

describe("finance ledger", () => {
  it("obvious expense becomes an expense candidate", () => {
    const finance = interpretationFor("วันนี้จ่ายค่าถ่ายเอกสาร 420 บาท").candidates.find(
      (candidate) => candidate.family === "finance",
    );

    expect(finance?.finance?.direction).toBe("expense");
  });

  it("obvious income becomes an income candidate", () => {
    const finance = interpretationFor("วันนี้ได้ค่าสอนพิเศษ 1,500 บาท").candidates.find(
      (candidate) => candidate.family === "finance",
    );

    expect(finance?.finance?.direction).toBe("income");
  });

  it("preserves amount and date", () => {
    const record = acceptedFinance("วันนี้ได้ค่าสอนพิเศษ 1,500 บาท", "record-income");

    expect(record.finance?.amount).toBe(1500);
    expect(record.finance?.dateText).toBe("today");
  });

  it("does not invent direction for ambiguous finance input", () => {
    const finance = interpretationFor("เงิน 500 เรื่อง 4/1").candidates.find(
      (candidate) => candidate.family === "finance",
    );

    expect(finance?.authority).toBe("clarification-required");
    expect(finance?.finance).toBeUndefined();
  });

  it("accepted finance route creates one ledger entry", () => {
    const record = acceptedFinance("วันนี้จ่ายค่าถ่ายเอกสาร 420 บาท", "record-expense");

    expect(buildLedger([record])).toHaveLength(1);
  });

  it("rejected finance route creates no ledger entry", () => {
    const finance = interpretationFor("วันนี้จ่ายค่าถ่ายเอกสาร 420 บาท").candidates.find(
      (candidate) => candidate.family === "finance",
    )!;
    const rejected = routeCandidate(finance, {
      actor: "owner",
      outcome: "rejected",
      routedRecordId: "record-rejected",
      decidedAt: now,
    });

    expect(buildLedger(rejected ? [rejected] : [])).toHaveLength(0);
  });

  it("calculates ledger totals", () => {
    const expense = acceptedFinance("วันนี้จ่ายค่าถ่ายเอกสาร 420 บาท", "record-expense");
    const income = acceptedFinance("วันนี้ได้ค่าสอนพิเศษ 1,500 บาท", "record-income");

    expect(calculateLedgerTotals(buildLedger([expense, income]))).toEqual({
      income: 1500,
      expense: 420,
      net: 1080,
    });
  });

  it("one ledger record can appear on Life Board and Finance view without duplication", () => {
    const record = acceptedFinance("วันนี้จ่ายค่าถ่ายเอกสาร 420 บาท", "record-expense");
    const ledgerEntry = buildLedgerEntry(record);
    const view = buildDestinationView([record]);
    const financeBoardItems = view.sections.find(
      (section) => section.destination === "finance",
    )?.items;

    expect(ledgerEntry?.sourceRecordId).toBe(record.id);
    expect(financeBoardItems).toHaveLength(1);
    expect(financeBoardItems?.[0]?.sourceRecordId).toBe(record.id);
  });

  it("formats Thai baht", () => {
    expect(formatThaiBaht(1500)).toContain("1,500");
  });
});
