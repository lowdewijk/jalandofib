
export function exactParseInt(str: string): number {
  const n = parseInt(str);  
  return (n + "") === str ? n : NaN;
}


export function calculateString(calculation: string): number {
  return exactParseInt(calculation);
}