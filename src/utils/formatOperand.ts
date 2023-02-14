const integerFormatter = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
});

export const formatOperand = (operand: string | null) => {
  if (!operand) return;
  const [int, decimal] = operand.split('.');

  if (!decimal && decimal !== '') return integerFormatter.format(+int);

  return `${integerFormatter.format(+int)}.${decimal}`;
};
