import { aLength } from './length';
import { toPush } from './pushFunc';
import { aMap } from './map';
import { popFunc } from './pop';

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
});
