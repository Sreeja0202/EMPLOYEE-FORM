import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http: HttpClient) { }
addEmployee()
{
  return this.http.get("http://localhost:3000/employees");
}
}