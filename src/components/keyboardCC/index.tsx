import React from 'react';

import { buttons } from '../../constants/buttonsArray';
import { IKeyboard } from '../../interfaces/operations';
import { DigitButtonCC } from '../digitButtonCC';
import { KeyboardBox } from '../keyboard/styled';
import { OperationButtonCC } from '../operationButtonCC';

export class KeyboardCC extends React.Component<IKeyboard, {}> {
  render() {
    const { removeAll, removeElement, addElement, makeCalculations, chooseOperation } =
      this.props;

    return (
      <KeyboardBox>
        {buttons.map(({ type, operation, digit, isCancelBtn }, index) => {
          switch (type) {
            case 'operation':
              return (
                <OperationButtonCC
                  removeAll={removeAll}
                  removeElement={removeElement}
                  chooseOperation={chooseOperation}
                  makeCalculations={makeCalculations}
                  key={index}
                  operationType={operation!}
                  isCancelBtn={isCancelBtn}
                />
              );
            case 'digit':
              return <DigitButtonCC key={index} callback={addElement} digit={digit!} />;
            default:
              return null;
          }
        })}
      </KeyboardBox>
    );
  }
}
