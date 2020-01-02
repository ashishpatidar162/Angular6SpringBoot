import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { SignupManagerComponent } from './signup-manager/signup-manager.component';
import { HttpInterceptorService } from './httpinterceptor.service';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    LoginManagerComponent,
    SignupManagerComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
