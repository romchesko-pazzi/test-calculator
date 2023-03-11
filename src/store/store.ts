import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { calculatorReducer } from './calculatorReducer';

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
