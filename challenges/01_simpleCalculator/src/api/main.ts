import express from 'express';
import { calculatorRoutes } from './routes/calculatorRoute';

const app = express();
const port = 3000;

app.use(express.json());
app.use(calculatorRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});