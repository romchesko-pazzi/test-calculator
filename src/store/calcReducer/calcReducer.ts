import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import { OperationType } from 'types/operationTypes';
import { evaluateFunc } from 'utils/evaluate';

const initialState: IInitState = {
  currentOperand: null,
  previousOperand: null,
  operation: null,
  isOverwrite: false,
  savedData: [],
};

const slice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit: (state, action: PayloadAction<string>) => {
      if (state.isOverwrite) {
        state.currentOperand = action.payload;
        state.isOverwrite = false;

        return;
      }
      if (action.payload === '0' && state.currentOperand === '0') return state;
      if (action.payload === '.' && state.currentOperand?.includes('.')) return state;
      state.currentOperand = `${state.currentOperand || ''}${action.payload}`;
    },
    deleteOperand: state => {
      if (!state.currentOperand) return state;
      state.currentOperand = null;
    },
    chooseOperation: (state, action: PayloadAction<OperationType>) => {
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
      state.previousOperand = evaluateFunc(
        state.previousOperand,
        state.currentOperand,
        state.operation,
      );
      state.operation = action.payload;
      state.currentOperand = null;
    },
    evaluate: state => {
      if (!state.operation || !state.currentOperand || !state.previousOperand) {
        return state;
      }

      const beforeCalculations = state.currentOperand;

      state.currentOperand = evaluateFunc(
        state.previousOperand,
        state.currentOperand,
        state.operation,
      );

      // save to history
      state.savedData.unshift({
        id: v4(),
        previousOperand: state.previousOperand,
        currentOperand: beforeCalculations,
        result: state.currentOperand,
        operation: state.operation,
      });

      state.operation = null;
      state.previousOperand = null;
      state.isOverwrite = true;
    },
    clearAll: state => {
      state.currentOperand = null;
      state.operation = null;
      state.previousOperand = null;
    },
  },
});

export const calcReducer = slice.reducer;
export const { addDigit, deleteOperand, chooseOperation, clearAll, evaluate } =
  slice.actions;

interface IBase {
  currentOperand: null | string;
  previousOperand: null | string;
  operation: null | OperationType;
}

interface IInitState extends IBase {
  isOverwrite: boolean;
  savedData: IOperationData[];
}

interface IOperationData extends IBase {
  id: string;
  result: string | null;
}
