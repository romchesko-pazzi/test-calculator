import React from 'react';
import { Button } from 'assets/buttons/buttonStyle';
import { Operations } from 'constants/operations';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useSelector';
import { calculatorActions } from 'store/calculatorReducer';

export const OperationButton = ({ operationType, isCancelBtn }: IOperationButton) => {
  const { clearAll, chooseOperation, makeCalculations, removeElement } =
    useActions(calculatorActions);
  const isError = useAppSelector(state => state.calculator.isError);
  const clickHandler = () => {
    if (operationType === Operations.removeAll) {
      clearAll();

      return;
    }
    if (operationType === Operations.equals) {
      makeCalculations();

      return;
    }
    if (operationType === Operations.removeElement) {
      removeElement();

      return;
    }
    chooseOperation(operationType);
  };

  return (
    <Button disabled={isError && !isCancelBtn} onClick={clickHandler} type="button">
      {operationType}
    </Button>
  );
};

interface IOperationButton {
  operationType: Operations;
  isCancelBtn: boolean;
}
