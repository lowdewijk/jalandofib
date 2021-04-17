export const fib = (num: number) => {
  if (num == 0) return 0;
  let prevFib = 1;
  let prevPrevFib = 0;
  let fibOf = 1;
  for (let i = 0; i <= num - 2; i++) {
    fibOf = prevFib + prevPrevFib;
    prevPrevFib = prevFib;
    prevFib = fibOf;
  }
  return fibOf;
};