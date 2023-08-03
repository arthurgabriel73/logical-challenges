import readline from 'readline';
import { GradeCalculator } from './GradeCalculator';
import { InvalidInputError } from './errors/InvalidInputError';

export class InputProcessor {
  private read;
  
  constructor(private readonly gradeCalculator: GradeCalculator) {
    this.read = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async handleInput() {
    const inputArray: GradeCalculator.Params = await this.collectInputs();
    this.processInputArray(inputArray);
    const average = this.gradeCalculator.execute(inputArray);
    console.log(`Average grade: ${average}`);
    this.read.close();
  }

  async collectInputs() {
    const inputArray = [];

    while (true) {
      const userInput = await this.getUserInput('Enter subject and grade (or press Enter to finish): ') as string;

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

  getUserInput(question: string) {
    return new Promise((resolve) => {
      this.read.question(question, resolve);
    });
  }

  parseInput(input: string) {
    const [subject, gradeStr] = input.split(' ');
    const grade = parseFloat(gradeStr);

    if (isNaN(grade)) {
      throw new InvalidInputError('Invalid grade.');
    }

    return { subject, grade };
  }

  processInputArray(inputArray: GradeCalculator.Params) {
    
    for (const input of inputArray) {
      try {
        this.validateInput(input);
      } catch (e) {
        if (e instanceof InvalidInputError) {
          console.log(`Error: ${e.message}`);
        }
      }
    }
  }

  validateInput(input: GradeCalculator.SingleGrade) {
    const { subject, grade } = input;

    if (!subject || subject.trim() === '') {
      throw new InvalidInputError('Subject cannot be empty.');
    }

    if (grade < 0 || grade > 100) {
      throw new InvalidInputError('Grade must be between 0 and 10.');
    }
  }

  executeInput(input: any) {
    const avarage = this.gradeCalculator.execute([input]);
    console.log(`Average grade: ${avarage}`);
  }

}


