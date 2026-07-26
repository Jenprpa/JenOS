# Personal Care Privacy V1

## Sensitivity

Personal Care data is sensitive because it describes the owner.

V1 treats it as local-first owner data.

## Storage

Data is stored locally in the browser through the Sprint 2.4 persistence foundation.

Personal Care records are included in:

- Local persistence.
- Owner-requested backup/export.
- Restore.
- Clear local data.

## External Access

V1 does not send Personal Care data to:

- Cloud sync.
- AI providers.
- Wearable providers.
- Calendar providers.
- Medical services.

No real AI provider is integrated in this sprint.

## Logging

JenOS should avoid unnecessary debug logging of raw Personal Care content.

## Encryption

V1 does not claim encryption.

If encryption is added later, it requires explicit technical and product review.

## Deletion

Clear local data removes Personal Care records along with other persisted JenOS records.

Backups remain under owner control.

