import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pony } from './pony';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class PonyService {
  filter(arg0: (h: any) => boolean): PonyService {
    throw new Error('Method not implemented.');
  }
  push(Pony: Pony) {
    throw new Error('Method not implemented.');
  }

  private PonyUrl = 'api/Pony';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  getPony(): Observable<Pony[]> {
    return this.http.get<Pony[]>(this.PonyUrl)
      .pipe(
        tap(_ => this.log('fetched Pony')),
        catchError(this.handleError<Pony[]>('getPony', []))
      );
  }


  getPonyNo404<Data>(id: number): Observable<Pony> {
    const url = `${this.PonyUrl}/?id=${id}`;
    return this.http.get<Pony[]>(url)
      .pipe(
        map(Pony => Pony[0]), 
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Pony>(`getHero id=${id}`))
      );
  }


  getPonys(id: number): Observable<Pony> {
    const url = `${this.PonyUrl}/${id}`;
    return this.http.get<Pony>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Pony>(`getHero id=${id}`))
    );
  }


  searchPony(term: string): Observable<Pony[]> {
    if (!term.trim()) {

      return of([]);
    }
    return this.http.get<Pony[]>(`${this.PonyUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found Pony matching "${term}"`) :
         this.log(`no Pony matching "${term}"`)),
      catchError(this.handleError<Pony[]>('searchPonyes', []))
    );
  }


  addPony(Pony: Pony): Observable<Pony> {
    return this.http.post<Pony>(this.PonyUrl, Pony, this.httpOptions).pipe(
      tap((newPony: Pony) => this.log(`added Pony w/ id=${newPony.id}`)),
      catchError(this.handleError<Pony>('addPony'))
    );
  }


  deletePony(id: number): Observable<Pony> {
    const url = `${this.PonyUrl}/${id}`;

    return this.http.delete<Pony>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Pony id=${id}`)),
      catchError(this.handleError<Pony>('deletePony'))
    );
  }

  
  updatePony(Pony: Pony): Observable<any> {
    return this.http.put(this.PonyUrl, Pony, this.httpOptions).pipe(
      tap(_ => this.log(`updated Pony id=${Pony.id}`)),
      catchError(this.handleError<any>('updatePony'))
    );
  }

  /**
   *
   * @param operation 
   * @param result 
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {


      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

 
  private log(message: string) {
    this.messageService.add(`PonyService: ${message}`);
  }
}