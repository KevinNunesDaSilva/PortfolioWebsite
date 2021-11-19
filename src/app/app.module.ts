import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebsiteDetailComponent } from './website-detail/website-detail.component';
import { WebsitesComponent } from './websites/websites.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { TodolistComponent } from './todolist/todolist.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WebsitesComponent,
    WebsiteDetailComponent,
    MessagesComponent,
    ContactComponent,
    TodolistComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
