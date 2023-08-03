export class InvalidInputError extends Error {
  constructor(message: string = 'Invalid input for subjects or grades!') {
    super();
    this.message = message;
  }
}