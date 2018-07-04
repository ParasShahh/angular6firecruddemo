import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './auth/login';
import { PhoneLoginComponent } from './auth/login/phone-login/phone-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: 'app/auth/login/login.module#LoginModule',
  },
  {
    path: 'phonelogin',
 loadChildren: 'app/auth/login/login.module#LoginModule'  },
  {
    path: 'register',
    loadChildren: 'app/auth/register/register.module#RegisterModule'
  },
  { path: 'customers', component: CustomersListComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'edit/:id', component: CreateCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

