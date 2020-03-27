import {Component, Directive, OnInit} from '@angular/core';

@Directive()
export class MycomponentDirective implements OnInit {

  constructor(public testString: string = 'testSuperClassString') { }

  ngOnInit(): void {
  }

}
