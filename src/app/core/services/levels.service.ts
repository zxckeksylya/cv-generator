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
export class LevelsService {
  constructor(private http: HttpClient) {}

  public getLevels(): Observable<INameId[]> {
    return this.http.get<INameId[]>(`${environment.host}/levels`);
  }

  public getLevelById(id: string): Observable<INameId> {
    return this.http
      .get<INameId[]>(`${environment.host}/levels`, {
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

  public createLevel(name: Name): Observable<INameId> {
    return this.http.post<INameId>(`${environment.host}/levels`, name);
  }

  public updateLevel(level: INameId): Observable<INameId> {
    return this.http.put<INameId>(`${environment.host}/levels`, level);
  }

  public deleteLevel(item: { id: string }): Observable<DeleteCount> {
    return this.http.request<DeleteCount>('delete', `${environment.host}/levels`, {
      body: item,
    });
  }
}
