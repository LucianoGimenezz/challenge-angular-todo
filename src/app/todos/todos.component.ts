import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { DialogResponse, Todo } from './interfaces';
import { DialogService, DynamicDialogRef } from 'primeng-lts/dynamicdialog';
import { MessageService } from 'primeng-lts/api';
import { NewTodoComponent } from './components/dialog/new-todo/new-todo.component';
import { Subscription } from 'rxjs';
import { LOCALSTORAGE_KEY } from './consts';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy{

  public todos: Todo[] = []
  private todoSubscription?: Subscription
  public ref?: DynamicDialogRef

  constructor(
      private readonly _todoService: TodoService,
      public dialogService: DialogService,
      public messageService: MessageService
  ){}

  public ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close()
    }

    this.todoSubscription?.unsubscribe()
  }

  public ngOnInit(): void {
    const storage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) as string)
    this.todos = storage

    this.todoSubscription = this._todoService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }

  public openModal() {
    this.ref = this.dialogService.open(NewTodoComponent, {
      header: 'Create Todo',
      width: '300px',
      contentStyle: {"max-height": "200px", "overflow": "auto"},
    })

    this.ref.onClose.subscribe((value: DialogResponse) => {
       if (!value || value.cancel) return

       this._todoService.addTodo(value.data!)
       console.log({ data: value.data })
    })
  }

}
