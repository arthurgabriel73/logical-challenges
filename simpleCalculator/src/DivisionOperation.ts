import { Operation } from "./Operation";

export class DivisionOperation implements Operation {
  doOperation({firstNumber, secondNumber}: Operation.Params): number {
    return firstNumber / secondNumber;
  }
}