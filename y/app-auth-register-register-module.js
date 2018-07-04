(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-auth-register-register-module"],{

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: Register, EqualPasswordsValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualPasswordsValidator", function() { return EqualPasswordsValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user */ "./src/app/auth/user/user.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.component */ "./src/app/auth/login/login.component.ts");
/*  File Name: register.ts
 *  Attached HTML : register.html
 *  Created By: <Paras Shah>
 *  Created Date: 10/8/2017
 *  Purpose: < Sign up : User Registration   >
 * DEPENDENCIES ( postData / of fatfractal services)
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Register = /** @class */ (function () {
    function Register(fb, fatfractal, router) {
        this.fatfractal = fatfractal;
        this.router = router;
        this.ffurl = null;
        this.registeruser = {
            userName: "",
            firstName: "",
            lastName: "",
            password: "",
            email: "",
            userRole: "normal",
        };
        this.submitted = false;
        this.form = fb.group({
            'userName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _login_login_component__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"].validate])],
            'firstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            'lastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            'passwords': fb.group({
                'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
                'repeatPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])]
            }, { validator: EqualPasswordsValidator.validate('password', 'repeatPassword') })
        });
        this.userName = this.form.controls['userName'];
        this.email = this.form.controls['email'];
        this.passwords = this.form.controls['passwords'];
        this.password = this.passwords.controls['password'];
        this.repeatPassword = this.passwords.controls['repeatPassword'];
        this.firstName = this.form.controls['firstName'];
        this.lastName = this.form.controls['lastName'];
    }
    Register.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        values.email = values.userName;
        if (this.form.valid) {
            // your code goes here
            this.registeruser.email = values.email.toLowerCase();
            this.registeruser.firstName = values.firstName;
            this.registeruser.lastName = values.lastName;
            this.registeruser.password = values.passwords.password;
            this.registeruser.userName = values.userName.toLowerCase();
            // Register role from admin panel should be Manager
            this.registeruser.userRole = "Manager";
            this.ffurl = 'ff/register';
            this.fatfractal.adduser(this.registeruser).then(function (response) {
                console.log(response);
                _this.router.navigate(['login']);
            })
                .catch(function (response) {
                _this.errormessage = (response.message);
            });
        }
    };
    Register = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register',
            template: __webpack_require__(/*! ./register.html */ "./src/app/auth/register/register.html"),
            styles: [__webpack_require__(/*! ./register.scss */ "./src/app/auth/register/register.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _user_user__WEBPACK_IMPORTED_MODULE_3__["User"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Register);
    return Register;
}());

var EqualPasswordsValidator = /** @class */ (function () {
    function EqualPasswordsValidator() {
    }
    EqualPasswordsValidator.validate = function (firstField, secondField) {
        return function (c) {
            return (c.controls && c.controls[firstField].value == c.controls[secondField].value) ? null : {
                passwordsEqual: {
                    valid: false
                }
            };
        };
    };
    return EqualPasswordsValidator;
}());



/***/ }),

/***/ "./src/app/auth/register/register.html":
/*!*********************************************!*\
  !*** ./src/app/auth/register/register.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-main\">\n  <div class=\"auth-block\">\n    <h1>Sign up to Good Day Bad Day</h1>\n    <a routerLink=\"/login\" class=\"auth-link \"><u> Already have an account? Sign in! </u></a>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!firstName.valid && userName.touched), 'has-success': (firstName.valid && firstName.touched)}\">\n        <label for=\"inputuserName3\" class=\"col-sm-3 control-label\">First Name</label>\n\n        <div class=\"col-sm-9\">\n          <input [formControl]=\"firstName\" type=\"text\" class=\"form-control inputlabelcommon\" id=\"inputuserName3\" placeholder=\"First Name\" >\n        </div>\n      </div>\n       <div class=\"form-group row\" [ngClass]=\"{'has-error': (!lastName.valid && lastName.touched), 'has-success': (lastName.valid && lastName.touched)}\">\n        <label for=\"inputuserName3\" class=\"col-sm-3 control-label\">Last Name</label>\n\n        <div class=\"col-sm-9\">\n          <input [formControl]=\"lastName\" type=\"text\" class=\"form-control inputlabelcommon\" id=\"inputuserName3\" placeholder=\"Last Name\">\n        </div>\n      </div>\n      \n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!userName.valid && userName.touched), 'has-success': (userName.valid && userName.touched)}\">\n        <label for=\"inputEmail3\" class=\"col-sm-3 control-label\">Email</label>\n\n        <div class=\"col-sm-9\">\n          <input [formControl]=\"userName\" type=\"userName\" class=\"form-control inputlabelcommon\" id=\"userName\" placeholder=\"Email\"   >\n        </div>\n      </div>\n         <!--for email validation-->\n                    <div class=\"md-errors-spacer\" [hidden]=\"userName.valid || userName.untouched\">\n        <div style=\"text-align: center; color: red;\" *ngIf=\"userName.errors && userName.errors.required\">\n            Email is required\n        </div>\n        <div style=\"text-align: center; color: red;\" class=\"md-char-counter\" *ngIf=\"userName.errors && !userName.valid && !userName.errors.required\">\n            Email is invalid\n        </div>\n    </div>\n\n                <!--for email validation-->\n\n\n\n\n      \n    \n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\n        <label for=\"inputPassword3\" class=\"col-sm-3 control-label\">Password</label>\n\n        <div class=\"col-sm-9\">\n          <input [formControl]=\"password\" type=\"password\" class=\"form-control inputlabelcommon\" id=\"inputPassword3\" placeholder=\"Password\" >\n        </div>\n      </div>\n      \n\n       <div class=\"form-group row\" [ngClass]=\"{'has-error': (!repeatPassword.valid && repeatPassword.touched), 'has-success': (repeatPassword.valid && repeatPassword.touched)}\">\n        <label for=\"inputPassword4\"  class=\"col-sm-3 control-label\">Repeat Password</label>\n\n        <div class=\"col-sm-9\">\n          <input [formControl]=\"repeatPassword\" type=\"password\" class=\"form-control inputlabelcommon\" id=\"inputPassword4\" placeholder=\"Repeat\">\n          <span *ngIf=\"!passwords.valid && (password.touched || repeatPassword.touched)\" class=\"help-block sub-little-text\">Passwords don't match.</span>\n        </div>\n      </div>\n\n     <div style=\"-webkit-text-fill-color: red; text-align: center;\">{{errormessage}}\n\t\t\t\t\t\t\t</div>\n      \n      <div class=\"form-group row\">\n        <div class=\"offset-sm-2 col-sm-10\">\n          <button [disabled]=\"!form.valid\"  type=\"submit\" class=\"btn btn-success commonbutton1\">Sign up</button>\n        </div>\n      </div>\n    </form>\n\n    <!-- <div class=\"auth-sep\"><span><span>or Sign up with one click</span></span></div>\n\n    <div class=\"al-share-auth\">\n      <ul class=\"al-share clearfix\">\n        <li><i class=\"socicon socicon-facebook\" title=\"Share on Facebook\"></i></li>\n        <li><i class=\"socicon socicon-twitter\" title=\"Share on Twitter\"></i></li>\n        <li><i class=\"socicon socicon-google\" title=\"Share on Google Plus\"></i></li>\n      </ul>\n    </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/register/register.module.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _register_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.routing */ "./src/app/auth/register/register.routing.ts");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user */ "./src/app/auth/user/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _register_routing__WEBPACK_IMPORTED_MODULE_4__["routing"]
            ],
            declarations: [
                _register_component__WEBPACK_IMPORTED_MODULE_3__["Register"]
            ],
            providers: [
                _user_user__WEBPACK_IMPORTED_MODULE_5__["User"]
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/auth/register/register.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/register/register.routing.ts ***!
  \***************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component */ "./src/app/auth/register/register.component.ts");


// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: _register_component__WEBPACK_IMPORTED_MODULE_1__["Register"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/auth/register/register.scss":
/*!*********************************************!*\
  !*** ./src/app/auth/register/register.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-main {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background-color: white;\n  top: 19%; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  color: black;\n  padding: 32px;\n  border: 3px solid black; }\n\n.auth-block h1 {\n    font-weight: 200;\n    margin-bottom: 28px;\n    text-align: center; }\n\n.auth-block p {\n    font-size: 16px; }\n\n.auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: black; }\n\n.auth-block a:hover {\n      color: black; }\n\n.auth-block .control-label {\n    padding-top: 11px;\n    color: black; }\n\n.auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n\n.auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n\n.auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: black; }\n\n.auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n\n.auth-sep:before, .auth-sep:after {\n    border-top: solid 1px black;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n\n.al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n\n.al-share-auth .al-share li {\n      margin-left: 24px; }\n\n.al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n\n.al-share-auth .al-share li i {\n        font-size: 24px; }\n\n.btn-auth {\n  color: #ffffff !important; }\n\n.auth-block[_ngcontent-c2] .control-label[_ngcontent-c2] {\n  padding-top: 11px;\n  color: black; }\n\n.auth-block[_ngcontent-c2] {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  color: black;\n  padding: 32px;\n  border: 3px solid black; }\n\n.inputlabelcommon {\n  border: 1px solid black !important;\n  border-radius: 0px !important;\n  color: black !important; }\n\n.commonbutton {\n  text-align: center;\n  font-weight: 200;\n  margin: 0 33%;\n  margin-bottom: 10px; }\n\n.form-control {\n  background-color: rgba(255, 255, 255, 0.1);\n  box-shadow: none;\n  font-size: 14px;\n  border: 1px solid black !important;\n  border-radius: 0px !important;\n  color: black !important; }\n"

/***/ })

}]);
//# sourceMappingURL=app-auth-register-register-module.js.map