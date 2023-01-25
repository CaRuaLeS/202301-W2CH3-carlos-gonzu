import { aLength } from './length';
import { toPush } from './pushFunc';

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
      const array = [1, 2, 3, 4, 5];
      const arrayxd = [1, 2, 3, 4, 5, 6];
      const r = toPush(array, 6);
      expect(r).toBe(arrayxd);
    });
  });
});
