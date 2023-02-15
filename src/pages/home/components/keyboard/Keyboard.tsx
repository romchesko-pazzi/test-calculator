import React from 'react';

import { DigitButton } from '../digitButton/DigitButton';
import { OperationButton } from '../operationButton/OperationButton';

import { KeyboardBox } from './styled';

import { Operations } from 'constants/operations';

export const Keyboard = () => {
  return (
    <KeyboardBox>
      <OperationButton operation={Operations.removeAll} />
      <DigitButton digit="7" />
      <DigitButton digit="8" />
      <DigitButton digit="9" />
      <OperationButton operation={Operations.multiply} />
      <OperationButton operation={Operations.minus} />
      <DigitButton digit="4" />
      <DigitButton digit="5" />
      <DigitButton digit="6" />
      <OperationButton operation={Operations.divide} />
      <OperationButton operation={Operations.plus} />
      <DigitButton digit="1" />
      <DigitButton digit="2" />
      <DigitButton digit="3" />
      <OperationButton operation={Operations.equals} />
      <DigitButton digit="." />
      <DigitButton digit="(" />
      <DigitButton digit="0" />
      <DigitButton digit=")" />
      <OperationButton operation={Operations.removeElement} />
    </KeyboardBox>
  );
};
