import { Operation } from "../protocol/Operation";

export class DivisionOperation implements Operation {
  doOperation({firstNumber, secondNumber}: Operation.Params): number {
    return firstNumber / secondNumber;
  }
}