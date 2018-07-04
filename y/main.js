(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/auth/login/login.module": [
		"./src/app/auth/login/login.module.ts",
		"app-auth-login-login-module~app-auth-register-register-module",
		"app-auth-login-login-module"
	],
	"app/auth/register/register.module": [
		"./src/app/auth/register/register.module.ts",
		"app-auth-login-login-module~app-auth-register-register-module",
		"app-auth-register-register-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _customers_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers/create-customer/create-customer.component */ "./src/app/customers/create-customer/create-customer.component.ts");
/* harmony import */ var _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers/customers-list/customers-list.component */ "./src/app/customers/customers-list/customers-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        loadChildren: 'app/auth/login/login.module#LoginModule',
    },
    {
        path: 'phonelogin',
        loadChildren: 'app/auth/login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: 'app/auth/register/register.module#RegisterModule'
    },
    { path: 'customers', component: _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_1__["CustomersListComponent"] },
    { path: 'add', component: _customers_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_0__["CreateCustomerComponent"] },
    { path: 'edit/:id', component: _customers_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_0__["CreateCustomerComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routing = _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div style=\"color: blue;\">\n    <h1>{{title}}</h1>\n    <h3>{{description}}</h3>\n  </div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Paras - Demo';
        this.description = 'Angular 6-Firebase Demo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customers/customers-list/customers-list.component */ "./src/app/customers/customers-list/customers-list.component.ts");
/* harmony import */ var _customers_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customers/customer-details/customer-details.component */ "./src/app/customers/customer-details/customer-details.component.ts");
/* harmony import */ var _customers_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customers/create-customer/create-customer.component */ "./src/app/customers/create-customer/create-customer.component.ts");
/* harmony import */ var _customers_customer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customers/customer.service */ "./src/app/customers/customer.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_8__["CustomersListComponent"],
                _customers_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_9__["CustomerDetailsComponent"],
                _customers_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_10__["CreateCustomerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"]
            ],
            providers: [_customers_customer_service__WEBPACK_IMPORTED_MODULE_11__["CustomerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/user/user.ts":
/*!***********************************!*\
  !*** ./src/app/auth/user/user.ts ***!
  \***********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _customers_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../customers/customer.service */ "./src/app/customers/customer.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Api } from '../api/api';
// import { usercreds } from '../../models/usercreds';




var PROFILE_PLACEHOLDER_IMAGE_URL = '/assets/images/profile_placeholder.png';
/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(db, afireauth, customerService) {
        var _this = this;
        this.db = db;
        this.afireauth = afireauth;
        this.customerService = customerService;
        this.firedata = firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('/userDetails');
        this.user = afireauth.authState;
        this.user.subscribe(function (user) {
            console.log(user);
            _this.currentUser = user;
            if (user) {
                _this.profilePicStyles = {
                    'background-image': "url(" + _this.currentUser.photoURL + ")"
                };
                // We load currently existing chat messages.
                _this.messages = _this.db.list('/messages', function (ref) { return ref.limitToLast(12); }).valueChanges();
                _this.messages.subscribe(function (messages) {
                    // Calculate list of recently discussed topics
                    var topicsMap = {};
                    var topics = [];
                    var hasEntities = false;
                    messages.forEach(function (message) {
                        if (message.entities) {
                            for (var _i = 0, _a = message.entities; _i < _a.length; _i++) {
                                var entity = _a[_i];
                                if (!topicsMap.hasOwnProperty(entity.name)) {
                                    topicsMap[entity.name] = 0;
                                }
                                topicsMap[entity.name] += entity.salience;
                                hasEntities = true;
                            }
                        }
                    });
                    if (hasEntities) {
                        for (var name_1 in topicsMap) {
                            topics.push({ name: name_1, score: topicsMap[name_1] });
                        }
                        topics.sort(function (a, b) { return b.score - a.score; });
                        _this.topics = topics.map(function (topic) { return topic.name; }).join(', ');
                    }
                    // Make sure new message scroll into view
                });
                // We save the Firebase Messaging Device token and enable notifications.
                // this.saveMessagingDeviceToken();
            }
            else {
                _this.profilePicStyles = {
                    'background-image': PROFILE_PLACEHOLDER_IMAGE_URL
                };
                _this.topics = '';
            }
        });
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    // login(accountInfo: any) {
    //   // let seq = this.api.post('ff/login', accountInfo).share();
    //   seq.subscribe((res: any) => {
    //     // If the API returned a successful response, mark the user as logged in
    //     if (res.status == 'success') {
    //       this._loggedIn(res);
    //     } else {
    //     }
    //   }, err => {
    //     console.error('ERROR', err);
    //   });
    //   return seq;
    // }
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    // signup(accountInfo: any) {
    //   let seq = this.api.post('signup', accountInfo).share();
    //   seq.subscribe((res: any) => {
    //     // If the API returned a successful response, mark the user as logged in
    //     if (res.status == 'success') {
    //       this._loggedIn(res);
    //     }
    //   }, err => {
    //     console.error('ERROR', err);
    //   });
    //   return seq;
    // }
    /**
     * Log the user out, which forgets the session
     */
    // logout() {
    //   this._user = null;
    // }
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User.prototype.loginWithFirebase = function (credentials) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.loginUser(credentials.email, credentials.password).then(function (res) {
                console.log(res);
                resolve(true);
            }).catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
        return promise;
    };
    User.prototype.loginUser = function (email, password) {
        return this.afireauth.auth.signInWithEmailAndPassword(email, password);
    };
    //Sign up with Fire base 
    User.prototype.adduser = function (newuser) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(function () {
                _this.afireauth.auth.currentUser.updateProfile({
                    displayName: newuser.firstName,
                    photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
                }).then(function () {
                    _this.customerService.setpath('UserDetails');
                    _this.customerService.createCustomer(newuser);
                    return true;
                });
            }).catch(function (err) {
                reject(err);
            });
        }).catch(function (err) {
        });
        return promise;
    };
    User.prototype.loginWithGoogle = function () {
        return this.afireauth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    };
    User.prototype.loginWithGit = function () {
        return this.afireauth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GithubAuthProvider());
    };
    User.prototype.logout = function () {
        this.afireauth.auth.signOut();
    };
    User = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _customers_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]])
    ], User);
    return User;
}());



/***/ }),

/***/ "./src/app/customers/create-customer/create-customer.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/customers/create-customer/create-customer.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image-wrapper {\r\n    text-align: center;\r\n    margin: 20px 0;\r\n\r\n  \r\n\r\n    .profile-image-placeholder {\r\n      display: inline-block;\r\n\r\n      background-color: #eee;\r\n      width: 96px;\r\n      height: 96px;\r\n      border-radius: 50%;\r\n\r\n      font-size: 12px;\r\n\r\n      ion-icon {\r\n        font-size: 44px;\r\n        margin-bottom: -10px;\r\n        margin-top: 10px;\r\n      }\r\n    }\r\n}\r\n.profile-image {\r\n  width: 96px;\r\n  height: 96px;\r\n  border-radius: 50%;\r\n\r\n  display: inline-block;\r\n\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}"

/***/ }),

/***/ "./src/app/customers/create-customer/create-customer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/customers/create-customer/create-customer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Set Custom path</h2>\n\n<div class=\"form-group col-md-12\">\n\t<label for=\"age\">Path name </label> <input type=\"text\"\n\t\tclass=\"form-control\" id=\"age\" required [(ngModel)]=\"custompath\"\n\t\tname=\"age\">\n<button type=\"button\" (click)=\"setPath()\" style=\"margin: 20px\" class=\"col-md-3 btn btn-success\">Set Path</button>\n\n</div>\n\n\n\n\n<h3>Create Customer</h3>\n\n\n<div [hidden]=\"submitted\" class=\"col-md-12\" style=\"width: 300px;\">\n\t<form (ngSubmit)=\"onSubmit()\">\n\t\t\t<input type=\"file\" #fileInput  name=\"files[]\"  (change)=\"processWebImage($event)\" />\n\t\t\t<div class=\"profile-image-wrapper\" >\n\t\t\t  <img src=\"{{Profilepic}}\"  class=\"profile-image\" *ngIf=\"Profilepic != null\" title=\"profile\" alt=\"Profile\"  >\n\t\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"name\">Name</label> <input type=\"text\"\n\t\t\t\tclass=\"form-control\" id=\"name\" required [(ngModel)]=\"customer.name\"\n\t\t\t\tname=\"name\">\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"age\">Age</label> <input type=\"text\"\n\t\t\t\tclass=\"form-control\" id=\"age\" required [(ngModel)]=\"customer.age\"\n\t\t\t\tname=\"age\">\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t<button type=\"submit\" *ngIf=\"!editMode\" style=\"margin: 20px\" class=\"col-md-3 btn btn-success\">Submit</button>\n\t\t<button type=\"button\" (click)=\" updateActive()\" style=\"margin: 20px\" class=\"col-md-3 btn btn-success\">Update</button>\n\t\t</div>\n\n\t</form>\n</div>\n\n<div [hidden]=\"!submitted\">\n\t<h4>Data submitted successfully!</h4>\n\t<button class=\"btn btn-success\" style=\"margin: 20px\" (click)=\"newCustomer()\"> Great!!!</button>\n</div>\n"

/***/ }),

/***/ "./src/app/customers/create-customer/create-customer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/customers/create-customer/create-customer.component.ts ***!
  \************************************************************************/
/*! exports provided: CreateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerComponent", function() { return CreateCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer */ "./src/app/customers/customer.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customers/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateCustomerComponent = /** @class */ (function () {
    function CreateCustomerComponent(route, customerService) {
        this.route = route;
        this.customerService = customerService;
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_1__["Customer"]();
        this.submitted = false;
        this.Profilepic = null;
    }
    // tslint:disable-next-line:use-life-cycle-interface
    CreateCustomerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedcustomer.currentValue) {
            this.customer = changes.selectedcustomer.currentValue;
            this.Profilepic = this.customer.profilePic ? this.customer.profilePic : null;
        }
        // changes.prop contains the old and the new value...
    };
    CreateCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (key) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(key.id)) {
                _this.getCustomersList(key.id).subscribe();
                _this.editMode = true;
            }
        });
        // this.this.customerService
    };
    CreateCustomerComponent.prototype.getCustomersList = function (key) {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        // tslint:disable-next-line:prefer-const
        var subscriber = this.customerService.getCustomersList().snapshotChanges().map(function (changes) {
            changes.forEach(function (c) {
                if (key === c.key) {
                    _this.customer = __assign({ key: c.payload.key }, c.payload.val());
                    _this.Profilepic = _this.customer.profilePic ? _this.customer.profilePic : null;
                }
            });
        });
        return subscriber;
    };
    CreateCustomerComponent.prototype.newCustomer = function () {
        this.submitted = false;
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_1__["Customer"]();
    };
    CreateCustomerComponent.prototype.save = function () {
        this.customerService.createCustomer(this.customer);
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_1__["Customer"]();
    };
    CreateCustomerComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.save();
    };
    CreateCustomerComponent.prototype.updateActive = function () {
        this.submitted = true;
        this.customerService.updateCustomer(this.customer.key, this.customer);
    };
    CreateCustomerComponent.prototype.setPath = function () {
        this.customerService.setpath(this.custompath);
    };
    CreateCustomerComponent.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.customer.profilePic = imageData;
            _this.customer.file = event.target.files[0];
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    CreateCustomerComponent.prototype.getProfileImageStyle = function () {
        // return 'url(' + this.customer.profilePic + ')';
        this.Profilepic = this.customer.profilePic;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _customer__WEBPACK_IMPORTED_MODULE_1__["Customer"])
    ], CreateCustomerComponent.prototype, "selectedcustomer", void 0);
    CreateCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-customer',
            template: __webpack_require__(/*! ./create-customer.component.html */ "./src/app/customers/create-customer/create-customer.component.html"),
            styles: [__webpack_require__(/*! ./create-customer.component.css */ "./src/app/customers/create-customer/create-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], CreateCustomerComponent);
    return CreateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer-details/customer-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/customers/customer-details/customer-details.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customers/customer-details/customer-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/customers/customer-details/customer-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"customer\">\n\t\t<div>\n\t\t\t\t<label>Key: </label> {{customer.key}}\n\t\t\t</div>\n\t<div>\n\t\t<label>First Name: </label> {{customer.name}}\n\t</div>\n\t<div>\n\t\t<label>Age: </label> {{customer.age}}\n\t</div>\n\t<div>\n\t\t<label>Active: </label> {{customer.active}}\n\t</div>\n\n\t<span class=\"button is-small btn-primary\" *ngIf='customer.active' (click)='updateActive(false)'>Inactive</span>\n\t\n\t<span class=\"button is-small btn-primary\" *ngIf='!customer.active' (click)='updateActive(true)'>Active</span>\n\n\t<span class=\"button is-small btn-danger\" (click)='deleteCustomer()'>Delete</span>\n\n\t<span class=\"button is-small btn-primary\" (click)='Edit()'>Edit</span>\n\t\n\t<hr/>\n</div>\n"

/***/ }),

/***/ "./src/app/customers/customer-details/customer-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customers/customer-details/customer-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer.service */ "./src/app/customers/customer.service.ts");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer */ "./src/app/customers/customer.ts");
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




var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
    };
    CustomerDetailsComponent.prototype.updateActive = function (isActive) {
        this.customerService.updateCustomer(this.customer.key, { active: isActive });
    };
    CustomerDetailsComponent.prototype.deleteCustomer = function () {
        this.customerService.deleteCustomer(this.customer.key);
    };
    CustomerDetailsComponent.prototype.Edit = function () {
        this.router.navigate(['edit', this.customer.key]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _customer__WEBPACK_IMPORTED_MODULE_2__["Customer"])
    ], CustomerDetailsComponent.prototype, "customer", void 0);
    CustomerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/customers/customer-details/customer-details.component.html"),
            styles: [__webpack_require__(/*! ./customer-details.component.css */ "./src/app/customers/customer-details/customer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer.service.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customer.service.ts ***!
  \***********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerService = /** @class */ (function () {
    function CustomerService(db) {
        this.db = db;
        this.dbPath = '/customers';
        this.rootnodelist = '/';
        this.customersRef = null;
        this.rootNodes = null;
        this.customersRef = db.list(this.dbPath);
        this.rootNodes = db.list(this.rootnodelist);
    }
    CustomerService.prototype.setpath = function (path) {
        this.dbPath = '/' + path;
        console.log(this.dbPath);
        this.customersRef = this.db.list(this.dbPath);
    };
    CustomerService.prototype.getCurrentpath = function () {
        return this.dbPath;
    };
    CustomerService.prototype.createCustomer = function (customer) {
        this.customersRef.push(customer);
    };
    CustomerService.prototype.updateCustomer = function (key, value) {
        var _this = this;
        this.customersRef.update(key, value).catch(function (error) { return _this.handleError(error); });
    };
    CustomerService.prototype.deleteCustomer = function (key) {
        var _this = this;
        this.customersRef.remove(key).catch(function (error) { return _this.handleError(error); });
    };
    CustomerService.prototype.getCustomersList = function () {
        return this.customersRef;
    };
    CustomerService.prototype.getRootNodeList = function () {
        return this.rootNodes;
    };
    CustomerService.prototype.deleteAll = function () {
        var _this = this;
        this.customersRef.remove().catch(function (error) { return _this.handleError(error); });
    };
    CustomerService.prototype.handleError = function (error) {
        console.log(error);
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/customers/customer.ts":
/*!***************************************!*\
  !*** ./src/app/customers/customer.ts ***!
  \***************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
        this.active = true;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/customers/customers-list/customers-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/customers/customers-list/customers-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mdl-card {\r\n    min-height: 0;\r\n  }\r\n  .mdl-card {\r\n    background: linear-gradient(white, #f9f9f9);\r\n    justify-content: space-between;\r\n  }\r\n  #user-container {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: row;\r\n    top: 22px;\r\n    width: 100%;\r\n    right: 0;\r\n    padding-left: 10px;\r\n    justify-content: flex-end;\r\n    padding-right: 10px;\r\n  }\r\n  #user-container #user-pic {\r\n    top: -3px;\r\n    position: relative;\r\n    display: inline-block;\r\n    background-image: url('/assets/images/profile_placeholder.png');\r\n    background-repeat: no-repeat;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-size: 40px;\r\n    border-radius: 20px;\r\n  }\r\n  #user-container #user-name {\r\n    font-size: 16px;\r\n    line-height: 36px;\r\n    padding-right: 10px;\r\n    padding-left: 20px;\r\n  }\r\n  #image-form #submitImage {\r\n    width: auto;\r\n    padding: 0 6px 0 1px;\r\n    min-width: 0;\r\n  }\r\n  #image-form #submitImage .material-icons {\r\n    top: -1px;\r\n  }\r\n  .message img {\r\n    max-width: 300px;\r\n    max-height: 200px;\r\n  }\r\n  #mediaCapture {\r\n    display: none;\r\n  }\r\n  @media screen and (max-width: 610px) {\r\n    header {\r\n      height: 113px;\r\n      padding-bottom: 80px !important;\r\n    }\r\n    #user-container {\r\n      top: 72px;\r\n      background-color: rgb(3,155,229);\r\n      height: 38px;\r\n      padding-top: 3px;\r\n      padding-right: 2px;\r\n    }\r\n    #user-container #user-pic {\r\n      top: 2px;\r\n      width: 33px;\r\n      height: 33px;\r\n      background-size: 33px;\r\n    }\r\n  }\r\n  .mdl-textfield__label:after {\r\n    background-color: #0288D1;\r\n  }\r\n  .mdl-textfield--floating-label.is-focused .mdl-textfield__label {\r\n    color: #0288D1;\r\n  }\r\n  .mdl-button .material-icons {\r\n    top: -1px;\r\n    margin-right: 5px;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/customers/customers-list/customers-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/customers/customers-list/customers-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar-header\">\n   <div id=\"user-container\">\n\t<img *ngIf=\"currentUser\" id=\"user-pic\" src=\"{{currentUser.photoURL}}\">\n\t<div *ngIf=\"currentUser\" id=\"user-name\">{{ currentUser?.displayName }}</div>\n\t<button *ngIf=\"currentUser\" id=\"sign-out\" (click)=\"logout()\" class=\" btn btn-warning\">\n\t  Sign-out\n\t</button>\n\t<button *ngIf=\"!currentUser\" id=\"sign-in\" (click)=\"login()\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white\">\n\t\t<i class=\"socicon socicon-google\" aria-hidden=\"true\"></i>Sign-in with Google\n\t</button>\n\t</div>\n</header>\n\t\n<nav class=\"navbar-brand\">\n\t\t<a routerLink=\"/customers\" class=\"btn btn-primary active\" role=\"button\" routerLinkActive=\"active\">Customers</a>\n\t\t<a routerLink=\"/add\" class=\"btn btn-primary active\" role=\"button\" routerLinkActive=\"active\">Add</a>\n\t  </nav>\n<body>\n<h1>Current path is \"{{currentpath}}\" </h1>\n<div class=\"row\">\n\t\t<div class=\"col-md-4\">\n\t\t\t\t<div  (click)=\"rootClicked(node)\" *ngFor=\"let node of rootNodesList\">\n\t\t\t\t{{node.key}}\t\n\t\t\t\t</div>\n\n\t\t</div>\n\n\t<div class=\"col-md-4\">\n\t\t\t<div style=\"margin-bottom:20px;\">\n\t\t\t\t\t<button type=\"button\" class=\"button btn-danger\" (click)='deleteCustomers()'>Delete All</button>\n\t\t\t\t</div>\n\t\t<div  (click)=\"isClicked(customer)\" *ngFor=\"let customer of customers\">\n\t\t\t<customer-details [customer]='customer'></customer-details>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-4\">\n\t\t<create-customer [selectedcustomer]='selectedcustomer'> </create-customer>\n\t</div>\n</div>\n</body>\n\n"

/***/ }),

/***/ "./src/app/customers/customers-list/customers-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customers-list/customers-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersListComponent", function() { return CustomersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer.service */ "./src/app/customers/customer.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _auth_user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/user/user */ "./src/app/auth/user/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomersListComponent = /** @class */ (function () {
    function CustomersListComponent(customerService, user, router) {
        var _this = this;
        this.customerService = customerService;
        this.user = user;
        this.router = router;
        // this.user.loginWithFirebase({email:"mparas143@gmail.com",password:"Admin@123"}).then(res=>{
        //   console.log(res);
        // }).catch(err =>{
        //   console.log(err);
        // })
        this.user.user.subscribe(function (user) {
            console.log(user);
            _this.currentUser = user;
            if (user) {
                _this.profilePicStyles = {
                    'background-image': "url(" + _this.currentUser.photoURL + ")"
                };
                if (_this.currentUser) {
                    _this.getCustomersList();
                    _this.getRootNodeList();
                    _this.currentpath = _this.customerService.getCurrentpath();
                }
            }
        });
    }
    CustomersListComponent.prototype.ngOnInit = function () {
        // console.log(this.customerService.getRootNodeList());
    };
    CustomersListComponent.prototype.login = function () {
        this.user.loginWithGoogle().then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
            alert(error.message);
        });
    };
    CustomersListComponent.prototype.logout = function () {
        this.user.logout();
        this.router.navigate(['login']);
    };
    CustomersListComponent.prototype.getCustomersList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.customerService.getCustomersList().snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (customers) {
            _this.customers = customers;
        });
    };
    CustomersListComponent.prototype.getRootNodeList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.customerService.getRootNodeList().snapshotChanges().map(function (changes) {
            // console.log(changes);
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (customers) {
            //  console.log(customers);
            customers.forEach(function (element) {
                //  console.log( (  element));
                console.log(Object.keys(element).map(function (personNamedIndex) {
                    var person = element[personNamedIndex];
                    // console.log(isObject(person))
                    // do something with person
                    return person;
                }));
            });
            _this.rootNodesList = customers;
        });
    };
    CustomersListComponent.prototype.deleteCustomers = function () {
        this.customerService.deleteAll();
    };
    CustomersListComponent.prototype.isClicked = function (customer) {
        this.selectedcustomer = customer;
    };
    CustomersListComponent.prototype.rootClicked = function (node) {
        this.customerService.setpath(node.key);
        this.getCustomersList();
    };
    CustomersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customers-list',
            template: __webpack_require__(/*! ./customers-list.component.html */ "./src/app/customers/customers-list/customers-list.component.html"),
            styles: [__webpack_require__(/*! ./customers-list.component.css */ "./src/app/customers/customers-list/customers-list.component.css")],
            providers: [_auth_user_user__WEBPACK_IMPORTED_MODULE_3__["User"]]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"], _auth_user_user__WEBPACK_IMPORTED_MODULE_3__["User"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CustomersListComponent);
    return CustomersListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    firebase: {
        apiKey: 'AIzaSyAK9ui3c3H45q2djHCn-2XA5CbRXKhV1ns',
        authDomain: 'friendlychat-a1af5.firebaseapp.com',
        databaseURL: 'https://friendlychat-a1af5.firebaseio.com',
        projectId: 'friendlychat-a1af5',
        storageBucket: 'friendlychat-a1af5.appspot.com',
        messagingSenderId: '460406992772'
    },
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Paras\material\Angular5FirebaseCRUD\Angular5FirebaseCRUD\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map