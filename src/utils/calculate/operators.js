export const operators = {
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
