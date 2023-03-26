import { Operations } from '@/constants/operations';

export interface IButton {
  id: string;
  type: 'operation' | 'digit';
  isCancelBtn: boolean;
  operation?: Operations;
  digit?: string;
}
