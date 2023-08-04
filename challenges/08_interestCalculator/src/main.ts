import { InterestCalculator } from "./InterestCalculator";
import { Processor } from "./Processor";
import { InputHandler } from "./inputHandler";
import { IInterestCalculator } from "./protocols/IInterestCalculator";

async function main() {
  const interestCalculator: IInterestCalculator = new InterestCalculator();
  const inputHandler = new InputHandler();
  const processor = new Processor(inputHandler, interestCalculator);
  processor.process();
}

main()
