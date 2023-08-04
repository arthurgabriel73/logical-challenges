import readline from "readline";
import { IInputHandler, InputDataType } from "./protocols/IInputHandler";
import { CalculationType } from "./enum/CalculationType";

export class InputHandler implements IInputHandler {
  private readonly readline: readline.Interface;

  constructor() {
    this.readline = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  private promptUser(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.readline.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

  async getInput(): Promise<InputDataType> {
  const calculationTypeStr = await this.validateCalculationType(await this.promptUser("Choose calculation type (simple/compound): "));
  const initialCapital = await this.validateNumberInput(await this.promptUser("Enter initial capital: "));
  const monthlyInterestRate = await this.validateNumberInput(await this.promptUser("Enter interest rate per month (%): "));
  const investmentTimeInMonths = await this.validateNumberInput(await this.promptUser("Enter investment time in months: "));
  const monthlyContributionsStr = await this.promptUser("Enter monthly contributions (Optional, only for compound calculation type, press Enter to skip): ");

  const calculationType = calculationTypeStr;
  const monthlyContributions = monthlyContributionsStr ? parseFloat(monthlyContributionsStr) : undefined;

  return {
    calculationType,
    initialCapital,
    monthlyInterestRate,
    investmentTimeInMonths,
    monthlyContributions,
  };
}

private async validateCalculationType(input: string): Promise<CalculationType> {
  while (true) {
    const selectedType = input.toLowerCase();

    if (selectedType === CalculationType.SIMPLE || selectedType === CalculationType.COMPOUND) {
      return selectedType;
    } else {
      console.log("Invalid calculation type. Please choose 'simple' or 'compound'.");
      input = await this.promptUser("Choose calculation type (simple/compound): ");
    }
  }
}

private async validateNumberInput(input: string): Promise<number> {
  while (true) {
    const value = parseFloat(input.replace(',', '.'));

    if (isNaN(value) || value <= 0) {
      console.log("Invalid input. Please enter a valid positive number.");
      input = await this.promptUser(`Enter a valid number: `);
    } else {
      return value;
    }
  }
}


  close() {
    this.readline.close();
  }
}
