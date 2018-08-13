import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Button } from './button.model';

/**
 * An Angular 6 Bootstrap 3 Button Group Component
 * @example
 * <nbbg-button-group [buttons]="buttons" [vertical]="vertical" [justified]="justified" [disabled]="disabled" [(ngModel)]="selectedButton"></nbbg-button-group>
 */
@Component({
  selector: 'nbbg-button-group',
  templateUrl: './button-group.component.html',
  styles: [],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: ButtonGroupComponent, multi: true}]
})
export class ButtonGroupComponent implements ControlValueAccessor {
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

  /**
   * If true makes the buttons stretch at equal sizes to span the entire width of its parent
   */
  @Input() justified = false;

  /**
   * Disables buttons
   */
  @Input() disabled = false;

  /**
   * Function to call back when button is clicked
   */
  _onChange: (value: string) => void;

  constructor() { }

  /**
   * Called when a button is clicked
   * @param value Value of the selected button
   */
  onClick(value: string) {
    this.selectedButtonValue = value;

    if(this._onChange) {
      this._onChange(this.selectedButtonValue);
    }    
  }

  writeValue(value: string) {
    this.selectedButtonValue = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this._onChange = fn;
  }

  registerOnTouched() { }

}
