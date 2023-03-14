import { dotInTheEnd } from 'constants/regex';

export const isDotInTheEnd = (expression: string) => {
  if (dotInTheEnd.test(expression)) {
    return expression.substring(0, expression.length - 1);
  }

  return expression;
};
