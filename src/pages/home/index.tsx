import React, { useState } from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import { BorderRight, HomeWrapper, MainCalculateBlock, ToggleHistory } from './styled';

import { Display } from 'components/display';
import { History } from 'components/history';
import { Keyboard } from 'components/keyboard';
import { ErrorFallback } from 'utils/errorBoundary/errorFallback';

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
