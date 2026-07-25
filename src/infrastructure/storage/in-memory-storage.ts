import type { StoragePort } from "../../application/storage-port";

export interface StoredRecord {
  readonly id: string;
}

export class InMemoryStorageAdapter<TRecord extends StoredRecord> implements StoragePort<TRecord> {
  readonly #records = new Map<string, TRecord>();

  async loadAll(): Promise<readonly TRecord[]> {
    return [...this.#records.values()];
  }

  async save(record: TRecord): Promise<void> {
    this.#records.set(record.id, record);
  }

  async deleteById(id: string): Promise<void> {
    this.#records.delete(id);
  }

  async clear(): Promise<void> {
    this.#records.clear();
  }
}
