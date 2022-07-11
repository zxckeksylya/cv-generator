import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUserById(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${environment.host}/users`, {
      params: {
        id,
      },
    });
  }
}
