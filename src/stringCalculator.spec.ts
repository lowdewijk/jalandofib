import { calculateString } from './calculator';

describe(`stringCalculator`, () => {
  test("empty string should return NaN", () => {
    expect(calculateString("")).toBe(NaN);
  });

  for (let i = 0; i < 99; i++)   {
    test(`literal number ${i} should return same number`, () => {
      expect(calculateString(i + "")).toBe(i);
    });
  }

  test("textual string should return NaN", () => {
    expect(calculateString("hello world")).toBe(NaN);
  });

});