import { Component, ErrorInfo } from "react";

import { Props, State } from "@/componets/ErrorBoundary/interfaces";

// import { config } from "./mock";

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry... Something went wrong</h1>;
      //   return <NotFound {...config} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
