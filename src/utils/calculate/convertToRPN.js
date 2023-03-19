import { cutNegative } from 'constants/common';

export const convertToRPN = expression => {
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
