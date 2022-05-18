export class Todo {
  message: string;
  check: boolean = false;
  contructor(message: string, check: boolean = false) {
    this.message = message;
    this.check = check;
  }
}
