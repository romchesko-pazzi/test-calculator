import {
  addElement,
  changeSign,
  chooseOperation,
  clearAll,
  clearOperationsStore,
  makeCalculations,
  removeElement,
  saveToStore,
} from './calculatorReducer';

export const calculatorActions = {
  addElement,
  removeElement,
  chooseOperation,
  clearAll,
  makeCalculations,
  saveToStore,
  clearOperationsStore,
  changeSign,
};

export { calculatorReducer } from './calculatorReducer';
