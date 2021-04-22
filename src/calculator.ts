
export function exactParseInt(str: string): number {
  const n = parseInt(str);  
  return (n + "") === str ? n : NaN;
}

export function calculateString(calculation: string): number {
  const elements = calculation.split("+");
  if (elements.length === 2) {
    return exactParseInt(elements[0]) + exactParseInt(elements[1]);
  } else {
    return exactParseInt(calculation);
  }
}