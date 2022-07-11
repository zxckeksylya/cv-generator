import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetEmployee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<GetEmployee[]> {
    return this.http.get<GetEmployee[]>(`${environment.host}/users`);
  }

  public getEmployeeById(id: string): Observable<GetEmployee[]> {
    return this.http.get<GetEmployee[]>(`${environment.host}/users`, {
      params: {
        id,
      },
    });
  }
}
