import { aLength } from './length.js';

export const popFunc = (arr) => {
  let lastValue = 0;
  for (const i of arr) {
    lastValue = i;
  }

  arr.length = aLength(arr) - 1;
  return lastValue;
};
