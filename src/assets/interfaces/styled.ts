export interface ITheme {
  colors: {
    primary: string;
    fontColor: string;
    backgroundColor: string;
    selectBackground: string;
    selectFontColor: string;
  };
}

export enum ThemeEnum {
  light = 'Light theme',
  dark = 'Dark theme',
}
