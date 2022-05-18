import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.scss'],
})
export class ListtodoComponent implements OnInit {
  @Input() listTodos: Array<String>;
  constructor() {}

  ngOnInit() {}
}
