import { getDataFromLocalStorage } from 'utils/getDataFromLocalStorage';

import { ICommand } from '../interfaces';

import { GlobalState } from './globalState';

export class SaveCommand implements ICommand {
  private readonly expression: string;

  private readonly state: GlobalState;

  constructor(expression: string, state: GlobalState) {
    this.expression = expression;
    this.state = state;
  }

  execute() {
    const parsed = getDataFromLocalStorage('operationsHistoryClass');

    parsed.unshift(this.state);
    localStorage.setItem('operationsHistoryClass', JSON.stringify(parsed));
  }
}
