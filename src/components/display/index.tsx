import React from 'react';

import {
  CurrentOperand,
  DisplayBox,
  PreviousOperand,
  PreviousOperandBox,
  Line,
} from 'components/display/styled';
import { useAppSelector } from 'hooks/useSelector';

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
