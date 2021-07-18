import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import {Users} from '../models/users'

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  apiURL = `127.0.0.1:5000`
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private httpClient: HttpClient) {}

  authenticateUser(username:string, password:string){
    return this.httpClient.get<Users[]>(`${this.apiURL}/auth&username=${username}&password=${password}`).pipe(
      map((data) => data),
      tap((_) => console.log('Getting getExternalBusiness')),
      catchError(this.handleError<Users[]>('getExternalBusiness'))
    );
  }

    private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
