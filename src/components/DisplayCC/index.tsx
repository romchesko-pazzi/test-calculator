import React, { Component } from 'react';

import {
  CurrentOperand,
  DisplayBox,
  Line,
  PreviousOperand,
  PreviousOperandBox,
} from '@/assets/commonStyles/display';
import { IBaseStore } from '@/store/interfaces';

export class DisplayCC extends Component<IBaseStore> {
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
