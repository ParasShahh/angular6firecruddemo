(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-auth-login-login-module"],{

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _login_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.routing */ "./src/app/auth/login/login.routing.ts");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user */ "./src/app/auth/user/user.ts");
/* harmony import */ var _phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./phone-login/phone-login.component */ "./src/app/auth/login/phone-login/phone-login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _login_routing__WEBPACK_IMPORTED_MODULE_4__["routing"]
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_3__["Login"],
                _phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_6__["PhoneLoginComponent"]
            ],
            providers: [
                _user_user__WEBPACK_IMPORTED_MODULE_5__["User"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.routing.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/login/login.routing.ts ***!
  \*********************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");
// tslint:disable-next-line:import-spacing


// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_1__["Login"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/auth/login/phone-login/phone-login.component.css":
/*!******************************************************************!*\
  !*** ./src/app/auth/login/phone-login/phone-login.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputlabelcommon{\r\n    border: 1px solid black !important;\r\n        border-radius: 0px !important;\r\n            color: black !important;\r\n\r\n\r\n}"

/***/ }),

/***/ "./src/app/auth/login/phone-login/phone-login.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/auth/login/phone-login/phone-login.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"user\">\n    <!-- <h1>Sign In with Your Phone Number</h1> -->\n  \n    <label for=\"phone\">Phone Number</label><br>\n    <input type=\"text\" [(ngModel)]=\"phoneNumber.country\"  class=\"input form-control inputlabelcommon \" placeholder=\"Country code\"    maxlength=\"2\">\n    <input type=\"text\" [(ngModel)]=\"phoneNumber.area\"     class=\"input form-control inputlabelcommon \" placeholder=\"Contact number\"  maxlength=\"10\">\n    <!-- <input type=\"text\" [(ngModel)]=\"phoneNumber.prefix\"   class=\"input\" placeholder=\"555\"  maxlength=\"3\">\n    <input type=\"text\" [(ngModel)]=\"phoneNumber.line\"     class=\"input\" placeholder=\"5555\" maxlength=\"4\"> -->\n  \n    <div id=\"recaptcha-container\"></div>\n  \n    <button class=\"btn btn-success commonbutton\" *ngIf=\"windowRef.recaptchaVerifier\" (click)=\"sendLoginCode()\">SMS Text Login Code</button>\n  \n    <div *ngIf=\"windowRef.confirmationResult\">\n      <hr>\n      <label for=\"code\">Enter your Verification Code Here</label><br>\n      <input type=\"text\" name=\"code\" [(ngModel)]=\"verificationCode\">\n  \n      <button class=\"btn btn-success commonbutton\" (click)=\"verifyLoginCode()\">Verify</button>\n    </div>\n  \n  </div>\n  \n  <div *ngIf=\"user\">\n    You have successfully logged in with your phone number!\n  \n    UserId: {{ user?.uid }}\n  \n  </div>"

/***/ }),

/***/ "./src/app/auth/login/phone-login/phone-login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/login/phone-login/phone-login.component.ts ***!
  \*****************************************************************/
/*! exports provided: PhoneLoginComponent, PhoneNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneLoginComponent", function() { return PhoneLoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumber", function() { return PhoneNumber; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_window_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/window.service */ "./src/app/shared/services/window.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhoneLoginComponent = /** @class */ (function () {
    function PhoneLoginComponent(win, router) {
        this.win = win;
        this.router = router;
        this.phoneNumber = new PhoneNumber();
    }
    PhoneLoginComponent.prototype.ngOnInit = function () {
        this.windowRef = this.win.windowRef;
        this.windowRef.recaptchaVerifier = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].RecaptchaVerifier('recaptcha-container');
        this.windowRef.recaptchaVerifier.render();
    };
    PhoneLoginComponent.prototype.sendLoginCode = function () {
        var _this = this;
        var appVerifier = this.windowRef.recaptchaVerifier;
        console.log(this.windowRef.recaptchaVerifier);
        var num = this.phoneNumber.e164;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPhoneNumber(num, appVerifier)
            .then(function (result) {
            console.log(result);
            _this.windowRef.confirmationResult = result;
        })
            .catch(function (error) { return console.log(error); });
    };
    PhoneLoginComponent.prototype.verifyLoginCode = function () {
        var _this = this;
        this.windowRef.confirmationResult
            .confirm(this.verificationCode)
            .then(function (result) {
            _this.user = result.user;
            _this.router.navigate(['customers']);
        })
            .catch(function (error) { return console.log(error, 'Incorrect code entered?'); });
    };
    PhoneLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phone-login',
            template: __webpack_require__(/*! ./phone-login.component.html */ "./src/app/auth/login/phone-login/phone-login.component.html"),
            styles: [__webpack_require__(/*! ./phone-login.component.css */ "./src/app/auth/login/phone-login/phone-login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_window_service__WEBPACK_IMPORTED_MODULE_1__["WindowService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PhoneLoginComponent);
    return PhoneLoginComponent;
}());

var PhoneNumber = /** @class */ (function () {
    function PhoneNumber() {
    }
    Object.defineProperty(PhoneNumber.prototype, "e164", {
        // format phone numbers as E.164
        get: function () {
            var num = this.country + this.area;
            console.log(num);
            return "+" + num;
        },
        enumerable: true,
        configurable: true
    });
    return PhoneNumber;
}());



/***/ }),

/***/ "./src/app/shared/services/window.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/window.service.ts ***!
  \***************************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "windowRef", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    WindowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WindowService);
    return WindowService;
}());



/***/ })

}]);
//# sourceMappingURL=app-auth-login-login-module.js.map