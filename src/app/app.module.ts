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
import { TodolistsComponent } from './todolists/todolists.component';

import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { TodolistDetailComponent } from './todolist-detail/todolist-detail.component';

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
    TodolistsComponent,
    TodolistDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
