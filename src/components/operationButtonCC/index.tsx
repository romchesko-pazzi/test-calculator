import React from 'react';

import { IOperationButton } from '../../interfaces/operations';

import { Button } from 'assets/buttons/buttonStyle';
import { Operations } from 'constants/operations';
import { globalState } from 'store/command/globalState';

export class OperationButtonCC extends React.Component<IOperationButton> {
  clickHandler = () => {
    const { operationType, removeAll, removeElement, chooseOperation, makeCalculations } =
      this.props;

    if (operationType === Operations.removeAll) {
      removeAll();

      return;
    }
    if (operationType === Operations.removeElement) {
      removeElement();

      return;
    }
    if (operationType === Operations.equals) {
      makeCalculations(operationType);

      return;
    }
    chooseOperation(operationType);
  };

  render() {
    const { operationType, isCancelBtn } = this.props;
    const { isError } = globalState;

    return (
      <Button
        disabled={isError && !isCancelBtn}
        onClick={this.clickHandler}
        type="button"
      >
        {operationType}
      </Button>
    );
  }
}
