import React from 'react';

import { KeyboardBox } from '@/assets/commonStyles/keyboard';
import { renderButton } from '@/components/Keyboard/renderButton';

export const Keyboard = () => {
  return <KeyboardBox data-cy="keyboard">{renderButton()}</KeyboardBox>;
};
