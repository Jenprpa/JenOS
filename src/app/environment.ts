export interface AppEnvironment {
  readonly name: string;
  readonly version: string;
}

export function getAppEnvironment(): AppEnvironment {
  return {
    name: import.meta.env.VITE_APP_ENV ?? "local",
    version: import.meta.env.VITE_APP_VERSION ?? "0.1.0",
  };
}
