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

  ngOnInit() {
    this.getWebsites();
  }

  getWebsites(): void {
    this.websiteService.getWebsites()
    .subscribe(websites => this.websites = websites);
  }
}
