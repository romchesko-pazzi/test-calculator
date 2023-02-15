import React from 'react';

import { Element, History, Title, BorderLeft } from './styled';

import { useAppSelector } from 'hooks/useSelector';

export const HistoryComponent = () => {
  const savedData = useAppSelector(state => state.calc.savedData);

  return (
    <History>
      <Title>History</Title>
      {savedData.map(item => (
        <Element key={item.id}>
          {`${item.previousOperand} `}
          {`${item.operation} `}
          {`${item.currentOperand} `}
          {`= ${item.result}`}
        </Element>
      ))}
      <BorderLeft />
    </History>
  );
};
