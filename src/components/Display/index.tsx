import React from 'react';

import {
  CurrentOperand,
  DisplayBox,
  Line,
  PreviousOperand,
  PreviousOperandBox,
} from '@/assets/commonStyles/display';
import { useAppSelector } from '@/hooks/useSelector';

export const Display = () => {
  const { currentOperand, previousOperand } = useAppSelector(state => state.calculator);

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
