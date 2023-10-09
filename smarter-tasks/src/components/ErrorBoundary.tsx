// import { Component, ErrorInfo, ReactNode } from "react";

// interface ErrorBoundaryState {
//   hasError: boolean;
// }

// class ErrorBoundary extends Component<
//   { children: ReactNode },
//   ErrorBoundaryState
// > {
//   constructor(props: { children: ReactNode }) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error: Error): ErrorBoundaryState {
//     return { hasError: true };
//   }

//   componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
//     console.error("Error occured:", error, errorInfo);
//   }

//   render(): ReactNode {
//     if (this.state.hasError) {
//       return <div>Something went wrong.Please Check Error in Console.</div>;
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error or send it to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;