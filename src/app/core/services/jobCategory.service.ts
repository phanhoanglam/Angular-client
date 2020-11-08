import { environment } from '@environments/environment';
import { CrudBaseService } from '@core/services/crud.service';
import { Injectable } from '@angular/core';
import { UserEmployee } from '@core/models/User';
import { HttpClient } from '@angular/common/http';
import { JobCategory } from '@core/models/job-category';

@Injectable({ providedIn: 'root' })
export class JobCategoryService extends CrudBaseService<JobCategory> {

    constructor(
        private http: HttpClient
    ) {
        super(environment.apiUrl + '/api/job-categories', http);
    }
}