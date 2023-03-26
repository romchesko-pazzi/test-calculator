import { LocalStorageKeys } from '@/interfaces/localStorageKeys';

export const getOperationsHistory = (key: LocalStorageKeys) => {
  const dataFromLocalStorage = localStorage.getItem(key);

  if (!dataFromLocalStorage) return [];

  return JSON.parse(dataFromLocalStorage);
};
