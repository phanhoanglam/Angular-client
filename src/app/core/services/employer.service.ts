import { UserEmployer } from './../models/User';
import { environment } from '@environments/environment';
import { CrudBaseService } from '@core/services/crud.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EmployerService extends CrudBaseService<UserEmployer> {

    constructor(
        private http: HttpClient
    ) {
        super(environment.apiUrl + '/api/employers/register', http);
    }
}