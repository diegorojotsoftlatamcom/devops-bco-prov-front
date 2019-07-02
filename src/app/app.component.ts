import { Component, OnInit } from '@angular/core';
import ApiService from './api/api.service';
import Employee from './api/domain/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Catálogo de empleados';
  employees: Array<Employee> = [];

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.findAllEmployees().then((e) => this.employees = e);
  }

}
