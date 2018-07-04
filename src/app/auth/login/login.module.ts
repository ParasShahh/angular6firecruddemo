import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Login } from './login.component';
import { routing } from './login.routing';
import { User } from '../user/user';
import { PhoneLoginComponent } from './phone-login/phone-login.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing
  ],
  declarations: [
    Login,
    PhoneLoginComponent
  ],
  providers: [
    User]
})
export class LoginModule { }
