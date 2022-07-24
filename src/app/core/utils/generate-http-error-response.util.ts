import { HttpErrorResponse } from '@angular/common/http';

export const generateHttpErrorResponse = (error: string, status: number): HttpErrorResponse =>
  new HttpErrorResponse({ error, status });
