import React from 'react';

import {
  CurrentOperand,
  DisplayBox,
  Line,
  Operation,
  PreviousOperand,
  PreviousOperandBox,
} from 'components/display/styled';

export class DisplayCC extends React.Component<any> {
  render() {
    const { currentOperand, previousOperand, operation } = this.props;

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
  }
}
