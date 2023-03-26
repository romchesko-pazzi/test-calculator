import { getOperationsHistory } from '@/utils/localStorage/getOperationsHistory';
import { setItemToLocalStorage } from '@/utils/localStorage/setItemToLocalStorage';

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
    const parsed = getOperationsHistory('operationsHistoryClass');
    const newArr = [this.state, ...parsed];

    setItemToLocalStorage('operationsHistoryClass', JSON.stringify(newArr));
  }
}
