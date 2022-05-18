import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h5>{{name}}</h5>`,
  styles: [`h5 { font-family: sans-serif; margin-top: 20px;}`],
})
export class HelloComponent {
  @Input() name: string;
}
