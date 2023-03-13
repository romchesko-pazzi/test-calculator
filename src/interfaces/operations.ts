import { Operations } from '../constants/operations';

export interface IOperationButton extends IOperations {
  operationType: Operations;
  isCancelBtn: boolean;
}

export interface IOperations {
  removeAll: () => void;
  removeElement: () => void;
  chooseOperation: (operationType: Operations) => void;
  makeCalculations: (operationType: Operations) => void;
}

export interface IKeyboard extends IOperations {
  addElement: (newValue: string) => void;
}
