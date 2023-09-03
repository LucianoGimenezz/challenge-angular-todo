import { Injectable } from '@angular/core';
import { Todo } from '../interfaces';
import { v4 } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [
    {
      id: v4(),
      task: 'Test1',
      isDone: false
    },
    {
      id: v4(),
      task: 'Test2',
      isDone: false
    }
  ]
  constructor() { }

  get getTodos() {
    return this.todos
  }


  public addTodo(value: string) {
    const newTodo: Todo = {
      id: v4(),
      task: value,
      isDone: false
    }

    this.todos.push(newTodo)
  }

}
