import { v4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Operations } from '@/constants/operations';
import { IInitState, ILocalStorageData } from '@/store/interfaces';
import { calculateExpression } from '@/utils/calculate/calculateExpression.js';
import { isDotInTheEnd } from '@/utils/calculate/validate/isDotInTheEnd.js';
import { getDataFromLocalStorage } from '@/utils/getDataFromLocalStorage';

const initialState: IInitState = {
  currentOperand: null,
  previousOperand: null,
  isOverwrite: false,
  savedData: [],
  isError: false,
};

const slice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addElement: (state, { payload }: PayloadAction<string>) => {
      if (state.isOverwrite && payload !== '.') {
        state.currentOperand = payload;
        state.isOverwrite = false;

        return;
      }
      if (payload === '0' && state.currentOperand === '0') return state;
      if (payload === '.' && state.currentOperand?.includes('.')) return;
      state.currentOperand = `${state.currentOperand || ''}${payload}`;
    },
    removeElement: state => {
      if (!state.currentOperand) return state;
      state.currentOperand = null;
    },
    chooseOperation: (state, { payload }: PayloadAction<Operations>) => {
      if (!state.currentOperand && !state.previousOperand) return state;

      if (state.currentOperand?.at(-1) === '.') {
        state.previousOperand = `${
          state.previousOperand || ''
        }${state.currentOperand.slice(0, -1)}${payload}`;
        state.currentOperand = null;

        return;
      }

      // если нужно сменить математическую операцию
      if (!state.currentOperand && state.previousOperand) {
        state.previousOperand = state.previousOperand.slice(0, -1) + payload;

        return;
      }

      if (!state.previousOperand) {
        state.previousOperand = state.currentOperand + payload;
        state.currentOperand = null;

        return;
      }
      state.previousOperand = `${state.previousOperand || ''}${
        state.currentOperand
      }${payload}`;
      state.currentOperand = null;
    },
    makeCalculations: state => {
      if (!state.currentOperand || !state.previousOperand) {
        return state;
      }
      const expression = isDotInTheEnd(state.previousOperand + state.currentOperand);

      try {
        state.currentOperand = calculateExpression(expression);

        // save to history
        const obj = {
          id: v4(),
          expression,
          result: state.currentOperand,
        };

        state.savedData.unshift(obj as ILocalStorageData);
        const storedOperations = getDataFromLocalStorage('operationsHistoryFunction');

        storedOperations.unshift(obj);
        localStorage.setItem(
          'operationsHistoryFunction',
          JSON.stringify(storedOperations),
        );

        state.previousOperand = null;
        state.isOverwrite = true;
      } catch (e: unknown) {
        const error = e as SyntaxError;

        state.isError = true;
        state.previousOperand = null;
        state.currentOperand = error.message;
      }
    },
    clearAll: state => {
      state.isError = false;
      state.currentOperand = null;
      state.previousOperand = null;
    },
    saveToStore: (state, { payload }: PayloadAction<ILocalStorageData[]>) => {
      state.savedData.unshift(...payload);
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
