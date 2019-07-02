import { Injectable } from '@angular/core';
import Employee from './domain/Employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export default class ApiService {

    constructor(private http: HttpClient) { }


    public findAllEmployees(): Promise<Array<Employee>> {
        return this.http.get<Array<Employee>>('https://localhost:5001/api/employees')
            .toPromise().then((data) => {
                return data;
            });
        //return Promise.resolve([new Employee(1, 28695048, "Diego Rojo")]);
    }
}