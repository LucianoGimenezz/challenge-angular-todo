import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CardTodoComponent } from './components/card-todo/card-todo.component';
import { NewTodoComponent } from './components/dialog/new-todo/new-todo.component';

@NgModule({
  declarations: [
    TodosComponent,
    CardTodoComponent,
    NewTodoComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
