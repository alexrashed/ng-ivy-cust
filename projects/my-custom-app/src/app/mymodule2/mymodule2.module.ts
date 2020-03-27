import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mycomponent2Component } from '@internal/my-app/mymodule2/mycomponent2/mycomponent2.component';
import {Mycomponent3Component} from '@internal/my-app/mymodule2/mycomponent3/mycomponent3.component';

@NgModule({
  declarations: [Mycomponent2Component, Mycomponent3Component],
  exports: [
    Mycomponent2Component,
    Mycomponent3Component
  ],
  imports: [
    CommonModule
  ]
})
export class Mymodule2Module { }
