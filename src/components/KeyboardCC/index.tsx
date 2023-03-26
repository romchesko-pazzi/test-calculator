import React, { Component } from 'react';

import { KeyboardBox } from '@/assets/commonStyles/keyboard';
import { DigitButtonCC } from '@/components/DigitButtonCC';
import { OperationButtonCC } from '@/components/OperationButtonCC';
import { buttons } from '@/constants/buttonsArray';
import { IKeyboard } from '@/interfaces/operations';

export class KeyboardCC extends Component<IKeyboard, {}> {
  renderButton = () => {
    const {
      removeAll,
      removeElement,
      addElement,
      makeCalculations,
      chooseOperation,
      changeSign,
    } = this.props;

    return buttons.map(({ id, type, operation, digit, isCancelBtn }) => {
      switch (type) {
        case 'operation':
          return (
            <OperationButtonCC
              key={id}
              removeAll={removeAll}
              removeElement={removeElement}
              chooseOperation={chooseOperation}
              makeCalculations={makeCalculations}
              changeSign={changeSign}
              operationType={operation!}
              isCancelBtn={isCancelBtn}
            />
          );
        case 'digit':
          return <DigitButtonCC key={id} callback={addElement} digit={digit!} />;
        default:
          return null;
      }
    });
  };

  render() {
    const { renderButton } = this;

    return <KeyboardBox data-cy="keyboard">{renderButton()}</KeyboardBox>;
  }
}
