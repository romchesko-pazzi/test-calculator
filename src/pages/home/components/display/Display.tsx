import React from 'react';

import { useAppSelector } from 'hooks/useSelector';
import {
  CurrentOperand,
  DisplayBox,
  Operation,
  PreviousOperand,
  PreviousOperandBox,
  Line,
} from 'pages/home/components/display/styled';
import { formatOperand } from 'utils/formatOperand';

export const Display = () => {
  const currentOperand = useAppSelector(state => state.calc.currentOperand);
  const previousOperand = useAppSelector(state => state.calc.previousOperand);
  const operation = useAppSelector(state => state.calc.operation);

  return (
    <DisplayBox>
      <PreviousOperandBox>
        <PreviousOperand data-cy="prevOperand">
          {formatOperand(previousOperand)}
        </PreviousOperand>
        <Operation>{operation}</Operation>
      </PreviousOperandBox>
      <CurrentOperand data-cy="currOperand">
        {formatOperand(currentOperand)}
      </CurrentOperand>
      <Line />
    </DisplayBox>
  );
};
