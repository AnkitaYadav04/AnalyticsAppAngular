import { Component } from '@angular/core';

declare global {
  interface Window {
    today: any;
  }
}
window.today = '2020-06-29';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }
}
