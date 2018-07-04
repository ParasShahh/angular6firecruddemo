(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-auth-login-login-module~app-auth-register-register-module"],{

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: Login, EmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user */ "./src/app/auth/user/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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


// import { userService } from '../../theme/services';


// import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
// import { CookieService } from 'ngx-cookie';
var Login = /** @class */ (function () {
    function Login(fb, user, router) {
        this.user = user;
        this.router = router;
        this.submitted = false;
        this.unamePwd = null;
        this.getuserid = null;
        this.userid = null;
        this.contactlogin = false;
        user.logout();
        this.form = fb.group({
            'userName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, EmailValidator.validate])],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)])],
        });
        this.userName = this.form.controls['userName'];
        this.password = this.form.controls['password'];
    }
    //Login with phone
    Login.prototype.loginwithNumber = function () {
        this.contactlogin = this.contactlogin ? false : true;
    };
    // this method is used to call function loginwith google by which user can esily login using google credentials
    Login.prototype.login = function () {
        var _this = this;
        this.user.loginWithGoogle().then(function (response) {
            console.log(response);
            if (response != null) {
                _this.router.navigate(['customers']);
            }
        })
            .catch(function (error) {
            JSON.stringify(error);
            var temp = error.message;
            // to show error like wrong password 
            _this.errormessage = temp;
        });
    };
    //Login with git hub 
    Login.prototype.loginGit = function () {
        var _this = this;
        this.user.loginWithGit().then(function (response) {
            console.log(response);
            if (response != null) {
                _this.router.navigate(['customers']);
            }
        })
            .catch(function (error) {
            JSON.stringify(error);
            var temp = error.message;
            // to show error like wrong password 
            _this.errormessage = temp;
        });
    };
    Login.prototype.ngOnInit = function () {
        // Removing all cookies at first loading 
    };
    Login.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            this.errormessage = '';
            // your code goes here
            var Credetials = {
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
            this.user.loginWithFirebase(Credetials.credential).then(function (response) {
                if (response != null) {
                    _this.router.navigate(['customers']);
                }
            })
                .catch(function (error) {
                JSON.stringify(error);
                var temp = error.message;
                // to show error like wrong password 
                _this.errormessage = temp;
            });
        }
    };
    Login = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.html */ "./src/app/auth/login/login.html"),
            styles: [__webpack_require__(/*! ./login.scss */ "./src/app/auth/login/login.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _user_user__WEBPACK_IMPORTED_MODULE_3__["User"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Login);
    return Login;
}());

var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.validate = function (c) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    return EmailValidator;
}());



/***/ }),

/***/ "./src/app/auth/login/login.html":
/*!***************************************!*\
  !*** ./src/app/auth/login/login.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-main\">\n  <div class=\"auth-block\">\n    <h1 >Login </h1>\n   <u> <a routerLink=\"/register\" class=\"auth-link\" >Sign up link</a></u>\n   <button  id=\"sign-in\" type=\"button\" (click)=\"login()\" class=\"btn btn-success commonbutton \">\n   Sign-in with Google\n  </button>\n  <button  id=\"sign-in\" type=\"button\" (click)=\"loginGit()\" class=\"btn btn-success commonbutton \">\n    Sign-in with Github\n   </button>\n  <button  id=\"sign-in\" type=\"button\" (click)=\"loginwithNumber()\" class=\"btn btn-success commonbutton \">\n    Sign-in with Phone number\n   </button>\n    <form *ngIf=\"!contactlogin\"  [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!userName.valid && userName.touched), 'has-success': (userName.valid && userName.touched)}\">\n        <!-- <label for=\"inputuserName3\" class=\"col-sm-2 control-label\" >User Name</label> -->\n\n        <div class=\"col-sm-12\">\n          <input [formControl]=\"userName\" type=\"userName\" class=\"form-control inputlabelcommon\" id=\"inputuserName3\" placeholder=\"User Name\">\n        </div>\n         <!--for email validation-->\n                    <div class=\"md-errors-spacer\" [hidden]=\"userName.valid || userName.untouched\">\n        <div  style= \" padding-left: 100px ; color: red;\" *ngIf=\"userName.errors && userName.errors.required\">\n           <div> Email is required</div>\n        </div>\n        <div  style= \" padding-left: 100px ; color: red;\" *ngIf=\"userName.errors && !userName.valid && !userName.errors.required\">\n            Email is invalid\n        </div>\n    </div>\n\n                <!--for email validation-->\n      </div>\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\n        <!-- <label for=\"inputPassword3\" class=\"col-sm-2 control-label\" >Password</label> -->\n\n        <div class=\"col-sm-12\">\n          <input [formControl]=\"password\" type=\"password\" class=\"form-control inputlabelcommon\" id=\"inputPassword3\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div style=\"color: red\">{{errormessage}}</div>\n      <div class=\"form-group row\">\n        <div class=\"offset-sm-2 col-sm-10\">\n          <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-success \" >sign in</button>\n          <!-- <a routerLink=\"/forgotpassword\" class=\"forgot-pass\" >forgot Password</a> -->\n        </div>\n      </div>\n    </form>\n    <app-phone-login *ngIf=contactlogin ></app-phone-login>\n    \n \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.scss":
/*!***************************************!*\
  !*** ./src/app/auth/login/login.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-main {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background-color: white;\n  top: 19%; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  color: black;\n  padding: 32px;\n  border: 3px solid black; }\n\n.auth-block h1 {\n    font-weight: 200;\n    margin-bottom: 28px;\n    text-align: center; }\n\n.auth-block p {\n    font-size: 16px; }\n\n.auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: black; }\n\n.auth-block a:hover {\n      color: black; }\n\n.auth-block .control-label {\n    padding-top: 11px;\n    color: black; }\n\n.auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n\n.auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n\n.auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: black; }\n\n.auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n\n.auth-sep:before, .auth-sep:after {\n    border-top: solid 1px black;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n\n.al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n\n.al-share-auth .al-share li {\n      margin-left: 24px; }\n\n.al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n\n.al-share-auth .al-share li i {\n        font-size: 24px; }\n\n.btn-auth {\n  color: #ffffff !important; }\n\n.auth-block[_ngcontent-c2] .control-label[_ngcontent-c2] {\n  padding-top: 11px;\n  color: black; }\n\n.auth-block[_ngcontent-c2] {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  color: black;\n  padding: 32px;\n  border: 3px solid black; }\n\n.inputlabelcommon {\n  border: 1px solid black !important;\n  border-radius: 0px !important;\n  color: black !important; }\n\n.commonbutton {\n  text-align: center;\n  font-weight: 200;\n  margin: 0 33%;\n  margin-bottom: 10px; }\n\n.form-control {\n  background-color: rgba(255, 255, 255, 0.1);\n  box-shadow: none;\n  font-size: 14px;\n  border: 1px solid black !important;\n  border-radius: 0px !important;\n  color: black !important; }\n"

/***/ })

}]);
//# sourceMappingURL=app-auth-login-login-module~app-auth-register-register-module.js.map