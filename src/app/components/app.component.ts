import { Component, OnInit } from '@angular/core';

import { AppState } from '../services/app.service';

@Component({
  selector: 'app',
  styleUrls: [
    '../styles/app.style.css'
  ],
  templateUrl: '../templates/app.template.html'
})
export class App implements OnInit {
  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
