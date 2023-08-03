import { SingleGrade } from "./IGradeCalculator";

export interface IInputHandler {
 collectInputs(): Promise<SingleGrade[]>;
 getUserInput(question: string): Promise<string>;
 parseInput(input: string): SingleGrade;
 getValidatedValues(input: SingleGrade): void;
 closeReader(): void;
}