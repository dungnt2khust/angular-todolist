import {
  Component,
  VERSION,
  OnInit,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { computed } from 'mobx-angular';
import { Todo } from './model/models/Todo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  // Valiable
  name: string = 'Angular ' + VERSION.major;
  todo: string = '';
  listTodos: Array<Todo> = [];
  placeholder: string = 'Add a work !';

  // Hook
  ngOnInit() {
    var listTodos = localStorage.getItem('listtodo');
    if (listTodos) {
      this.listTodos = JSON.parse(listTodos);
    }
  }
  ngOnChanges() {
    console.log('change');
  }
  ngOnDestroy() {
    console.log('destroy');
  }
  // Computed
  @computed get todoInfo() {
    var done = this.listTodos.filter((todo) => todo.check).length;
    return {
      All: this.listTodos.length,
      Done: done,
      Todo: this.listTodos.length - done,
    };
  }

  // Methods
  addTodo() {
    if (!this.todo) {
      alert('Todo is empty !');
      this.focusInput();
    } else {
      this.listTodos.push({ message: this.todo, check: false });
      this.saveData();
      this.todo = '';
      this.focusInput();
    }
  }
  deleteTodo(i) {
    this.listTodos.splice(i, 1);
    this.focusInput();
    this.saveData();
  }
  checkTodo(i) {
    this.listTodos[i].check = !this.listTodos[i].check;
    this.saveData();
    this.focusInput();
  }
  focusInput() {
    if (document.getElementById('inputAdd')) {
      document.getElementById('inputAdd').focus();
    }
  }
  saveData() {
    localStorage.setItem('listtodo', JSON.stringify(this.listTodos));
  }
}
