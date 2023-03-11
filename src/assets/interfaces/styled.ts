export interface ITheme {
  colors: {
    fontColor: string;
    backgroundColor: string;
    selectBackground: string;
    selectFontColor: string;
    headerBackground: string;
    buttonBackground: string;
    borderButtonColor: string;
    unActiveLinkColor: string;
  };
}

export enum ThemeEnum {
  light = 'Light theme',
  dark = 'Dark theme',
}
