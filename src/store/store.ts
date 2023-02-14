import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { calcReducer } from './calcReducer';

const rootReducer = combineReducers({
  calc: calcReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
