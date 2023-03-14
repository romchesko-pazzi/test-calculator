export const addMultiplyToBrackets = (expression: string) => {
  let modified = expression.replace(/([0-9])\(/g, '$1*(');

  modified = modified.replace(/\)(?!\s*[+\-*/])/g, ')*');
  if (modified[modified.length - 1] === '*') {
    return modified.slice(0, -1);
  }

  return modified;
};
