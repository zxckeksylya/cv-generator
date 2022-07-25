import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, take, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  CV,
  CreateCVResponse,
  CreateCV,
  UpdateCVResponse,
  UpdateCV,
} from '../interfaces/cv.interface';
import { generateHttpErrorResponse } from '../utils/generate-http-error-response.util';

@Injectable({
  providedIn: 'root',
})
export class CVService {
  constructor(private http: HttpClient) {}

  public getCVs(): Observable<CV[]> {
    return this.http.get<CV[]>(`${environment.host}/cv`);
  }

  public getCvById(id: string): Observable<CV> {
    return this.http.get<CV[]>(`${environment.host}/cv`, { params: { id } }).pipe(
      take(1),
      switchMap(data =>
        data[0] ? of(data[0]) : throwError(() => generateHttpErrorResponse('Bad request', 404)),
      ),
    );
  }

  public createCV(cv: CreateCV): Observable<CreateCVResponse> {
    return this.http.post<CreateCVResponse>(`${environment.host}/cv`, cv);
  }

  public updateCV(cv: UpdateCV): Observable<UpdateCVResponse> {
    return this.http.put<UpdateCVResponse>(`${environment.host}/cv`, cv);
  }
}
