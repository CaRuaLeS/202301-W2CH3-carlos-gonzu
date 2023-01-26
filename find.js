import { aLength } from './length.js';

export const findFunc = (arr, value) => {
  for (let i = 0; i < aLength(arr); i++) {
    if (arr[i] === value) {
      return arr[i];
    }
  }
};
