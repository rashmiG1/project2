import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesSubject = new BehaviorSubject<any[]>([]);
  private employees = this.employeesSubject.asObservable();

  constructor() {}

  addEmployee(employee:any) {
    const currentEmployees = this.employeesSubject.getValue();
    this.employeesSubject.next([...currentEmployees, employee]);
  }

  getEmployees() {
    return this.employees;
  }
}
