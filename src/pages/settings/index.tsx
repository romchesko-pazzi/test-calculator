import React, { useState } from 'react';
import { ThemeEnum } from 'constants/themes';

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

export const Settings = ({ theme, setTheme }: ISettings) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);
  const onBlurHandler = () => setIsOpen(false);
  const clearHistory = () => localStorage.clear();

  const changeToLightHandler = () => {
    localStorage.setItem('storedTheme', ThemeEnum.light);
    setTheme(ThemeEnum.light);
    setIsOpen(false);
  };
  const changeToDarkHandler = () => {
    localStorage.setItem('storedTheme', ThemeEnum.dark);
    setTheme(ThemeEnum.dark);
    setIsOpen(false);
  };

  return (
    <SettingsWrapper>
      <Title>Settings</Title>
      <ButtonsBox>
        <DropDownWrapper onClick={toggling} onBlur={onBlurHandler} tabIndex={0}>
          <Value>{theme}</Value>
          <Caret />
          <Options display={isOpen ? 'block' : 'none'}>
            <Option onClick={changeToLightHandler}>{ThemeEnum.light}</Option>
            <Option onClick={changeToDarkHandler}>{ThemeEnum.dark}</Option>
          </Options>
        </DropDownWrapper>
        <RemoveButton data-cy="removeBtn" onClick={clearHistory}>
          Clear all history
        </RemoveButton>
      </ButtonsBox>
    </SettingsWrapper>
  );
};

interface ISettings {
  theme: ThemeEnum;
  setTheme: (arg: ThemeEnum) => void;
}
