import { Injectable } from '@angular/core';
import Employee from './domain/Employee';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export default class ApiService {

    private readonly baseURL: string;

    constructor(private http: HttpClient) {
        this.baseURL = environment.APIEndpoint;
    }

    public findAllEmployees(): Promise<Array<Employee>> {
        return this.http.get<Array<Employee>>(this.baseURL + 'api/employees')
            .toPromise();
        //return Promise.resolve([new Employee(1, 28695048, "Diego Rojo")]);
    }
}