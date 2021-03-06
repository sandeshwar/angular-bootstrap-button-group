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
  size = 'lg';

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

    // You can subscribe to value changes using ViewChild
    this.buttonGroup.selectedButtonChange.subscribe(
      buttonValue => console.log(buttonValue)
    );
  }

  // You can also listen to changes using Output binding in template
  change(e) {
    console.log(e);
  }
}
