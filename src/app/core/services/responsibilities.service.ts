import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, take, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DeleteCount } from '../interfaces/delete-count.interface';
import { INameId } from '../interfaces/name-id.interface';
import { Name } from '../interfaces/name.interface';
import { generateHttpErrorResponse } from '../utils/generate-http-error-response.util';

@Injectable({
  providedIn: 'root',
})
export class ResponsibilitiesService {
  constructor(private http: HttpClient) {}

  public getResponsibilities(): Observable<INameId[]> {
    return this.http.get<INameId[]>(`${environment.host}/responsibilities`);
  }

  public getResponsibilityById(id: string): Observable<INameId> {
    return this.http
      .get<INameId[]>(`${environment.host}/responsibilities`, {
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

  public createResponsibility(name: Name): Observable<INameId> {
    return this.http.post<INameId>(`${environment.host}/responsibilities`, name);
  }

  public updateResponsibility(responsibility: INameId): Observable<INameId> {
    return this.http.put<INameId>(`${environment.host}/responsibilities`, responsibility);
  }

  public deleteResponsibility(item: { id: string }): Observable<DeleteCount> {
    return this.http.request<DeleteCount>('delete', `${environment.host}/responsibilities`, {
      body: item,
    });
  }
}
