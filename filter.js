import { aLength } from './length.js';
import { toPush } from './pushFunc.js';

export const filterFunc = (arr, boleanCondition) => {
  const newArr = [];
  for (let i = 0; i < aLength(arr); i++) {
    if (boleanCondition(arr[i])) {
      toPush(newArr, arr[i]);
    }
  }

  return newArr;
};
