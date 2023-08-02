import readline from 'readline';
import { getRecursiveFactorial } from './calculateFactorial'

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function handleInput(): void {
  read.question('Enter a number: ', (userInput) => {
  try {
      const factorial = getRecursiveFactorial(parseInt(userInput, 10));
      console.log(`The factorial for ${userInput} is ${factorial}`);
    } catch(e) {
      console.log(`The input ${userInput} is not valid, please insert a valid input!`)
    }
  read.close();
});
}
