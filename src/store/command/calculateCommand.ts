import { v4 } from 'uuid';

import { ICommand } from '../interfaces';

import { GlobalState } from './globalState';

import { calculateExpression } from 'utils/calculateExpressionFunction';
import { isDotInTheEnd } from 'utils/isDotInTheEnd';

export class CalculateCommand implements ICommand {
  private readonly expression: string;

  private readonly state: GlobalState;

  constructor(expression: string, state: GlobalState) {
    this.expression = expression;
    this.state = state;
  }

  execute() {
    try {
      const expression = isDotInTheEnd(this.expression);

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
