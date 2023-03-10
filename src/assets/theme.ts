import { DefaultTheme } from 'styled-components';

import { ITheme, ThemeEnum } from 'assets/interfaces/styled';

const baseTheme: ITheme = {
  colors: {
    primary: '#ffa500',

    fontColor: '#19191B',
    backgroundColor: '#E5E4E8',
    selectBackground: '#ffffff',
    selectFontColor: '#19191B',
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    fontColor: '#ffffff',
    backgroundColor: '#19191B',
    selectBackground: '#E5E4E8',
  },
};
