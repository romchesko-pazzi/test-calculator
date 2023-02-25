import { v4 } from 'uuid';

import { ICommand, IExpression } from '../interfaces';

import { GlobalState } from './globalState';

import { Operations } from 'constants/operations';
import { calculateExpression } from 'utils/calculateExpressionFunction';
import { isDotInTheEnd } from 'utils/isDotInTheEnd';

export class CalculateCommand implements ICommand {
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
    try {
      const expression = `${isDotInTheEnd(this.previousOperand)}${
        this.operation
      }${isDotInTheEnd(this.currentOperand)}`;

      this.state.result = calculateExpression(expression);
      this.state.id = v4();
      this.state.expression = `${expression} = ${this.state.result}`;
      this.state.isError = false;
    } catch (e: unknown) {
      const error = e as SyntaxError;

      this.state.result = error.message;
      this.state.id = '';
      this.state.expression = '';
      this.state.isError = true;
      throw new SyntaxError(error.message);
    }
  }
}
