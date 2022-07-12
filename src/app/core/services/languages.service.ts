import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Language } from '../interfaces/language.interface';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  constructor(private http: HttpClient) {}

  public getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(`${environment.host}/language`);
  }
}
