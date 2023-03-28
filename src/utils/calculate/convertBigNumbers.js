import { calculationAccuracy, specificFrom, specificTo } from '@/constants/common';

export const convertToReadable = num => {
  const numStr = num.toString();

  if (!numStr.includes('e')) {
    if (isInRange(num)) {
      const calculationAccuracy = 6;

      return num.toFixed(calculationAccuracy);
    }

    return Number.isInteger(num) ? num.toString() : num.toFixed(calculationAccuracy);
  }

  return convertToScientific(num);
};

const isInRange = num => num >= specificFrom && num <= specificTo;
const convertToScientific = num => {
  let exponent = 0;

  if (num !== 0) {
    exponent = Math.floor(Math.log10(Math.abs(num)));
  }
  const coefficient = num / 10 ** exponent;
  const formattedCoefficient = coefficient.toFixed(calculationAccuracy);

  if (formattedCoefficient === '1.000' || formattedCoefficient === '-1.000') {
    return `1x10^${exponent}`;
  }
  if (exponent === 0 && Number.isInteger(num)) {
    return num.toString();
  }
  const formattedExponent = exponent >= 0 ? `+${exponent}` : exponent;

  return `${formattedCoefficient}x10^${formattedExponent}`;
};
