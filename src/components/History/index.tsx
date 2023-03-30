import { useEffect } from 'react';

import { Element, HistoryBox, Title } from '@/assets/commonStyles/history';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useSelector';
import { calculatorActions } from '@/store/calculatorReducer';
import { getOperationsHistory } from '@/utils/localStorage/getOperationsHistory';

export const History = () => {
  const savedData = useAppSelector(state => state.calculator.savedData);
  const { saveToStore, clearOperationsStore } = useActions(calculatorActions);

  useEffect(() => {
    const storedData = getOperationsHistory('operationsHistoryFunction');

    if (storedData) {
      saveToStore(storedData);
    }

    return () => {
      clearOperationsStore();
    };
  }, [clearOperationsStore, saveToStore]);

  return (
    <HistoryBox data-cy="history">
      <Title>History</Title>
      {savedData.map(({ expression, id, result }) => (
        <Element data-cy="historyElement" key={id}>
          {expression} = {result}
        </Element>
      ))}
    </HistoryBox>
  );
};
