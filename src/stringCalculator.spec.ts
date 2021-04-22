import { calculateString } from './calculator';

describe(`stringCalculator`, () => {
  test("empty string should return NaN", () => {
    expect(calculateString("")).toBe(NaN);
  });

  test("literal number should return same number", () => {
    expect(calculateString("0")).toBe(0);
  });
});