import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import 'rxjs/add/operator/map';
import { isObject } from 'util';
import { User } from '../../auth/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
  providers: [User]
})
export class CustomersListComponent implements OnInit {

  customers: any;
  selectedcustomer: any;
  currentpath: string;
  rootNodesList;
  currentUser: any;
  profilePicStyles: { 'background-image': string; };
  constructor(private customerService: CustomerService, private user: User  , private router: Router) {
    // this.user.loginWithFirebase({email:"mparas143@gmail.com",password:"Admin@123"}).then(res=>{
    //   console.log(res);
    // }).catch(err =>{
    //   console.log(err);
    // })
    this.user.user.subscribe(user => {
      console.log(user);
      this.currentUser = user;
      if (user) { // User is signed in!
        this.profilePicStyles = {

          'background-image': `url(${this.currentUser.photoURL})`

        }
        if(this.currentUser){
          this.getCustomersList();
          this.getRootNodeList();
          this.currentpath = this.customerService.getCurrentpath();
         }
      }

    });
  }

  ngOnInit() {
     // console.log(this.customerService.getRootNodeList());
  }
  login() {
    this.user.loginWithGoogle().then((response) => {
      console.log(response);

    })
      .catch((error) => {

        alert(error.message);
      },

    );


  }
  logout() {
    this.user.logout();
    this.router.navigate(['login']);
    
  }
  getCustomersList() {
    // Use snapshotChanges().map() to store the key
    this.customerService.getCustomersList().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(customers => {
      this.customers = customers;
    });
  }
  getRootNodeList() {
    // Use snapshotChanges().map() to store the key
    this.customerService.getRootNodeList().snapshotChanges().map(changes => {
      // console.log(changes);
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(customers => {
      //  console.log(customers);
      customers.forEach(element => {
        //  console.log( (  element));
        console.log(Object.keys(element).map(function (personNamedIndex) {
          let person = element[personNamedIndex];
          // console.log(isObject(person))
          // do something with person
          return person;
        }));
      });
      this.rootNodesList = customers;
    });
  }
  deleteCustomers() {
    this.customerService.deleteAll();
  }
  isClicked(customer) {
    this.selectedcustomer = customer;
  }
  rootClicked(node) {
    this.customerService.setpath(node.key);
    this.getCustomersList();
  }
}
