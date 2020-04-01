import { Component, OnInit } from '@angular/core';
import {MycomponentComponentLogic} from '@internal/my-app/mymodule/mycomponent/mycomponent.component.logic';

@Component({
  selector: 'app-mycomponent',
  template: `
    <p>
      mycomponent3 extends mycomponent
    </p>

    {{this.injectedDirective.testString}}
    <child-directive id="2"></child-directive><p>
    This name has been given as an input to the parent: {{this.name}}<p>
    <div>ClickMe</div>
  `,
  styles: []
})
export class MycomponentComponent extends MycomponentComponentLogic implements OnInit {

  ngOnInit(): void {
    this.injectedDirective.testString += ' And has been extended by its extending class.';
  }
}
