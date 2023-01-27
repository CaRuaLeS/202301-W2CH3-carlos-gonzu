import { aLength } from './length';
import { toPush } from './pushFunc';
import { aMap } from './map';
import { popFunc } from './pop';
import { Unshift } from './unshift';
import { findFunc } from './find';
import { filterFunc } from './filter';

describe('Given array functions', () => {
  describe('When using aLength function get the length without the .length', () => {
    test('Then if u set an array it should return the length number', () => {
      const array = [1, 2, 3, 4, 5];
      const r = aLength(array);
      expect(r).toEqual(5);
    });
  });
  describe('When using aLength function get the length without the .length', () => {
    test('Then if u set an empty array it should return 0', () => {
      const array = [];
      const r = aLength(array);
      expect(r).toEqual(0);
    });
  });
  describe('When using toPush function u could add items to an array.', () => {
    test('Then if you have an array of numbers and you want to add a string, you should get it done', () => {
      const a = [1, 2, 3];
      const b = 4;
      const expected = 4;
      const result = toPush(a, b);
      expect(result).toEqual(expected);
      expect(a).toEqual([1, 2, 3, 4]);
    });
  });
  describe('When using toPush function u could add items to an array.', () => {
    test('Then pushes an element to an empty array and returns the new length', () => {
      const a = [];
      const b = 1;
      const expected = 1;
      const result = toPush(a, b);
      expect(result).toEqual(expected);
      expect(a).toEqual([1]);
    });
  });
  describe('When using map without the array function', () => {
    test('Then if you * for a number', () => {
      const array = [1, 2, 3, 4, 5];
      const number = 2;
      const simbol = '*';
      const r = aMap(array, number, simbol);
      expect(r).toEqual([2, 4, 6, 8, 10]);
    });
    test('Then if you + for a number', () => {
      const array = [1, 2, 3, 4, 5];
      const number = 1;
      const simbol = '+';
      const r = aMap(array, number, simbol);
      expect(r).toEqual([2, 3, 4, 5, 6]);
    });
    test('Then if you - for a number', () => {
      const array = [1, 2, 3, 4, 5];
      const number = 1;
      const simbol = '-';
      const r = aMap(array, number, simbol);
      expect(r).toEqual([0, 1, 2, 3, 4]);
    });
    test('Then if you / for a number', () => {
      const array = [1, 2, 3, 4, 5];
      const number = 1;
      const simbol = '/';
      const r = aMap(array, number, simbol);
      expect(r).toEqual([1, 2, 3, 4, 5]);
    });
    test('Then if you $ for a number it gives the same array', () => {
      const array = [1, 2, 3, 4, 5];
      const number = 1;
      const simbol = '$';
      const r = aMap(array, number, simbol);
      expect(r).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('When using pop without the array function', () => {
    test('Then if your last value is hola ', () => {
      const arr = [1, 2, 3, 4, 'hola'];
      const r = popFunc(arr);
      expect(r).toBe('hola');
    });
  });
  describe('When using unshift function', () => {
    test('Unshift adds element to the beginning of the array', () => {
      const arr = [1, 2, 3];
      const result = Unshift(arr, 0);
      expect(result).toEqual([0, 1, 2, 3]);
    });
  });
  describe('When using unshift function', () => {
    test('aUnshift returns a new array', () => {
      const arr = [1, 2, 3];
      const result = Unshift(arr, 0);
      expect(result).not.toBe(arr);
    });
  });

  describe('When using find without the array function', () => {
    test('Then if you put a value that is on the array, it returns it', () => {
      const arr = [1, 2, 3, 4, 'hola'];
      const r = findFunc(arr, 'hola');
      expect(r).toBe('hola');
    });
  });
  describe('When using filter without the array function', () => {
    test('Then if  you check it gives a new array with the objects of the condition', () => {
      function condition(a) {
        if (a > 3) {
          return true;
        }
      }

      const arr = [1, 2, 3, 4, 5, 6];
      const r = filterFunc(arr, condition);
      expect(r).toEqual([4, 5, 6]);
    });
  });
});
