import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizationLoginResponse } from '../interfaces/authorization-login-response.interface';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private http: HttpClient) {}

  public login(loginForm: LoginForm): Observable<AuthorizationLoginResponse> {
    return this.http.post<AuthorizationLoginResponse>(`${environment.host}/auth/login`, loginForm);
  }
}
