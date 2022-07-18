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
export class CategoriesService {
  constructor(private http: HttpClient) {}

  public getCategories(): Observable<INameId[]> {
    return this.http.get<INameId[]>(`${environment.host}/categories`);
  }

  public getCategoryById(id: string): Observable<INameId> {
    return this.http
      .get<INameId[]>(`${environment.host}/categories`, {
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

  public createCategory(name: Name): Observable<INameId> {
    return this.http.post<INameId>(`${environment.host}/categories`, name);
  }

  public updateCategory(category: INameId): Observable<INameId> {
    return this.http.put<INameId>(`${environment.host}/categories`, category);
  }

  public deleteCategory(item: { id: string }): Observable<DeleteCount> {
    return this.http.request<DeleteCount>('delete', `${environment.host}/categories`, {
      body: item,
    });
  }
}
