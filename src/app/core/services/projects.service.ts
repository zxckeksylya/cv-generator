import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, take, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  CreateProject,
  CreateProjectResponse,
  DeleteProject,
  DeleteProjectResponse,
  GetProject,
  UpdateProject,
} from '../interfaces/project.interface';
import { generateHttpErrorResponse } from '../utils/generate-http-error-response.util';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  public getProjects(): Observable<GetProject[]> {
    return this.http.get<GetProject[]>(`${environment.host}/projects`);
  }

  public getProjectById(id: string): Observable<GetProject> {
    return this.http
      .get<GetProject[]>(`${environment.host}/projects`, {
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

  public createProject(project: CreateProject): Observable<CreateProjectResponse> {
    return this.http.post<CreateProjectResponse>(`${environment.host}/projects`, project);
  }

  public updateProject(project: UpdateProject): Observable<UpdateProject> {
    return this.http.put<UpdateProject>(`${environment.host}/projects`, project);
  }

  public deleteProject(item: DeleteProject): Observable<DeleteProjectResponse> {
    return this.http.delete<DeleteProjectResponse>(`${environment.host}/projects/${item.id}`);
  }
}
