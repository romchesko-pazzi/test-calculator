import React from 'react';

import { Button } from 'assets/buttons/buttonStyle';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useSelector';
import { calcActions } from 'store/calcReducer';

export const DigitButton = ({ digit }: IDigitButton) => {
  const isError = useAppSelector(state => state.calc.isError);
  const { addElement } = useActions(calcActions);
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
