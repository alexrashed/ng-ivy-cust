import { Component, OnInit } from '@angular/core';
import {MycomponentComponentLogic} from '@internal/my-app/mymodule/mycomponent/mycomponent.component.logic';

@Component({
  selector: 'app-mycomponent',
  template: `
    <p>
      mycomponent3 extends mycomponent
    </p>

    {{this.injectedDirective.testString}}
  `,
  styles: []
})
export class MycomponentComponent extends MycomponentComponentLogic implements OnInit {

  ngOnInit(): void {
    this.injectedDirective.testString += ' And has been extended by its extending class.';
  }
}
