
export function exactParseInt(str: string): number {
  const n = parseInt(str);  
  return (n + "") === str ? n : NaN;
}

export function calculateString(calculation: string): number {
  const elements = calculation.split("+");
  let result = 0;
  for(let i = 0; i < elements.length; i++) {
    result += exactParseInt(elements[i]);
  }
  return result;
}