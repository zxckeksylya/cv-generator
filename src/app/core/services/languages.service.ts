import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, take, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DeleteCount } from '../interfaces/delete-count.interface';
import {
  Language,
  CreateLanguage,
  CreateLanguageResponse,
  UpdateLanguage,
} from '../interfaces/language.interface';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  constructor(private http: HttpClient) {}

  public getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(`${environment.host}/languages`);
  }

  public createLanguage(language: CreateLanguage): Observable<CreateLanguageResponse> {
    return this.http.post<CreateLanguageResponse>(`${environment.host}/languages`, language);
  }

  public getLanguageById(id: string): Observable<Language> {
    return this.http
      .get<Language[]>(`${environment.host}/languages`, {
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
  public updateLanguage(language: UpdateLanguage): Observable<UpdateLanguage> {
    return this.http.put<UpdateLanguage>(`${environment.host}/languages`, language);
  }
  public deleteLanguage(id: string): Observable<DeleteCount> {
    return this.http.request<DeleteCount>('delete', `${environment.host}/languages`, {
      body: {
        id,
      },
    });
  }
}
