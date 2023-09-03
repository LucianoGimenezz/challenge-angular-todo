import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CardTodoComponent } from './components/card-todo/card-todo.component';

@NgModule({
  declarations: [
    TodosComponent,
    CardTodoComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
