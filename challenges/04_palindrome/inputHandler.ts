import readline from 'readline';
import { checkPalindrome } from './checkPalindrome';

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function handleInput(): void {
  read.question('Enter a word: ', (userInput) => {
    const result = checkPalindrome(userInput);
    console.log(result);
  read.close();
});
}