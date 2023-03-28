import React, { Component } from 'react';

import {
  BorderRight,
  HomeWrapper,
  MainCalculateBlock,
  ToggleHistory,
} from '@/assets/commonStyles/home';
import { DisplayCC } from '@/components/DisplayCC';
import { HistoryComponentCC } from '@/components/HistoryCC';
import { KeyboardCC } from '@/components/KeyboardCC';
import { Brackets } from '@/constants/brackets';
import { removeCloseBracket, removeOpenBracketAndMinus } from '@/constants/common';
import { Operations } from '@/constants/operations';
import { CalculateCommand } from '@/store/command/calculateCommand';
import { globalState } from '@/store/command/globalState';
import { Invoker } from '@/store/command/invoker';
import { SaveCommand } from '@/store/command/saveCommand';
import { IClassState } from '@/store/interfaces';

export class Calculator extends Component<{}, IClassState> {
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
    if (currentOperand?.includes('^')) {
      this.setState({ currentOperand: null });
    } else if (currentOperand?.endsWith('.')) {
      this.setState({
        previousOperand: `${previousOperand || ''}${currentOperand.slice(
          0,
          -1,
        )}${operationArg}`,
        currentOperand: null,
      });
    } else if (!currentOperand && previousOperand) {
      this.setState({ previousOperand: previousOperand.slice(0, -1) + operationArg });
    } else if (!previousOperand) {
      this.setState({
        previousOperand: currentOperand + operationArg,
        currentOperand: null,
      });
    } else {
      this.setState({
        previousOperand: `${previousOperand || ''}${currentOperand}${operationArg}`,
        currentOperand: null,
      });
    }
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

  changeSign = () => {
    const { currentOperand } = this.state;

    if (!currentOperand) return;

    if (!currentOperand?.includes('-')) {
      this.setState({
        currentOperand: `${Brackets.openBracket}${Operations.minus}${currentOperand}${Brackets.closeBracket}`,
      });
    } else {
      this.setState({
        currentOperand: currentOperand.slice(
          removeOpenBracketAndMinus,
          removeCloseBracket,
        ),
      });
    }
  };

  render() {
    const { currentOperand, previousOperand, isHistoryShowed } = this.state;
    const {
      changeSign,
      makeCalculations,
      removeElement,
      removeAll,
      addElement,
      chooseOperation,
      setIsHistoryShowed,
    } = this;

    return (
      <HomeWrapper>
        <MainCalculateBlock>
          <DisplayCC currentOperand={currentOperand} previousOperand={previousOperand} />
          <KeyboardCC
            makeCalculations={makeCalculations}
            addElement={addElement}
            removeElement={removeElement}
            chooseOperation={chooseOperation}
            removeAll={removeAll}
            changeSign={changeSign}
          />
          <BorderRight />
          <ToggleHistory onClick={setIsHistoryShowed} isHistoryShowed={isHistoryShowed} />
        </MainCalculateBlock>
        {isHistoryShowed && <HistoryComponentCC />}
      </HomeWrapper>
    );
  }
}
