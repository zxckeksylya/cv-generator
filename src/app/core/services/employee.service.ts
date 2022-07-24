import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, take, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  CreateEmployeeRequest,
  CreateEmployeeResponse,
  GetEmployee,
  UpdateEmployeeRequest,
} from '../interfaces/employee.interface';
import { generateHttpErrorResponse } from '../utils/generate-http-error-response.util';

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
        switchMap(data =>
          data[0] ? of(data[0]) : throwError(() => generateHttpErrorResponse('Bad request', 404)),
        ),
      );
  }

  public createEmployee(employee: CreateEmployeeRequest): Observable<CreateEmployeeResponse> {
    return this.http.post<CreateEmployeeResponse>(`${environment.host}/users`, employee);
  }

  public updateEmployee(employee: UpdateEmployeeRequest): Observable<UpdateEmployeeRequest> {
    return this.http.put<UpdateEmployeeRequest>(`${environment.host}/users`, employee);
  }
}
