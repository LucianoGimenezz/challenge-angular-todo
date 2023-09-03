import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  public todos: Todo[] = []
  constructor(private readonly _todoService: TodoService){}

  ngOnInit(): void {
    this.todos = this._todoService.getTodos
  }
}
