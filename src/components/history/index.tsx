import React, { useEffect } from 'react';
import { useAppSelector } from 'hooks/useSelector';

import { Element, HistoryBox, Title } from 'components/history/styled';

import { useActions } from '../../hooks/useActions';
import { calculatorActions } from '../../store/calculatorReducer';
import { getDataFromLocalStorage } from '../../utils/getDataFromLocalStorage';

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
          {item.expression} = {item.result}
        </Element>
      ))}
    </HistoryBox>
  );
};
