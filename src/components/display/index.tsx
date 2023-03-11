import React from 'react';

import {
  CurrentOperand,
  DisplayBox,
  Operation,
  PreviousOperand,
  PreviousOperandBox,
  Line,
} from 'components/display/styled';
import { useAppSelector } from 'hooks/useSelector';

export const Display = () => {
  const currentOperand = useAppSelector(state => state.calculator.currentOperand);
  const previousOperand = useAppSelector(state => state.calculator.previousOperand);
  const operation = useAppSelector(state => state.calculator.operation);

  return (
    <DisplayBox>
      <PreviousOperandBox>
        <PreviousOperand data-cy="prevOperand">{previousOperand}</PreviousOperand>
        <Operation>{operation}</Operation>
      </PreviousOperandBox>
      <CurrentOperand data-cy="currOperand">{currentOperand}</CurrentOperand>
      <Line />
    </DisplayBox>
  );
};
