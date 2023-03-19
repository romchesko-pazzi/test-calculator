export const removeExcess = /\s+/g;
export const emptyBrackets = /\(\)/;
export const operations = /^[+\-*/]+|[+\-*/]+$/;
export const incorrectExpression = /[+\-*/]\s*([()])$|[+-/*]\.$|^[()][+*/-]\d/;
export const dotInTheEnd = /\d\.$/;
export const digitBeforeOfAfterBracket = /\d\(|\)\d/;
export const negativeValue = /\(-\d\)/;
export const negativeValueInBrackets = /-?\d+/;
