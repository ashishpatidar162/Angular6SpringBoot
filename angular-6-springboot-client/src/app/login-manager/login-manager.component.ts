import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './auth.service';
import { ManagerService } from '../manager.service';
import { Manager } from '../manager';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {
    username: string;
    password : string;
    firstlast : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  managers: Observable<Manager[]>;
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationServic: AuthenticationService,
    private managerService: ManagerService ) {   }

  ngOnInit() {
  //  this.reloadData();
  }
   
   
  reloadData() {
    this.managers = this.managerService.getManagerList();
     this.managers.forEach(data =>{
       console.log(data);
     })

     this.managers.subscribe(lists=>{lists.forEach(data =>{
      console.log(data.emailId+":"+data.password);
     // console.log(this.username);
    })
  });
  }

  handleLoginM(){
   let  f=0;
     this.managerService.getManagerList().subscribe((lists)=>{lists.forEach(data =>{
      if(this.username===data.emailId && this.password===data.password)
          {
            this.firstlast = data.firstName + ' ' + data.lastName;
            this.managerService.registerSuccessfulLogin(this.username,this.firstlast);
         //   sessionStorage.setItem( data.username, this.firstlast);
           this.invalidLogin = false;
           this.loginSuccess = true;
           this.successMessage = 'Login Successful.';
           this.router.navigate(['/employees']);
          f=1;
          }
     })
    }, () => { console.log("Invalid");
     this.invalidLogin = true;
     this.loginSuccess = false;
   });
   if(f==0){
      this.invalidLogin=true;
      this.loginSuccess=false;
   }
      
  } 

  handleLogin() {
    this.authenticationServic.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/employees']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }
}
