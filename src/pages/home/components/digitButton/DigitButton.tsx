import React from 'react';

import { Button } from 'assets/buttons/buttonStyle';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { addDigit } from 'store/calcReducer';

export const DigitButton = ({ digit }: IDigitButton) => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(addDigit(digit));
  };

  return (
    <Button onClick={clickHandler} type="button">
      {digit}
    </Button>
  );
};

interface IDigitButton {
  digit: string;
}
