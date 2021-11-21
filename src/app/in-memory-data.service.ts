import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Website } from './website';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const websites = [
      { id: 1, name: 'gogelein', description: 'asdasdasfhgdhsfadfgkvnrgekatgch' },
      { id: 2, name: 'modus-digital', description: 'asdasdasfhgdhsfadfgkvnrgekatgch' }
    ];
    const todolists = [
      { id: 1, name: 'gogelein', description: 'asdasdasfhgdhsfadfgkvnrgekatgch' },
      { id: 2, name: 'modus-digital', description: 'asdasdasfhgdhsfadfgkvnrgekatgch' }
    ];
    return {websites, todolists};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(websites: Website[]): number {
    return websites.length > 0 ? Math.max(...websites.map(website => website.id)) + 1 : 11;
  }
}