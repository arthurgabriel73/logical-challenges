export function isPrime(candidateNumber: number): boolean {
  if (candidateNumber <= 1) return false;
  if (candidateNumber === 2 || candidateNumber === 3) return true
  if (candidateNumber % 2 == 0 || candidateNumber % 3 == 0) return false;
  
  for (let i = 5; i * i <= candidateNumber; i = i + 6) {
    if (candidateNumber % i == 0 || candidateNumber % (i + 2) == 0) return false;
  }
  return true
}
