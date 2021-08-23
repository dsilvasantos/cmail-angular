import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  cont = 0;

  funcaoI() {
    this.cont++;
  }

  funcaoD() {
    this.cont--;
  }
}