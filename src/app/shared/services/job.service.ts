import {Injectable} from '@angular/core';
import {CrudBaseService} from '@core/services/crud.service';
import {HttpClient} from '@angular/common/http';
import {Job} from '../models/job.model';

@Injectable()
export class JobService extends CrudBaseService<Job> {
  constructor(
    httpClient: HttpClient
  ) {
    super(
      '/api/jobs',
      httpClient
    );
  }
}
