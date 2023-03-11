import React from 'react';

import { Button } from 'assets/buttons/buttonStyle';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useSelector';
import { calculatorActions } from 'store/calculatorReducer';

export const DigitButton = ({ digit }: IDigitButton) => {
  const isError = useAppSelector(state => state.calculator.isError);
  const { addElement } = useActions(calculatorActions);
  const clickHandler = () => {
    addElement(digit);
  };

  return (
    <Button disabled={isError} onClick={clickHandler} type="button">
      {digit}
    </Button>
  );
};

interface IDigitButton {
  digit: string;
}
