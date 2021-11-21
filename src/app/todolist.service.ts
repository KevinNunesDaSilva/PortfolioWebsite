import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Todolist } from './todolist';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class TodolistService {

  private todolistsUrl = 'api/todolists';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET todolists from the server */
  getTodolists(): Observable<Todolist[]> {
    return this.http.get<Todolist[]>(this.todolistsUrl)
      .pipe(
        tap(_ => this.log('fetched todolists')),
        catchError(this.handleError<Todolist[]>('getTodolist', []))
      );
  }

  /** GET todolist by id. Return `undefined` when id not found */
  getTodolistNo404<Data>(id: number): Observable<Todolist> {
    const url = `${this.todolistsUrl}/?id=${id}`;
    return this.http.get<Todolist[]>(url)
      .pipe(
        map(todolists => todolists[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} todolist id=${id}`);
        }),
        catchError(this.handleError<Todolist>(`getTodolist id=${id}`))
      );
  }

  /** GET todolist by id. Will 404 if id not found */
  getTodolist(id: number): Observable<Todolist> {
    const url = `${this.todolistsUrl}/${id}`;
    return this.http.get<Todolist>(url).pipe(
      tap(_ => this.log(`fetched todolist id=${id}`)),
      catchError(this.handleError<Todolist>(`getTodolist id=${id}`))
    );
  }

  /* GET todolists whose name contains search term */
  searchTodolists(term: string): Observable<Todolist[]> {
    if (!term.trim()) {
      // if not search term, return empty todolist array.
      return of([]);
    }
    return this.http.get<Todolist[]>(`${this.todolistsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found todolists matching "${term}"`) :
         this.log(`no todolists matching "${term}"`)),
      catchError(this.handleError<Todolist[]>('searchTodolists', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new todolist to the server */
  addTodolist(todolist: Todolist): Observable<Todolist> {
    return this.http.post<Todolist>(this.todolistsUrl, todolist, this.httpOptions).pipe(
      tap((newTodolist: Todolist) => this.log(`added todolist w/ id=${newTodolist.id}`)),
      catchError(this.handleError<Todolist>('addTodolist'))
    );
  }

  /** DELETE: delete the todolist from the server */
  deleteTodolist(id: number): Observable<Todolist> {
    const url = `${this.todolistsUrl}/${id}`;

    return this.http.delete<Todolist>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted todolist id=${id}`)),
      catchError(this.handleError<Todolist>('deleteTodolist'))
    );
  }

  /** PUT: update the todolist on the server */
  updateTodolist(todolist: Todolist): Observable<any> {
    return this.http.put(this.todolistsUrl, todolist, this.httpOptions).pipe(
      tap(_ => this.log(`updated todolist id=${todolist.id}`)),
      catchError(this.handleError<any>('updateTodolist'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a TodolistService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TodolistService: ${message}`);
  }
}