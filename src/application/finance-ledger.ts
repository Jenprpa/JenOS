import type { FinanceDirection, RoutedRecord } from "./natural-routing";

export interface LedgerEntry {
  readonly id: string;
  readonly sourceRecordId: string;
  readonly direction: FinanceDirection;
  readonly amount: number;
  readonly currency: "THB";
  readonly description: string;
  readonly dateText: string;
  readonly context?: string;
}

export interface LedgerTotals {
  readonly income: number;
  readonly expense: number;
  readonly net: number;
}

export function buildLedgerEntry(record: RoutedRecord): LedgerEntry | null {
  if (!record.finance) {
    return null;
  }

  return {
    id: `ledger-${record.id}`,
    sourceRecordId: record.id,
    direction: record.finance.direction,
    amount: record.finance.amount,
    currency: record.finance.currency,
    description: record.finance.description,
    dateText: record.finance.dateText,
    ...(record.finance.possibleContext ? { context: record.finance.possibleContext } : {}),
  };
}

export function buildLedger(records: readonly RoutedRecord[]): readonly LedgerEntry[] {
  return records.flatMap((record) => {
    const entry = buildLedgerEntry(record);
    return entry ? [entry] : [];
  });
}

export function calculateLedgerTotals(entries: readonly LedgerEntry[]): LedgerTotals {
  return entries.reduce(
    (totals, entry) => {
      if (entry.direction === "income") {
        return {
          ...totals,
          income: totals.income + entry.amount,
          net: totals.net + entry.amount,
        };
      }

      return {
        ...totals,
        expense: totals.expense + entry.amount,
        net: totals.net - entry.amount,
      };
    },
    { income: 0, expense: 0, net: 0 },
  );
}

export function formatThaiBaht(amount: number): string {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(amount);
}
