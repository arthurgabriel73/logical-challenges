export interface IInputHandler {
  getInput(): Promise<InputDataType>;
  
  close(): void;
}

export type InputDataType = {
    calculationType: "simple" | "compound";
    initialCapital: number;
    monthlyInterestRate: number;
    investmentTimeInMonths: number;
    monthlyContributions?: number;
  }