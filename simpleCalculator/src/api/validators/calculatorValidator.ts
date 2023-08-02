import { body } from 'express-validator';

const validOperators = ['+', '-', '*', '/'];

const validateOperator = (value: any) => {
  if (!validOperators.includes(value)) {
    throw new Error(`Invalid operator. Valid operators are ${validOperators.join(', ')}`);
  }
  return true;
};

const validateCalculatorInput = [
  body('firstNumber').isNumeric().withMessage('firstNumber should be a valid number!'),
  body('secondNumber').isNumeric().withMessage('secondNumber should be a valid number!'),
  body('operator').custom(validateOperator)
];

export {validateCalculatorInput}