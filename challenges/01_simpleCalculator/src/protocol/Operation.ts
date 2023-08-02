export interface Operation {
  doOperation({firstNumber, secondNumber}: Operation.Params): number;
}

export namespace Operation {
  export type Params = {
    firstNumber: number;
    secondNumber: number;
  }
}