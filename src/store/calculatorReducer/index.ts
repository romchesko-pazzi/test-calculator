import {
  addElement,
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
};

export { calculatorReducer } from './calculatorReducer';
