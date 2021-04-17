import { fib, fibWithCallback } from './fib';

describe(`fibonacci`, () => {
  const fibTestNums = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

  fibTestNums.forEach((fibTestNum, i) => {
    test(`fib ${i} should be ${fibTestNum}`, () => {
      expect(fib(i)).toBe(fibTestNum);
    });
  });

  fibTestNums.forEach((fibTestNum, i) => {
    test(`fibWithCallback ${i} should be ${fibTestNum}`, () => {
      fibWithCallback(i, (result) => {
        expect(result).toBe(fibTestNum);
      });
    });
  });

});