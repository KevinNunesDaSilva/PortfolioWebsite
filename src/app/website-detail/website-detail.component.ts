import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Website } from '../website';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-website-detail',
  templateUrl: './website-detail.component.html',
  styleUrls: [ './website-detail.component.css' ]
})
export class WebsiteDetailComponent implements OnInit {
  website: Website | undefined;

  constructor(
    private route: ActivatedRoute,
    private websiteService: WebsiteService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getWebsite();
  }

  getWebsite(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.websiteService.getWebsite(id)
      .subscribe(website => this.website = website);
  }

  goBack(): void {
    this.location.back();
  }
}
