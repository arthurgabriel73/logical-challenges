import { Operation } from "../protocol/Operation";

export class MultiplicationOperation implements Operation {
  doOperation({firstNumber, secondNumber}: Operation.Params): number {
    return firstNumber * secondNumber;
  }
}