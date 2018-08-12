import { Component, OnInit, Input } from '@angular/core';

import { Button } from './button.model';

@Component({
  selector: 'nbbg-button-group',
  templateUrl: './button-group.component.html',
  styles: []
})
export class ButtonGroupComponent implements OnInit {
  /**
   * List of buttons in this group
   */
  @Input() buttons: Button[];

  /**
   * Value of the selected button
   */
  selectedButtonValue = '';

  /**
   * If true then buttons appears vertically stacked
   */
  @Input() vertical = false;

  constructor() { }

  ngOnInit() {
    // TODO:: Remove this buttons
    this.buttons = [
      { label: 'Left', value: 'left' },
      { label: 'Right', value: 'right'}
    ];
  }

  /**
   * Called when a button is clicked
   * @param value Value of the selected button
   */
  onClick(value: string) {
    this.selectedButtonValue = value;
  }

}
