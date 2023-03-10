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
import { calcActions } from 'store/calcReducer';

export const Settings = ({ theme, setTheme }: ISettings) => {
  const { clearHistory } = useActions(calcActions);

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);
  const onBlurHandler = () => setIsOpen(false);

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
        <DropDownWrapper onBlur={onBlurHandler} tabIndex={0}>
          <Value onClick={toggling}>{theme}</Value>
          <Caret onClick={toggling} />
          <Options display={isOpen ? 'block' : 'none'}>
            <Option onClick={changeToLightHandler}>{ThemeEnum.light}</Option>
            <Option onClick={changeToDarkHandler}>{ThemeEnum.dark}</Option>
          </Options>
        </DropDownWrapper>
        <RemoveButton data-cy="removeBtn" onClick={() => clearHistory()}>
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
