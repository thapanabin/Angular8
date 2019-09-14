import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    UserComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
