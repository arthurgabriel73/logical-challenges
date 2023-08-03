import { GradeCalculator } from "./GradeCalculator";
import { InputHandler } from "./inputHandler";
import { InputProcessor } from "./inputProcessor";
import { IGradeCalculator } from "./protocols/IGradeCalculator";
import { IInputHandler } from "./protocols/IInputHandler";

function main (): void {
  const gradeCalculator: IGradeCalculator = new GradeCalculator();
  const inputHandler: IInputHandler = new InputHandler();
  const inputProcessor = new InputProcessor(gradeCalculator, inputHandler);
  inputProcessor.execute();
}

main();