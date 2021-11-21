import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WebsitesComponent } from './websites/websites.component';
import { WebsiteDetailComponent } from './website-detail/website-detail.component';
import { ContactComponent } from './contact/contact.component';
import { TodolistsComponent } from './todolists/todolists.component';
import { TodolistDetailComponent } from './todolist-detail/todolist-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: WebsiteDetailComponent },
  { path: 'websites', component: WebsitesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'todolist', component: TodolistsComponent },
  { path: 'todolist/:id', component: TodolistDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
