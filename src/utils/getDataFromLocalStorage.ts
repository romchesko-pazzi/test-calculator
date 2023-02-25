export const getDataFromLocalStorage = () => {
  const dataFromLocalStorage = localStorage.getItem('operationsHistory');

  if (!dataFromLocalStorage) return [];

  return JSON.parse(dataFromLocalStorage);
};
