import { DefaultTheme } from 'styled-components';

import { ITheme, ThemeEnum } from 'assets/interfaces/styled';

const baseTheme: ITheme = {
  colors: {
    fontColor: '#19191B',
    backgroundColor: '#E5E4E8',
    selectBackground: '#ffffff',
    selectFontColor: '#19191B',
    headerBackground: '#383838',
    buttonBackground: '#ffffff',
    borderButtonColor: '#c9c9c9',
    unActiveLinkColor: '#cec7bd',
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
    backgroundColor: '#323030',
    selectBackground: '#E5E4E8',
    headerBackground: '#C29545',
    buttonBackground: '#CDBEA7',
    borderButtonColor: '#CDBEA7',
    unActiveLinkColor: '#000000',
  },
};
