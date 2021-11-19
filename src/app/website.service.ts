import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Website } from './website';
import { WEBSITES } from './mock-websites';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class WebsiteService {
  private websitesUrl = 'api/websites';
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getWebsites(): Observable<Website[]> {
    const websites = of(WEBSITES);
    return this.http.get<Website[]>(this.websitesUrl);
  }

  getWebsite(id: number): Observable<Website> {
    // For now, assume that a website with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const website = WEBSITES.find(h => h.id === id)!;
    this.messageService.add(`WebsiteService: fetched website id=${id}`);
    return of(website);
  }
}
