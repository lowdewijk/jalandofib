export function exactParseFloat(str: string): number {
  const n = parseFloat(str);  
  return (n + "") === str ? n : NaN;
}

export function calculateString(calculation: string): number {
  const elements = calculation.split("+");
  let result = 0;
  for(let i = 0; i < elements.length; i++) {
    result += exactParseFloat(elements[i]);
  }
  return result;
}