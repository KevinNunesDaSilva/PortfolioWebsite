import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Todoitem } from './todoitem';
import { TODOITEMS } from './mock-todoitems';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class TodoitemService {

  constructor(private messageService: MessageService) { }

  getTodoitems(): Observable<Todoitem[]> {
    const todoitems = of(TODOITEMS);
    this.messageService.add('TodoitemService: fetched todoitems');
    return todoitems;
  }

  getTodoitem(id: number): Observable<Todoitem> {
    // For now, assume that a todoitem with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const todoitem = TODOITEMS.find(h => h.id === id)!;
    this.messageService.add(`TodoitemService: fetched todoitem id=${id}`);
    return of(todoitem);
  }
}
