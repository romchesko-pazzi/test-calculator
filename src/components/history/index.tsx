import React, { useEffect } from 'react';

import { useActions } from '../../hooks/useActions';
import { calculatorActions } from '../../store/calculatorReducer';
import { getDataFromLocalStorage } from '../../utils/getDataFromLocalStorage';

import { Element, HistoryBox, Title } from 'components/history/styled';
import { useAppSelector } from 'hooks/useSelector';

export const History = () => {
  const savedData = useAppSelector(state => state.calculator.savedData);
  const { saveToStore, clearOperationsStore } = useActions(calculatorActions);

  useEffect(() => {
    const storedData = getDataFromLocalStorage('operationsHistoryFunction');

    if (storedData) {
      saveToStore(storedData);
    }

    return () => {
      clearOperationsStore();
    };
  }, []);

  return (
    <HistoryBox data-cy="history">
      <Title>History</Title>
      {savedData.map(item => (
        <Element data-cy="historyElement" key={item.id}>
          {`${item.previousOperand}`}
          {`${item.operation}`}
          {`${item.currentOperand}`}
          {` = ${item.result}`}
        </Element>
      ))}
    </HistoryBox>
  );
};
