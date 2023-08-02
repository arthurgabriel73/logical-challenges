import { Operator } from "./Operator";
import { AdditionOperation } from "./Operations/AdditionOperation";
import { SubtractionOperation } from "./Operations/SubtractionOperation";
import { MultiplicationOperation } from "./Operations/MultiplicationOperation";
import { DivisionOperation } from "./Operations/DivisionOperation";

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