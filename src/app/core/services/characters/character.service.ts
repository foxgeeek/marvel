import { ErrorHandlerService } from '../error-handlers/error-handler.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_BASE_CONFIG, API_GET_CHARACTERS } from 'src/app/config/api-app';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private readonly http: HttpClient,
    private readonly errorHandler: ErrorHandlerService,
  ) { }

  // getCharacters 
  public getCharacters(): Observable<any> {    
    return this.http
      .get<any>(`${API_GET_CHARACTERS}${API_BASE_CONFIG}`)
      .pipe(
        catchError(this.errorHandler.handleError('CharacterService', 'GetCharacters'))
      )
  }

  // getCharactersDetails 
  public getCharactersDetails(id: string): Observable<any> {    
    return this.http
      .get<any>(`${API_GET_CHARACTERS}/${id}${API_BASE_CONFIG}`)
      .pipe(
        catchError(this.errorHandler.handleError('CharacterService', 'GetCharactersDetails'))
      )
  }
}
