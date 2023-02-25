import React from 'react';

import { DigitButton } from 'components/digitButton';
import { KeyboardBox } from 'components/keyboard/styled';
import { OperationButton } from 'components/operationButton';
import { buttons } from 'constants/buttonsArray';

export const Keyboard = () => {
  return (
    <KeyboardBox>
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
