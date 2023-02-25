import { emptyBrackets, incorrectExpression, operations } from 'constants/regex';

export const isValid = (a: string) => {
  if (incorrectExpression.test(a)) {
    throw new SyntaxError('Incorrect expression');
  }
  if (operations.test(a)) {
    throw new SyntaxError('Invalid location of the operator');
  }
  if (emptyBrackets.test(a)) {
    throw new SyntaxError('Empty brackets in the expression');
  }
};
