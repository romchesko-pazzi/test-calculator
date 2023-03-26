import { Brackets } from '@/constants/brackets';

export const isBracketsValid = expression => {
  const bracketsStack = [];

  for (let i = 0; i < expression.length; i++) {
    const element = expression[i];

    if (element === Brackets.openBracket) {
      bracketsStack.push(element);
    } else if (element === Brackets.closeBracket) {
      if (bracketsStack.length === 0) {
        return false; // есть закрывающая скобка, когда нет открывающей скобки
      }
      bracketsStack.pop();
    }
  }

  return bracketsStack.length === 0; // если стек пуст, то скобки сбалансированы
};
