import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, take, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DeleteCount } from '../interfaces/delete-count.interface';
import { INameId } from '../interfaces/name-id.interface';
import { Name } from '../interfaces/name.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsRolesService {
  constructor(private http: HttpClient) {}

  public getProjectsRoles(): Observable<INameId[]> {
    return this.http.get<INameId[]>(`${environment.host}/project-roles`);
  }

  public getProjectRoleById(id: string): Observable<INameId> {
    return this.http
      .get<INameId[]>(`${environment.host}/project-roles`, {
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

  public createProjectRole(name: Name): Observable<INameId> {
    return this.http.post<INameId>(`${environment.host}/project-roles`, name);
  }

  public updateProjectRole(category: INameId): Observable<INameId> {
    return this.http.put<INameId>(`${environment.host}/project-roles`, category);
  }

  public deleteProjectRole(item: { id: string }): Observable<DeleteCount> {
    return this.http.request<DeleteCount>('delete', `${environment.host}/project-roles`, {
      body: item,
    });
  }
}
