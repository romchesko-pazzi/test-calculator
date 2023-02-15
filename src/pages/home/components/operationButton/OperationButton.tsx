import React from 'react';

import { Button } from 'assets/buttons/buttonStyle';
import { Operations } from 'constants/operations';
import { useActions } from 'hooks/useActions';
import { calcActions } from 'store/calcReducer';

export const OperationButton = ({ operation }: IOperationButton) => {
  const { clearAll, deleteOperand, chooseOperation, evaluate } = useActions(calcActions);
  const clickHandler = () => {
    if (operation === 'C') {
      clearAll();

      return;
    }
    if (operation === '=') {
      evaluate();

      return;
    }
    if (operation === 'CE') {
      deleteOperand();

      return;
    }
    chooseOperation(operation);
  };

  return (
    <Button onClick={clickHandler} type="button">
      {operation}
    </Button>
  );
};

interface IOperationButton {
  operation: Operations;
}
