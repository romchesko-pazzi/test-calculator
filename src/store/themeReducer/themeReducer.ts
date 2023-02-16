import { createSlice } from '@reduxjs/toolkit';

import { ThemeEnum } from 'assets/interfaces/styled';

const initialState: IInitState = {
  theme: ThemeEnum.light,
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: state => {
      state.theme = state.theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light;
    },
  },
});

export const themeReducer = slice.reducer;
export const { changeTheme } = slice.actions;

interface IInitState {
  theme: ThemeEnum;
}
