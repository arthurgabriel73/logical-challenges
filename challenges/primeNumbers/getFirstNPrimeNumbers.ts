import { isPrime } from "./isPrime";

export function getFirstNPrimeNumbers(n: number = 10) {
 const primes: number[] = [];
 let candidateNumber = 2;

 while (primes.length < n) {
    if (isPrime(candidateNumber)) {
      primes.push(candidateNumber);
    }
    candidateNumber++;
  }

 return primes;
}