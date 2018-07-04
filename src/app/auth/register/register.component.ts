/*  File Name: register.ts
 *  Attached HTML : register.html
 *  Created By: <Paras Shah>
 *  Created Date: 10/8/2017
 *  Purpose: < Sign up : User Registration   >
 * DEPENDENCIES ( postData / of fatfractal services)
 */


import {Component} from '@angular/core';
import { Router } from '@angular/router';

import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { User } from '../user/user';
import { EmailValidator } from '../login/login.component';


@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {
  errormessage: any;










  public form:FormGroup;
  public userName:AbstractControl;
  public firstName: AbstractControl;
  public lastName:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
public repeatPassword:AbstractControl;
  public passwords:FormGroup;
  public reapeatUserName:AbstractControl;
public userNames :AbstractControl;
ffurl = null;
registeruser ={
  userName: "",
  firstName: "",
  lastName: "",
  password:"", 
  email: "",
  userRole: "normal",

};
  public submitted:boolean = false;

  constructor(fb:FormBuilder,private fatfractal:User ,private router: Router) {

    this.form = fb.group({
      'userName': ['', Validators.compose([Validators.required, EmailValidator.validate])],
     
       
        'firstName':['',Validators.compose([Validators.required, Validators.minLength(2)])],
        'lastName':['',Validators.compose([Validators.required, Validators.minLength(2)])],

         'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.userName = this.form.controls['userName'];
    this.email = this.form.controls['email'];
 
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  
    this.firstName = this.form.controls['firstName'];
    this.lastName = this.form.controls['lastName'];
 
  }

  public onSubmit(values):void {
    this.submitted = true;
    values.email = values.userName;
    if (this.form.valid) {

      // your code goes here
    this.registeruser.email=values.email.toLowerCase();
    this.registeruser.firstName=values.firstName;
    this.registeruser.lastName =values.lastName;
    this.registeruser.password = values.passwords.password;
    this.registeruser.userName = values.userName.toLowerCase();

    // Register role from admin panel should be Manager
    this.registeruser.userRole = "Manager";


       this.ffurl = 'ff/register';
             this.fatfractal.adduser( this.registeruser).then((response) => {
              console.log(response);

          this.router.navigate(['login']);
      })
        .catch((response) => {

       this.errormessage = ( response.message);

        });
    }
  }
}
export class EqualPasswordsValidator {

  public static validate(firstField, secondField) {

    return (c:FormGroup) => {

      return (c.controls && c.controls[firstField].value == c.controls[secondField].value) ? null : {
        passwordsEqual: {
          valid: false
        }
      };
    }
  }
}

