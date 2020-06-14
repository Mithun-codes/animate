import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Spinner1Component } from './component/spinner1/spinner1.component';
import { Spinner2Component } from './component/spinner2/spinner2.component';
import { Spinner3Component } from './component/spinner3/spinner3.component';
import { NavComponent } from './component/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    Spinner1Component,
    Spinner2Component,
    Spinner3Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
