import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Skill } from '../interfaces/skill.interface';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private http: HttpClient) {}

  public getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${environment.host}/skills`);
  }
}
