import React from 'react';

import { Display } from './components/display/Display';
import { HistoryComponent } from './components/history';
import { Keyboard } from './components/keyboard';
import { HomeWrapper, MainCalculateBlock } from './styled';

export const Home = () => {
  return (
    <HomeWrapper>
      <MainCalculateBlock>
        <Display />
        <Keyboard />
      </MainCalculateBlock>
      <HistoryComponent />
    </HomeWrapper>
  );
};
