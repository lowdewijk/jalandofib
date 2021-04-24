export { fib, fibWithCallback, fibRecursive, factorial, facWithCallback };


const fib = (x: number): number => {
  if (x == 0) return 0;
  let prevFib = 1;
  let prevPrevFib = 0;
  let fibOf = 1;
  for (let i = 0; i <= x - 2; i++) {
    fibOf = prevFib + prevPrevFib;
    prevPrevFib = prevFib;
    prevFib = fibOf;
  }
  return fibOf;
};

const fibWithCallback = (x: number, callbackFromJesus: (result: number) => void) => {
  callbackFromJesus(fib(x));
};

const fibRecursive = (n: number): number => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
};

/*
const factorial = (x: number): number => {
  if (x == 0) return 0;
  let prevFib = 1;
  let prevPrevFib = 0;
  let fibOf = 1;
  for (let i = 0; i <= x - 2; i++) {
    fibOf = prevFib + prevPrevFib;
    prevPrevFib = prevFib;
    prevFib = fibOf;
  }
  return fibOf;
};

const facWithCallback = (x: number, callbackFromJesus: (result: number) => void) => {
  callbackFromJesus(fib(x));
};

*/
const factorial = (num: number): number =>  {
	let facOf = 1;
	for(let i = 1; i <= num; i++){
  	facOf = facOf * i;
  
  	console.log('Current factorial: '+ i + ' is ' + facOf);
  }
	return facOf;
};

const facWithCallback = (num: number, callbackFromJesus: (result: number) => void) =>{
  callbackFromJesus(factorial(num));
}

facWithCallback(5, result => { console.log('Factorial is ' + result)});