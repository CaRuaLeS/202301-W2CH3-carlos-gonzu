import { aLength } from './length.js';

const dArray = [1, 2, 3, 4, 5];

export const aMap = (arr, number, simbol) => {
  const _length = aLength(arr);

  for (let i = 0; i < _length; i++) {
    switch (simbol) {
      case '*':
        arr[i] *= number;
        break;
      case '+':
        arr[i] += number;
        break;
      case '-':
        arr[i] -= number;
        break;
      case '/':
        arr[i] /= number;
        break;
      default:
        break;
    }
  }

  return arr;
};

console.log(aMap(dArray, 7, '*'));
