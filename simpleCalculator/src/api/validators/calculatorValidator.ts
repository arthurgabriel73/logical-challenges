import { body } from 'express-validator';

const validOperators = ['+', '-', '*', '/'];

export const validateCalculatorInput = [
  body('firstNumber').isNumeric().withMessage('firstNumber should be a valid number!'),
  body('secondNumber').isNumeric().withMessage('secondNumber should be a valid number!'),
  body('operator').isIn(validOperators).withMessage('operator should be one of [+, -, *, /]')
]