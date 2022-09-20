import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMPLOYEE FORM';
  Employee = {
    ename:'',
    eposition :'',
    elocation : '',
    esalary : ''
}
employeeVerify()
{
  alert("Employee added successfully!!");
}
};
