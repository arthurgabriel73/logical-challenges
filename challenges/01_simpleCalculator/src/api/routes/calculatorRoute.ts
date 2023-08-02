import { Router } from 'express';
import { CalculatorController } from '../controllers/CalculatorController';
import { validateCalculatorInput } from '../validators/calculatorValidator';
import { validationResult } from 'express-validator';

const calculatorRoutes = Router();
const calculatorController = new CalculatorController();

calculatorRoutes.post('/calculate',validateCalculatorInput, (req: any, res: any) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
    const result = calculatorController.handle(req.body);
    res.json(result);
  });

export { calculatorRoutes };