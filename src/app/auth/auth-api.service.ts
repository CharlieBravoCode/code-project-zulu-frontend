import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { API_URL } from '../env';
import { API_URL } from '../../environments/environment';
import { UserModel } from './auth.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
  export class AuthApiService {

    constructor(private http: HttpClient) {
    }
    
    login_send_credentials(user: UserModel): Observable<any> {
      return this.http
            .post(`${API_URL}/auth/login`, user);
        }
        

  }