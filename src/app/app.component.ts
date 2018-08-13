import { Component, OnInit } from '@angular/core';

import { Button } from 'button-group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  vertical = true;
  justified = false;
  disabled = false;

  buttons: Button[];
  selectedButton = '';

  ngOnInit() {    
    this.buttons = [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right'}
    ];
  }
}
