export interface ICommand {
  execute: () => void;
}

export interface IBaseStore {
  currentOperand: null | string;
  previousOperand: null | string;
}

export interface IInitState extends IBaseStore {
  isOverwrite: boolean;
  savedData: ILocalStorageData[];
  isError: boolean;
}

export interface ILocalStorageData {
  id: string;
  expression: string;
  result: string;
}

export interface IClassState extends IBaseStore {
  isOverwrite: boolean;
  isHistoryShowed: boolean;
}
