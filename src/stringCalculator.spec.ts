import { calculateString } from './calculator';

describe(`stringCalculator`, () => {
  test("empty string should return NaN", () => {
    expect(calculateString("")).toBe(NaN);
  });
});