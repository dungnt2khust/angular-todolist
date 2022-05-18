import {
  Component,
  VERSION,
  OnInit,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { computed } from 'mobx-angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  // Valiable
  name = 'Angular ' + VERSION.major;
  todo = '';
  listTodos = [
    {
      message: 'dfsadfsfs',
      check: true,
    },
    {
      message: 'sdfsafsafs',
    },
    {
      message: 'afsdfasfs',
      check: true,
    },
  ];
  placeholder = 'Add a work !';

  // Hook
  ngOnInit() {
    console.log('init');
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
      this.listTodos.push({ message: this.todo });
      this.todo = '';
      this.focusInput();
    }
  }
  deleteTodo(i) {
    this.listTodos.splice(i, 1);
    this.focusInput();
  }
  checkTodo(i) {
    var listTodos = JSON.parse(JSON.stringify(this.listTodos));
    listTodos[i].check = !listTodos[i].check;
    this.listTodos = listTodos;
    console.log(this.listTodos);
    this.focusInput();
  }
  focusInput() {
    if (document.getElementById('inputAdd')) {
      document.getElementById('inputAdd').focus();
    }
  }
}
