import {
  Component,
  VERSION,
  OnInit,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { computed } from 'mobx-angular';
import { Todo } from './model/models/Todo';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faFileCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  // Valiable
  faSun = faSun;
  faMoon = faMoon;
  dark = false;
  faFileCircleXmark = faFileCircleXmark;
  name: string = 'Angular ' + VERSION.major;
  todo: string = '';
  listTodos: Array<Todo> = [];
  placeholder: string = 'Add a work !';
  constructor(private meta: Meta) {
    this.meta.addTag({
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
    });
  }

  // Hook
  ngOnInit() {
    const chk = document.getElementById('chk');

    chk.addEventListener('change', () => {
      document.body.classList.toggle('dark');
    });
    var theme = localStorage.getItem('theme');
    if (theme) {
      this.setTheme(theme);
      if (theme == 'dark') this.dark = true;
      else this.dark = false;
    }
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
  setTheme(theme) {
    var html = document.documentElement;
    html.setAttribute('theme', theme);
  }
  toggleTheme() {
    var html = document.documentElement;
    if (html.getAttribute('theme') == 'light') {
      this.setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }
}
