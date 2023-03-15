import { addMultiplyToBrackets } from './addMultiplyToBrackets';

import { calculationAccuracy, cutNegative } from 'constants/common';
import {
  correctBrackets,
  digitBeforeOfAfterBracket,
  negativeValue,
  removeExcess,
  negativeValueInBrackets,
} from 'constants/regex';
import { isValid } from 'utils/isValid';

export const calculateExpression = expression => {
  let formattedExp = expression.replace(removeExcess, '').replace(correctBrackets, ')');

  if (digitBeforeOfAfterBracket.test(formattedExp)) {
    formattedExp = addMultiplyToBrackets(formattedExp);
  }

  isValid(formattedExp);
  while (/\(/.test(formattedExp) && !negativeValue.test(formattedExp)) {
    const match = formattedExp.match(/\(([^()]+)\)/);

    if (match) {
      const result = calculateExpression(match[1]);

      formattedExp = formattedExp.replace(match[0], result);
    }
  }
  try {
    const rpnExp = infixToRPN(formattedExp);
    const result = calculateRPN(rpnExp);

    if (Number.isNaN(result)) {
      throw new SyntaxError('Invalid expression');
    }

    return Number.isInteger(result)
      ? result.toString()
      : result.toFixed(calculationAccuracy);
  } catch (e) {
    throw new SyntaxError(e.message);
  }
};

const infixToRPN = expression => {
  const operands = [];
  const operatorsReverse = [];

  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '%': 2,
  };

  const tokens = expression.split(/([-+*/%])/);

  for (let i = 0; i < tokens.length; i += 1) {
    if (/\s+/.test(tokens[i]) || tokens[i] === '') {
      continue;
    }
    if (/[-+*/%]/.test(tokens[i])) {
      while (
        operatorsReverse.length &&
        operatorsReverse[operatorsReverse.length - 1] !== '(' &&
        precedence[tokens[i]] <= precedence[operatorsReverse[operatorsReverse.length - 1]]
      ) {
        operands.push(operatorsReverse.pop());
      }
      operatorsReverse.push(tokens[i]);
    } else if (tokens[i] === '(') {
      const negative = tokens.splice(i, cutNegative);

      operands.push(negative.join(''));
      i -= 1;
    } else if (tokens[i] === ')') {
      while (
        operatorsReverse.length &&
        operatorsReverse[operatorsReverse.length - 1] !== '('
      ) {
        operands.push(operatorsReverse.pop());
      }
      if (operatorsReverse.length === 0) {
        throw new SyntaxError('Unmatched parentheses');
      }
      operatorsReverse.pop();
    } else {
      operands.push(tokens[i]);
    }
  }

  while (operatorsReverse.length) {
    const operator = operatorsReverse.pop();

    if (operator === '(') {
      throw new SyntaxError('Unmatched parentheses');
    }
    operands.push(operator);
  }

  return operands.join(' ');
};

const calculateRPN = expression => {
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

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => {
    if (b === 0) {
      throw new SyntaxError('Cannot divide by zero');
    }

    return a / b;
  },
  '%': (a, b) => {
    if (b === 0) {
      throw new SyntaxError('Cannot divide by zero');
    }

    return a % b;
  },
};
