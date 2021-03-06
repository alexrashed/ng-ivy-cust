import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MycomponentComponent} from '@internal/my-app/mymodule/mycomponent/mycomponent.component';
import {Mymodule2Module} from '@internal/my-app/mymodule2/mymodule2.module';

@NgModule({
  declarations: [MycomponentComponent],
  exports: [
    MycomponentComponent
  ],
  imports: [
    CommonModule,
    Mymodule2Module
  ]
})
export class MymoduleModule { }
