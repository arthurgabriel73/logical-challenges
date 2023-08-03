import { SingleGrade, IGradeCalculator } from './protocols/IGradeCalculator';
import { IInputHandler } from './protocols/IInputHandler';

export class InputProcessor {  
  constructor(
    private readonly gradeCalculator: IGradeCalculator, 
    private readonly inputHandler: IInputHandler) {
    };

  async execute() {
    const inputArray: SingleGrade[] = await this.inputHandler.collectInputs();
    const average = this.gradeCalculator.execute(inputArray);
    console.log(`Average grade: ${average}`);
    this.inputHandler.closeReader();
  }
}


