import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { INameId } from '../interfaces/name-id.interface';

@Injectable({
  providedIn: 'root',
})
export class ResponsibilitiesService {
  constructor(private http: HttpClient) {}

  public getResponsibilities(): Observable<INameId[]> {
    return this.http.get<INameId[]>(`${environment.host}/responsibilities`);
  }
}
