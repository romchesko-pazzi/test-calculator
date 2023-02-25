import { dotInTheEnd } from 'constants/regex';

export const isDotInTheEnd = (operand: string) => {
  if (dotInTheEnd.test(operand)) {
    return operand.substring(0, operand.length - 1);
  }

  return operand;
};
