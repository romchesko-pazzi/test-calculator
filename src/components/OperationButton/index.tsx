import React, { memo } from 'react';

import { Button } from '@/assets/buttons/buttonStyle';
import { Operations } from '@/constants/operations';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useSelector';
import { calculatorActions } from '@/store/calculatorReducer';

import { IOperationButton } from './interface';

export const OperationButton = memo(
  ({ operationType, isCancelBtn }: IOperationButton) => {
    const { clearAll, chooseOperation, makeCalculations, removeElement } =
      useActions(calculatorActions);
    const isError = useAppSelector(state => state.calculator.isError);

    const clickHandler = () => {
      switch (operationType) {
        case Operations.removeAll:
          clearAll();
          break;
        case Operations.removeElement:
          removeElement();
          break;
        case Operations.equals:
          makeCalculations();
          break;
        default:
          chooseOperation(operationType);
      }
    };

    return (
      <Button disabled={isError && !isCancelBtn} onClick={clickHandler} type="button">
        {operationType}
      </Button>
    );
  },
);
