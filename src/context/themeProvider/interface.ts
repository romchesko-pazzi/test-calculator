import { ThemeEnum } from '@/constants/themes';

export interface ITheme {
  theme: ThemeEnum;
  setTheme: (arg: ThemeEnum) => void;
}
