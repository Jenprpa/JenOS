export interface StoragePort<TRecord> {
  loadAll(): Promise<readonly TRecord[]>;
  save(record: TRecord): Promise<void>;
  deleteById(id: string): Promise<void>;
  clear(): Promise<void>;
}
