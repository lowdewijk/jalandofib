import { calculateString, exactParseInt } from './calculator';

describe(`exactParseInt`, () => {
  test("empty string should return NaN", () => {
    expect(exactParseInt("")).toBe(NaN);
  });

  for (let i = 0; i < 99; i++)   {
    test(`literal number ${i} should return same number`, () => {
      expect(exactParseInt(i + "")).toBe(i);
    });
  }

  test("textual string should return NaN", () => {
    expect(exactParseInt("hello world")).toBe(NaN);
  });

  test("textual string with numbers should still be NaN", () => {
    expect(exactParseInt("1+Bla")).toBe(NaN);
  });
});


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

  test("textual string should return NaN", () => {
    expect(calculateString("1+Bla")).toBe(NaN);
  });

});