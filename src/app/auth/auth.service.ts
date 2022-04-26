import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators/tap';
import { Router } from '@angular/router';
import { UserModel } from './UserModel';


@Injectable({providedIn: 'root'})
export class AuthService {

  authenticationChanged = new Subject();
  constructor(private http: HttpClient, private router: Router) {
  }

  private handleAuthentication(): void {
    window.setTimeout(x => {
      this.authenticationChanged.next();
      this.router.navigate(['/home']);
    }, 2000);

  }

  login(form: FormGroup): Observable<any> {
    return this.http.post<any>('/api/v1/login', {
      username: form.value.user_login,
      password: form.value.password
    })
      .pipe(
        tap(resData => {
          this.handleAuthentication();
        })
      );
  }

  logout(): Observable<any> {
    return this.http.post<any>('/api/v1/logout', {})
      .pipe(
        tap(resData => {
          this.authenticationChanged.next();
          this.router.navigate(['/']);
        })
      );
  }

  register(form: FormGroup): Observable<any> {
    return this.http.post<string>('/api/v1/register', {
      username: form.value.user,
      password: form.value.password_1,
      email: form.value.email_address1
    })
      .pipe(
       tap(resData => {
          this.handleAuthentication();
        })
      );
  }

  getAuthenticatedUser(): Observable<UserModel>  {
    return this.http.get<any>('/api/v1/users/current', {})
      .pipe(
        take(1),
        map(resp => {
          return new UserModel(resp.response.data.user_id, resp.response.data.username, resp.response.data.email);
        })
      );
  }


}