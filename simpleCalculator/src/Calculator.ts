import { Operator } from "./Operator";
import { AdditionOperation } from "./AdditionOperation";
import { SubtractionOperation } from "./SubtractionOperation";
import { MultiplicationOperation } from "./MultiplicationOperation";
import { DivisionOperation } from "./DivisionOperation";

export class Calculator {
  execute({firstNumber, secondNumber, operator}: Calculator.Params): number {
    return this.getOperation(operator).doOperation({firstNumber, secondNumber});
  }

  getOperation(operator: Operator) {
    const strategies = {
      '+': AdditionOperation,
      '-': SubtractionOperation,
      '*': MultiplicationOperation,
      '/': DivisionOperation
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