import { calculationAccuracy } from 'constants/common';
import { Operations } from 'constants/operations';

export const evaluateFunc = (
  prev: string | null,
  curr: string | null,
  operation: Operations | null,
): string | null => {
  if (!prev || !curr) return null;
  const previous = parseFloat(prev);
  const current = parseFloat(curr);
  let result = 0;

  switch (operation) {
    case Operations.plus:
      result = previous + current;
      break;
    case Operations.minus:
      result = previous - current;
      break;
    case Operations.multiply:
      result = previous * current;
      break;
    case Operations.divide:
      result = previous / current;
      break;
    default:
      return null;
  }

  return Number.isInteger(result)
    ? result.toString()
    : result.toFixed(calculationAccuracy);
};
