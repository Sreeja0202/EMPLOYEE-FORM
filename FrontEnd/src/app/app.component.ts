import { Component } from '@angular/core';
import { EmployeeserviceService } from './employeeservice.service';
import { EmployeeModel } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'EMPLOYEE FORM';
  Employee = {
    ename:'',
    eposition :'',
    elocation : '',
    esalary : ''
    }
    // employeeVerify()
    // {
    //   alert("Validated!!!");
    // }
constructor(private employeeservice: EmployeeserviceService){}
employeeVerify(): void {
  this.employeeservice.addEmployee().subscribe((data: any)=>
  {
    this.Employee=JSON.parse(JSON.stringify(data));
    
  
  })
}
}

