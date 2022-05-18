import { Component, OnInit } from '@angular/core';
import { faFileCircleXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'emptystate',
  templateUrl: './emptystate.component.html',
  styleUrls: ['./emptystate.component.scss'],
})
export class EmptystateComponent implements OnInit {
  faFileCircleXmark = faFileCircleXmark;
  constructor() {}

  ngOnInit() {}
}
