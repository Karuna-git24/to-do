import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Todolist } from './todolist/todolist';

@NgModule({
  declarations: [
    App,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Todolist
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
