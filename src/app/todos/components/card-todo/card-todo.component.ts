import { Component, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../interfaces';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-card-todo',
  templateUrl: './card-todo.component.html',
  styleUrls: ['./card-todo.component.css']
})
export class CardTodoComponent implements OnInit{

  constructor( private readonly _todoService: TodoService ) {}

  @Input()
  public todo!: Todo;

  public ngOnInit(): void {
    if (!this.todo) throw new Error('The todo is required')
  }

  public onDelete() {
    this._todoService.deleteTodo(this.todo.id)
  }

  public onToggle() {
    this._todoService.toggleDoneTodo(this.todo.id)
  }
}
