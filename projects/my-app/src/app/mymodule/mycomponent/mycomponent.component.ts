import {Component,  OnInit} from '@angular/core';
import {MycomponentDirective} from '@internal/my-app/mymodule/mycomponent/mycomponent.directive';

@Component({
  selector: 'app-mycomponent',
  template: `
    mycomponent non-overwritten<p>
    <app-mycomponent2></app-mycomponent2>
     {{this.testString}}
  `,
  styles: []
})
export class MycomponentComponent extends MycomponentDirective implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}
