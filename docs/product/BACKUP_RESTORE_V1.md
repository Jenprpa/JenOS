# Backup Restore v1

Status: Implemented for Sprint 2.4 Owner Pilot

## Backup

Owner can export a JSON backup file named:

```text
jenos-backup-YYYY-MM-DD.json
```

Backup includes:

- backup format version,
- export timestamp,
- schema version,
- durable owner records,
- theme preference.

Backup excludes transient UI state.

## Restore

Restore flow:

1. owner selects JSON backup file,
2. JenOS validates basic format/version,
3. JenOS shows a preview,
4. owner explicitly confirms replacement,
5. JenOS replaces local data with backup data.

Full replacement restore is accepted for Sprint 2.4.

Merge restore is deferred.

## Invalid Backup

Invalid/corrupt backup is rejected safely. Current data is not destroyed.

## Boundary

Backup/restore is owner-controlled local data management. It is not cloud sync.
