import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonGroupModule } from 'button-group';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
