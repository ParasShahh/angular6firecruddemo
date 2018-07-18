# What is Firebase?
Firebase is a Backend-as-a-Service — BaaS — that started as a YC11 startup and grew up into a next-generation app-development platform on Google Cloud Platform.

I’ve been using Firebase since 2013. I was late to the game :)

I use Firebase to power my family’s business, Calligraphy.org. I also use it for everything I’ve developed in the last three years.

Firebase frees developers to focus crafting fantastic user experiences. You don’t need to manage servers. You don’t need to write APIs. Firebase is your server, your API and your datastore, all written so generically that you can modify it to suit most needs. Yeah, you’ll occasionally need to use other bits of the Google Cloud for your advanced applications. Firebase can’t be everything to everybody. But it gets pretty close.

# It’s a Realtime Database
Real-time data is the way of the future. Nothing compares to it.

Most databases require you to make HTTP calls to get and sync your data. Most databases give you data only when you ask for it.

When you connect your app to Firebase, you’re not connecting through normal HTTP. You’re connecting through a WebSocket. WebSockets are much, much faster than HTTP. You don’t have to make individual WebSocket calls, because one socket connection is plenty. All of your data syncs automagically through that single WebSocket as fast as your client’s network can carry it.

Firebase sends you new data as soon as it’s updated. When your client saves a change to the data, all connected clients receive the updated data almost instantly.

# It’s File Storage
Firebase Storage provides a simple way to save binary files — most often images, but it could be anything — to Google Cloud Storage directly from the client!!!

Firebase Storage has it’s own system of security rules to protect your GCloud bucket from the masses, while granting detailed write privileges to your authenticated clients.

# It’s Authentication
Firebase auth has a built in email/password authentication system. It also supports OAuth2 for Google, Facebook, Twitter and GitHub. We’ll focus on email/password authentication for the most part. Firebase’s OAuth2 system is well-documented and mostly copy/paste.

If you’ve ever written an authentication system, let’s commiserate for a moment. Custom authentication is terrible. I will never write an auth system again for as long as I live. I fell in love with Firebase Auth at first sight, and the flame has never wavered. Sometimes I get frustrated. Sometimes we fight. But I never forget the cold, dark abyss of a custom auth system. I count my blessings.

Oh, and Firebase Auth integrates directly into Firebase Database, so you can use it to control access to your data. I’m writing this as if it’s an afterthought. It’s not. It’s the second reason that you will love Firebase Auth.

#It’s Hosting
Firebase includes an easy-to-use hosting service for all of your static files. It serves them from a global CDN with HTTP/2.

And to make your development particularly painless, Firebase hosting utilizes Superstatic, which you can run locally for all of your testing. I run Superstatic as BrowserSync middleware. The following implementation uses Gulp, but Gulp is purely optional.





# developed published by Paras shah

# Angular6 Firebase CRUD Demo

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


# sign up 
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

# CRUD operation  

- All methods for CRUD is written at  ** \src\app\customers\customer.service.ts ** 





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
