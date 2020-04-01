import {AfterViewInit, Directive, HostBinding, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {MyinjectedInjectable} from '@internal/my-app/mymodule/myinjected-injectable.service';
import {ChildDirective} from '@internal/my-app/mymodule/mycomponent/child.directive';

export abstract class MycomponentComponentLogic implements OnInit, AfterViewInit {
  @ViewChild(ChildDirective) public child: ChildDirective;
  @Input() public name!: string;
  @HostBinding('style.border') border: string;

  constructor(public injectedDirective: MyinjectedInjectable) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit parent with child = ', this.child);
  }

  @HostListener('click')
  public clickListener() {
    console.log('Click detected by click-listener');
    this.border = '5px solid green';
  }
}
