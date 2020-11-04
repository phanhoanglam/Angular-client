import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { CurrentUser } from '@core/models/currentUser';

@Injectable({ providedIn: 'root' })
export class JobProposalService {
   
    constructor(private http: HttpClient) {
    }

    saveFile(fileToUpload: File): Observable<string> {
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        return this.http.post<any>(`${environment.apiUrl}/api/job-proposals/resume`, formData)
            .pipe(map(res => {
                return res;
            }));
    }
}
