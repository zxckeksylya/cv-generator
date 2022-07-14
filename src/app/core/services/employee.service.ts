import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, switchMap, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UpdateEmployee } from '../interfaces/employee.interface';
import {
  GetEmployee,
  CreateEmployee,
  CreateEmployeeResponse,
} from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<GetEmployee[]> {
    return this.http.get<GetEmployee[]>(`${environment.host}/users`);
  }

  public getEmployeeById(id: string): Observable<GetEmployee> {
    return this.http
      .get<GetEmployee[]>(`${environment.host}/users`, {
        params: {
          id,
        },
      })
      .pipe(
        take(1),
        switchMap((data) =>
          data[0]
            ? of(data[0])
            : throwError(() => new HttpErrorResponse({ status: 404, error: 'bad request' })),
        ),
      );
  }

  public createEmployee(employee: CreateEmployee): Observable<CreateEmployeeResponse> {
    return this.http.post<CreateEmployeeResponse>(`${environment.host}/users`, employee);
  }

  public updateEmployee(employee: UpdateEmployee): Observable<UpdateEmployee> {
    return this.http.put<UpdateEmployee>(`${environment.host}/users`, employee);
  }
}
