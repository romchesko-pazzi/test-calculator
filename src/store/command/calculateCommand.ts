import { v4 } from 'uuid';

import { calculateExpression } from '@/utils/calculate/calculateExpression';
import { isDotInTheEnd } from '@/utils/calculate/validate/isDotInTheEnd';

import { ICommand } from '../interfaces';

import { GlobalState } from './globalState';

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
    } catch (error: unknown) {
      const syntaxError = error as SyntaxError;

      this.state.result = syntaxError.message;
      this.state.id = '';
      this.state.expression = '';
      this.state.isError = true;
      throw new SyntaxError(syntaxError.message);
    }
  }
}
