import React from 'react';

import {
  CurrentOperand,
  DisplayBox,
  Operation,
  PreviousOperand,
  PreviousOperandBox,
  Line,
} from './displayStyles';

import { useAppSelector } from 'hooks/useSelector';
import { formatOperand } from 'utils/formatOperand';

export const Display = () => {
  const currentOperand = useAppSelector(state => state.calc.currentOperand);
  const previousOperand = useAppSelector(state => state.calc.previousOperand);
  const operation = useAppSelector(state => state.calc.operation);

  return (
    <DisplayBox>
      <PreviousOperandBox>
        <PreviousOperand>{formatOperand(previousOperand)}</PreviousOperand>
        <Operation>{operation}</Operation>
      </PreviousOperandBox>
      <CurrentOperand>{formatOperand(currentOperand)}</CurrentOperand>
      <Line />
    </DisplayBox>
  );
};
