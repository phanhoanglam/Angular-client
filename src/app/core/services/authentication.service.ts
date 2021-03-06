import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { CurrentUser } from '@core/models/currentUser';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<CurrentUser>;
    public currentUser: Observable<CurrentUser>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<CurrentUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): CurrentUser {
        return this.currentUserSubject.value;
    }

    loginEmployee(email: string, password: string): Observable<CurrentUser> {
        return this.http.post<any>(`${environment.apiUrl}/api/employees/login`, { email, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                user.data.isEmployee = true;
                localStorage.setItem('currentUser', JSON.stringify(user.data));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    loginEmployer(email: string, password: string): Observable<CurrentUser> {
        return this.http.post<any>(`${environment.apiUrl}/api/employer/login`, { email, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                user.data.isEmployee = false;
                localStorage.setItem('currentUser', JSON.stringify(user.data));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout(): void {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}