import { ICommand, IExpression } from '../interfaces';

import { GlobalState } from './globalState';

import { Operations } from 'constants/operations';
import { getDataFromLocalStorage } from 'utils/getDataFromLocalStorage';

export class SaveCommand implements ICommand {
  private readonly currentOperand: string;

  private readonly previousOperand: string;

  private readonly operation: Operations;

  private readonly state: GlobalState;

  constructor(expression: IExpression, state: GlobalState) {
    this.currentOperand = expression.currentOperand;
    this.previousOperand = expression.previousOperand;
    this.operation = expression.operation;
    this.state = state;
  }

  execute() {
    const parsed = getDataFromLocalStorage();

    parsed.unshift(this.state);
    localStorage.setItem('operationsHistory', JSON.stringify(parsed));
  }
}
