import { Component, OnInit } from '@angular/core';
import {
  MycomponentDirective
} from 'projects/my-app/src/app/mymodule/mycomponent/mycomponent.directive';

@Component({
  selector: 'app-mycomponent',
  template: `
    <p>
      mycomponent3 extends mycomponent
    </p>

    {{this.testString}}
  `,
  styles: []
})
export class MycomponentComponent extends MycomponentDirective implements OnInit {

  constructor() {
    super();
    this.testString += ' And has been extended by its extending class.';
  }

  ngOnInit(): void {
  }
}
