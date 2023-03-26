import { emptyBrackets, operations } from '@/constants/regex';

import { isBracketsValid } from './isBracketsValid';

export const isValid = expression => {
  if (operations.test(expression)) {
    throw new SyntaxError('Invalid location of the operator');
  }
  if (emptyBrackets.test(expression)) {
    throw new SyntaxError('Empty brackets in the expression');
  }
  if (!isBracketsValid(expression)) {
    throw new SyntaxError('Unmatched parentheses');
  }
};
