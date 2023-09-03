import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng-lts/dynamicdialog';

@Component({
  selector: 'dialog-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent {
   public inputValue = ''
   public isInvalid = false

  constructor(public ref: DynamicDialogRef) {}

   public onAdd(value: string) {
    if(value.trim().length === 0) {
      this.isInvalid = true;
      return
    }

    this.ref.close({ cancel: false, data: value})

   }

   public onClose() {
      this.ref.close({ cancel: true , data: null })
   }
}
