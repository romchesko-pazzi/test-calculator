export const removeExcess = /\s+/g;
export const correctBrackets = /^[\s)]+|[\s(]+$/g;
export const emptyBrackets = /\(\)/;
export const operations = /^[+\-*/]+|[+\-*/]+$/;
export const incorrectExpression = /[+\-*/]\s*([()])$|[+-/*]\.$|^[()][+*/-]\d/;
export const dotInTheEnd = /\d\.$/;
export const tooMuchDots = /\d\.{2,}/;
