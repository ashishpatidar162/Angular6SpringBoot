import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SignupManagerComponent } from './signup-manager/signup-manager.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  // { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: '', component: LoginManagerComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'signup', component: SignupManagerComponent},
  { path: 'login', component: LoginManagerComponent },
  { path: 'home', component: HomeComponent},
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
