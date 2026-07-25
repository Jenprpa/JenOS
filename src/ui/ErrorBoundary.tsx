import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

interface State {
  readonly hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("JenOS shell error", {
      message: error.message,
      componentStack: info.componentStack ?? "unknown",
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <main className="shell">
          <section className="status-panel" aria-labelledby="error-title">
            <h1 id="error-title">JenOS</h1>
            <p>Technical shell failed to render.</p>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
