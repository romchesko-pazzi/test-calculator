import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Calculator } from 'components/calculator';
import { ErrorFallback } from 'components/errorBoundary/errorFallback';

export class HomeCC extends React.Component {
  render() {
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Calculator />
      </ErrorBoundary>
    );
  }
}
