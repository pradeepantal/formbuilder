import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormioModule } from 'angular-formio';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
