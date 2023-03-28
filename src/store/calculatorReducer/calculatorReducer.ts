import { v4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Brackets } from '@/constants/brackets';
import { removeCloseBracket, removeOpenBracketAndMinus } from '@/constants/common';
import { Operations } from '@/constants/operations';
import { IInitState, ILocalStorageData } from '@/store/interfaces';
import { calculateExpression } from '@/utils/calculate/calculateExpression.js';
import { isDotInTheEnd } from '@/utils/calculate/validate/isDotInTheEnd.js';
import { saveToHistory } from '@/utils/localStorage/saveToHistory';

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

      state.currentOperand = isDotInTheEnd(state.currentOperand);

      if (!state.currentOperand && state.previousOperand) {
        state.previousOperand = state.previousOperand.slice(0, -1) + payload;
      } else if (!state.previousOperand) {
        state.previousOperand = state.currentOperand + payload;
        state.currentOperand = null;
      } else {
        state.previousOperand = state.previousOperand + state.currentOperand + payload;
        state.currentOperand = null;
      }
    },
    makeCalculations: state => {
      if (!state.currentOperand || !state.previousOperand) return state;

      const expression = isDotInTheEnd(state.previousOperand + state.currentOperand);

      try {
        const result = calculateExpression(expression);

        state.currentOperand = result;
        state.savedData.unshift({ id: v4(), expression, result });
        saveToHistory(expression, result);
        state.previousOperand = null;
        state.isOverwrite = true;
      } catch (error: unknown) {
        const syntaxError = error as SyntaxError;

        state.isError = true;
        state.previousOperand = null;
        state.currentOperand = syntaxError.message;
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
    changeSign: state => {
      if (!state.currentOperand) return;
      if (!state.currentOperand?.includes('-')) {
        state.currentOperand = `${Brackets.openBracket}${Operations.minus}${state.currentOperand}${Brackets.closeBracket}`;
      } else {
        state.currentOperand = state.currentOperand.slice(
          removeOpenBracketAndMinus,
          removeCloseBracket,
        );
      }
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
  changeSign,
} = slice.actions;
