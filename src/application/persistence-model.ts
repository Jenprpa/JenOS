import type { RoutedRecord } from "./natural-routing";
import { budgieTheme, type OwnerTheme } from "./theme-system";

export const currentPersistenceSchemaVersion = 1;
export const backupFormatVersion = 1;

export interface PersistedJenOSDataV1 {
  readonly schemaVersion: 1;
  readonly exportedAt?: string;
  readonly routedRecords: readonly RoutedRecord[];
  readonly theme: OwnerTheme;
}

export interface JenOSBackupV1 {
  readonly backupFormatVersion: 1;
  readonly app: "JenOS";
  readonly exportedAt: string;
  readonly data: PersistedJenOSDataV1;
}

export interface LoadRecoveryReport {
  readonly invalidRecordCount: number;
  readonly unsupportedVersion?: number;
}

export interface LoadResult {
  readonly data: PersistedJenOSDataV1;
  readonly recovery: LoadRecoveryReport;
}

export function createEmptyPersistedData(): PersistedJenOSDataV1 {
  return {
    schemaVersion: currentPersistenceSchemaVersion,
    routedRecords: [],
    theme: budgieTheme,
  };
}

export function createPersistedData(input: {
  readonly routedRecords: readonly RoutedRecord[];
  readonly theme: OwnerTheme;
}): PersistedJenOSDataV1 {
  return {
    schemaVersion: currentPersistenceSchemaVersion,
    routedRecords: input.routedRecords,
    theme: input.theme,
  };
}

export function loadPersistedData(raw: unknown): LoadResult {
  if (!isRecord(raw)) {
    return { data: createEmptyPersistedData(), recovery: { invalidRecordCount: 0 } };
  }

  const schemaVersion = Number(raw.schemaVersion);

  if (schemaVersion > currentPersistenceSchemaVersion) {
    return {
      data: createEmptyPersistedData(),
      recovery: {
        invalidRecordCount: 0,
        unsupportedVersion: schemaVersion,
      },
    };
  }

  const migrated = migrateToV1(raw);
  const routedRecords = Array.isArray(migrated.routedRecords) ? migrated.routedRecords : [];
  const validRoutedRecords = routedRecords.filter(isRoutedRecord);

  return {
    data: {
      schemaVersion: currentPersistenceSchemaVersion,
      routedRecords: validRoutedRecords,
      theme: isOwnerTheme(migrated.theme) ? migrated.theme : budgieTheme,
    },
    recovery: {
      invalidRecordCount: routedRecords.length - validRoutedRecords.length,
    },
  };
}

export function createBackup(data: PersistedJenOSDataV1, exportedAt: string): JenOSBackupV1 {
  return {
    backupFormatVersion,
    app: "JenOS",
    exportedAt,
    data: {
      ...data,
      exportedAt,
    },
  };
}

export function parseBackup(raw: unknown): LoadResult {
  if (!isRecord(raw) || raw.app !== "JenOS" || raw.backupFormatVersion !== backupFormatVersion) {
    throw new Error("Invalid JenOS backup file.");
  }

  return loadPersistedData(raw.data);
}

function migrateToV1(raw: Record<string, unknown>): Record<string, unknown> {
  if (!("schemaVersion" in raw)) {
    return {
      schemaVersion: 1,
      routedRecords: raw.routedRecords ?? [],
      theme: raw.theme ?? budgieTheme,
    };
  }

  return raw;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isRoutedRecord(value: unknown): value is RoutedRecord {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.id === "string" &&
    typeof value.candidateId === "string" &&
    typeof value.inputId === "string" &&
    typeof value.family === "string" &&
    typeof value.title === "string" &&
    typeof value.summary === "string" &&
    typeof value.routedAt === "string" &&
    typeof value.sourceText === "string" &&
    value.ownerDecision === "accepted"
  );
}

function isOwnerTheme(value: unknown): value is OwnerTheme {
  if (!isRecord(value) || !isRecord(value.tokens)) {
    return false;
  }

  return (
    typeof value.preset === "string" &&
    typeof value.tokens.primaryAccent === "string" &&
    typeof value.tokens.secondaryAccent === "string" &&
    typeof value.tokens.highlightAccent === "string"
  );
}
