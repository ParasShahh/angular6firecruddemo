import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { isUndefined } from 'util';


@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  @Input() selectedcustomer: Customer;

  custompath;
  customer: Customer = new Customer();
  submitted = false;
  Profilepic = null;
  editMode: boolean;
  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedcustomer.currentValue) {
      this.customer = changes.selectedcustomer.currentValue;
      this.Profilepic = this.customer.profilePic ? this.customer.profilePic : null;

    }
    // changes.prop contains the old and the new value...
  }
  ngOnInit() {

    this.route.params.subscribe(key => {
      if (!isUndefined(key.id)) {
        this.getCustomersList(key.id).subscribe();

        this.editMode = true;
      }
    });
    // this.this.customerService



  }
  getCustomersList(key) {
    // Use snapshotChanges().map() to store the key
    // tslint:disable-next-line:prefer-const
    let subscriber = this.customerService.getCustomersList().snapshotChanges().map(changes => {
      changes.forEach(c => {
        if (key === c.key) {
          this.customer = { key: c.payload.key, ...c.payload.val() }
          this.Profilepic = this.customer.profilePic ? this.customer.profilePic : null;


        }
      });


    });
    return subscriber;
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService.createCustomer(this.customer);
    this.customer = new Customer();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  updateActive() {
    this.submitted = true;
    this.customerService.updateCustomer(this.customer.key, this.customer);
  }
  setPath() {
    this.customerService.setpath(this.custompath);
  }
  processWebImage(event) {
    const reader = new FileReader();
    reader.onload = (readerEvent) => {

      const imageData = (readerEvent.target as any).result;
      this.customer.profilePic = imageData;
      this.customer.file = event.target.files[0];
    };

    reader.readAsDataURL(event.target.files[0]);
  }
  getProfileImageStyle() {
    // return 'url(' + this.customer.profilePic + ')';
    this.Profilepic = this.customer.profilePic;
  }

}
