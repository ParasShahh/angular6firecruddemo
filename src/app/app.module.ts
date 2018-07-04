import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';

import { CustomerService } from './customers/customer.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    AngularFireAuthModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
