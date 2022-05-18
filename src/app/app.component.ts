import {
  Component,
  VERSION,
  OnInit,
  OnChanges,
  OnDestroy,
} from '@angular/core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  name = 'Angular ' + VERSION.major;
  todo = 'Init';
  listTodos = [];
  placeholder = 'Type a work you want to do';
  // faCoffee = faCoffee;

  ngOnInit() {
    console.log('init');
  }
  ngOnChanges() {
    console.log('change');
  }
  ngOnDestroy() {
    console.log('destroy');
  }
  addTodo() {
    if (!this.todo) {
      alert('Todo is empty !');
    } else {
      this.listTodos.push(this.todo);
      this.todo = '';
    }
  }
}
