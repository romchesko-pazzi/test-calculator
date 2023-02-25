import React from 'react';

import { Element, History, Title, BorderLeft } from 'components/history/styled';
import { useAppSelector } from 'hooks/useSelector';

export const HistoryComponent = () => {
  const savedData = useAppSelector(state => state.calc.savedData);

  return (
    <History data-cy="history">
      <Title>History</Title>
      {savedData.map(item => (
        <Element data-cy="historyElement" key={item.id}>
          {`${item.previousOperand}`}
          {`${item.operation}`}
          {`${item.currentOperand}`}
          {` = ${item.result}`}
        </Element>
      ))}
      <BorderLeft />
    </History>
  );
};
