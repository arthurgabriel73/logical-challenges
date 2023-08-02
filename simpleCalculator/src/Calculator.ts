import { Operator } from "./types/Operator";
import { AdditionOperation } from "./operations/AdditionOperation";
import { SubtractionOperation } from "./operations/SubtractionOperation";
import { MultiplicationOperation } from "./operations/MultiplicationOperation";
import { DivisionOperation } from "./operations/DivisionOperation";

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