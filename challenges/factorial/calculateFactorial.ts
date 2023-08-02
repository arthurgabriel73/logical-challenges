export function getRecursiveFactorial(num: number): number {
  if (num === 0 || num === 1) return 1;
  return num * getRecursiveFactorial(num - 1);
}

export function getFactorialForBigNumbers(num: number): number {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}