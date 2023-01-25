import { aLength } from './length.js';

export const toPush = (a, b) => {
  const value = aLength(a);
  a[value] = b;
  console.log(b);
  return value + 1;
};
