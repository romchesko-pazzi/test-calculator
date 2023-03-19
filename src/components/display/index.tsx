import React from 'react';
import { useAppSelector } from 'hooks/useSelector';

import {
  CurrentOperand,
  DisplayBox,
  Line,
  PreviousOperand,
  PreviousOperandBox,
} from 'components/display/styled';

export const Display = () => {
  const currentOperand = useAppSelector(state => state.calculator.currentOperand);
  const previousOperand = useAppSelector(state => state.calculator.previousOperand);

  return (
    <DisplayBox>
      <PreviousOperandBox>
        <PreviousOperand data-cy="prevOperand">{previousOperand}</PreviousOperand>
      </PreviousOperandBox>
      <CurrentOperand data-cy="currOperand">{currentOperand}</CurrentOperand>
      <Line />
    </DisplayBox>
  );
};
