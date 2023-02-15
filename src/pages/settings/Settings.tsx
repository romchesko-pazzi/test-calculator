import React, { useState } from 'react';

import {
  ButtonsBox,
  Value,
  Options,
  Option,
  DropDownWrapper,
  RemoveButton,
  SettingsWrapper,
  Title,
  Caret,
} from './styled';

import { useActions } from 'hooks/useActions';
import { calcActions } from 'store/calcReducer';

export const Settings = () => {
  const { clearHistory } = useActions(calcActions);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('Light Theme');

  const toggling = () => setIsOpen(!isOpen);

  const changeToLight = () => {
    setCurrentTheme('Light Theme');
    setIsOpen(false);
  };
  const changeToDark = () => {
    setCurrentTheme('Dark Theme');
    setIsOpen(false);
  };

  return (
    <SettingsWrapper>
      <Title>Settings</Title>
      <ButtonsBox>
        <DropDownWrapper>
          <Value onClick={toggling}>{currentTheme}</Value>
          <Caret onClick={toggling} />
          <Options display={isOpen ? 'block' : 'none'}>
            <Option onClick={changeToLight}>Light Theme</Option>
            <Option onClick={changeToDark}>Dark Theme</Option>
          </Options>
        </DropDownWrapper>
        <RemoveButton onClick={() => clearHistory()}>Clear all history</RemoveButton>
      </ButtonsBox>
    </SettingsWrapper>
  );
};

type ThemeType = 'Dark Theme' | 'Light Theme';
