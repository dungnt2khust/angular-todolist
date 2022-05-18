export class Todo {
  message: string;
  check?: boolean = false;
  constructor(message: string, check: boolean = false) {
    this.message = message;
    this.check = check;
  }
}
