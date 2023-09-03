import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng-lts/button'
import { CardModule } from 'primeng-lts/card';

@NgModule({
  exports: [
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
