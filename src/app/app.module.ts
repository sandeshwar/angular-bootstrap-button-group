import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonGroupModule } from 'button-group';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
