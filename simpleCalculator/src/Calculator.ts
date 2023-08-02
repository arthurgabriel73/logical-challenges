import { Operator } from "./Operator";
import { AdditionOperation } from "./AdditionOperation";

export class Calculator {
  execute({firstNumber, secondNumber, operator}: Calculator.Params): number {
    return this.getOperation(operator).doOperation({firstNumber, secondNumber});
  }

  getOperation(operator: Operator) {
    const strategies = {
      '+': AdditionOperation
    };
    
    return new strategies[operator]();
  }
}

export namespace Calculator {
  export type Params = {
    firstNumber: number;
    secondNumber: number;
    operator: Operator;
  }
}