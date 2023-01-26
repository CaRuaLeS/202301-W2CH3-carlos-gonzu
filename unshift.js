import { aLength } from './length.js';

const array = [1, 2, 3, 4, 5, 6];
export const unShift = (array, b) => {
  let newWord = [aLength(array[0])];
  newWord = b;
  return newWord;
};

console.log(unShift(array, 1));
