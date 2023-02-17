import { createSlice } from '@reduxjs/toolkit';

import { ThemeEnum } from 'assets/interfaces/styled';

const initialState: IInitState = {
  theme: ThemeEnum.light,
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeToLight: state => {
      state.theme = ThemeEnum.light;
    },
    changeToDark: state => {
      state.theme = ThemeEnum.dark;
    },
  },
});

export const themeReducer = slice.reducer;
export const { changeToDark, changeToLight } = slice.actions;

interface IInitState {
  theme: ThemeEnum;
}
