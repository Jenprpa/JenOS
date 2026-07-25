export interface TechnicalHealth {
  readonly app: "JenOS";
  readonly environment: string;
  readonly storage: "abstracted";
  readonly ai: "boundary-only";
  readonly backend: "none";
}

export function getTechnicalHealth(environment: string): TechnicalHealth {
  return {
    app: "JenOS",
    environment,
    storage: "abstracted",
    ai: "boundary-only",
    backend: "none",
  };
}
