import { negativeValueInBrackets } from 'constants/regex';

import { operators } from './operators';

export const calculateRPN = expression => {
  const operandsArray = [];

  const tokens = expression.split(/\s+/);

  for (const token of tokens) {
    if (operators[token]) {
      const [b, a] = [operandsArray.pop(), operandsArray.pop()];

      operandsArray.push(operators[token](a, b));
    } else {
      if (token.includes('(')) {
        operandsArray.push(parseFloat(token.match(negativeValueInBrackets)[0]));
        continue;
      }
      operandsArray.push(parseFloat(token));
    }
  }

  if (operandsArray.length !== 1) {
    throw new SyntaxError('Invalid expression');
  }

  return operandsArray.pop();
};
