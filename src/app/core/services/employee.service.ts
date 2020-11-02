import { environment } from '@environments/environment';
import { CrudBaseService } from '@core/services/crud.service';
import { Injectable } from '@angular/core';
import { UserEmployee } from '@core/models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EmployeeService extends CrudBaseService<UserEmployee> {

    constructor(
        private http: HttpClient
    ) {
        super(environment.apiUrl + '/api/employees/register', http);
    }
}