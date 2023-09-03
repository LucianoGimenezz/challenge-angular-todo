import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng-lts/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'challenge-angular';

  constructor(private primeConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primeConfig.ripple = true;
  }
}
