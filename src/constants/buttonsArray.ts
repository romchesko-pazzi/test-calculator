import { v4 } from 'uuid';

import { Brackets } from '@/constants/brackets';
import { Operations } from '@/constants/operations';
import { IButton } from '@/interfaces/buttons';

export const buttons: IButton[] = [
  { id: v4(), type: 'operation', isCancelBtn: true, operation: Operations.removeAll },
  { id: v4(), type: 'digit', isCancelBtn: false, digit: '7' },
  { id: v4(), type: 'digit', isCancelBtn: false, digit: '8' },
  { id: v4(), type: 'digit', isCancelBtn: false, digit: '9' },
  { id: v4(), type: 'operation', isCancelBtn: false, operation: Operations.multiply },
  { id: v4(), type: 'operation', isCancelBtn: false, operation: Operations.minus },
  { id: v4(), type: 'digit', isCancelBtn: false, digit: '4' },
  { id: v4(), type: 'digit', isCancelBtn: false, digit: '5' },
  { id: v4(), type: 'digit', isCancelBtn: false, digit: '6' },
  { id: v4(), type: 'operation', isCancelBtn: false, operation: Operations.divide },
  { id: v4(), type: 'operation', isCancelBtn: false, operation: Operations.plus },
  { id: v4(), type: 'digit', isCancelBtn: false, digit: '1' },
  { id: v4(), type: 'digit', isCancelBtn: false, digit: '2' },
  { id: v4(), type: 'digit', isCancelBtn: false, digit: '3' },
  { id: v4(), type: 'operation', isCancelBtn: false, operation: Operations.equals },
  { id: v4(), type: 'digit', isCancelBtn: false, digit: '.' },
  { id: v4(), type: 'digit', isCancelBtn: false, digit: Brackets.openBracket },
  { id: v4(), type: 'digit', isCancelBtn: false, digit: '0' },
  { id: v4(), type: 'digit', isCancelBtn: false, digit: Brackets.closeBracket },
  {
    id: v4(),
    type: 'operation',
    isCancelBtn: false,
    operation: Operations.removeElement,
  },
  {
    id: v4(),
    type: 'operation',
    isCancelBtn: false,
    operation: Operations.remainderOfDivision,
  },
  {
    id: v4(),
    type: 'operation',
    isCancelBtn: false,
    operation: Operations.changeSign,
  },
];
