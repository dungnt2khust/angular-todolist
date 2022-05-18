import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faCoffee,
  faBan,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

import { Todo } from '../../model/models/Todo';

@Component({
  selector: 'listtodo, [listtodo]',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.scss'],
})
export class ListtodoComponent implements OnInit {
  // Icon
  faCoffee = faCoffee;
  faBan = faBan;
  faCircleCheck = faCircleCheck;

  // Input
  // @Input() listTodos: Array<{ message: String; check: Boolean | false }>;
  @Input() listTodos: Array<Todo>;

  // Output
  @Output('deleteTodo') deleteTodoEvent = new EventEmitter<Number>();
  @Output('checkTodo') checkTodoEvent = new EventEmitter<Number>();

  // Contructor
  constructor() {}

  // Hook
  ngOnInit() {}

  // Methods
  deleteTodo(i) {
    this.deleteTodoEvent.emit(i);
  }
  checkTodo(i) {
    this.checkTodoEvent.emit(i);
  }
}
