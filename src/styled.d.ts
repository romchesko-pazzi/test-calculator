import { ITheme, ThemeEnum } from 'assets/interfaces/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
  }
}
