import { Brackets } from '@/constants/brackets';
import { calculationAccuracy } from '@/constants/common';
import { Operations } from '@/constants/operations';
import { isValid } from '@/utils/calculate/validate/isValid.js';

export const calculateExpression = expression => {
  let formattedExpression = expression.replace(/(\D|^)\.(\d+)/g, '$10.$2');

  formattedExpression = formattedExpression
    .replace(/(?<=\d|\))\(/g, '*(')
    .replace(/\)(?=\d)/g, ')*')
    .replace(/(\D|^)\.(\d+)/g, '$10.$2');
  isValid(formattedExpression);
  const tokens = tokenize(formattedExpression);
  const result = calculateLowPriorityOperators(tokens);

  return Number.isInteger(result)
    ? result.toString()
    : result.toFixed(calculationAccuracy);
};

const tokenize = str => str.match(/\d+(\.\d+)?|[-()+*/%]/g);

const calculateLowPriorityOperators = tokens => {
  let value = calculateHighPriorityOperators(tokens);

  while (
    tokens.length > 0 &&
    (tokens[0] === Operations.plus || tokens[0] === Operations.minus)
  ) {
    const operator = tokens.shift();
    const rightHandOperand = calculateHighPriorityOperators(tokens);

    if (operator === Operations.plus) {
      value += rightHandOperand;
    } else {
      value -= rightHandOperand;
    }
  }

  return value;
};

const calculateHighPriorityOperators = tokens => {
  let value = checkBracketsAndNegative(tokens);

  while (
    tokens.length > 0 &&
    (tokens[0] === Operations.multiply ||
      tokens[0] === Operations.divide ||
      tokens[0] === Operations.remainderOfDivision)
  ) {
    const operator = tokens.shift();
    const rightHandOperand = checkBracketsAndNegative(tokens);

    if (operator === Operations.multiply) {
      value *= rightHandOperand;
    } else if (operator === Operations.divide) {
      if (rightHandOperand === 0) {
        throw new SyntaxError('Cannot divide by zero');
      }
      value /= rightHandOperand;
    } else {
      if (rightHandOperand === 0) {
        throw new SyntaxError('Cannot divide by zero');
      }
      value %= rightHandOperand;
    }
  }

  return value;
};

const checkBracketsAndNegative = tokens => {
  let value;
  let sign = 1;

  if (tokens[0] === Operations.minus) {
    sign = -1;
    tokens.shift();
  }
  if (tokens[0] === Brackets.openBracket) {
    tokens.shift();
    value = calculateLowPriorityOperators(tokens);
    if (tokens[0] === Brackets.closeBracket) {
      tokens.shift();
    }
  } else {
    value = parseFloat(tokens.shift());
  }
  if (tokens[0] && !Number.isNaN(Number(tokens[0]))) {
    value *= parseFloat(tokens.shift());
  }

  return sign * value;
};