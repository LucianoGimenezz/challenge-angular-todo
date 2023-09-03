import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { DialogResponse, Todo } from './interfaces';
import { DialogService, DynamicDialogRef } from 'primeng-lts/dynamicdialog';
import { MessageService } from 'primeng-lts/api';
import { NewTodoComponent } from './components/dialog/new-todo/new-todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  public todos: Todo[] = []
  public ref!: DynamicDialogRef

  constructor(
      private readonly _todoService: TodoService,
      public dialogService: DialogService,
      public messageService: MessageService
  ){}

  ngOnInit(): void {
    this.todos = this._todoService.getTodos
  }

  public openModal() {
    this.ref = this.dialogService.open(NewTodoComponent, {
      header: 'Create Todo',
      width: '50%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
    })

    this.ref.onClose.subscribe((value: DialogResponse) => {
       if (!value || value.cancel) return

       this._todoService.addTodo(value.data!)
       console.log({ data: value.data })
    })
  }
}
