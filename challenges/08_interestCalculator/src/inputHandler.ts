import readline from "readline";
import { IInputHandler, InputDataType } from "./protocols/IInputHandler";

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
    const calculationTypeStr = await this.promptUser("Choose calculation type (simple/compound): ");
    const initialCapitalStr = await this.promptUser("Enter initial capital: ");
    const monthlyInterestRateStr = await this.promptUser("Enter interest rate per month (%): ");
    const investmentTimeInMonthsStr = await this.promptUser("Enter investment time in months: ");
    const monthlyContributionsStr = await this.promptUser("Enter monthly contributions (optional, press Enter to skip): ");

    const calculationType = calculationTypeStr.toLowerCase() as "simple" | "compound";
    const initialCapital = parseFloat(initialCapitalStr);
    const monthlyInterestRate = parseFloat(monthlyInterestRateStr);
    const investmentTimeInMonths = parseInt(investmentTimeInMonthsStr);
    const monthlyContributions = monthlyContributionsStr ? parseFloat(monthlyContributionsStr) : undefined;

    return {
      calculationType,
      initialCapital,
      monthlyInterestRate,
      investmentTimeInMonths,
      monthlyContributions,
    };
  }

  close() {
    this.readline.close();
  }
}
