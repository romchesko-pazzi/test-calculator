import { v4 } from 'uuid';

import { getOperationsHistory } from '@/utils/localStorage/getOperationsHistory';
import { setItemToLocalStorage } from '@/utils/localStorage/setItemToLocalStorage';

export const saveToHistory = (expression: string, result: string) => {
  const storedOperations = getOperationsHistory('operationsHistoryFunction');

  storedOperations.unshift({ id: v4(), expression, result });
  setItemToLocalStorage('operationsHistoryFunction', JSON.stringify(storedOperations));
};
