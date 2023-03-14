import { addMultiplyToBrackets } from './addMultiplyToBrackets';

import { calculationAccuracy } from 'constants/common';
import {
  correctBrackets,
  digitBeforeOfAfterBracket,
  removeExcess,
  tooMuchDots,
} from 'constants/regex';
import { isValid } from 'utils/isValid';

export const calculateExpression = (expression: string) => {
  let formattedExp = expression.replace(removeExcess, '').replace(correctBrackets, ')');

  if (digitBeforeOfAfterBracket.test(formattedExp)) {
    formattedExp = addMultiplyToBrackets(formattedExp);
  }
  if (tooMuchDots.test(formattedExp)) {
    throw new SyntaxError('Invalid expression');
  }
  isValid(formattedExp);
  while (/\(/.test(formattedExp)) {
    const match = formattedExp.match(/\(([^()]+)\)/);

    if (match) {
      const result = calculateExpression(match[1]);

      formattedExp = formattedExp.replace(match[0], result);
    }
  }
  try {
    const rpnExp = infixToRPN(formattedExp);
    const result = calculateRPN(rpnExp);

    if (!result && result !== 0) return '';
    if (Number.isNaN(result)) {
      throw new SyntaxError('Invalid expression');
    }

    return Number.isInteger(result)
      ? result.toString()
      : result.toFixed(calculationAccuracy);
  } catch (e: unknown) {
    const error = e as SyntaxError;

    throw new SyntaxError(error.message);
  }
};

const infixToRPN = (expression: string) => {
  const output = [];
  const stack = [];

  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '%': 2,
  };

  const tokens = expression.split(/([-+*/%()])/);

  for (const token of tokens) {
    if (/\s+/.test(token)) {
      continue;
    }
    if (/[-+*/%]/.test(token)) {
      while (
        stack.length &&
        stack[stack.length - 1] !== '(' &&
        precedence[token as keyof typeof precedence] <=
          precedence[stack[stack.length - 1] as keyof typeof precedence]
      ) {
        output.push(stack.pop());
      }
      stack.push(token);
    } else if (token === '(') {
      stack.push(token);
    } else if (token === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        output.push(stack.pop());
      }
      if (stack.length === 0) {
        throw new SyntaxError('Unmatched parentheses');
      }
      stack.pop();
    } else {
      output.push(token);
    }
  }

  while (stack.length) {
    const operator = stack.pop();

    if (operator === '(') {
      throw new SyntaxError('Unmatched parentheses');
    }
    output.push(operator);
  }

  return output.join(' ');
};

const calculateRPN = (expression: string) => {
  const operandsArray: number[] = [];

  const tokens = expression.split(/\s+/);

  for (const token of tokens) {
    if (operators[token as keyof typeof operators]) {
      const [b, a] = [operandsArray.pop(), operandsArray.pop()];

      operandsArray.push(
        operators[token as keyof typeof operators](a as number, b as number),
      );
    } else {
      operandsArray.push(parseFloat(token));
    }
  }

  if (operandsArray.length !== 1) {
    throw new SyntaxError('Invalid expression');
  }

  return operandsArray.pop();
};

const operators = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => {
    if (b === 0) {
      throw new SyntaxError('Cannot divide by zero');
    }

    return a / b;
  },
  '%': (a: number, b: number) => {
    if (b === 0) {
      throw new SyntaxError('Cannot divide by zero');
    }

    return a % b;
  },
};
