import { calculationAccuracy } from 'constants/common';
import { OperationType } from 'types/operationTypes';

export const evaluateFunc = (
  prev: string | null,
  curr: string | null,
  operation: OperationType | null,
): string | null => {
  if (!prev || !curr) return null;
  const previous = parseFloat(prev);
  const current = parseFloat(curr);
  let result = 0;

  switch (operation) {
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '/':
      result = previous / current;
      break;
    default:
      return null;
  }

  return Number.isInteger(result)
    ? result.toString()
    : result.toFixed(calculationAccuracy);
};
