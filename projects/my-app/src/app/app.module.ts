import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MymoduleModule} from '@internal/my-app/mymodule/mymodule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MymoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
