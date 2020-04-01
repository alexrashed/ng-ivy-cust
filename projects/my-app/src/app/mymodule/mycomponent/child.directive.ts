import {AfterViewInit, Directive, Input} from '@angular/core';

@Directive({selector: 'child-directive'})
export class ChildDirective implements AfterViewInit {
  @Input() id!: number;

  public ngAfterViewInit() {
    console.log('ngAfterViewInit child' + this.id);
  }
}
