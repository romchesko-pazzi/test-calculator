import React from 'react';
import { IBaseStore } from 'store/interfaces';

import {
  CurrentOperand,
  DisplayBox,
  Line,
  PreviousOperand,
  PreviousOperandBox,
} from 'components/display/styled';

export class DisplayCC extends React.Component<IBaseStore> {
  render() {
    const { currentOperand, previousOperand } = this.props;

    return (
      <DisplayBox>
        <PreviousOperandBox>
          <PreviousOperand data-cy="prevOperand">{previousOperand}</PreviousOperand>
        </PreviousOperandBox>
        <CurrentOperand data-cy="currOperand">{currentOperand}</CurrentOperand>
        <Line />
      </DisplayBox>
    );
  }
}
