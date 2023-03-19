import React from 'react';
import { buttons } from 'constants/buttonsArray';

import { DigitButton } from 'components/digitButton';
import { KeyboardBox } from 'components/keyboard/styled';
import { OperationButton } from 'components/operationButton';

export const Keyboard = () => {
  return (
    <KeyboardBox data-cy="keyboard">
      {buttons.map(({ type, operation, digit, isCancelBtn }, index) => {
        switch (type) {
          case 'operation':
            return (
              <OperationButton
                isCancelBtn={isCancelBtn}
                key={index}
                operationType={operation!}
              />
            );
          case 'digit':
            return <DigitButton key={index} digit={digit!} />;
          default:
            return null;
        }
      })}
    </KeyboardBox>
  );
};
