export class InvalidNumberError extends Error {
  constructor(message: string = 'Invalid number!') {
    super();
    this.message = message;
  }
}