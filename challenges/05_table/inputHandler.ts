import readline from 'readline';
import { getTable } from './getTable';
import { InvalidNumberError } from './errors/InvalidNumberError';

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function handleInput(): void {
  read.question('Enter a number: ', (userInput) => {
    try {
      executeInput(userInput);
    } catch (e) {
      if (e instanceof InvalidNumberError) {
        console.log('Error: ', e.message);
      }
    }

    read.close();
  });
}

function validateInput(input: string): void {
  if (isNaN(Number(input))) {
    throw new InvalidNumberError();
  }
}

function executeInput(userInput: string): void {
  validateInput(userInput);
  const table = getTable(parseInt(userInput, 10));
  console.log(`Here is the table of the number ${userInput}:`);
  console.table(table);
}
