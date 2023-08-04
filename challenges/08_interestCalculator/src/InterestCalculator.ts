import {
  CompoundInterestData,
  IInterestCalculator,
  SimpleInterestData,
} from "./protocols/IInterestCalculator";

export class InterestCalculator implements IInterestCalculator {
  calculateSimpleInterest(data: SimpleInterestData): number {
    const { initialCapital, monthlyInterestRate, investmentTimeInMonths } = data;
    const interestValue = (initialCapital * monthlyInterestRate * investmentTimeInMonths) / 100;
    return initialCapital + interestValue;
  }

  calculateCompoundInterest(data: CompoundInterestData): number {
    const { minimumData, monthlyContributions } = data;
    const { initialCapital, monthlyInterestRate, investmentTimeInMonths } = minimumData;
    const interestRatePerMonth = monthlyInterestRate / 100;
    const compoundFactor = Math.pow(1 + interestRatePerMonth, investmentTimeInMonths);

    if (monthlyContributions) {
      return this.calculateCompoundWithMonthlyContributions({
        initialCapital,
        interestRatePerMonth,
        investmentTimeInMonths,
        monthlyContributions,
      });
    }

    return this.round(initialCapital * compoundFactor);
  }

  private calculateCompoundWithMonthlyContributions(data: {
    initialCapital: number;
    interestRatePerMonth: number;
    investmentTimeInMonths: number;
    monthlyContributions: number;
  }): number {
    const { initialCapital, interestRatePerMonth, investmentTimeInMonths, monthlyContributions } = data;
    const compoundFactor = Math.pow(1 + interestRatePerMonth, investmentTimeInMonths);
    const compoundValue = (initialCapital * compoundFactor) + ((monthlyContributions * (compoundFactor - 1)) / interestRatePerMonth);
    return this.round(compoundValue);
  }

  private round(value: number): number {
    return Math.round(value * 100) / 100;
  }

  toCurrencyString(value: number): string {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
}
