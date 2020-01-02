import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { User } from '../user';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
    current: string;
  currentUser: user =new User();


  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService,private managerService:ManagerService) { }

  ngOnInit() {
   this.currentUserload();
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();    
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