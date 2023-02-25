import React from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import { HomeWrapper, MainCalculateBlock } from './styled';

import { Display } from 'components/display';
import { HistoryComponent } from 'components/history';
import { Keyboard } from 'components/keyboard';
import { ErrorFallback } from 'utils/errorBoundary/errorFallback';

export const Home = () => {
  return (
    <HomeWrapper>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MainCalculateBlock>
          <Display />
          <Keyboard />
        </MainCalculateBlock>
        <HistoryComponent />
      </ErrorBoundary>
    </HomeWrapper>
  );
};
