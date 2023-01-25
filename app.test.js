import { aLength } from './length';
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
  describe('When using map without the array function', () => {
    test('Then if you * for a number', () => {
      const array = [1, 2, 3, 4, 5];
      const number = 2;
      const simbol = '*';
      const r = aMap(array, number, simbol);
      expect(r).toEqual([2, 4, 6, 8, 10]);
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
