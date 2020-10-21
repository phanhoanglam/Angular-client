import {HttpParams} from '@angular/common/http';
import {keys} from 'lodash';

export class HttpHelper {
  static objectToHttpParams(object: any): HttpParams {
    let httpParams = new HttpParams();

    keys(object).forEach((key: string) => {
      httpParams = httpParams.append(key, object[key]);
    });

    return httpParams;
  }
}
