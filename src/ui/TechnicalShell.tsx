import type { TechnicalHealth } from "../application/health";
import type { AppEnvironment } from "../app/environment";

interface Props {
  readonly environment: AppEnvironment;
  readonly health: TechnicalHealth;
}

export function TechnicalShell({ environment, health }: Props) {
  return (
    <main className="shell">
      <section className="status-panel" aria-labelledby="app-title">
        <p className="eyebrow">Technical Foundation</p>
        <h1 id="app-title">JenOS</h1>
        <p className="summary">Personal Decision Support System</p>
        <dl className="status-grid" aria-label="Technical status">
          <div>
            <dt>Environment</dt>
            <dd>{environment.name}</dd>
          </div>
          <div>
            <dt>Version</dt>
            <dd>{environment.version}</dd>
          </div>
          <div>
            <dt>Storage</dt>
            <dd>{health.storage}</dd>
          </div>
          <div>
            <dt>AI</dt>
            <dd>{health.ai}</dd>
          </div>
          <div>
            <dt>Backend</dt>
            <dd>{health.backend}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
