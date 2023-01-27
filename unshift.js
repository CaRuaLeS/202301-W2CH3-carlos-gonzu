import { aLength } from './length.js';

const array = [1, 2, 3, 4, 5, 6];

export const Unshift = (arr, element) => {
  const newArr = [element];
  for (let i = 0; i < aLength(arr); i++) {
    newArr.push(arr[i]);
  }

  return newArr;
};

console.log(Unshift(array, 0));
