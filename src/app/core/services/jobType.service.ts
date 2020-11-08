import { JobType } from './../models/job-type';
import { environment } from '@environments/environment';
import { CrudBaseService } from '@core/services/crud.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class JobTypeService extends CrudBaseService<JobType> {

    constructor(
        private http: HttpClient
    ) {
        super(environment.apiUrl + '/api/job-types', http);
    }
}