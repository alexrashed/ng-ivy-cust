import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  template: `
    mycomponent non-overwritten<p>
    <app-mycomponent2></app-mycomponent2>
  `,
  styles: []
})
export class MycomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
