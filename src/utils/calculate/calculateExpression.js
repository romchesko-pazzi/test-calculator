import { calculationAccuracy } from 'constants/common';
import { digitBeforeOfAfterBracket, negativeValue, removeExcess } from 'constants/regex';
import { isValid } from 'utils/calculate/validate/isValid.js';

import { addMultiplyToBrackets } from './validate/addMultiplyToBrackets.js';
import { calculateRPN } from './calculateRPN.js';
import { convertToRPN } from './convertToRPN.js';

export const calculateExpression = expression => {
  let formattedExp = expression.replace(removeExcess, '');

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
    const rpnExp = convertToRPN(formattedExp);
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
