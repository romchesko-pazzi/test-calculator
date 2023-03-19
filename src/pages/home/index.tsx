import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Display } from 'components/display';
import { ErrorFallback } from 'components/errorBoundary/errorFallback';
import { History } from 'components/history';
import { Keyboard } from 'components/keyboard';

import { BorderRight, HomeWrapper, MainCalculateBlock, ToggleHistory } from './styled';

export const Home = () => {
  const [isHistoryShowed, setIsHistoryShowed] = useState(true);

  return (
    <HomeWrapper>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MainCalculateBlock>
          <Display />
          <Keyboard />
          <BorderRight />
          <ToggleHistory
            onClick={() => setIsHistoryShowed(!isHistoryShowed)}
            isHistoryShowed={isHistoryShowed}
          />
        </MainCalculateBlock>
        {isHistoryShowed && <History />}
      </ErrorBoundary>
    </HomeWrapper>
  );
};
