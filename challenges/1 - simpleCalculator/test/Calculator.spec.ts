import { Calculator } from "../src/Calculator"
import { Operator } from "../src/types/Operator";

type Operation = [number, number, Operator, number];

const additionCases: Operation[] = [[1, 2, '+', 3], [-1, -2, '+', -3], [-10, 12, '+', 2], [3, -12, '+', -9]]
const subtractionCases: Operation[] = [[10, 10, '-', 0], [10, 11, '-', -1], [12, 10, '-', 2], [-10, -10, '-', 0],]
const multiplicationCases: Operation[] = [[1, 10, '*', 10], [10, -1, '*', -10], [12, 10, '*', 120], [-10, -10, '*', 100],]
const disivionCases: Operation[] = [[1, 10, '/', 0.1], [10, -1, '/', -10], [12, 10, '/', 1.2], [-10, -10, '/', 1],]

describe('simpleCalculator test', () => {
  const calculator = new Calculator();

  it.each(additionCases)('should test calculator addition', (firstNumber, secondNumber, operator, expectedResult) => {
    // Arrange & Act
    const result = calculator.execute({firstNumber, secondNumber, operator})

    // Assert
    expect(result).toEqual(expectedResult)
  })

  it.each(subtractionCases)('should test calculator subtraction', (firstNumber, secondNumber, operator, expectedResult) => {
    // Arrange & Act
    const result = calculator.execute({firstNumber, secondNumber, operator})

    // Assert
    expect(result).toEqual(expectedResult)
  })

  it.each(multiplicationCases)('should test calculator multiplication', (firstNumber, secondNumber, operator, expectedResult) => {
    // Arrange & Act
    const result = calculator.execute({firstNumber, secondNumber, operator})

    // Assert
    expect(result).toEqual(expectedResult)
  })

  it.each(disivionCases)('should test calculator disivion', (firstNumber, secondNumber, operator, expectedResult) => {
    // Arrange & Act
    const result = calculator.execute({firstNumber, secondNumber, operator})

    // Assert
    expect(result).toEqual(expectedResult)
  })
})
