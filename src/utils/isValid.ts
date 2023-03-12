import { emptyBrackets, incorrectExpression, operations } from 'constants/regex';

export const isValid = (expression: string) => {
  if (incorrectExpression.test(expression)) {
    throw new SyntaxError('Incorrect expression');
  }
  if (operations.test(expression)) {
    throw new SyntaxError('Invalid location of the operator');
  }
  if (emptyBrackets.test(expression)) {
    throw new SyntaxError('Empty brackets in the expression');
  }
};
