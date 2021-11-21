import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Todolist } from '../todolist';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todolist-detail',
  templateUrl: './todolist-detail.component.html',
  styleUrls: [ './todolist-detail.component.css' ]
})
export class TodolistDetailComponent implements OnInit {
  todolist: Todolist | undefined;

  constructor(
    private route: ActivatedRoute,
    private todolistService: TodolistService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTodolist();
  }

  getTodolist(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.todolistService.getTodolist(id)
      .subscribe(todolist => this.todolist = todolist);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.todolist) {
      this.todolistService.updateTodolist(this.todolist)
        .subscribe(() => this.goBack());
    }
  }
}