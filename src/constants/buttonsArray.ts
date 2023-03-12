import { Brackets } from 'constants/brackets';
import { Operations } from 'constants/operations';

export const buttons = [
  { type: 'operation', isCancelBtn: true, operation: Operations.removeAll },
  { type: 'digit', isCancelBtn: false, digit: '7' },
  { type: 'digit', isCancelBtn: false, digit: '8' },
  { type: 'digit', isCancelBtn: false, digit: '9' },
  { type: 'operation', isCancelBtn: false, operation: Operations.multiply },
  { type: 'operation', isCancelBtn: false, operation: Operations.minus },
  { type: 'digit', isCancelBtn: false, digit: '4' },
  { type: 'digit', isCancelBtn: false, digit: '5' },
  { type: 'digit', isCancelBtn: false, digit: '6' },
  { type: 'operation', isCancelBtn: false, operation: Operations.divide },
  { type: 'operation', isCancelBtn: false, operation: Operations.plus },
  { type: 'digit', isCancelBtn: false, digit: '1' },
  { type: 'digit', isCancelBtn: false, digit: '2' },
  { type: 'digit', isCancelBtn: false, digit: '3' },
  { type: 'operation', isCancelBtn: false, operation: Operations.equals },
  { type: 'digit', isCancelBtn: false, digit: '.' },
  { type: 'digit', isCancelBtn: false, digit: Brackets.leftBracket },
  { type: 'digit', isCancelBtn: false, digit: '0' },
  { type: 'digit', isCancelBtn: false, digit: Brackets.rightBracket },
  { type: 'operation', isCancelBtn: false, operation: Operations.removeElement },
  { type: 'operation', isCancelBtn: false, operation: Operations.remainderOfDivision },
];
