import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Register } from './register.component';

import { routing }       from './register.routing';
import { User } from '../user/user';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing
  ],
  declarations: [
    Register
  ],
  providers: [
    User
    ]
   
})
export class RegisterModule {}
