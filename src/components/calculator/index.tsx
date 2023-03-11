import React from 'react';

import { CalculatorWrapper, MainCalculateBlock } from 'components/calculator/styled';
import { DigitButtonCC } from 'components/digitButtonCC';
import { DisplayCC } from 'components/displayCC';
import { HistoryComponentCC } from 'components/historyCC';
import { KeyboardBox } from 'components/keyboard/styled';
import { OperationButtonCC } from 'components/operationButtonCC';
import { buttons } from 'constants/buttonsArray';
import { Operations } from 'constants/operations';
import { CalculateCommand } from 'store/command/calculateCommand';
import { globalState } from 'store/command/globalState';
import { Invoker } from 'store/command/invoker';
import { SaveCommand } from 'store/command/saveCommand';
import { IClassState } from 'store/interfaces';

export class Calculator extends React.Component<{}, IClassState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentOperand: null,
      previousOperand: null,
      operation: null,
      isOverwrite: false,
    };
  }

  addElement = (newValue: string) => {
    const { currentOperand, isOverwrite } = this.state;

    if (isOverwrite && newValue !== '.') {
      this.setState({
        currentOperand: newValue,
        isOverwrite: false,
      });

      return;
    }

    if (newValue === '0' && currentOperand === '0') return;
    if (newValue === '.' && !currentOperand) return;

    this.setState({
      currentOperand: `${currentOperand || ''}${newValue}`,
    });
  };

  chooseOperation = (operationArg: Operations) => {
    const { currentOperand, previousOperand } = this.state;

    if (!currentOperand && !previousOperand) return;

    // если нужно сменить математическую операцию
    if (!currentOperand) {
      this.setState({
        operation: operationArg,
      });

      return;
    }

    if (!previousOperand) {
      this.setState({
        operation: operationArg,
        previousOperand: currentOperand,
        currentOperand: null,
      });

      return;
    }
    this.addElement(operationArg);
  };

  makeCalculations = () => {
    const { currentOperand, previousOperand, operation } = this.state;

    if (!operation || !currentOperand || !previousOperand) return;

    const invoker = new Invoker(
      new CalculateCommand({ currentOperand, previousOperand, operation }, globalState),
      new SaveCommand({ currentOperand, previousOperand, operation }, globalState),
    );

    invoker.executeCommands();

    this.setState({
      currentOperand: globalState.result,
      operation: null,
      previousOperand: null,
      isOverwrite: true,
    });
  };

  removeAll = () => {
    this.setState({
      currentOperand: null,
      previousOperand: null,
      operation: null,
    });
    globalState.isError = false;
  };

  removeElement = () => {
    const { currentOperand } = this.state;

    if (!currentOperand) return;
    this.setState({
      currentOperand: null,
    });
  };

  render() {
    const { currentOperand, previousOperand, operation } = this.state;

    return (
      <CalculatorWrapper>
        <MainCalculateBlock>
          <DisplayCC
            currentOperand={currentOperand}
            previousOperand={previousOperand}
            operation={operation}
          />
          <KeyboardBox>
            {buttons.map(({ type, operation, digit, isCancelBtn }, index) => {
              switch (type) {
                case 'operation':
                  return (
                    <OperationButtonCC
                      removeAll={this.removeAll}
                      removeElement={this.removeElement}
                      chooseOperation={this.chooseOperation}
                      makeCalculations={this.makeCalculations}
                      key={index}
                      operationType={operation!}
                      isCancelBtn={isCancelBtn}
                    />
                  );
                case 'digit':
                  return (
                    <DigitButtonCC
                      key={index}
                      callback={this.addElement}
                      digit={digit!}
                    />
                  );
                default:
                  return null;
              }
            })}
          </KeyboardBox>
        </MainCalculateBlock>
        <HistoryComponentCC />
      </CalculatorWrapper>
    );
  }
}
