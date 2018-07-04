# developed published by Paras shah


# Fire base setup 
https://console.firebase.google.com/u/0/

Create a Firebase project in the Firebase console.

If you don't have an existing Firebase project, click Add project, then enter either an existing Google Cloud Platform project name or a new project name.

If you have an existing Firebase project that you'd like to use, select that project from the console.

From the project overview page in the Firebase console, click Add Firebase to your web app. 
If your project already has an app, select Add App from the project overview page.

Copy and paste your project's customized code **Configuration code** snippet in the **environment.ts** file of you angular project  

# Ooopss we forget to create new angular project so let's get start

We are using listed version (latest version of the time)

"@angular/cli": "6.0.8",
"@angular/core": "6.0.7",

Basically angular 6 

Let create and install required packages by below mentioned commands

ng new angularfirecruddemo
npm install (to install all required dependencies)

We will add below mentioned packages to communicate with firebase 

please use npm install --save <packagename>
"angularfire2": "^5.0.0-rc.6",
"firebase": "^5.2.0",

# AIM of web application  and structure of the application

Simple example of the crud operations using angular 6 + firebase

We will create a simple application with login, sign up and crud operation 

you can reffer this link for basic set up for crud operation
http://javasampleapproach.com/frontend/angular/angular-5-firebase-crud-operations-with-angularfire2-v5


#sign up 
- path of service : app/auth/user/user.ts (service which have all the methods for login)
- path of form : app/auth/register

- addUser method o fuser.ts is used to register user anf save the data of user details at real time database. 


# sign in 

We will use AngularFireAuth for sing in using different methods
- path of service : app/auth/user/user.ts (service which have all the methods for login)
- path of form : app/auth/login

- loginWithFirebase
Log in Using email id and password

- loginWithGoogle
Log in using google credentials

- loginWithGit
Log in using git credentials

- phone-login
Log in using otp from mobile number 
Path : - app/auth/login/phone-login
which includes a form to enter phone number,otp  and verify captcha 

# C


# Angular5FirebaseCRUD

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
