import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees:any=[];
  employee = { name: '', position: '', department: '' };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }
  
  onSubmit() {
    this.employeeService.addEmployee(this.employee);
    this.employee = { name: '', position: '', department: '' }; // Reset form
  }
  
}

