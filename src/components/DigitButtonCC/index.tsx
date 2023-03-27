import React, { Component } from 'react';

import { Button } from '@/assets/buttons/buttonStyle';
import { globalState } from '@/store/command/globalState';

import { IDigitButton } from './interface';

export class DigitButtonCC extends Component<IDigitButton> {
  clickHandler = () => {
    const { digit, callback } = this.props;

    callback(digit);
  };

  render() {
    const { digit } = this.props;
    const { isError } = globalState;

    return (
      <Button disabled={isError} onClick={this.clickHandler} type="button">
        {digit}
      </Button>
    );
  }
}
