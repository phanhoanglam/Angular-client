import { UserEmployer } from './../models/User';
import { environment } from '@environments/environment';
import { CrudBaseService } from '@core/services/crud.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '@core/models/jobs';

@Injectable({ providedIn: 'root' })
export class JobService extends CrudBaseService<Job> {

    constructor(
        private http: HttpClient
    ) {
        super(environment.apiUrl + '/api/jobs', http);
    }
}