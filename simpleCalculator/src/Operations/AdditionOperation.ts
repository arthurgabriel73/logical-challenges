import { Operation } from "../Operation";

export class AdditionOperation implements Operation {
  doOperation({firstNumber, secondNumber}: Operation.Params): number {
    return firstNumber + secondNumber;
  }
}