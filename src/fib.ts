export const fib = (x: number): number => {
  if (x == 0) return 0;
  let prevFib = 1;
  let prevPrevFib = 0;
  let fibOf = 1;
  for (let i = 0; i <= x - 2; i++) {
    fibOf = prevFib + prevPrevFib;
    prevPrevFib = prevFib;
    prevFib = fibOf;
  }
  return fibOf;
};

export const fibWithCallback = (x: number, callbackFromJesus: (result: number) => void) => {
  callbackFromJesus(fib(x));
};

export const fibRecursive = (n: number): number => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
};
