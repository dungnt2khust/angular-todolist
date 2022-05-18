import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'inputangular',
  templateUrl: './inputangular.component.html',
  styleUrls: ['./inputangular.component.scss'],
})
export class InputangularComponent implements OnInit {
  @Input() todo: String;
  @Input() placeholder: String;
  @Output('todoChange') change = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
  onChanged(event) {
    this.change.emit(event.target.value);
  }
}
