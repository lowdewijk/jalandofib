import { calculateString, exactParseFloat } from './calculator';

describe(`exactParseFloat`, () => {
  test("empty string should return NaN", () => {
    expect(exactParseFloat("")).toBe(NaN);
  });

  for (let i = 0; i < 99; i++)   {
    test(`literal number ${i} should return same number`, () => {
      expect(exactParseFloat(i + "")).toBe(i);
    });
  }

  test("textual string should return NaN", () => {
    expect(exactParseFloat("hello world")).toBe(NaN);
  });

  test("textual string with numbers should still be NaN", () => {
    expect(exactParseFloat("1+Bla")).toBe(NaN);
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

  const testCalulcation = [
    { calc: "1+1", result: 2 },
    { calc: "1+1+1", result: 3 },
    { calc: "0.1+0.1", result: 0.2 },
  ];

  testCalulcation.forEach(({ calc, result}) => {
    test(`that ${calc}`, () => {
      expect(calculateString(calc)).toBe(result);
    });
  });

});