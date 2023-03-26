import React, { useState } from 'react';

import { Dropdown } from '@/components/Dropdown';
import { ThemeEnum } from '@/constants/themes';
import { useTheme } from '@/hooks/useTheme';

import {
  ButtonsBox,
  Caret,
  DropDownWrapper,
  RemoveButton,
  SettingsWrapper,
  Title,
  Value,
} from './styled';

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggling = () => setIsOpen(!isOpen);
  const onBlurHandler = () => setIsOpen(false);
  const clearHistory = () => localStorage.clear();

  const changeTheme = (theme: ThemeEnum) => {
    localStorage.setItem('storedTheme', theme);
    setTheme(theme);
    setIsOpen(false);
  };

  return (
    <SettingsWrapper>
      <Title>Settings</Title>
      <ButtonsBox>
        <DropDownWrapper onClick={toggling} onBlur={onBlurHandler} tabIndex={0}>
          <Value>{theme}</Value>
          <Caret />
          <Dropdown isOpen={isOpen} changeTheme={changeTheme} />
        </DropDownWrapper>
        <RemoveButton data-cy="removeBtn" onClick={clearHistory}>
          Clear all history
        </RemoveButton>
      </ButtonsBox>
    </SettingsWrapper>
  );
};
