import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { calcReducer } from './calcReducer';

import { themeReducer } from 'store/themeReducer';

const rootReducer = combineReducers({
  calc: calcReducer,
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
