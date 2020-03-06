import { Component, OnInit } from '@angular/core';
import {MycomponentComponent} from 'projects/my-app/src/app/mymodule/mycomponent/mycomponent.component';

@Component({
  selector: 'app-mycomponent',
  template: `
    <p>
      mycomponent3 extends mycomponent
    </p>
  `,
  styles: []
})
export class Mycomponent3Component extends MycomponentComponent {

  ngOnInit(): void {
  }
}
