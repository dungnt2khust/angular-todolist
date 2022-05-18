import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h5 class="position-fixed">{{name}}</h5>`,
  styles: [`h5 { font-family: sans-serif; bottom: 10px; right: 10px; }`],
})
export class HelloComponent {
  @Input() name: string;
}
