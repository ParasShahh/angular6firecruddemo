import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

// import { Api } from '../api/api';
// import { usercreds } from '../../models/usercreds';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { CustomerService } from '../../customers/customer.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

const PROFILE_PLACEHOLDER_IMAGE_URL = '/assets/images/profile_placeholder.png';


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
@Injectable()
export class User {
  _user: any;
  user: Observable<firebase.User>;
  currentUser: firebase.User;
  messages: Observable<any[]>;
  profilePicStyles: {};
 
  firedata = firebase.database().ref('/userDetails');
  topics: string;

  constructor (public db: AngularFireDatabase, public afireauth: AngularFireAuth , private customerService : CustomerService ) { 
        this.user = afireauth.authState;
    this.user.subscribe((user: firebase.User) => {
      console.log(user);
      this.currentUser = user;

      if (user) { // User is signed in!
        this.profilePicStyles = {
          'background-image':  `url(${this.currentUser.photoURL})`
        };

        // We load currently existing chat messages.
        this.messages = this.db.list<any>('/messages', ref => ref.limitToLast(12)).valueChanges();
        this.messages.subscribe((messages) => {
          // Calculate list of recently discussed topics
          const topicsMap = {};
          const topics = [];
          let hasEntities = false;
          messages.forEach((message) => {
            if (message.entities) {
              for (let entity of message.entities) {
                if (!topicsMap.hasOwnProperty(entity.name)) {
                  topicsMap[entity.name] = 0
                }
                topicsMap[entity.name] += entity.salience;
                hasEntities = true;
              }
            }
          });
          if (hasEntities) {
            for (let name in topicsMap) {
              topics.push({ name, score: topicsMap[name] });
            }
            topics.sort((a, b) => b.score - a.score);
            this.topics = topics.map((topic) => topic.name).join(', ');
          }

          // Make sure new message scroll into view
      
        });

        // We save the Firebase Messaging Device token and enable notifications.
        // this.saveMessagingDeviceToken();
      } else { // User is signed out!
        this.profilePicStyles = {
          'background-image':  PROFILE_PLACEHOLDER_IMAGE_URL
        };
        this.topics = '';
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
  _loggedIn(resp) {
    this._user = resp.user;
  }




  loginWithFirebase(credentials) {
    var promise = new Promise((resolve, reject) => {
      this.loginUser(credentials.email, credentials.password).then((res) => {
       console.log(res);
        resolve(true);
      }).catch((err) => {
        console.log( err);
        reject(err);
       })
    })

    return promise;
    
  }
  loginUser(email: string, password: string): Promise<any> {
    return this.afireauth.auth.signInWithEmailAndPassword(email, password);
  }

//Sign up with Fire base 

  adduser(newuser) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(() => {
        this.afireauth.auth.currentUser.updateProfile({
          displayName: newuser.firstName,
          photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
        }).then(() => {
            this.customerService.setpath('UserDetails');
            this.customerService.createCustomer(newuser);
            return true;
          })
          }).catch((err) => {
            reject(err);
        })
      }).catch((err) => {
      })
      return promise ;
    }


    loginWithGoogle()
    {
     return this.afireauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    loginWithGit()
    {
     return this.afireauth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
    }
    logout() {
      this.afireauth.auth.signOut();
    }

}
