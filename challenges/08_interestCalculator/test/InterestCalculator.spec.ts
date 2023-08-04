import { InterestCalculator } from "../src/InterestCalculator";
import { CompoundInterestData, SimpleInterestData } from "../src/protocols/IInterestCalculator";

type SimpleInterestTestCase = {
  data: SimpleInterestData;
  expectedResult: number;
};

type CompoundInterestTestCase = {
  data: CompoundInterestData;
  expectedResult: number;
};

const simpleInterestCases: SimpleInterestTestCase[] = [
    {
      data: {
        initialCapital: 1000,
        monthlyInterestRate: 2,
        investmentTimeInMonths: 12
      },
      expectedResult: 1240
    },
    {
      data: {
        initialCapital: 500,
        monthlyInterestRate: 1.5,
        investmentTimeInMonths: 24
      },
      expectedResult: 680
    },
    {
      data: {
        initialCapital: 2000,
        monthlyInterestRate: 1,
        investmentTimeInMonths: 6
      },
      expectedResult: 2120
    }
  ];

const compoundInterestCases: CompoundInterestTestCase[] = [
    {
      data: {
        minimumData: {
          initialCapital: 1000,
          monthlyInterestRate: 2,
          investmentTimeInMonths: 12
        }
      },
      expectedResult: 1268.24
    },
    {
      data: {
        minimumData: {
          initialCapital: 500,
          monthlyInterestRate: 1.5,
          investmentTimeInMonths: 24
        },
        monthlyContributions: 50
      },
      expectedResult: 2146.43
    },
    {
      data: {
        minimumData: {
          initialCapital: 2000,
          monthlyInterestRate: 1,
          investmentTimeInMonths: 6
        },
        monthlyContributions: 100
      },
      expectedResult: 2738.24
    }
  ];

describe('Interest Calculator test', () => {
  const interestCalculator = new InterestCalculator();

  it.each(simpleInterestCases)('should calculate the investment outcome using simple interest.',  (testCase) => {
      // Act  
      const calculatedResult = interestCalculator.calculateSimpleInterest(testCase.data);

      // Assert
      expect(calculatedResult).toBe(testCase.expectedResult);
    }
  );

  it.each(compoundInterestCases)('should calculate the investment outcome using compound interest.',  (testCase) => {
      // Act  
      const calculatedResult = interestCalculator.calculateCompoundInterest(testCase.data);

      // Assert
      expect(calculatedResult).toBe(testCase.expectedResult);
    }
  );
})