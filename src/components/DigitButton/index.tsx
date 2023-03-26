import React, { memo } from 'react';

import { Button } from '@/assets/buttons/buttonStyle';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useSelector';
import { calculatorActions } from '@/store/calculatorReducer';

export const DigitButton = memo(({ digit }: { digit: string }) => {
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
});
