import { getTechnicalHealth } from "../application/health";
import { getAppEnvironment } from "./environment";
import { ErrorBoundary } from "../ui/ErrorBoundary";
import { TechnicalShell } from "../ui/TechnicalShell";

export function App() {
  const environment = getAppEnvironment();
  const health = getTechnicalHealth(environment.name);

  return (
    <ErrorBoundary>
      <TechnicalShell environment={environment} health={health} />
    </ErrorBoundary>
  );
}
