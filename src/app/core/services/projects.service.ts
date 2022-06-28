import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateProjectResponse } from '../interfaces/project/create-project-response.interface';
import { GetProject } from '../interfaces/project/get-project.interface';
import { CreateProject } from '../interfaces/project/create-project.interface';
import { UpdateProject } from '../interfaces/project/update-project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  public getProjects(): Observable<GetProject[]> {
    return this.http.get<GetProject[]>(`${environment.host}/projects`);
  }

  public createProject(project: CreateProject): Observable<CreateProjectResponse> {
    return this.http.post<CreateProjectResponse>(`${environment.host}/projects`, project);
  }

  public updateProject(project: UpdateProject): Observable<UpdateProject> {
    return this.http.patch<UpdateProject>(`${environment.host}/projects`, project);
  }

  public deleteProject(id: string): Observable<any> {
    return this.http.delete(`${environment.host}/projects/${id}`);
  }
}
