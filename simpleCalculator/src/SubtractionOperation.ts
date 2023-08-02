import { Operation } from "./Operation";

export class SubtractionOperation implements Operation {
  doOperation({firstNumber, secondNumber}: Operation.Params): number {
    return firstNumber - secondNumber;
  }
}