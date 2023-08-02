import { Calculator } from "../src/Calculator"
import { Operator } from "../src/Operator";

type Operation = [number, number, Operator, number];
const sumCases: Operation[] = [[1, 2, '+', 3], [-1, -2, '+', -3], [-10, 12, '+', 2], [3, -12, '+', -9]]

describe('simpleCalculator test', () => {
  const calculator = new Calculator();

  it.each(sumCases)('should test calculator sum', (firstNumber, secondNumber, operator, expectedResult) => {
    // Arrange & Act
    const result = calculator.execute({firstNumber, secondNumber, operator})

    // Assert
    expect(result).toEqual(expectedResult)
  })
})
