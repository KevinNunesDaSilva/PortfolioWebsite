import { Component, OnInit } from '@angular/core';
import { Website } from '../website';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService) { }

  ngOnInit() {
    this.getWebsites();
  }

  getWebsites(): void {
    this.websiteService.getWebsites()
      .subscribe(websites => this.websites = websites.slice(1, 5));
  }
}
