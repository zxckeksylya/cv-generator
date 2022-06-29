import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  GetProject,
  UpdateProject,
  CreateProject,
  CreateProjectResponse,
  DeleteProject,
  DeleteProjectResponse,
} from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  public getProjects(): Observable<GetProject[]> {
    return this.http.get<GetProject[]>(`${environment.host}/projects`);
  }

  public getProjectById(id: string): Observable<GetProject> {
    return this.http.get<GetProject>(`${environment.host}/projects`, {
      params: {
        id,
      },
    });
  }

  public createProject(project: CreateProject): Observable<CreateProjectResponse> {
    return this.http.post<CreateProjectResponse>(`${environment.host}/projects`, project);
  }

  public updateProject(project: UpdateProject): Observable<UpdateProject> {
    return this.http.patch<UpdateProject>(`${environment.host}/projects`, project);
  }

  public deleteProject(item: DeleteProject): Observable<DeleteProjectResponse> {
    return this.http.delete<DeleteProjectResponse>(`${environment.host}/projects/${item.id}`);
  }
}
