import { Operation } from "./Operation";

export class SumOperation implements Operation {
  doOperation({firstNumber, secondNumber}: Operation.Params): number {
    return firstNumber + secondNumber;
  }
}