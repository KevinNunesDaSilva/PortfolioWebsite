import { Component, OnInit } from '@angular/core';

import { Website } from '../website';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit {
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService) { }

  ngOnInit(): void {
    this.getWebsites();
  }

  getWebsites(): void {
    this.websiteService.getWebsites()
    .subscribe(websites => this.websites = websites);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.websiteService.addWebsite({ name } as Website)
      .subscribe(website => {
        this.websites.push(website);
      });
  }

  delete(website: Website): void {
    this.websites = this.websites.filter(h => h !== website);
    this.websiteService.deleteWebsite(website.id).subscribe();
  }

}