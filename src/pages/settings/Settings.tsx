import React, { useState } from 'react';

import {
  ButtonsBox,
  Caret,
  DropDownWrapper,
  Option,
  Options,
  RemoveButton,
  SettingsWrapper,
  Title,
  Value,
} from './styled';

import { ThemeEnum } from 'assets/interfaces/styled';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useSelector';
import { calcActions } from 'store/calcReducer';
import { themeActions } from 'store/themeReducer';

export const Settings = () => {
  const { clearHistory } = useActions(calcActions);
  const { changeTheme } = useActions(themeActions);

  const [isOpen, setIsOpen] = useState(false);
  const currentTheme = useAppSelector(state => state.theme.theme);

  const toggling = () => setIsOpen(!isOpen);
  const onBlurHandler = () => setIsOpen(false);
  const changeThemeHandler = () => {
    changeTheme();
    setIsOpen(false);
  };

  return (
    <SettingsWrapper>
      <Title>Settings</Title>
      <ButtonsBox>
        <DropDownWrapper onBlur={onBlurHandler} tabIndex={0}>
          <Value onClick={toggling}>{currentTheme}</Value>
          <Caret onClick={toggling} />
          <Options display={isOpen ? 'block' : 'none'}>
            <Option onClick={changeThemeHandler}>{ThemeEnum.light}</Option>
            <Option onClick={changeThemeHandler}>{ThemeEnum.dark}</Option>
          </Options>
        </DropDownWrapper>
        <RemoveButton onClick={() => clearHistory()}>Clear all history</RemoveButton>
      </ButtonsBox>
    </SettingsWrapper>
  );
};
