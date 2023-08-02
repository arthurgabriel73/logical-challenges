import { Router } from 'express';
import { CalculatorController } from '../controllers/CalculatorController';

const calculatorRoutes = Router();
const calculatorController = new CalculatorController();

calculatorRoutes.post('/calculate', (req, res: any) => {
  const result = calculatorController.handle(req.body);
  res.json(result);
});

export { calculatorRoutes };