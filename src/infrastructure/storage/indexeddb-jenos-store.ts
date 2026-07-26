import type { PersistedJenOSDataV1 } from "../../application/persistence-model";
import { createEmptyPersistedData, loadPersistedData } from "../../application/persistence-model";

const databaseName = "jenos-local";
const databaseVersion = 1;
const storeName = "snapshots";
const ownerDataKey = "owner-data";

export class IndexedDbJenOSStore {
  async load(): Promise<PersistedJenOSDataV1> {
    if (!hasIndexedDb()) {
      return createEmptyPersistedData();
    }

    const database = await openDatabase();
    const raw = await readSnapshot(database);
    return loadPersistedData(raw).data;
  }

  async save(data: PersistedJenOSDataV1): Promise<void> {
    if (!hasIndexedDb()) {
      return;
    }

    const database = await openDatabase();
    await writeSnapshot(database, data);
  }

  async clear(): Promise<void> {
    if (!hasIndexedDb()) {
      return;
    }

    const database = await openDatabase();
    await deleteSnapshot(database);
  }
}

function hasIndexedDb(): boolean {
  return typeof indexedDB !== "undefined";
}

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(databaseName, databaseVersion);

    request.onupgradeneeded = () => {
      const database = request.result;

      if (!database.objectStoreNames.contains(storeName)) {
        database.createObjectStore(storeName);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Unable to open JenOS storage."));
  });
}

function readSnapshot(database: IDBDatabase): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(storeName, "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.get(ownerDataKey);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Unable to read JenOS storage."));
  });
}

function writeSnapshot(database: IDBDatabase, data: PersistedJenOSDataV1): Promise<void> {
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);
    store.put(data, ownerDataKey);

    transaction.oncomplete = () => resolve();
    transaction.onerror = () =>
      reject(transaction.error ?? new Error("Unable to save JenOS storage."));
  });
}

function deleteSnapshot(database: IDBDatabase): Promise<void> {
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);
    store.delete(ownerDataKey);

    transaction.oncomplete = () => resolve();
    transaction.onerror = () =>
      reject(transaction.error ?? new Error("Unable to clear JenOS storage."));
  });
}
