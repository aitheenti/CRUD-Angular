import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService, private toastr : ToastrService) { }

  ngOnInit() {
    this.employeeService.getData();
    this.resetForm();
  }

  onSubmit(emplyeeForm: NgForm) {
    this.employeeService.insertEmployee(emplyeeForm.value);
    this.resetForm(emplyeeForm);
    this.toastr.success('Submitted Successfully', 'Employee Register')
  }

  resetForm(emplyeeForm? : NgForm) {
    if(emplyeeForm!= null)
    emplyeeForm.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0
    }
  }
}
