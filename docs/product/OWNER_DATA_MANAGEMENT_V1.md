# Owner Data Management v1

Status: Implemented for Sprint 2.4 Owner Pilot

## Purpose

Give the owner visible control over local JenOS data.

## Owner-Facing Capabilities

- show that data is stored on this browser/device,
- export backup,
- restore from backup with confirmation,
- clear local data with confirmation.

## Local-First Communication

JenOS should clearly say:

- data is local to this browser/device,
- there is no JenOS cloud sync yet,
- there is no external calendar sync yet,
- clearing browser storage may remove data,
- backup is recommended.

## Deletion

Clear local data:

- must be deliberate,
- requires explicit confirmation,
- removes durable local owner data,
- must not secretly retain deleted local data.

Theme reset is separate from data deletion.

## Non-Goals

- developer database console,
- cloud sync,
- authentication,
- multi-device sync,
- partial merge restore.
