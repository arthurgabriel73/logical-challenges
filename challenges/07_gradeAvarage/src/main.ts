import { GradeCalculator } from "./GradeCalculator";
import { InputProcessor } from "./inputHandler";

function main (): void {
  const gradeCalculator = new GradeCalculator();
  const inputProcessor = new InputProcessor(gradeCalculator);
  inputProcessor.handleInput();
}

main();