import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MycomponentComponent} from '@internal/my-app/mymodule/mycomponent/mycomponent.component';
import {Mymodule2Module} from '@internal/my-app/mymodule2/mymodule2.module';
import { Mycomponent3Component } from './mycomponent3/mycomponent3.component';

@NgModule({
  declarations: [Mycomponent3Component],
  exports: [
    Mycomponent3Component
  ],
  imports: [
    CommonModule,
    Mymodule2Module
  ]
})
export class MymoduleModule { }
