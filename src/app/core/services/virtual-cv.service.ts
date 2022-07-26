import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, switchMap, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VirtualCV, CreateVirtualCV } from '../interfaces/virtual-cv.interface';
import { generateHttpErrorResponse } from '../utils/generate-http-error-response.util';

@Injectable({
  providedIn: 'root',
})
export class VirtualCVService {
  constructor(private http: HttpClient) {}

  public getVirtualCVs(): Observable<VirtualCV[]> {
    return this.http.get<VirtualCV[]>(`${environment.host}/virtual-cv`);
  }

  public getVirtualCVById(id: string): Observable<VirtualCV> {
    return this.http
      .get<VirtualCV[]>(`${environment.host}/virtual-cv`, {
        params: {
          id,
        },
      })
      .pipe(
        take(1),
        switchMap(data =>
          data[0] ? of(data[0]) : throwError(() => generateHttpErrorResponse('Bad request', 404)),
        ),
      );
  }

  public createVirtualCV(virtualCV: CreateVirtualCV): Observable<VirtualCV> {
    return this.http.post<VirtualCV>(`${environment.host}/virtual-cv`, virtualCV);
  }

  public updateVirtualCV(virtualCV: VirtualCV): Observable<VirtualCV> {
    return this.http.put<VirtualCV>(`${environment.host}/virtual-cv`, virtualCV);
  }
}
