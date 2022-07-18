import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, take, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DeleteCount } from '../interfaces/delete-count.interface';
import {
  CreateSkill,
  CreateSkillResponse,
  Skill,
  UpdateSkill,
} from '../interfaces/skill.interface';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private http: HttpClient) {}

  public getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${environment.host}/skills`);
  }

  public createSkill(skill: CreateSkill): Observable<CreateSkillResponse> {
    return this.http.post<CreateSkillResponse>(`${environment.host}/skills`, skill);
  }

  public getSkillById(id: string): Observable<Skill> {
    return this.http
      .get<Skill[]>(`${environment.host}/skills`, {
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

  public updateSkill(skill: UpdateSkill): Observable<UpdateSkill> {
    return this.http.put<UpdateSkill>(`${environment.host}/skills`, skill);
  }
  public deleteSkill(id: string): Observable<DeleteCount> {
    return this.http.request<DeleteCount>('delete', `${environment.host}/skills`, {
      body: {
        id,
      },
    });
  }
}
