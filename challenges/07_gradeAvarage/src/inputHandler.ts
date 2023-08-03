import readline from 'readline';
import { InvalidInputError } from './errors/InvalidInputError';
import { IInputHandler } from './protocols/IInputHandler';
import { SingleGrade } from './protocols/IGradeCalculator';

export class InputHandler implements IInputHandler {
  private read;

  constructor() {
    this.read = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async collectInputs(): Promise<SingleGrade[]> {
    const inputArray = [];

    while (true) {
      const userInput = await this.getUserInput('Enter subject and grade (or press Enter to finish): ');

      if (userInput === '') {
        break;
      }

      try {
        const params = this.parseInput(userInput);
        inputArray.push(params);
      } catch (e) {
        console.log('Invalid input. Please try again.');
      }
    }

    return inputArray;
  } 

  getUserInput(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.read.question(question, resolve);
    });
  }

  parseInput(input: string): SingleGrade {
    const [subject, gradeStr] = input.split(' ');
    const grade = parseFloat(gradeStr);

    if (isNaN(grade)) {
      throw new InvalidInputError('Invalid grade.');
    }

    return this.getValidatedValues({ subject, grade });
  }

  getValidatedValues(input: SingleGrade): SingleGrade {
    const { subject, grade } = input;

    if (!subject || subject.trim() === '') {
      throw new InvalidInputError('Subject cannot be empty.');
    }

    if (grade < 0 || grade > 100) {
      throw new InvalidInputError('Grade must be between 0 and 100.');
    }
    
    return { subject, grade}
  }

  closeReader(): void {
    this.read.close();
  }
}