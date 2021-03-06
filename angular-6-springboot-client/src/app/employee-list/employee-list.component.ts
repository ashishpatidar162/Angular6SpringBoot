import { EmployeeDetailsComponent } from './../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Manager } from '../manager';
import { LoginManagerComponent } from '../login-manager/login-manager.component';
import { ManagerService } from '../manager.service';
import { User } from '../user';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  current: string;
  //currentUser: Manager;
   currentUser: user = new User();
  
   // users: Manager[] = [];
       
  
  constructor(private employeeService: EmployeeService,private managerService:ManagerService,
    private router: Router) {}

  ngOnInit() {
  this.currentUserload();
    this.reloadData();
   

    
  }
  
  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
     this.employees.forEach(data =>{
       console.log(data);
     })

     this.employees.subscribe(lists=>{lists.forEach(data =>{
      console.log(data.firstName);
    })});
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details',id]);

  }

  updateEmployee(id: number){
    this.router.navigate(['update',id]);

  }

   currentUserload()
   {
     
     console.log('.....');
this.current=this.managerService.getLoggedInUserName();
console.log(' .......'+this.current);
this.currentUser.firstName=this.current;
   }
  handleLogout() {
    this.managerService.logout();
  }
}
