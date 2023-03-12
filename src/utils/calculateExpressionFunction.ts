import { calculationAccuracy } from 'constants/common';
import { correctBrackets, removeExcess, tooMuchDots } from 'constants/regex';
import { isValid } from 'utils/isValid';

const operators: any = {
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

const calculateRPN = (expression: string) => {
  const stack: any = [];

  const tokens = expression.split(/\s+/);

  for (const token of tokens) {
    if (operators[token]) {
      const [b, a] = [stack.pop(), stack.pop()];

      stack.push(operators[token](a, b));
    } else {
      stack.push(parseFloat(token));
    }
  }

  if (stack.length !== 1) {
    throw new SyntaxError('Invalid expression');
  }

  return stack.pop();
};

const infixToRPN = (expression: string) => {
  const output = [];
  const stack = [];

  const precedence: any = {
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
        precedence[token] <= precedence[stack[stack.length - 1]]
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

export const calculateExpression = (expression: string) => {
  let formattedExp = expression.replace(removeExcess, '').replace(correctBrackets, ')');

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
