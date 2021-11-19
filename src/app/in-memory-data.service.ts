import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Website } from './website';
import { Todoitem } from './todoitem';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const websites = [
      { id: 1, name: 'gogelein', description: 'asdasdasfhgdhsfadfgkvnrgekatgch' },
      { id: 2, name: 'modus-digital', description: 'asdasdasfhgdhsfadfgkvnrgekatgch' }
    ];
    const todoitems = [
      { id: 1, name: 'gogelein', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', status: false },
      { id: 2, name: 'modus-digital', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', status: false }
    ];
    return { websites, todoitems };
  }

  // Overrides the genId method to ensure that a website always has an id.
  // If the websites array is empty,
  // the method below returns the initial number (11).
  // if the websites array is not empty, the method below returns the highest
  // website id + 1.
  genId(websites: Website[]): number {
    return websites.length > 0 ? Math.max(...websites.map(website => website.id)) + 1 : 11;
  }
}