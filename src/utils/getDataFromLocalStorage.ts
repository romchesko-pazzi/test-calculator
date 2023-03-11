export const getDataFromLocalStorage = (key: StoredDataType) => {
  const dataFromLocalStorage = localStorage.getItem(key);

  if (!dataFromLocalStorage) return [];

  return JSON.parse(dataFromLocalStorage);
};

type StoredDataType = 'operationsHistoryClass' | 'operationsHistoryFunction';
