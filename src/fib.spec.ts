import { fib } from './fib';

describe(`fibonacci`, () => {
  const fibNums = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
  fibNums.forEach((fibNum, i) => {
    test(`fib ${i} should be ${fibNum}`, () => {
      const result = fib(i);
      expect(result).toBe(fibNum);
    });
  });
});



// function forEach(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i], i);
//     }
// }