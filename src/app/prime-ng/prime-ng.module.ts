import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng-lts/button'
import { CardModule } from 'primeng-lts/card';
import { DynamicDialogModule } from 'primeng-lts/dynamicdialog';
import { DialogService } from 'primeng-lts/dynamicdialog';
import { MessageService } from 'primeng-lts/api';
import { InputTextModule } from 'primeng-lts/inputtext';
@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    DynamicDialogModule,
    InputTextModule
  ],
  providers: [ DialogService, MessageService ]
})
export class PrimeNgModule { }
