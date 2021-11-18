import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Website } from './website';
import { WEBSITES } from './mock-websites';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class WebsiteService {

  constructor(private messageService: MessageService) { }

  getWebsites(): Observable<Website[]> {
    const websites = of(WEBSITES);
    this.messageService.add('WebsiteService: fetched websites');
    return websites;
  }

  getWebsite(id: number): Observable<Website> {
    // For now, assume that a website with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const website = WEBSITES.find(h => h.id === id)!;
    this.messageService.add(`WebsiteService: fetched website id=${id}`);
    return of(website);
  }
}
