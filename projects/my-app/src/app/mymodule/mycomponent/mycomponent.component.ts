import {Component} from '@angular/core';
import {MycomponentComponentLogic} from '@internal/my-app/mymodule/mycomponent/mycomponent.component.logic';

@Component({
  selector: 'app-mycomponent',
  template: `
    mycomponent non-overwritten<p>
    <app-mycomponent2></app-mycomponent2>
     {{this.injectedDirective.testString}}
  `,
  styles: []
})
export class MycomponentComponent extends MycomponentComponentLogic {}
