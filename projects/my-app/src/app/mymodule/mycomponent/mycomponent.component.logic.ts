import {OnInit} from '@angular/core';
import {MyinjectedInjectable} from '@internal/my-app/mymodule/myinjected-injectable.service';

export abstract class MycomponentComponentLogic implements OnInit {

  constructor(public injectedDirective: MyinjectedInjectable) { }

  ngOnInit(): void {
  }

}
