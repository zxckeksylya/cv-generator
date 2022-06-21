import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConstants } from '../constants/server.constants';
import { Observable } from 'rxjs';
import { AuthorizationLoginResponce } from '../interfaces/authorization-login-responce.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private http: HttpClient) {}
  public login(email: string, password: string): Observable<AuthorizationLoginResponce> {
    return this.http.post<AuthorizationLoginResponce>(
      `${ServerConstants.HOST}/${ServerConstants.AUTH}/${ServerConstants.LOGIN}`,
      { email, password },
    );
  }
}
