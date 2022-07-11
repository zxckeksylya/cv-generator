import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthorizationLoginResponse } from '../interfaces/authorization-login-response.interface';
import { CurrentUser } from '../interfaces/current-user.interface';
import { LoginForm } from '../interfaces/login-form.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private http: HttpClient) {}

  public login(loginForm: LoginForm): Observable<AuthorizationLoginResponse> {
    return this.http.post<AuthorizationLoginResponse>(`${environment.host}/auth/login`, loginForm);
  }

  public getCurrentUser(): Observable<CurrentUser> {
    return this.http.get<CurrentUser>(`${environment.host}/auth/whoami`);
  }
}
