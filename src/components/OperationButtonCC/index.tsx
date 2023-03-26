import React, { PureComponent } from 'react';

import { Button } from '@/assets/buttons/buttonStyle';
import { Operations } from '@/constants/operations';
import { IOperationButton } from '@/interfaces/operations';
import { globalState } from '@/store/command/globalState';

export class OperationButtonCC extends PureComponent<IOperationButton> {
  clickHandler = () => {
    const {
      operationType,
      removeAll,
      removeElement,
      chooseOperation,
      makeCalculations,
      changeSign,
    } = this.props;

    switch (operationType) {
      case Operations.removeAll:
        removeAll();
        break;
      case Operations.removeElement:
        removeElement();
        break;
      case Operations.equals:
        makeCalculations();
        break;
      case Operations.changeSign:
        changeSign();
        break;
      default:
        chooseOperation(operationType);
    }
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
