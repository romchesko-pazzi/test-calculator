import { LocalStorageKeys } from '@/interfaces/localStorageKeys';

export const setItemToLocalStorage = (key: LocalStorageKeys, value: any) => {
  localStorage.setItem(key, value);
};
