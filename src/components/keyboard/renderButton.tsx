import React from 'react';

import { DigitButton } from '@/components/DigitButton';
import { OperationButton } from '@/components/OperationButton';
import { buttons } from '@/constants/buttonsArray';

export const renderButton = () => {
  return buttons.map(({ id, type, operation, digit, isCancelBtn }) => {
    switch (type) {
      case 'operation':
        return (
          <OperationButton
            isCancelBtn={isCancelBtn}
            key={id}
            operationType={operation!}
          />
        );
      case 'digit':
        return <DigitButton key={id} digit={digit!} />;
      default:
        return null;
    }
  });
};
