import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AtividadeComponent } from './atividade/atividade.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AtividadeComponent
  ],
  imports: [
      FormsModule,
      BrowserModule,
      CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
