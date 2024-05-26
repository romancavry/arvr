import * as React from 'react';

import { ClientError } from 'screens/Errors/components';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<unknown, ErrorBoundaryState> {
  constructor(props: unknown) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    // eslint-disable-next-line
    if (this.state.hasError) {
      return <ClientError />;
    }

    // @ts-ignore
    return this.props.children; // eslint-disable-line
  }
}

export default ErrorBoundary;
