import { Operations } from 'constants/operations';

export interface ICommand {
  execute: () => void;
}

export interface IExpression {
  currentOperand: string;
  previousOperand: string;
  operation: Operations;
}

export interface IBaseStore {
  currentOperand: null | string;
  previousOperand: null | string;
  operation: null | Operations;
}

export interface IInitState extends IBaseStore {
  isOverwrite: boolean;
  savedData: IOperationData[];
  isError: boolean;
}

export interface IOperationData extends IBaseStore {
  id: string;
  result: string | null;
}

export interface ILocalStorageData {
  id: string;
  expression: string;
  result: string;
}

export interface IForClassComponent {
  currentOperand: null | string;
  previousOperand: null | string;
  operation: null | Operations;
  isOverwrite: boolean;
}
