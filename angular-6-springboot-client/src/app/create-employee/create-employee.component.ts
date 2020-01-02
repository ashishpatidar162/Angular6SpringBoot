import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { ManagerService } from '../manager.service';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
     current: string;
  currentUser: user =new User();


  constructor(private employeeService: EmployeeService,
    private router: Router,private managerService:ManagerService) { }

  ngOnInit() {
  this.currentUserload();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

    save() {
      this.employeeService.createEmployee(this.employee)
        .subscribe(data => console.log(data), error => console.log(error));
      this.employee = new Employee();
      this.gotoList();
    }

    onSubmit() {
      this.submitted = true;
      this.save();    
    }

  gotoList() {
    this.router.navigate(['/employees']);
  }

    currentUserload()
   {
     
     console.log('.....');
this.current=this.managerService.getLoggedInUserName();
console.log(' .......'+this.current);
this.currentUser.firstName=this.current;
   }

   handleLogout(){
    this.managerService.logout();
   }
}