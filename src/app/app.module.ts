import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatacmpComponent } from './datacmp/datacmp.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    DatacmpComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
