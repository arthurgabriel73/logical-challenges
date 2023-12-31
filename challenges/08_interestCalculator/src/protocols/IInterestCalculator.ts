export interface IInterestCalculator {
  calculateSimpleInterest(data: SimpleInterestData): number;
  calculateCompoundInterest(data: CompoundInterestData): number;
  toCurrencyString(compoundInterest: number): string;
}

export type SimpleInterestData = {
  initialCapital: number;
  monthlyInterestRate: number;
  investmentTimeInMonths: number;
}

export type CompoundInterestData = {
  minimumData: SimpleInterestData;
  monthlyContributions?: number;
}