import { ThemeEnum } from '@/constants/themes';

export interface IDropdown {
  isOpen: boolean;
  changeTheme: (theme: ThemeEnum) => void;
}
