export const isEven = (n: number): Boolean => {
  if (n % 2 === 0){
    return true;
  }
  else {
    return false;
  }
};

console.log('Result of isEven function is: ' + isEven(82));
console.log('Result of isEven function is: ' + isEven(91));

