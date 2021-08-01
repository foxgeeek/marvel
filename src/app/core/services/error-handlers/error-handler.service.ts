import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";

export type HandleError = <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  public handleError(serviceName = '', operation = 'operation') {
    return (error: HttpErrorResponse): Observable<HttpErrorResponse> => {
      const message = (error.error.msg instanceof ErrorEvent) ? error.error.message : error.error.msg;
      console.error(`${serviceName}: ${operation} failed: ${message}`);
      return throwError(error);
    }
  }
}