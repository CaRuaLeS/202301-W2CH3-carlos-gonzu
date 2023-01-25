import { aLength } from './length';

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
});
