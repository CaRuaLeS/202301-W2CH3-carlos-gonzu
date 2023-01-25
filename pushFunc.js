import { aLength } from './length.js';

const array = [1, 2, 3, 4, 5];

export const toPush = (a, b) => {
  const value = aLength(a);
  a[value] = b;
  console.log(b);
  return value + 1;
};

console.log(toPush(array, 'hola'));
