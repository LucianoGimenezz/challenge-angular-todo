import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../interfaces';

@Component({
  selector: 'app-card-todo',
  templateUrl: './card-todo.component.html',
  styleUrls: ['./card-todo.component.css']
})
export class CardTodoComponent implements OnInit{

  @Input()
  public todo!: Todo;

  ngOnInit(): void {
    if (!this.todo) throw new Error('The todo is required')
  }
}
