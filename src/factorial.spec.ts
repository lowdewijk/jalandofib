import { factorial } from './factorial';

describe(`factorial`, () => {
  const facTestNums = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];

  facTestNums.forEach((facTestNum, i) => {
    test(`factorial ${i} should be ${facTestNum}`, () => {
      expect(factorial(i)).toBe(facTestNum);
    });
  });
});
