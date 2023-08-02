import { Calculator } from "../../Calculator";
import { Operator } from "../../types/Operator";

export class CalculatorController {
  private calculator: Calculator
  
  constructor() {
    this.calculator = new Calculator();
  }
  
  handle(data: CalculatorController.Params): CalculatorController.Result {
    const result = this.calculator.execute(data);
    return {
      message: 'Operation executed succesfully',
      result
    }
  }
}

export namespace CalculatorController {
  export type Params = {
    firstNumber: number;
    secondNumber: number;
    operator: Operator;
  }
  export type Result = {
    message: string;
    result: number;
  }
}