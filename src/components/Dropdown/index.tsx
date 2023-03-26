import React from 'react';

import { ThemeEnum } from '@/constants/themes';

import { IDropdown } from './interface';
import { Option, Options } from './styled';

export const Dropdown = ({ changeTheme, isOpen }: IDropdown) => {
  const changeToLight = () => changeTheme(ThemeEnum.light);
  const changeToDark = () => changeTheme(ThemeEnum.dark);

  return (
    <Options display={isOpen ? 'block' : 'none'}>
      <Option onClick={changeToLight}>{ThemeEnum.light}</Option>
      <Option onClick={changeToDark}>{ThemeEnum.dark}</Option>
    </Options>
  );
};
