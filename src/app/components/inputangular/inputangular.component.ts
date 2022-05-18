import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'inputangular',
  templateUrl: './inputangular.component.html',
  styleUrls: ['./inputangular.component.scss'],
})
export class InputangularComponent implements OnInit {
  // Input
  @Input() todo: String;
  @Input() placeholder: String;

  // Output
  @Output('todoChange') todoChangeEvent = new EventEmitter<string>();
  @Output('inputEnter') inputEnterEvent = new EventEmitter<string>();

  // Contructor
  constructor() {}

  // Hook
  ngOnInit() {}

  // Methods
  onChanged(event) {
    this.todoChangeEvent.emit(event.target.value);
  }s
  onEnter() {
    this.inputEnterEvent.emit();
  }
}
