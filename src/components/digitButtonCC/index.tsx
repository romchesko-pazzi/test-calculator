import React from 'react';
import { Button } from 'assets/buttons/buttonStyle';
import { globalState } from 'store/command/globalState';

export class DigitButtonCC extends React.Component<IDigitButton> {
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

interface IDigitButton {
  digit: string;
  callback: (newValue: string) => void;
}
