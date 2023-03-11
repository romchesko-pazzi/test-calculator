import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import { getDataFromLocalStorage } from '../../utils/getDataFromLocalStorage';

import { Operations } from 'constants/operations';
import { IInitState, ISavedData } from 'store/interfaces';
import { calculateExpression } from 'utils/calculateExpressionFunction';

const initialState: IInitState = {
  currentOperand: null,
  previousOperand: null,
  operation: null,
  isOverwrite: false,
  savedData: [],
  isError: false,
};

const slice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<string>) => {
      if (state.isOverwrite && action.payload !== '.') {
        state.currentOperand = action.payload;
        state.isOverwrite = false;

        return;
      }
      if (action.payload === '0' && state.currentOperand === '0') return state;
      state.currentOperand = `${state.currentOperand || ''}${action.payload}`;
    },
    removeElement: state => {
      if (!state.currentOperand) return state;
      state.currentOperand = null;
    },
    chooseOperation: (state, action: PayloadAction<Operations>) => {
      if (!state.currentOperand && !state.previousOperand) return state;
      if (!state.currentOperand) {
        state.operation = action.payload;

        return;
      }
      if (!state.previousOperand) {
        state.operation = action.payload;
        state.previousOperand = state.currentOperand;
        state.currentOperand = null;

        return;
      }
      slice.caseReducers.addElement(state, { payload: action.payload, type: '' });
    },
    makeCalculations: state => {
      if (!state.operation || !state.currentOperand || !state.previousOperand) {
        return state;
      }
      const beforeCalculations = state.currentOperand;

      try {
        state.currentOperand = calculateExpression(
          `${state.previousOperand}
        ${state.operation}
        ${state.currentOperand}`,
        );

        // save to history
        const obj = {
          id: v4(),
          previousOperand: state.previousOperand,
          currentOperand: beforeCalculations,
          result: state.currentOperand,
          operation: state.operation,
        };

        state.savedData.unshift(obj);
        const storedOperations = getDataFromLocalStorage('operationsHistoryFunction');

        storedOperations.unshift(obj);
        localStorage.setItem(
          'operationsHistoryFunction',
          JSON.stringify(storedOperations),
        );

        state.operation = null;
        state.previousOperand = null;
        state.isOverwrite = true;
      } catch (e: unknown) {
        const error = e as SyntaxError;

        state.isError = true;
        state.previousOperand = null;
        state.operation = null;
        state.currentOperand = error.message;
      }
    },
    clearAll: state => {
      state.isError = false;
      state.currentOperand = null;
      state.operation = null;
      state.previousOperand = null;
    },
    saveToStore: (state, action: PayloadAction<ISavedData[]>) => {
      state.savedData.unshift(...action.payload);
    },
    clearOperationsStore: state => {
      state.savedData = [];
    },
  },
});

export const calculatorReducer = slice.reducer;
export const {
  addElement,
  removeElement,
  chooseOperation,
  clearAll,
  makeCalculations,
  saveToStore,
  clearOperationsStore,
} = slice.actions;
