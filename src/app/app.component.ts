import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng-lts/api';
import { LOCALSTORAGE_KEY } from './todos/consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'challenge-angular';

  constructor(private primeConfig: PrimeNGConfig) {
    const storage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) as string)

    if (!storage) {
      localStorage.setItem(LOCALSTORAGE_KEY, '[]')
      return
    }
  }

  ngOnInit() {
    this.primeConfig.ripple = true;
  }
}
