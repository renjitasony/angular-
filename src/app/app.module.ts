import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {StorageServiceModule} from 'angular-webstorage-service';

import {CalcService} from './calc.service'
import {SoneService} from './sone.service'

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
import { CrudComponent } from './crud/crud.component';
import { HeadertemplateComponent } from './headertemplate/headertemplate.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewpComponent } from './viewp/viewp.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DataComponent } from './data/data.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const approutes:Routes=[{path:"new",component:AddComponent},
                        {path:"edit/:id",component:EditComponent},
                        {path:"delete",component:DeleteComponent},
                        {path:"view",component:ViewpComponent},
                        {path:"about",component:AboutComponent},
                        {path:"contact",component:ContactComponent},
                        {path:"service",component:DataComponent}
                        ]

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
    MarkComponent,
    CrudComponent,
    HeadertemplateComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ViewpComponent,
    AboutComponent,
    ContactComponent,
    DataComponent,
    ViewproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approutes),
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [CalcService,SoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
