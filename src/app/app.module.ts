import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {} from '@angular/router';

import { AppComponent } from './app.component';
import { DatacmpComponent } from './datacmp/datacmp.component';
import { ViewComponent } from './view/view.component';
import { NewviewComponent } from './newview/newview.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NamedisplayComponent } from './namedisplay/namedisplay.component';
import { MarkComponent } from './mark/mark.component';

@NgModule({
  declarations: [
    AppComponent,
    DatacmpComponent,
    ViewComponent,
    NewviewComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    CalculatorComponent,
    NamedisplayComponent,
    MarkComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
