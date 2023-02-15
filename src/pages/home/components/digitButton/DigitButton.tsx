import React from 'react';

import { Button } from 'assets/buttons/buttonStyle';
import { useActions } from 'hooks/useActions';
import { calcActions } from 'store/calcReducer';

export const DigitButton = ({ digit }: IDigitButton) => {
  const { addDigit } = useActions(calcActions);
  const clickHandler = () => addDigit(digit);

  return (
    <Button onClick={clickHandler} type="button">
      {digit}
    </Button>
  );
};

interface IDigitButton {
  digit: string;
}
