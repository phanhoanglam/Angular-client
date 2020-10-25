import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHelper } from '@core/helpers/http.helper';
import { omit } from 'lodash';
import {TransferBaseModel} from '@core/models/transfer-base.model';

export class CrudBaseService<T extends TransferBaseModel> {
  constructor(protected baseUrl: string, protected httpClient: HttpClient) {

  }

  get(id: string): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}/${id}`)
      .pipe(map((res: any) => res && res.data));
  }

  filter(filterParams: any): Observable<T[]> {
    return this.httpClient.get<T[]>(this.baseUrl, {
      params: HttpHelper.objectToHttpParams({ ...filterParams })
    }).pipe(map((res: any) => res && res.data));
  }

  create(model: T): Observable<any> {
    return this.httpClient.post(this.baseUrl, {
      data: omit(model, ['id'])
    });
  }

  update(id: string, model: T): Observable<any> {
    return this.httpClient.patch(`${this.baseUrl}/${id}`, {
      data: omit(model, ['id'])
    });
  }


  delete(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
