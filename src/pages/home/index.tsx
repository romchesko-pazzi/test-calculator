import React, { useState } from 'react';

import {
  BorderRight,
  HomeWrapper,
  MainCalculateBlock,
  ToggleHistory,
} from '@/assets/commonStyles/home';
import { Display } from '@/components/Display';
import { History } from '@/components/History';
import { Keyboard } from '@/components/Keyboard';

export const Home = () => {
  const [isHistoryShowed, setIsHistoryShowed] = useState(true);
  const toggleHistory = () => setIsHistoryShowed(!isHistoryShowed);

  return (
    <HomeWrapper>
      <MainCalculateBlock>
        <Display />
        <Keyboard />
        <BorderRight />
        <ToggleHistory onClick={toggleHistory} isHistoryShowed={isHistoryShowed} />
      </MainCalculateBlock>
      {isHistoryShowed && <History />}
    </HomeWrapper>
  );
};
