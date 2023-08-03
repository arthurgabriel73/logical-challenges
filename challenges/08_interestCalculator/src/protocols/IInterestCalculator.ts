export interface IInterestCalculator {
  calculateSimpleInterest(): string;
  calculateCompoundInterest(): string;
}

export type SimpleInterestData = {
  initialCapital: number;
  interestRate: number;
  investmentTime: number;
}

export type CompoundInterestData = {
  data: SimpleInterestData;
  monthlyContributions?: number;
}