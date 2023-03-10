import { aLength } from './length.js';

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
