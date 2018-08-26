import { Component, OnInit, ViewChild } from '@angular/core';

import { Button, ButtonGroupComponent } from 'button-group';

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

  @ViewChild(ButtonGroupComponent) buttonGroup: ButtonGroupComponent;

  ngOnInit() {
    // Create as many buttons as required 
    this.buttons = [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right'}
    ];

    // Subscribe to value changes
    this.buttonGroup.selectedButtonChange.subscribe(
      buttonValue => console.log(buttonValue)
    );
  }
}
