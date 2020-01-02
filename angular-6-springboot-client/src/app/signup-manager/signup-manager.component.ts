import { Component, OnInit } from '@angular/core';
import { Manager } from '../manager';
import { ManagerService } from '../manager.service';
import { Router } from '@angular/router';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-signup-manager',
  templateUrl: './signup-manager.component.html',
  styleUrls: ['./signup-manager.component.css']
})
export class SignupManagerComponent implements OnInit {


  manager: Manager =new Manager();
  submitted= false;

  constructor(private managerService: ManagerService,
    private router:Router) { }

  ngOnInit() {
  }

  newManager(): void {
    this.submitted = false;
    this.manager = new Manager();
  }

  save() {
    this.managerService.createManager(this.manager)
      .subscribe(data => console.log(data), error => console.log(error));
    this.manager = new Manager();
   
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
 
  validate(formGroup: FormGroup): ValidationErrors {
       
    }
}
