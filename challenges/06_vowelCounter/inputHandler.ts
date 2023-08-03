import readline from 'readline';
import { vowelCounter } from './vowelCounter';

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function handleInput(): void {
  read.question('Enter a sentence: ', (userInput) => {
    const result = vowelCounter(userInput);
    console.log(result);
  read.close();
});
}