import { Component, OnInit } from '@angular/core';

import { Todoitem } from '../todoitem';
import { TodoitemService } from '../todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todoitems: Todoitem[] = [];

  constructor(private todolistService: TodoitemService) { }

  ngOnInit() {
    this.getTodoitems();
  }

  getTodoitems(): void {
    this.todolistService.getTodoitems()
    .subscribe(todoitems => this.todoitems = todoitems);
  }
}
