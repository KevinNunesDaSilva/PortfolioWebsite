import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Todoitem } from './todoitem';
import { TODOITEMS } from './mock-todoitems';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class TodoitemService {
  private heroesUrl = 'api/heroes';
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getTodoitems(): Observable<Todoitem[]> {
    const todoitems = of(TODOITEMS);
    return this.http.get<Todoitem[]>(this.heroesUrl);
  }

  getTodoitem(id: number): Observable<Todoitem> {
    // For now, assume that a todoitem with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const todoitem = TODOITEMS.find(h => h.id === id)!;
    return of(todoitem);

  }
}
