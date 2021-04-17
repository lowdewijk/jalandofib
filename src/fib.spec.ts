import { fib, fibRecursive, fibWithCallback } from './fib';

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

  fibTestNums.forEach((fibTestNum, i) => {
    test(`fibRecursive ${i} should be ${fibTestNum}`, () => {
      expect(fibRecursive(i)).toBe(fibTestNum);
    });
  });

  test("that fib is the same as fibRecursive", () => {
    for (let i = 0; i < 10; i++) {
      expect(fib(i)).toBe(fibRecursive(i));
    }
  });
});