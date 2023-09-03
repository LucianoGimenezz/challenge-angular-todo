import { Injectable } from '@angular/core';
import { Todo } from '../interfaces';
import { v4 } from 'uuid'
import { LOCALSTORAGE_KEY } from '../consts'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = []
  private subject = new Subject<Todo[]>()

  constructor() {
    const storage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) as string)
    this.todos = storage
    this.subject.next(this.todos)
  }

  public getTodos() {
    return this.subject.asObservable()
  }

  private updateState(newState: Todo[]) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newState))
    this.todos = newState
    this.subject.next(this.todos)
  }

  private searchTodoById(id: string) {
    const prevValues = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) as string)
    const modifyTodo = structuredClone(prevValues)

    const indexTodo = modifyTodo.findIndex((todo: Todo) => todo.id === id)

    if (indexTodo < 0) throw new Error(`Todo with ID: ${id} not found`)

    return { indexTodo, modifyTodo }
  }


  public addTodo(value: string) {
    const prevValues = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) as string)

    const newTodo: Todo = {
      id: v4(),
      task: value,
      isDone: false
    }

    prevValues.push(newTodo)

    this.updateState(prevValues)
  }

  public deleteTodo(id: string) {

    const { indexTodo, modifyTodo: filteredTodos } = this.searchTodoById(id)
    filteredTodos.splice(indexTodo, 1)
    this.updateState(filteredTodos)
  }

  public toggleDoneTodo(id: string) {
    const { indexTodo, modifyTodo: filteredTodos } = this.searchTodoById(id)

    filteredTodos[indexTodo].isDone = !filteredTodos[indexTodo].isDone
    this.updateState(filteredTodos)
  }
}
