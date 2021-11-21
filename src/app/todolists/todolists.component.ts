import { Component, OnInit } from '@angular/core';

import { Todolist } from '../todolist';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.css']
})
export class TodolistsComponent implements OnInit {
  todolists: Todolist[] = [];

  constructor(private todolistService: TodolistService) { }

  ngOnInit(): void {
    this.getTodolist();
  }

  getTodolist(): void {
    this.todolistService.getTodolists()
    .subscribe(todolists => this.todolists = todolists);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.todolistService.addTodolist({ name } as Todolist)
      .subscribe(todolist => {
        this.todolists.push(todolist);
      });
  }

  delete(todolist: Todolist): void {
    this.todolists = this.todolists.filter(h => h !== todolist);
    this.todolistService.deleteTodolist(todolist.id).subscribe();
  }

}