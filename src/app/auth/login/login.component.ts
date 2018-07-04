
// <!---
// *  File Name: login.ts
// *  Attached HTML : login.html
// *  Created By: <Paras Shah>
// *  Created Date: 10/8/2017
// *  Purpose: <Login to sing Email id and password >
// *  * DEPENDENCIES ( postData / of user services)
// *  -
// *  - 
// -->
//Created by Paras Shah on 10/8/17
import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
// import { userService } from '../../theme/services';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { CustomersListComponent } from '../../customers/customers-list/customers-list.component';
// import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
// import { CookieService } from 'ngx-cookie';


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})

export class Login {
  errormessage: any;

  public form: FormGroup;
  public userName: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  trolleyDetail: {};
  unamePwd = null;
  getuserid = null;
  userid = null;
  contactlogin = false;

  logindata: {};
  loginuser: {};
  constructor(fb: FormBuilder, private user: User, private router: Router) {
    user.logout();
    this.form = fb.group({
      'userName': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });

    this.userName = this.form.controls['userName'];

    this.password = this.form.controls['password'];
  }

//Login with phone
loginwithNumber(){
  this.contactlogin = this.contactlogin ? false : true ;
}
// this method is used to call function loginwith google by which user can esily login using google credentials
  login(){
    this.user.loginWithGoogle().then((response) => {
      console.log(response);
       if(response != null){
        this.router.navigate(['customers']);
      }
    })
      .catch((error) => {
      
        JSON.stringify(error);
        let temp = error.message;

        // to show error like wrong password 
        this.errormessage = temp;

      },

    );


  }


  //Login with git hub 

  loginGit(){
    this.user.loginWithGit().then((response) => {
      console.log(response);
       if(response != null){
        this.router.navigate(['customers']);
      }
    })
      .catch((error) => {
      
        JSON.stringify(error);
        let temp = error.message;

        // to show error like wrong password 
        this.errormessage = temp;

      },

    );

  }


  ngOnInit() {

    // Removing all cookies at first loading 
  }
  public onSubmit(values): void {
    this.submitted = true;
    if (this.form.valid) {
      this.errormessage = '';
      // your code goes here
      const Credetials = {
        credential: {
          email: values.userName,

          password: values.password,
        },

      };
      //this.ffurl = "User/login";
      // this.user.getUsers(this.ffurl, data).subscribe(data => this.trolleyDetail = data.result);   

      /**------------------------------------------------------------------------------------------
              *  Created By: Paras Shah
              *  Created Date:10/8/2017
              *  Purpose: <POST method post Credentials object to authenticate user>
  ------------------------------------------------------------------------------------------*/
      this.user.loginWithFirebase( Credetials.credential).then((response) => {
        if(response != null){
          this.router.navigate(['customers']);
        }
      })
        .catch((error) => {
        
          JSON.stringify(error);
          let temp = error.message;

          // to show error like wrong password 
          this.errormessage = temp;

        },

      );


    }
  }
}
export class EmailValidator {

  public static validate(c: AbstractControl) {
    let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }
}

