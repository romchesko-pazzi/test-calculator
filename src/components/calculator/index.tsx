import React from 'react';

import {
  BorderRight,
  HomeWrapper,
  MainCalculateBlock,
  ToggleHistory,
} from '../../pages/home/styled';
import { KeyboardCC } from '../keyboardCC';

import { DisplayCC } from 'components/displayCC';
import { HistoryComponentCC } from 'components/historyCC';
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
      isHistoryShowed: true,
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

  setIsHistoryShowed = () => {
    const { isHistoryShowed } = this.state;

    this.setState({
      isHistoryShowed: !isHistoryShowed,
    });
  };

  render() {
    const { currentOperand, previousOperand, operation, isHistoryShowed } = this.state;

    return (
      <HomeWrapper>
        <MainCalculateBlock>
          <DisplayCC
            currentOperand={currentOperand}
            previousOperand={previousOperand}
            operation={operation}
          />
          <KeyboardCC
            makeCalculations={this.makeCalculations}
            addElement={this.addElement}
            removeElement={this.removeElement}
            chooseOperation={this.chooseOperation}
            removeAll={this.removeAll}
          />
          <BorderRight />
          <ToggleHistory
            onClick={this.setIsHistoryShowed}
            isHistoryShowed={isHistoryShowed}
          />
        </MainCalculateBlock>
        {isHistoryShowed && <HistoryComponentCC />}
      </HomeWrapper>
    );
  }
}
