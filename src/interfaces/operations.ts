import { Operations } from '@/constants/operations';

export interface IOperationButton extends IOperations {
  operationType: Operations;
  isCancelBtn: boolean;
}

export interface IOperations {
  removeAll: () => void;
  removeElement: () => void;
  chooseOperation: (operationType: Operations) => void;
  makeCalculations: () => void;
  changeSign: () => void;
}

export interface IKeyboard extends IOperations {
  addElement: (newValue: string) => void;
}
