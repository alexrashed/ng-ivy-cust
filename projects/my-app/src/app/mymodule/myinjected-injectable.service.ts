import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class MyinjectedInjectable {
  public testString = 'testSuperClassString';

  constructor() {
  }
}
