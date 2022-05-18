import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'buttonangular',
  templateUrl: './buttonangular.component.html',
  styleUrls: ['./buttonangular.component.scss'],
})
export class ButtonangularComponent implements OnInit {
  @Input() name: String;
  @Output('addTodo') change = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  addTodo() {
    this.change.emit(null);
  }
}
