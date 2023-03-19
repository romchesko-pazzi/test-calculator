import React from 'react';
import { Operations } from 'constants/operations';
import {
  BorderRight,
  HomeWrapper,
  MainCalculateBlock,
  ToggleHistory,
} from 'pages/home/styled';
import { CalculateCommand } from 'store/command/calculateCommand';
import { globalState } from 'store/command/globalState';
import { Invoker } from 'store/command/invoker';
import { SaveCommand } from 'store/command/saveCommand';
import { IClassState } from 'store/interfaces';

import { DisplayCC } from 'components/displayCC';
import { HistoryComponentCC } from 'components/historyCC';

import { KeyboardCC } from '../keyboardCC';

export class Calculator extends React.Component<{}, IClassState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentOperand: null,
      previousOperand: null,
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
    if (newValue === '.' && currentOperand?.includes('.')) return;

    this.setState({
      currentOperand: `${currentOperand || ''}${newValue}`,
    });
  };

  chooseOperation = (operationArg: Operations) => {
    const { currentOperand, previousOperand } = this.state;

    if (!currentOperand && !previousOperand) return;
    if (currentOperand?.at(-1) === '.') {
      this.setState({
        previousOperand: `${previousOperand || ''}${currentOperand.slice(
          0,
          -1,
        )}${operationArg}`,
        currentOperand: null,
      });

      return;
    }

    // если нужно сменить математическую операцию
    if (!currentOperand && previousOperand) {
      this.setState({
        previousOperand: previousOperand.slice(0, -1) + operationArg,
      });

      return;
    }

    if (!previousOperand) {
      this.setState({
        previousOperand: currentOperand + operationArg,
        currentOperand: null,
      });

      return;
    }
    this.setState({
      previousOperand: `${previousOperand || ''}${currentOperand}${operationArg}`,
      currentOperand: null,
    });
  };

  makeCalculations = () => {
    const { currentOperand, previousOperand } = this.state;

    if (!currentOperand || !previousOperand) return;

    const expression = previousOperand + currentOperand;

    const invoker = new Invoker(
      new CalculateCommand(expression, globalState),
      new SaveCommand(expression, globalState),
    );

    invoker.executeCommands();

    this.setState({
      currentOperand: globalState.result,
      previousOperand: null,
      isOverwrite: true,
    });
  };

  removeAll = () => {
    this.setState({
      currentOperand: null,
      previousOperand: null,
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
    const { currentOperand, previousOperand, isHistoryShowed } = this.state;

    return (
      <HomeWrapper>
        <MainCalculateBlock>
          <DisplayCC currentOperand={currentOperand} previousOperand={previousOperand} />
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
