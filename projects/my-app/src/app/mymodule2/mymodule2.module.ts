import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mycomponent2Component } from '@internal/my-app/mymodule2/mycomponent2/mycomponent2.component';

@NgModule({
  declarations: [Mycomponent2Component],
  exports: [
    Mycomponent2Component
  ],
  imports: [
    CommonModule
  ]
})
export class Mymodule2Module { }
