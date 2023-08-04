import { IInputHandler, InputDataType } from "./protocols/IInputHandler";
import { IInterestCalculator } from "./protocols/IInterestCalculator";

export class Processor {
  constructor(
    private readonly inputHandler: IInputHandler,
    private readonly interestCalculator: IInterestCalculator
  ) {}

  async process() {
    const inputData: InputDataType = await this.inputHandler.getInput();

    if (inputData.calculationType === "simple") {
      const simpleInterest = this.interestCalculator.calculateSimpleInterest({
        initialCapital: inputData.initialCapital,
        monthlyInterestRate: inputData.monthlyInterestRate,
        investmentTimeInMonths: inputData.investmentTimeInMonths,
      });

      console.log("Simple Interest:", this.interestCalculator.toCurrencyString(simpleInterest));
    } else if (inputData.calculationType === "compound") {
      const compoundInterest = this.interestCalculator.calculateCompoundInterest({
        minimumData: {
          initialCapital: inputData.initialCapital,
          monthlyInterestRate: inputData.monthlyInterestRate,
          investmentTimeInMonths: inputData.investmentTimeInMonths,
        },
        monthlyContributions: inputData.monthlyContributions,
      });

      console.log("Compound Interest:", this.interestCalculator.toCurrencyString(compoundInterest));
    } else {
      console.log("Invalid calculation type chosen.");
    }

    this.inputHandler.close();
  }
}
