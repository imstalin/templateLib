import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateLibModule } from 'template-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TemplateLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
